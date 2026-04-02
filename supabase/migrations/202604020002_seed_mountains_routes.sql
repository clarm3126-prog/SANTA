insert into public.mountains (
  name,
  region,
  address,
  elevation_m,
  description,
  parking_info,
  restroom_info,
  transit_info,
  best_season,
  is_korea_100
)
values
  (
    '북한산',
    '서울 · 경기',
    '서울 강북구 / 경기 고양시',
    836,
    '서울에서 가장 대표적인 산행지 중 하나로, 입문 코스와 능선 코스가 모두 있어 커뮤니티 데이터 축적에 적합합니다.',
    '북한산성 입구와 우이동 인근 공영주차장 이용 가능',
    '주요 탐방지원센터와 입구 근처 화장실 이용 가능',
    '불광역, 북한산우이역, 구파발역에서 접근 가능',
    '봄, 가을',
    true
  ),
  (
    '관악산',
    '서울',
    '서울 관악구',
    629,
    '접근성이 좋고 초보 질문이 많이 올라오는 대표적인 서울 산행지입니다.',
    '서울대 입구 주변 공영주차장과 과천 방향 주차장 이용 가능',
    '주요 입구 인근 화장실 이용 가능',
    '서울대입구역, 과천역 방향 대중교통 접근 가능',
    '봄, 가을',
    false
  ),
  (
    '청계산',
    '경기 · 서울',
    '경기 성남시 / 서울 서초구 경계',
    618,
    '입문자 비중이 높고 코스 설명과 하산 동선 정보 수요가 높은 산입니다.',
    '청계산입구역 주변 주차장 이용 가능',
    '원터골 입구 인근 화장실 이용 가능',
    '청계산입구역에서 도보 접근 가능',
    '봄, 가을',
    false
  ),
  (
    '아차산',
    '서울',
    '서울 광진구 / 경기 구리시 경계',
    295,
    '퇴근 후 가벼운 산행과 야경 후기 수요가 높은 도심형 산행지입니다.',
    '아차산역 인근 공영주차장 이용 가능',
    '입구 주변 공중화장실 이용 가능',
    '아차산역에서 도보 접근 가능',
    '봄, 가을',
    false
  )
on conflict (name) do update set
  region = excluded.region,
  address = excluded.address,
  elevation_m = excluded.elevation_m,
  description = excluded.description,
  parking_info = excluded.parking_info,
  restroom_info = excluded.restroom_info,
  transit_info = excluded.transit_info,
  best_season = excluded.best_season,
  is_korea_100 = excluded.is_korea_100,
  updated_at = now();

insert into public.routes (
  mountain_id,
  name,
  difficulty,
  distance_km,
  duration_min,
  elevation_gain_m,
  start_point,
  end_point,
  summary,
  caution_notes,
  is_recommended
)
select m.id, r.name, r.difficulty, r.distance_km, r.duration_min, r.elevation_gain_m, r.start_point, r.end_point, r.summary, r.caution_notes, r.is_recommended
from (
  values
    ('북한산', '불광능선 코스', 'easy', 7.2, 240, 680, '불광역 2번 출구', '백운대', '초보가 가장 많이 찾는 입문 코스로, 입구 동선과 표지판 문의가 자주 올라옵니다.', '정상부 암릉 진입 전 바람 확인 필요', true),
    ('북한산', '의상능선 코스', 'medium', 9.8, 300, 836, '북한산성 입구', '백운대', '조망이 뛰어나지만 체력과 날씨에 따라 체감 난이도가 크게 달라집니다.', '암릉 구간 미끄럼 주의', false),
    ('관악산', '서울대입구 코스', 'easy', 6.1, 210, 540, '서울대입구역', '연주대', '입문자 질문이 가장 많이 올라오는 대표 코스입니다.', '초반 계단 구간 체력 안배 필요', true),
    ('관악산', '연주대 코스', 'medium', 8.4, 270, 690, '과천향교 입구', '연주대', '전망이 좋고 주말 방문자가 많아 혼잡도 질문이 자주 올라옵니다.', '암반 계단 구간 주의', false),
    ('청계산', '원터골 코스', 'easy', 5.8, 180, 420, '청계산입구역', '매바위', '길 안내가 비교적 명확해 입문자에게 추천되는 코스입니다.', '우천 시 흙길 미끄럼 주의', true),
    ('아차산', '야경 코스', 'easy', 3.4, 100, 220, '아차산역', '해맞이광장', '짧은 시간 야경을 보기 좋은 코스로 저녁 후기 수요가 높습니다.', '야간 하산 시 동선 확인 필요', true)
) as r(mountain_name, name, difficulty, distance_km, duration_min, elevation_gain_m, start_point, end_point, summary, caution_notes, is_recommended)
join public.mountains m on m.name = r.mountain_name
on conflict (mountain_id, name) do update set
  difficulty = excluded.difficulty,
  distance_km = excluded.distance_km,
  duration_min = excluded.duration_min,
  elevation_gain_m = excluded.elevation_gain_m,
  start_point = excluded.start_point,
  end_point = excluded.end_point,
  summary = excluded.summary,
  caution_notes = excluded.caution_notes,
  is_recommended = excluded.is_recommended,
  updated_at = now();
