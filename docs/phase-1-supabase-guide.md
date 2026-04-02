# SANTA 1단계 Supabase 실행 가이드

## 이 문서의 목적
이 문서는 초보자 기준으로 SANTA를 실제 Supabase 데이터와 연결하기 위한 첫 실행 순서를 설명한다.

현재 기준에서 1단계 목표는 아래 세 가지다.

- 산과 코스를 DB에서 읽는다.
- 게시글을 DB에서 읽는다.
- 이후 좋아요, 댓글, 저장, 배지로 확장할 기반을 만든다.

## 먼저 이해할 것
현재 프런트는 완전한 실서비스 앱이 아니다. 구조는 아래처럼 섞여 있다.

- 일부 화면: 실제 Supabase 읽기 가능
- 일부 화면: 아직 샘플 데이터 사용

즉 지금 단계의 성공 기준은 `모든 기능 완성`이 아니라, 핵심 화면이 실데이터를 읽기 시작하는 것이다.

## 1단계에서 쓰는 테이블
이번 단계에서 먼저 쓰는 테이블은 아래다.

- `profiles`
- `mountains`
- `routes`
- `posts`
- `post_images`
- `comments`
- `post_likes`
- `bookmarks`
- `badges`
- `user_badges`

아직 뒤로 미루는 테이블은 아래다.

- `activities`
- `activity_tracks`
- `meetups`
- `meetup_members`
- `meetup_messages`
- `reviews`
- `reports`
- `blocks`

## 왜 이 순서가 맞는가
지금 앱의 메인은 동행이 아니라 아래 구조다.

- 메인: 산/코스 정보
- 성장: 게시글, 댓글, 좋아요, 저장
- 차별화: 배지

그래서 처음부터 동행까지 붙이기보다, 산과 커뮤니티를 먼저 실제 데이터로 바꾸는 편이 맞다.

## 실행 순서

### Step 1. Supabase 프로젝트 값 넣기
파일:
- `assets/js/supabase-config.js`

여기에 아래 두 값을 넣는다.

- `window.SANTA_SUPABASE_URL`
- `window.SANTA_SUPABASE_ANON_KEY`

이 값이 비어 있으면 앱은 Supabase를 쓰지 않고 샘플 데이터 기반으로 동작한다.

### Step 2. 코어 스키마 실행
파일:
- `supabase/migrations/202604020001_phase1_core.sql`

이 파일은 아래를 만든다.

- 1단계 테이블
- 인덱스
- `profiles` 자동 생성 트리거
- 좋아요/댓글 수 반영용 트리거
- 기본 RLS 정책

초보자 체크 포인트:
- Supabase SQL Editor를 연다.
- 파일 내용을 그대로 붙여넣고 실행한다.
- 테이블이 실제로 생성됐는지 확인한다.

### Step 3. 산/코스 시드 실행
파일:
- `supabase/migrations/202604020002_seed_mountains_routes.sql`

이 단계가 필요한 이유는 홈과 상세의 핵심 화면이 산 데이터를 먼저 필요로 하기 때문이다.

실행 후 기대 결과:
- 홈 산 목록이 실제 DB 기반으로 렌더된다.
- 산 상세 코스 정보가 DB 기반으로 보인다.

### Step 4. 회원가입 후 `profiles` 자동 생성 확인
왜 중요한가:
- 이후 `posts.user_id`, `comments.user_id`, `user_badges.user_id`는 모두 `profiles.id`를 참조한다.

확인할 것:
- `auth.users`에 계정이 생긴다.
- `profiles`에 같은 `id`의 행이 자동 생성된다.

### Step 5. 작성 화면에서 실제 게시글 저장 테스트
현재 작성 화면은 `posts` insert와 연결되어 있다. 따라서 로그인한 상태에서 실제 글을 한 번 저장해 보는 것이 가장 빠른 확인 방법이다.

테스트 순서:
- 로그인한다.
- 산, 제목, 날짜/시간, 코스/출발 지점, 글 유형, 상세 내용을 입력한다.
- 저장 후 커뮤니티 브리핑에 새 글이 보이는지 확인한다.

처음에는 이미지 없이 텍스트 게시글만 저장돼도 충분하다.

## 현재 코드와 테이블 대응표
- `APP_DATA.mountains` -> `mountains`, `routes`
- `APP_DATA.feeds` -> `posts`, `post_images`, 이후 `comments`, `post_likes`
- `APP_DATA.profile` -> 이후 `profiles`, `user_badges`
- `APP_DATA.companions` -> 이후 `meetups`, `meetup_members`

## 지금 코드에서 바로 손대야 하는 부분
### 우선순위 높음
- 게시글 작성 폼을 `posts` insert와 연결
- 좋아요를 `post_likes`와 연결
- 저장을 `bookmarks`와 연결
- 프로필 화면을 `profiles`, `user_badges` 기반으로 교체

### 우선순위 낮음
- 동행 모듈 DB화
- 활동 기록 도입
- 신고/차단 기능

## 초보자가 자주 헷갈리는 점
### `auth.users`와 `profiles`는 다르다
- `auth.users`: 로그인 계정 원본
- `profiles`: 앱에서 쓰는 사용자 정보

앱 화면과 게시글 작성자 정보는 대부분 `profiles` 기준으로 생각하면 된다.

### `mountains`와 `routes`는 분리해야 한다
- 산은 큰 단위다.
- 코스는 산 안의 세부 경로다.

예:
- 북한산 = `mountains`
- 불광능선 = `routes`

### Supabase를 붙여도 앱이 바로 완성되지는 않는다
읽기 연결, 쓰기 연결, 사용자 상태 연결, 권한 정책은 각각 따로 붙여야 한다.

## 1단계 성공 기준
아래가 되면 1단계는 제대로 시작된 것이다.

- 산 목록이 DB에서 온다.
- 산 상세 코스 정보가 DB에서 온다.
- 홈 커뮤니티 브리핑이 DB 게시글을 보여준다.
- 작성 화면에서 글 저장이 실제 `posts`에 반영된다.
- 회원가입 시 `profiles`가 자동 생성된다.

그 다음 단계부터 비로소 좋아요, 댓글, 저장, 배지를 실제 기능으로 붙이면 된다.
