# SANTA 현재 체크포인트

## 제품 방향
현재 SANTA의 기준 방향은 아래다.

- 메인: 산/코스 정보
- 성장 엔진: 후기, 댓글, 좋아요, 저장
- 차별화: 배지 시스템
- 부가 기능: 동행/모임
- 기반: 인증 사용자 + 프로필

즉 이 앱은 `동행 앱`이 아니라 `등산 커뮤니티 + 코스 탐색 + 배지 중심 서비스`다.

## 현재 프런트 상태
핵심 파일은 아래 세 개다.

- `index.html`
- `assets/css/styles.css`
- `assets/js/app.js`

현재 반영된 큰 변화는 아래와 같다.

- 홈 구조를 `산 탐색 -> 커뮤니티 브리핑 -> 지도 브리핑 -> 선택적 동행` 순서로 재설계
- 데스크톱에서 더 넓게 보이도록 레이아웃 확장
- 홈 산 목록을 Supabase `mountains/routes` 기반으로 읽는 경로 추가
- 홈 커뮤니티 브리핑을 Supabase `posts` 기반으로 읽는 경로 추가
- 검색 입력을 실제 필터 역할로 변경

## 현재 코드에서 실제 DB 연동된 부분
### 연결 완료
- `mountains`
- `routes`
- `posts`
- `post_images`
- 게시글 작성자 표시에 필요한 `profiles` 일부 읽기

### 아직 더미인 부분
- `profile`
- `companions`
- 게시글 작성 submit
- 댓글 작성
- 좋아요 저장
- 북마크 저장
- 배지 표시

## 현재 DB 방향
현재 1단계 기준 테이블은 아래다.

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

보류 중인 확장 테이블은 아래다.

- `activities`
- `activity_tracks`
- `meetups`
- `meetup_members`
- `meetup_messages`
- `reviews`
- `reports`
- `blocks`

## 현재 저장소 문서 구조
- `README.md`: 프로젝트 개요
- `research.md`: 현재 코드가 실제로 어떻게 동작하는지 분석
- `plan.md`: 현재 기준 개발 계획
- `docs/phase-1-supabase-guide.md`: 초보자용 1단계 실행 가이드
- `docs/current-status.md`: 빠른 상태 확인용 체크포인트
- `docs/README.md`: 문서 인덱스

## 현재 추가된 SQL
- `supabase/migrations/202604020001_phase1_core.sql`
- `supabase/migrations/202604020002_seed_mountains_routes.sql`

## 다음에 바로 할 일
1. `assets/js/supabase-config.js`에 실제 프로젝트 값 입력
2. 코어 스키마 SQL 실행
3. 산/코스 시드 SQL 실행
4. `posts` 시드 또는 실제 게시글 데이터 입력
5. 게시글 작성 폼을 `posts` insert와 연결
6. `post_likes`, `comments`, `bookmarks` 연결
7. `profiles`, `user_badges`로 프로필 화면 교체

## 주의할 점
- 현재 앱은 `정적 데모 + 부분적 실DB 읽기` 상태다.
- Supabase 값을 넣지 않으면 샘플 데이터 기반 시연으로 동작한다.
- 산과 게시글은 DB 우선이지만, 프로필과 동행은 아직 더미다.
