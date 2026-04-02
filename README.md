# SANTA (산타)

SANTA는 `등산 정보 + 커뮤니티 + 배지 + 선택적 동행` 구조를 검증하는 웹 프로토타입이다.
동행은 메인이 아니라, 산 정보와 커뮤니티가 충분히 쌓인 뒤 붙는 보조 기능으로 다룬다.

## 현재 저장소 구성
- `index.html`: 단일 엔트리 HTML
- `assets/css/styles.css`: 전체 스타일
- `assets/js/app.js`: 샘플 데이터, 렌더링, 이벤트, Supabase 읽기 로직
- `assets/js/supabase-config.js`: Supabase 설정 파일
- `supabase/migrations/202604020001_phase1_core.sql`: 1단계 코어 DB 스키마
- `supabase/migrations/202604020002_seed_mountains_routes.sql`: 산/코스 시드
- `research.md`: 현재 코드 동작 분석
- `plan.md`: 현재 기준 개발 계획
- `docs/`: 실행 가이드와 체크포인트 문서

## 현재 제품 방향
- 메인: 산/코스 정보
- 성장 엔진: 후기, 댓글, 좋아요, 저장
- 차별화: 배지 시스템
- 부가 기능: 동행/모임
- 기반: 인증 사용자 + 프로필

## 현재 구현 상태
### 이미 연결된 것
- 홈 산 목록: `mountains`, `routes` 읽기
- 홈 커뮤니티 브리핑: `posts`, `post_images`, 작성자 정보 읽기
- 데스크톱 웹 레이아웃 확장
- 검색 기반 산 필터링

### 아직 더미인 것
- 프로필 화면
- 동행 데이터
- 게시글 작성 저장
- 좋아요, 댓글, 저장
- 배지 표시

## 실행 방법
정적 프로토타입이라 브라우저에서 `index.html`을 열면 된다.

Supabase를 실제로 붙이려면 아래 순서로 진행한다.

1. `assets/js/supabase-config.js`에 프로젝트 URL과 anon key 입력
2. `supabase/migrations/202604020001_phase1_core.sql` 실행
3. `supabase/migrations/202604020002_seed_mountains_routes.sql` 실행
4. 게시글 데이터를 추가해 홈 커뮤니티 브리핑 확인

자세한 순서는 `docs/phase-1-supabase-guide.md`를 본다.
