create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  nickname text unique not null,
  gender text check (gender in ('male', 'female', 'other')),
  birth_year int check (birth_year between 1900 and 2100),
  hiking_level text check (hiking_level in ('beginner', 'intermediate', 'advanced')) default 'beginner',
  bio text,
  profile_image_url text,
  region text,
  favorite_mountain text,
  trust_score int not null default 0,
  is_public boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.mountains (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  region text not null,
  address text,
  elevation_m int,
  description text,
  thumbnail_url text,
  parking_info text,
  restroom_info text,
  transit_info text,
  best_season text,
  is_korea_100 boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.routes (
  id uuid primary key default gen_random_uuid(),
  mountain_id uuid not null references public.mountains(id) on delete cascade,
  name text not null,
  difficulty text not null check (difficulty in ('easy', 'medium', 'hard')),
  distance_km numeric(5,2),
  duration_min int,
  elevation_gain_m int,
  start_point text,
  end_point text,
  summary text,
  caution_notes text,
  route_geojson jsonb,
  is_recommended boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (mountain_id, name)
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  mountain_id uuid references public.mountains(id) on delete set null,
  route_id uuid references public.routes(id) on delete set null,
  title text,
  content text not null,
  post_type text not null default 'review' check (post_type in ('review', 'tip', 'free', 'badge_share')),
  perceived_difficulty text check (perceived_difficulty in ('easy', 'medium', 'hard')),
  crowd_level text check (crowd_level in ('low', 'medium', 'high')),
  beginner_friendly boolean,
  confusing_section boolean,
  weather_context text,
  visibility text not null default 'public' check (visibility in ('public', 'followers', 'private')),
  like_count int not null default 0,
  comment_count int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint posts_title_or_mountain_check check (
    title is not null or mountain_id is not null or route_id is not null
  )
);

create table if not exists public.post_images (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  image_url text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  parent_comment_id uuid references public.comments(id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.post_likes (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (post_id, user_id)
);

create table if not exists public.bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  target_type text not null check (target_type in ('mountain', 'route', 'post')),
  target_id uuid not null,
  created_at timestamptz not null default now(),
  unique (user_id, target_type, target_id)
);

create table if not exists public.badges (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null,
  description text,
  badge_type text not null check (badge_type in ('mountain', 'route', 'theme', 'growth', 'community')),
  mountain_id uuid references public.mountains(id) on delete set null,
  route_id uuid references public.routes(id) on delete set null,
  icon_url text,
  color_hex text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.user_badges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  badge_id uuid not null references public.badges(id) on delete cascade,
  granted_by_post_id uuid references public.posts(id) on delete set null,
  achieved_at timestamptz not null default now(),
  is_featured boolean not null default false,
  unique (user_id, badge_id)
);

create index if not exists idx_routes_mountain_id on public.routes(mountain_id);
create index if not exists idx_posts_user_id on public.posts(user_id);
create index if not exists idx_posts_mountain_id on public.posts(mountain_id);
create index if not exists idx_posts_route_id on public.posts(route_id);
create index if not exists idx_posts_created_at on public.posts(created_at desc);
create index if not exists idx_comments_post_id on public.comments(post_id);
create index if not exists idx_post_likes_post_id on public.post_likes(post_id);
create index if not exists idx_bookmarks_user_id on public.bookmarks(user_id);
create index if not exists idx_user_badges_user_id on public.user_badges(user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, nickname)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'nickname', 'hiker_' || substr(new.id::text, 1, 8))
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

create or replace trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create or replace function public.sync_post_counts()
returns trigger
language plpgsql
as $$
begin
  if tg_op = 'INSERT' then
    update public.posts
    set comment_count = comment_count + 1
    where id = new.post_id;
    return new;
  elsif tg_op = 'DELETE' then
    update public.posts
    set comment_count = greatest(comment_count - 1, 0)
    where id = old.post_id;
    return old;
  end if;
  return null;
end;
$$;

create or replace function public.sync_like_counts()
returns trigger
language plpgsql
as $$
begin
  if tg_op = 'INSERT' then
    update public.posts
    set like_count = like_count + 1
    where id = new.post_id;
    return new;
  elsif tg_op = 'DELETE' then
    update public.posts
    set like_count = greatest(like_count - 1, 0)
    where id = old.post_id;
    return old;
  end if;
  return null;
end;
$$;

create or replace trigger comments_count_trigger
after insert or delete on public.comments
for each row execute procedure public.sync_post_counts();

create or replace trigger likes_count_trigger
after insert or delete on public.post_likes
for each row execute procedure public.sync_like_counts();

create or replace trigger profiles_set_updated_at
before update on public.profiles
for each row execute procedure public.set_updated_at();

create or replace trigger mountains_set_updated_at
before update on public.mountains
for each row execute procedure public.set_updated_at();

create or replace trigger routes_set_updated_at
before update on public.routes
for each row execute procedure public.set_updated_at();

create or replace trigger posts_set_updated_at
before update on public.posts
for each row execute procedure public.set_updated_at();

create or replace trigger comments_set_updated_at
before update on public.comments
for each row execute procedure public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.post_images enable row level security;
alter table public.comments enable row level security;
alter table public.post_likes enable row level security;
alter table public.bookmarks enable row level security;
alter table public.user_badges enable row level security;

create policy "profiles are readable when public"
on public.profiles
for select
using (is_public = true or auth.uid() = id);

create policy "users can insert own profile"
on public.profiles
for insert
with check (auth.uid() = id);

create policy "users can update own profile"
on public.profiles
for update
using (auth.uid() = id);

create policy "public posts are readable"
on public.posts
for select
using (visibility = 'public' or auth.uid() = user_id);

create policy "users can create own posts"
on public.posts
for insert
with check (auth.uid() = user_id);

create policy "users can update own posts"
on public.posts
for update
using (auth.uid() = user_id);

create policy "users can delete own posts"
on public.posts
for delete
using (auth.uid() = user_id);

create policy "post images follow readable posts"
on public.post_images
for select
using (
  exists (
    select 1
    from public.posts p
    where p.id = post_images.post_id
      and (p.visibility = 'public' or p.user_id = auth.uid())
  )
);

create policy "users can manage images for own posts"
on public.post_images
for all
using (
  exists (
    select 1
    from public.posts p
    where p.id = post_images.post_id
      and p.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.posts p
    where p.id = post_images.post_id
      and p.user_id = auth.uid()
  )
);

create policy "comments on readable posts are readable"
on public.comments
for select
using (
  exists (
    select 1
    from public.posts p
    where p.id = comments.post_id
      and (p.visibility = 'public' or p.user_id = auth.uid())
  )
);

create policy "users can create own comments"
on public.comments
for insert
with check (auth.uid() = user_id);

create policy "users can update own comments"
on public.comments
for update
using (auth.uid() = user_id);

create policy "users can delete own comments"
on public.comments
for delete
using (auth.uid() = user_id);

create policy "likes on readable posts are readable"
on public.post_likes
for select
using (
  exists (
    select 1
    from public.posts p
    where p.id = post_likes.post_id
      and (p.visibility = 'public' or p.user_id = auth.uid())
  )
);

create policy "users can like with own account"
on public.post_likes
for insert
with check (auth.uid() = user_id);

create policy "users can remove own likes"
on public.post_likes
for delete
using (auth.uid() = user_id);

create policy "users can read own bookmarks"
on public.bookmarks
for select
using (auth.uid() = user_id);

create policy "users can manage own bookmarks"
on public.bookmarks
for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "user badges are publicly readable"
on public.user_badges
for select
using (true);

create policy "service role manages user badges"
on public.user_badges
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');
