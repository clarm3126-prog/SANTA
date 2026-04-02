# SANTA (산타) Research Report

## 1. Executive Summary

이 폴더는 서버나 빌드 시스템 없이 동작하는 정적 웹 프로토타입이다. 실행 단위는 브라우저가 [`index.html`](/home/user/un-ad/index.html)을 열고, 외부 CSS와 JS를 로드하는 방식이다. 실질적인 애플리케이션 로직은 [`assets/js/app.js`](/home/user/un-ad/assets/js/app.js)에 집중되어 있고, [`index.html`](/home/user/un-ad/index.html)은 화면 골격과 입력 폼, 동적 컨테이너를 제공한다. [`assets/css/styles.css`](/home/user/un-ad/assets/css/styles.css)는 모바일 앱 셸과 데스크톱 설명 패널을 동시에 표현하는 대형 단일 스타일시트다.

이 프로젝트의 본질은 “정적 셸 + 클라이언트 사이드 문자열 렌더링”이다. React, Vue, 템플릿 엔진, 상태 관리 라이브러리, API 호출은 없다. 데이터는 모두 JS 파일 안의 상수 `APP_DATA`에 하드코딩되어 있고, 동작 중 실제로 변경되는 상태는 `state.activeMountainId` 하나뿐이다. 나머지 상호작용은 DOM 클래스 토글, `innerHTML` 재주입, 폼 리셋, 토스트 표시 수준에서 끝난다.

서비스 관점의 포지셔닝은 분명하다. 이 시안은 소개팅 앱이 아니라 “안전 기반 등산 동행 플랫폼”을 지향한다. 그 방향성은 홈 카피, 동행 모집 표현, 안전 토글, 인증 배지, 구조화된 후기 UI 전반에 반영되어 있다.

## 2. File Inventory

현재 폴더의 주요 파일은 4개다.

- [`index.html`](/home/user/un-ad/index.html): 498 lines
- [`assets/css/styles.css`](/home/user/un-ad/assets/css/styles.css): 1331 lines
- [`assets/js/app.js`](/home/user/un-ad/assets/js/app.js): 754 lines
- [`README.md`](/home/user/un-ad/README.md): 28 lines

실제 콘텐츠 개수는 아래와 같다.

- 산 데이터: 4개
- 동행 모집 데이터: 3개
- 피드 데이터: 3개
- 프로필 인증 배지: 4개
- 프로필 후기: 2개

## 3. Runtime Architecture

### 3.1 Boot Sequence

브라우저에서 [`index.html`](/home/user/un-ad/index.html)을 열면 다음 순서로 동작한다.

1. Google Fonts를 로드한다.
2. [`assets/css/styles.css`](/home/user/un-ad/assets/css/styles.css)를 적용한다.
3. HTML 안의 정적 컨테이너와 폼 요소가 먼저 렌더링된다.
4. 마지막에 [`assets/js/app.js`](/home/user/un-ad/assets/js/app.js)가 로드된다.
5. JS 파일 하단에서 `renderApp()`이 즉시 실행된다.
6. `updateClock()`이 한 번 실행되고, 이후 10초 간격으로 반복된다.

즉, DOMContentLoaded를 기다리지 않고 스크립트가 문서 하단에 배치된 구조다. 이 배치는 현재 문서 구조에서는 안전하다.

### 3.2 Architectural Split

역할 분리는 대략 아래와 같다.

- HTML: 레이아웃, 화면 분리, 모달 뼈대, 입력 폼, 빈 렌더링 컨테이너
- CSS: 모든 비주얼 시스템과 반응형 처리
- JS: 데이터 저장, 렌더링, 상태 변경, 이벤트 위임, 폼 검증

이 분리는 이전의 단일 파일 구조보다 낫지만, 여전히 JS 안에 데이터와 프레젠테이션 문자열이 강하게 결합돼 있다.

## 4. HTML Structure Analysis

### 4.1 Top-Level Layout

[`index.html`](/home/user/un-ad/index.html)의 최상위 구조는 `main.page` 하나다. 여기서 두 개의 큰 열을 가진다.

- `aside.overview`: 서비스 설명, 포지셔닝, 설계 원칙을 담는 데스크톱용 패널
- `section.phone-stage > div.shell#app`: 모바일 앱처럼 보이는 실제 프로토타입 영역

이 구조는 “설명 패널 + 인터랙티브 앱 미리보기” 조합이다. 순수 사용자용 제품 화면보다는 투자 설명, 기획 검토, MVP 시연에 가까운 문서형 UI다.

### 4.2 Screen System

앱 내부는 여러 `.screen`으로 나뉜다.

- `screen-home`
- `screen-companion`
- `screen-detail`
- `screen-create`
- `screen-profile`

화면 전환은 라우터 없이 `active` 클래스 부여 방식으로 처리된다. 한 번에 하나의 `.screen`만 보인다. 이 때문에 URL 기반 상태 공유, 브라우저 뒤로가기, 직접 링크 진입은 지원되지 않는다.

### 4.3 Dynamic Containers

하드코딩 카드 대신 JS 렌더링용으로 비워둔 주요 컨테이너는 아래와 같다.

- `#home-mountain-list`
- `#home-companion-list`
- `#home-feed-list`
- `#companion-list`
- `#detail-hero`
- `#detail-stats`
- `#detail-live-summary`
- `#detail-routes`
- `#detail-feed-list`
- `#detail-info-list`
- `#profile-certs`
- `#profile-reviews`
- `#modal-companion-list`

즉, HTML은 “껍데기”이고, 리스트/카드 대부분은 런타임에 문자열로 삽입된다.

### 4.4 Static vs Dynamic Areas

정적 영역:

- 개요 패널 전체
- 상태바 뼈대
- 홈 태그 버튼
- 동행 필터 칩
- 동행 작성 폼 전체
- 프로필 상단 영웅 영역 일부
- 안전 토글 블록
- 모달 골격

동적 영역:

- 산 카드
- 동행 카드
- 피드 카드
- 상세 화면 히어로/스탯/코스/정보
- 프로필 인증 배지와 후기
- 모달 내부 추천 동행 카드

이 혼합 구조는 프로토타입에서는 충분하지만, 장기적으로는 정적과 동적 책임이 다소 섞여 있다.

## 5. CSS System Analysis

### 5.1 Styling Strategy

[`assets/css/styles.css`](/home/user/un-ad/assets/css/styles.css)는 컴포넌트 단위 파일 분리가 없는 단일 전역 스타일시트다. CSS Modules, BEM 네임스페이스, Tailwind, Sass는 사용하지 않는다.

스타일 시스템의 특징은 다음과 같다.

- 색상 토큰을 `:root`에 모은다.
- 화면 전체 배경은 크림 톤 + 라디얼 그라디언트로 구성한다.
- 주요 카드들은 동일한 그림자/테두리/반경 규칙을 공유한다.
- 모바일 앱 셸과 데스크톱 개요 패널이 한 파일에 함께 정의된다.
- 두 개의 애니메이션만 사용한다: `fade-up`, `modal-up`

### 5.2 Design Tokens

핵심 토큰은 숲/흙/안전 이미지를 만드는 색상 세트다.

- 메인 다크: `--forest`, `--moss`
- 보조 그린: `--sage`, `--fern`, `--mist`
- 배경 계열: `--cream`, `--white`
- 강조색: `--ember`, `--gold`, `--dawn`
- 중립 계열: `--stone`, `--pebble`, `--ink`

이는 서비스의 “산행 + 안전 + 아웃도어” 정체성을 일관되게 만든다.

### 5.3 Visual Composition

가장 중요한 시각적 결정은 아래 세 가지다.

- `.overview`는 설명용 카드처럼 보이는 반투명 패널
- `.shell`은 앱을 실제 모바일 기기처럼 보이게 하는 고정 폭 프레임
- `.hero-header`, `.screen-header`, `.profile-hero`는 동일한 다크 그린 헤더 시스템을 공유

즉, 컴포넌트별로 완전히 다른 비주얼 언어를 쓰지 않고, 일부 규칙을 재사용해 전체 경험을 통일했다.

### 5.4 Responsive Behavior

반응형 규칙은 2개뿐이다.

- `max-width: 980px`: 데스크톱 2열을 1열로 접고 `overview` sticky를 해제
- `max-width: 480px`: 앱 셸을 전면화하고 라운드 모서리를 없애 모바일 전체 화면처럼 변경

즉, 반응형은 정교한 브레이크포인트 시스템이 아니라 “데스크톱 시연”과 “실제 모바일 느낌” 두 상황만 고려한다.

### 5.5 CSS Quality Notes

강점:

- 시각 방향성이 뚜렷하다.
- 토큰 기반 색상 사용이 비교적 일관적이다.
- 공통 카드 계열이 묶여 있어 빠른 시안 작업에 유리하다.

약점:

- 1331줄 단일 파일이라 유지보수성이 낮다.
- 유사 규칙이 많이 반복된다.
- 일부 선택자는 현재 사용되지 않는다.

확인된 미사용 또는 약한 연결 요소:

- `--ok` 토큰은 정의만 있고 사용되지 않는다.
- `.trust-badge`, `.match-badge`는 선언만 있고 실제 마크업에서 쓰이지 않는다.
- `.empty-text`는 선언만 있고 비어 있는 상태 UI에서 실제 쓰이지 않는다.
- `.bg-dobongsan`는 선언만 있고 데이터/마크업에서 사용되지 않는다.

이런 흔적은 시안 확장 과정에서 남은 스타일 부채로 볼 수 있다.

## 6. JavaScript System Analysis

### 6.1 Overall Pattern

[`assets/js/app.js`](/home/user/un-ad/assets/js/app.js)는 크게 다섯 층으로 나뉜다.

1. `APP_DATA`: 모든 더미 데이터 저장
2. `state`: 최소 상태 저장
3. DOM 레퍼런스 캐시
4. 순수 렌더/유틸 함수
5. 이벤트 위임과 개별 바인딩

프레임워크가 없는 대신, 수동 렌더링 함수와 템플릿 문자열로 UI를 그린다.

### 6.2 Data Model

`APP_DATA`는 네 도메인을 가진다.

- `mountains`
- `companions`
- `feeds`
- `profile`

#### mountains

산 객체는 상세 화면의 거의 모든 정보를 포함한다.

필드 예시:

- `id`
- `name`
- `area`
- `elevation`
- `heroClass`
- `badge`
- `cardMeta`
- `cardStats`
- `stats`
- `liveSummary`
- `routes`
- `infoCards`

즉, 산은 “목록 카드 데이터”와 “상세 화면 데이터”를 동시에 가진다. 프런트엔드 관점에서는 편하지만, 서버 모델로 옮길 때는 목록/상세/실시간 현황이 분리될 가능성이 높다.

#### companions

동행 데이터는 카드 렌더링에 맞춘 프레젠테이션 형태다.

필드 예시:

- `avatar`, `avatarBg`
- `name`, `meta`, `trust`
- `title`, `tags`, `note`
- `people`, `slots`
- `mountainId`

중요한 점은 `mountainId`를 통해 산 상세/모달과 연결된다는 것이다.

#### feeds

피드 데이터도 카드 렌더링에 맞춰 강하게 가공되어 있다.

필드 예시:

- `userAvatar`, `userName`, `time`
- `visualClass`, `visualIcon`, `visualText`
- `mountainLabel`
- `description`
- `reviewItems`
- `likes`, `comments`
- `mountainId`

즉, 이미지 URL이나 미디어 객체가 아니라 “카드에 필요한 표현 값”을 직접 담고 있다.

#### profile

프로필은 현재 매우 단순하다.

- `certs`: 문자열 배열
- `reviews`: `{ title, body }` 배열

실제 사용자 모델이라기보다는, 프로필 화면 하단 두 구역을 렌더링하기 위한 축약 데이터다.

### 6.3 State Model

가변 상태는 `state.activeMountainId` 하나뿐이다.

이 값은 아래에서 쓰인다.

- 상세 화면 히어로/스탯/코스/정보 렌더링
- 상세 피드 필터링
- 모달 추천 동행 필터링

즉, 이 앱은 엄밀히 말하면 “산 선택 상태를 가진 정적 프로토타입”이다.

상태가 매우 작다는 점은 단순함의 장점이지만, 동시에 아래 상태들은 전혀 관리되지 않는다.

- 로그인 상태
- 신청 여부
- 좋아요 상태
- 필터 상태
- 태그 선택 상태 의미
- 작성한 모집글 데이터
- 토글 설정의 저장 상태

### 6.4 Utility and View Functions

핵심 함수는 아래와 같다.

- `updateClock()`: 상태바 시간 갱신
- `showToast(message)`: 토스트 표시
- `setActiveNav(name)`: 모든 하단 내비의 active 상태 동기화
- `goScreen(name)`: 화면 전환 + 스크롤 초기화
- `closeModal()`, `openJoinModal()`, `openCompanionModal()`
- `likePost(button)`: DOM 텍스트 직접 수정
- `setSingleSelection(button)`, `toggleMultiSelection(button)`
- `switchTab(tabButton)`: 상세 탭 전환
- `validateCompanionForm()`: 작성 폼 필수값 검증

여기서 `goScreen`과 `setActiveNav`가 화면 구조의 중심 역할을 한다.

### 6.5 Selector/Query Helpers

데이터 조회용 함수는 세 개뿐이다.

- `mountainById(id)`
- `companionByMountain(id)`
- `feedsByMountain(id)`

이 함수들은 매우 단순하지만, 앱 구조상 “현재 산을 기준으로 상세와 모달을 재구성한다”는 핵심 로직을 담당한다.

`mountainById`는 찾지 못할 경우 첫 번째 산을 fallback으로 사용한다. 이는 프로토타입에서는 안전하지만, 실제 제품이라면 오류를 숨길 수 있다.

## 7. Rendering Flow

### 7.1 Initial Render

초기 렌더는 `renderApp()`에서 시작한다.

실행 순서:

1. `renderMountainCards()`
2. `renderCompanionCards("home-companion-list", ...)`
3. `renderCompanionCards("companion-list", ...)`
4. `renderFeedPosts("home-feed-list", ...)`
5. `renderDetailScreen()`
6. `renderProfile()`

즉, 앱은 최초 로드 시 모든 주요 동적 영역을 한 번씩 채운다.

### 7.2 Home Screen Render

홈은 세 구역이 동적으로 채워진다.

- 산 추천 카드
- 홈 상위 동행 카드 2개
- 피드 카드 전체

특징:

- 홈 동행은 `APP_DATA.companions.slice(0, 2)`로 일부만 노출
- 산 카드에는 `data-mountain-id`와 `data-go="detail"`가 함께 붙는다
- 피드 카드에는 좋아요/댓글/저장/같이 가기 액션이 포함된다

### 7.3 Companion Screen Render

동행 화면은 `renderCompanionCards("companion-list", APP_DATA.companions)`로 전체 3개 카드를 렌더링한다.

여기서 필터 칩은 보이지만 실제 데이터 필터링은 하지 않는다. 즉, 현재 필터는 시각적 상호작용에만 머문다.

### 7.4 Detail Screen Render

`renderDetailScreen()`은 현재 앱에서 가장 중요한 함수다.

수행 작업:

- 선택된 산 데이터 조회
- 히어로 영역 렌더링
- 상단 스탯 4개 렌더링
- 라이브 요약 카드 렌더링
- 코스 카드 목록 렌더링
- 해당 산의 피드만 필터링해 렌더링
- 해당 산의 정보 카드 렌더링
- 모달 추천 동행 문구와 리스트 갱신

즉, `state.activeMountainId`가 바뀔 때마다 상세 화면과 관련 모달 일부가 같이 갱신된다.

### 7.5 Profile Render

`renderProfile()`는 인증 배지와 후기 2개만 채운다. 상단 영웅 영역과 안전 토글은 정적 HTML이다.

### 7.6 Modal Render

`renderModalCompanions()`는 현재 선택된 산에 연결된 동행 중 최대 2개만 보여준다.

이 모달은 산 중심 UX를 강화한다. 피드나 상세에서 “같이 가기”를 눌렀을 때, 단순한 CTA가 아니라 해당 산에 연결된 동행 데이터가 뜬다.

## 8. Event Flow Analysis

### 8.1 Event Delegation Strategy

대부분의 클릭 로직은 `document.addEventListener("click", ...)` 하나에서 위임 처리된다. 이는 동적으로 삽입되는 카드에도 이벤트가 자동으로 적용되게 하는 장점이 있다.

처리 순서는 중요하다.

1. `data-mountain-id`
2. `like`
3. `join`
4. `join-inline`
5. `show-companion`
6. `emergency`
7. multi-select option
8. single-select option
9. detail tab
10. toggle
11. tag
12. filter chip
13. 마지막에 `data-go`

이 순서는 현재 합리적이다. 액션 버튼이 카드 전체 이동보다 먼저 처리되도록 되어 있기 때문이다.

### 8.2 Navigation Flow

내비게이션은 `data-go` 기반이다.

- 하단 내비
- 프로필 버튼
- 상세 뒤로가기
- 동행 작성 이동 버튼
- 카드 자체

실제 라우팅은 없고, 단지 `goScreen(name)`이 `.screen.active`를 바꾸는 방식이다.

### 8.3 Mountain Selection Flow

산 카드 클릭 시 두 단계가 일어난다.

1. `data-mountain-id`로 `state.activeMountainId` 변경
2. `renderDetailScreen()` 재실행
3. 이어서 `data-go="detail"`가 처리되어 상세 화면으로 이동

이 순서 때문에 상세 화면은 항상 선택된 산 기준으로 갱신된 뒤 노출된다.

### 8.4 Like Flow

좋아요는 데이터 모델을 갱신하지 않고 DOM 숫자만 바꾼다.

- 현재 아이콘이 `🤍`면 `❤️`로 바꾸고 숫자 +1
- 아니면 다시 `🤍`로 바꾸고 숫자 -1

따라서 화면이 다시 렌더링되면 좋아요 상태는 유지되지 않는다. 예를 들어 전체 앱 리렌더가 생기면 값이 원본 데이터로 돌아갈 가능성이 있다.

### 8.5 Join Flow

참가 신청 흐름은 다음과 같다.

- `join` 버튼 클릭 → 신청 모달 오픈
- 자기소개 10자 미만이면 토스트 에러
- 통과 시 모달 닫기 → 동행 화면 이동 → 완료 토스트

중요한 점은 실제 신청 데이터 저장이나 카드 상태 변화는 없다.

### 8.6 Search Flow

`#mountain-search`는 실제 검색창이 아니다.

- `focus` 이벤트가 발생하면
- `state.activeMountainId = "bukhansan"`
- `renderDetailScreen()`
- `goScreen("detail")`
- 토스트 표시

즉, 검색 UX처럼 보이지만 현재는 “북한산 상세 화면으로 가는 숏컷”이다.

### 8.7 Form Submit Flow

동행 모집 폼 제출 시 다음이 일어난다.

1. 필수 필드 확인
2. 누락 항목 있으면 `.validation-message.show`
3. 통과 시 동행 화면으로 이동
4. `form.reset()` 호출
5. 목적/난이도 버튼의 기본 선택 복원
6. 성공 토스트 표시

중요한 한계:

- 제출한 데이터는 `APP_DATA.companions`에 추가되지 않는다.
- 새 모집글이 목록에 나타나지 않는다.
- 즉, 입력 폼은 실제 persistence나 state mutation과 연결되어 있지 않다.

### 8.8 Toggle and Filter Behavior

다음 UI는 상태 저장 없이 시각적 토글만 수행한다.

- 안전 기능 토글
- 홈 태그 버튼
- 동행 필터 칩
- 목적 선택 버튼
- 난이도 단일 선택 버튼

즉, UX는 있지만 데이터/화면 필터링까지 이어지지 않는다.

## 9. Screen-by-Screen Functional Understanding

### 9.1 Home

역할:

- 서비스 첫인상 제공
- 산 추천 진입점 제공
- 동행 추천 일부 노출
- 최근 후기 피드 노출

실제 기능:

- 산 카드 클릭 시 상세 이동
- 동행 카드 영역 클릭 시 동행 화면 이동
- 피드의 좋아요와 같이 가기 액션 동작

### 9.2 Companion

역할:

- 전체 동행 모집 탐색
- 모집글 작성 진입

실제 기능:

- 모집글 카드 노출
- 참가 신청 가능
- 필터 칩은 현재 시각 효과만 있다

### 9.3 Detail

역할:

- 선택한 산의 탐색/정보/피드 통합 뷰

실제 기능:

- 산별 코스/정보/관련 피드 렌더링
- 탭 전환
- 동행 작성 화면 이동

이 화면이 앱의 핵심 허브다. “산을 탐색하고, 후기를 보고, 사람을 연결한다”는 서비스 메시지가 가장 완성도 높게 드러난다.

### 9.4 Create

역할:

- 동행 모집글 입력

실제 기능:

- 폼 검증
- 선택형 버튼 상호작용
- 제출 후 성공 토스트

한계:

- 작성 결과가 목록에 반영되지 않는다.

### 9.5 Profile

역할:

- 신뢰와 안전 기능 강조

실제 기능:

- 인증 배지 렌더링
- 토글 시각 반응
- 긴급 버튼 토스트
- 후기 목록 렌더링

이 화면은 실제 계정 관리보다 “신뢰 기반 플랫폼” 이미지를 시연하는 데 초점이 있다.

## 10. Product Intent Encoded in the Codebase

이 코드베이스는 단순 UI 목업이 아니라, 기획 메시지를 코드로 고정해 둔 상태다. 특히 다음 의도가 강하게 보인다.

- 등산 기록 앱이 아니라 “탐색 + 후기 + 동행” 결합 모델
- 데이팅보다 안전과 그룹성 강조
- 초보자 친화적인 포지셔닝
- 후기의 구조화: 길, 혼잡도, 하산 추천 등
- 지역성과 라이프스타일 결합: 카페, 맛집, 야경, 사진

이것은 README 설명과 개요 패널 카피, 동행 카드의 안전 메모, 후기 카드의 구조화 필드가 모두 같은 방향을 가리킨다는 점에서 일관적이다.

## 11. Technical Limitations and Risks

### 11.1 No Persistence

가장 큰 제한은 모든 상호작용이 비영속적이라는 점이다.

- 좋아요는 DOM만 변경
- 신청 완료는 UI 피드백만 존재
- 모집 작성은 목록 반영 없음
- 토글 설정 저장 없음

따라서 이 앱은 실제 제품이 아니라 데모다.

### 11.2 Tight Coupling of Data and Markup

`APP_DATA`는 서버 친화적 도메인 모델이 아니라 현재 카드 레이아웃에 맞춘 프레젠테이션 데이터에 가깝다. 예를 들어 `cardStats`, `visualClass`, `visualIcon`, `badge` 같은 필드는 뷰 구조에 직접 결합돼 있다.

이는 초기 시안에는 유리하지만, API 설계 단계에서 다시 정규화가 필요하다.

### 11.3 Large String Templates

렌더링이 모두 템플릿 문자열로 이루어져 있어 다음 문제가 생긴다.

- 재사용성 낮음
- 부분 수정 시 실수 위험 높음
- 컴포넌트 테스트 어려움
- 사용자 입력을 삽입할 경우 XSS 취약점 위험 증가

현재는 데이터가 모두 로컬 상수라 괜찮지만, 외부 입력을 붙이면 구조를 바꿔야 한다.

### 11.4 No Derived UI State Model

필터 칩, 태그, 안전 토글, 좋아요 상태가 모두 데이터 상태와 분리돼 있다. 지금은 클릭 반응만 줄 뿐, 앱 의미에 연결되지 않는다.

### 11.5 No Accessibility Layer

기본 버튼/입력은 있으나, 다음은 부족하다.

- 모달 포커스 트랩 없음
- ESC 닫기 없음
- 탭 패널 ARIA 역할 없음
- 토스트 ARIA live region 없음
- 스크린 전환에 따른 제목/포커스 관리 없음

### 11.6 No Browser Navigation Support

스크린 전환이 CSS 클래스 기반이라 URL, 히스토리, 직접 링크 진입, 새로고침 복구가 불가능하다.

## 12. Strengths

이 코드베이스의 강점은 명확하다.

- 제품 포지셔닝이 UI 전반에 일관되게 반영되어 있다.
- 데이터 기반 렌더링으로 한 단계 진화했다.
- 산 중심 탐색과 동행 연결 흐름이 코드상에서도 자연스럽다.
- 화면 구성이 명확해 React 컴포넌트 분해가 쉽다.
- 디자인 언어가 강하고 프로토타입 시연용 완성도가 높다.

## 13. Recommended Refactor Path

현 코드 기준으로 가장 현실적인 다음 단계는 아래 순서다.

1. `APP_DATA`를 별도 `data.js` 또는 JSON 모듈로 분리
2. 템플릿 문자열 렌더러를 화면/카드 단위 함수 파일로 분리
3. 필터/좋아요/작성 결과를 실제 상태 객체로 승격
4. 작성 폼 제출 시 `companions` 배열에 실제로 추가되는 흐름 구현
5. 검색 입력을 실제 산 선택 기능으로 변경
6. React 또는 Next.js로 이식하면서 화면별 컴포넌트화
7. 서버 모델 설계 시 view-specific 필드와 domain 필드 분리

## 14. If This Were Ported to React

가장 자연스러운 컴포넌트 분해는 아래와 같다.

- `AppLayout`
- `OverviewPanel`
- `MobileShell`
- `ScreenHome`
- `ScreenCompanion`
- `ScreenDetail`
- `ScreenCreate`
- `ScreenProfile`
- `MountainCardList`
- `CompanionCardList`
- `FeedList`
- `DetailRoutes`
- `DetailInfoCards`
- `JoinModal`
- `CompanionModal`
- `Toast`

상태는 최소 아래로 나뉜다.

- `activeScreen`
- `activeMountainId`
- `likedFeedIds`
- `activeFilters`
- `joinModalOpen`
- `companionModalOpen`
- `companions`
- `formDraft`

현재 JS 구조는 이 분해를 위한 출발점으로 충분히 쓸 수 있다.

## 15. Final Assessment

이 폴더는 “정적인 시각 시안”을 이미 넘어선 상태다. 실제 서비스처럼 보이도록 설계된 인터랙티브 프로토타입이며, 특히 산 선택에 따라 상세/피드/모달이 함께 바뀌는 구조는 제품 핵심을 잘 보여준다.

하지만 아직은 완전한 애플리케이션이 아니다. 데이터는 모두 메모리 상수이며, 유저 액션은 대부분 UI 환상만 제공한다. 즉, 이 프로젝트를 가장 정확하게 정의하면 아래와 같다.

> 안전 기반 등산 동행 플랫폼을 설명하고 검증하기 위한 정적 프런트엔드 프로토타입

현재 단계의 목적에는 잘 맞는다. 다만 실제 제품으로 가려면 다음 점프가 필요하다.

- 상태를 실제 데이터 변경과 연결하기
- 카드 문자열 렌더링을 컴포넌트 구조로 바꾸기
- 필터/검색/작성/좋아요를 실제 동작으로 승격하기
- 백엔드/지도/인증 모델로 확장할 수 있게 데이터 모델을 정리하기

이 코드베이스는 그 출발점으로는 충분히 탄탄하다.
