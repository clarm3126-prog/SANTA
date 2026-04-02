# 인풋 기반 페이징 전환 계획

## 1. 목적
현재 코드베이스는 오프셋 페이징을 구현하고 있지 않지만, 일부 목록에서 고정 `slice(0, 2)`를 사용하거나 전체 배열을 그대로 렌더링하고 있다. 이 상태에서는 이후 API 연동 시 흔히 쓰는 `offset`, `page`, `pageSize` 중심 구조로 기울기 쉽고, 필터 조합이나 데이터 변동 상황에서 중복/누락 문제가 생기기 쉽다.

이번 변경의 목적은 다음과 같다.

- 목록 조회를 `offset` 기반이 아니라 `input` 기반으로 통일한다.
- 각 화면이 `배열 -> 직접 렌더`가 아니라 `조회 입력 -> 조회 결과 -> 렌더` 순서로 동작하게 만든다.
- 현재 정적 데이터 구조에서도 같은 인터페이스를 먼저 도입해, 이후 서버/API 도입 시 교체 비용을 줄인다.
- 홈, 동행, 상세 피드, 모달 추천 등 여러 목록이 서로 다른 조건을 가지더라도 같은 페이징 계약을 재사용하게 만든다.

## 2. 현재 코드베이스 기준 분석

### 2.1 실제 파일 구조
변경 대상은 아래 세 파일이 중심이다.

- `/home/user/un-ad/assets/js/app.js`
- `/home/user/un-ad/index.html`
- `/home/user/un-ad/assets/css/styles.css`

### 2.2 현재 목록 렌더 구조
`/home/user/un-ad/assets/js/app.js` 기준으로 목록 렌더는 아래처럼 구성되어 있다.

- `renderMountainCards()`
- `renderCompanionCards(targetId, items)`
- `renderFeedPosts(targetId, items, compact = false)`
- `renderDetailScreen()`
- `renderModalCompanions()`
- `renderApp()`

조회 헬퍼는 아래 수준에 머물러 있다.

- `mountainById(id)`
- `companionByMountain(id)`
- `feedsByMountain(id)`

즉, 지금 구조는 “입력 객체를 받아 조회”하는 구조가 아니라, “필터링 함수가 배열을 반환하고 렌더 함수가 그 배열을 그대로 소비”하는 구조다.

### 2.3 현재 페이징 유사 동작의 실제 위치
실제 소스에서 목록 수를 제한하는 지점은 아래 두 곳이다.

- `renderModalCompanions()` 내부: `companionByMountain(state.activeMountainId).slice(0, 2)`
- `renderApp()` 내부 홈 동행 목록: `APP_DATA.companions.slice(0, 2)`

그 외에는 전부 전체 렌더다.

- 홈 산 목록: `APP_DATA.mountains`
- 동행 화면 목록: `APP_DATA.companions`
- 홈 피드: `APP_DATA.feeds`
- 상세 피드: `feedsByMountain(mountain.id)`

즉, 현재는 오프셋 페이징을 제거하는 작업이 아니라, 아직 없는 페이지네이션 레이어를 처음 도입하면서 그 계약을 `input` 기반으로 설계하는 작업에 가깝다.

### 2.4 현재 상태 모델의 한계
현재 전역 상태는 아래 한 개뿐이다.

```js
const state = {
  activeMountainId: "bukhansan"
};
```

이 상태 모델로는 아래를 표현할 수 없다.

- 목록별 조회 조건
- 현재 커서 또는 다음 조회 기준
- 화면별 limit
- 정렬 기준
- 필터 변경 시 페이지 리셋
- 더보기 가능 여부

따라서 이번 작업의 핵심은 렌더 함수보다 먼저 `state`와 `query input` 모델을 확장하는 것이다.

## 3. 목표 상태
목표는 각 목록이 아래 흐름으로 움직이게 만드는 것이다.

1. 화면/이벤트가 특정 목록의 조회 입력을 만든다.
2. 조회 함수가 그 입력을 받아 `items + pageInfo`를 반환한다.
3. 렌더 함수는 결과 객체를 기반으로 UI와 페이저를 그린다.
4. 더보기/다음 버튼은 `offset += limit` 같은 숫자 증가가 아니라, 다음 입력을 생성해서 다시 조회한다.

이때 `input`은 아래 형태를 기본으로 삼는다.

```js
{
  limit: 10,
  after: null,
  filters: {
    mountainId: "bukhansan",
    tag: null,
    difficulty: null,
    hostVerified: null
  },
  sort: {
    field: "createdAt",
    direction: "desc"
  }
}
```

정적 데이터 단계에서는 `after`를 실제 DB cursor 대신 `마지막 아이템 id` 또는 `정렬 키 조합`으로 흉내 낼 수 있다.

조회 결과는 아래 형태를 목표로 한다.

```js
{
  items: [...],
  pageInfo: {
    hasNextPage: true,
    endCursor: "feed-002"
  },
  input: {
    ...현재 입력
  },
  nextInput: {
    ...다음 요청에 사용할 입력
  }
}
```

## 4. 설계 원칙

### 4.1 `offset`, `page` 숫자를 상태에 두지 않는다
다음 페이지를 판단하는 기준은 항상 `after` 혹은 그와 동등한 입력 값으로 표현한다.

나쁜 예:

```js
{ page: 3, pageSize: 10 }
```

좋은 예:

```js
{ limit: 10, after: "companion-003" }
```

### 4.2 조회 입력과 화면 상태를 분리한다
렌더 함수 내부에서 바로 `.slice()` 하지 않는다. 렌더 함수는 이미 계산된 결과만 받는다.

### 4.3 각 목록은 독립된 입력 상태를 가진다
최소한 아래 목록은 상태를 분리해야 한다.

- 홈 동행 목록
- 전체 동행 목록
- 홈 피드 목록
- 상세 피드 목록
- 모달 동행 추천 목록

필요 시 홈 산 목록도 같은 구조로 맞춘다.

### 4.4 필터가 바뀌면 커서를 리셋한다
예를 들어 산이 바뀌거나 태그가 바뀌면 기존 `after`는 무효다. 이때는 새 입력을 만들고 첫 페이지부터 다시 조회해야 한다.

### 4.5 현재 정적 데이터 구조에서도 서버 계약처럼 동작하게 만든다
지금은 `APP_DATA` 배열이 데이터 소스이지만, 조회 함수 시그니처는 서버 응답과 유사하게 맞춰둔다.

## 5. 상세 실행 계획

### 5.1 1단계: 목록별 조회 입력 상태 도입
`/home/user/un-ad/assets/js/app.js`의 `state`를 아래처럼 확장한다.

```js
const state = {
  activeMountainId: "bukhansan",
  paging: {
    homeCompanions: {
      limit: 2,
      after: null,
      filters: {},
      sort: { field: "id", direction: "asc" }
    },
    companionList: {
      limit: 6,
      after: null,
      filters: {
        mountainId: null,
        tag: null,
        verifiedOnly: false
      },
      sort: { field: "id", direction: "asc" }
    },
    homeFeed: {
      limit: 3,
      after: null,
      filters: {},
      sort: { field: "id", direction: "asc" }
    },
    detailFeed: {
      limit: 2,
      after: null,
      filters: {
        mountainId: "bukhansan"
      },
      sort: { field: "id", direction: "asc" }
    },
    modalCompanions: {
      limit: 2,
      after: null,
      filters: {
        mountainId: "bukhansan"
      },
      sort: { field: "id", direction: "asc" }
    }
  }
};
```

주의할 점:

- 초기 단계에서는 정렬 필드가 실제 데이터에 없는 `createdAt`보다 기존 `id` 기반이 안전하다.
- 이후 실제 시간 기반 정렬이 필요하면 `APP_DATA`에 `createdAt`을 추가한다.

### 5.2 2단계: 공통 조회 유틸 작성
`app.js`에 아래 성격의 공통 함수를 추가한다.

- `applyFilters(items, filters)`
- `applySort(items, sort)`
- `paginateByInput(items, input)`
- `queryCompanions(input)`
- `queryFeeds(input)`
- 필요 시 `queryMountains(input)`

핵심은 `paginateByInput`이다.

동작 개념:

1. 필터 적용
2. 정렬 적용
3. `after`가 없으면 처음부터 `limit`개 반환
4. `after`가 있으면 해당 커서 아이템 다음부터 `limit`개 반환
5. 마지막 아이템의 `id`를 `endCursor`로 계산
6. `hasNextPage` 계산
7. `nextInput` 계산

예시 시그니처:

```js
function paginateByInput(items, input) {
  const startIndex = input.after
    ? items.findIndex((item) => item.id === input.after) + 1
    : 0;

  const pageItems = items.slice(startIndex, startIndex + input.limit);
  const endCursor = pageItems.length ? pageItems[pageItems.length - 1].id : null;
  const hasNextPage = startIndex + input.limit < items.length;

  return {
    items: pageItems,
    pageInfo: {
      hasNextPage,
      endCursor
    },
    input,
    nextInput: hasNextPage
      ? { ...input, after: endCursor }
      : null
  };
}
```

이 방식은 내부 구현에서 `slice`를 쓰더라도 외부 계약은 `offset`이 아니라 `input.after` 기반이라는 점이 중요하다.

### 5.3 3단계: 기존 렌더 함수의 책임 축소
현재 렌더 함수는 “무엇을 얼마나 보여줄지”까지 암묵적으로 결정한다. 이를 아래처럼 나눈다.

- 조회 함수: 무엇을 얼마나 가져올지 결정
- 렌더 함수: 전달된 결과만 그림

변경 방향:

- `renderCompanionCards(targetId, items)` → 유지 가능
- `renderFeedPosts(targetId, items, compact = false)` → 유지 가능
- 대신 `renderCompanionSection(targetId, queryResult, options)` 같은 중간 렌더 계층 추가
- `renderFeedSection(targetId, queryResult, options)` 추가

이렇게 하면 카드 렌더 함수는 재사용하고, 페이저 UI는 섹션 렌더 함수가 담당할 수 있다.

### 5.4 4단계: 각 화면을 입력 기반 조회로 전환
#### 홈 동행 목록
현재:

```js
renderCompanionCards("home-companion-list", APP_DATA.companions.slice(0, 2));
```

변경:

```js
const result = queryCompanions(state.paging.homeCompanions);
renderCompanionSection("home-companion-list", result, { mode: "home" });
```

#### 전체 동행 목록
현재:

```js
renderCompanionCards("companion-list", APP_DATA.companions);
```

변경:

```js
const result = queryCompanions(state.paging.companionList);
renderCompanionSection("companion-list", result, { mode: "full" });
```

#### 상세 피드
현재:

```js
renderFeedPosts("detail-feed-list", feedsByMountain(mountain.id), true);
```

변경:

- `state.paging.detailFeed.filters.mountainId = state.activeMountainId`
- `queryFeeds(state.paging.detailFeed)` 호출
- 결과를 `renderFeedSection()`으로 전달

#### 모달 동행 추천
현재:

```js
const items = companionByMountain(state.activeMountainId).slice(0, 2);
```

변경:

- `state.paging.modalCompanions.filters.mountainId = state.activeMountainId`
- `queryCompanions(state.paging.modalCompanions)` 호출
- 결과를 모달 전용 렌더로 전달

### 5.5 5단계: 페이징 UI 추가
현재 `index.html`은 목록 컨테이너만 있고 페이저 영역이 없다. 아래 위치에 별도 페이저 슬롯을 추가하는 방식이 가장 안전하다.

추천 추가 위치:

- `#home-companion-list` 아래
- `#companion-list` 아래
- `#home-feed-list` 아래
- `#detail-feed-list` 아래
- `#modal-companion-list` 아래

예시:

```html
<div id="home-companion-list"></div>
<div id="home-companion-pager" class="pager-slot"></div>
```

버튼 형태는 우선 단순화한다.

- `더 보기`
- `처음부터 다시 보기`
- 필요 시 현재 조건 텍스트

이 단계에서는 번호형 페이지 UI를 만들지 않는다. 번호형 UI는 다시 오프셋 사고로 돌아가기 쉽다.

### 5.6 6단계: 페이저 이벤트 도입
`document.addEventListener("click", ...)` 이벤트 위임에 아래 액션을 추가한다.

- `data-action="next-page"`
- `data-action="reset-page"`

버튼에는 어떤 목록인지 구분할 식별자를 실어야 한다.

예시:

```html
<button data-action="next-page" data-list-key="companionList">더 보기</button>
```

동작 예시:

```js
const nextPageButton = event.target.closest("[data-action='next-page']");
if (nextPageButton) {
  const listKey = nextPageButton.dataset.listKey;
  const current = state.paging[listKey];
  const result = runQueryByListKey(listKey);
  if (result.nextInput) {
    state.paging[listKey] = result.nextInput;
    rerenderListByKey(listKey);
  }
  return;
}
```

단, 실제 구현에서는 `runQueryByListKey`가 현재 입력 기준 결과를 알아야 하므로, 더 안정적인 방식은 렌더 시점에 `nextCursor`를 상태에 보관하는 것이다.

추천 방식:

- `state.paginationMeta[listKey] = result.pageInfo`
- 클릭 시 `pageInfo.endCursor`로 새 입력 생성

### 5.7 7단계: 필터와 activeMountainId 변경 시 입력 리셋
현재는 산 카드 클릭 시 `state.activeMountainId`만 바꾸고 `renderDetailScreen()`만 호출한다.

이 구조에서는 상세 피드/모달 동행 목록이 이전 커서를 계속 들고 있을 수 있으므로, 산 변경 시 아래를 함께 수행해야 한다.

- `state.paging.detailFeed = createInitialDetailFeedInput(state.activeMountainId)`
- `state.paging.modalCompanions = createInitialModalCompanionsInput(state.activeMountainId)`
- 이후 `renderDetailScreen()`

마찬가지로 동행 필터 칩이 실제 동작하게 될 경우에도 아래 원칙을 따른다.

- 필터 변경
- 해당 목록 입력을 새로 생성
- `after = null`
- 목록만 부분 렌더 또는 전체 렌더

### 5.8 8단계: 생성 함수로 초기 입력 통일
직접 객체를 여기저기 복사하지 말고 생성 함수를 둔다.

예시:

- `createHomeCompanionInput()`
- `createCompanionListInput(overrides = {})`
- `createDetailFeedInput(mountainId)`
- `createModalCompanionInput(mountainId)`

이렇게 해야 필터 변경과 리셋 로직이 단순해진다.

## 6. 파일별 변경 계획

### 6.1 `/home/user/un-ad/assets/js/app.js`
핵심 변경 파일이다.

변경 항목:

- `state` 확장
- input 생성 함수 추가
- 공통 query/pagination 유틸 추가
- `renderApp()`를 목록별 input 조회 호출 방식으로 변경
- `renderDetailScreen()`에서 상세 피드/모달용 input 동기화
- 이벤트 위임에 페이저 버튼 액션 추가
- 필터/산 선택 시 input 리셋 로직 추가

추가 권장 함수:

- `createPagingState()`
- `paginateByInput(items, input)`
- `queryCompanions(input)`
- `queryFeeds(input)`
- `renderPager(targetId, listKey, result)`
- `rerenderListByKey(listKey)`

### 6.2 `/home/user/un-ad/index.html`
목록 컨테이너 아래에 pager slot을 추가한다.

우선 대상:

- 홈 동행 목록
- 전체 동행 목록
- 홈 피드 목록
- 상세 피드 목록
- 모달 동행 목록

예시 변경:

```html
<div id="companion-list"></div>
<div id="companion-list-pager" class="pager-slot"></div>
```

### 6.3 `/home/user/un-ad/assets/css/styles.css`
페이저 UI 전용 스타일을 추가한다.

필요 스타일:

- `.pager-slot`
- `.pager`
- `.pager-button`
- `.pager-meta`
- disabled 상태
- compact 모드

디자인 톤은 기존 서비스의 `forest / ember / cream` 팔레트를 유지한다.

## 7. 제안하는 데이터 계약
정적 데이터에서 인풋 기반 페이징을 안정적으로 쓰려면 각 아이템에 정렬과 cursor 계산이 가능한 키가 필요하다.

### 7.1 필수 조건
현재 `companion`, `feed`, `mountain` 데이터에 `id`가 안정적으로 있어야 한다.

만약 일부 항목에 `id`가 없다면 우선 추가해야 한다.

권장 필드:

- `id`: 고유 식별자
- `createdAt`: 시간순 정렬용
- `mountainId`: 상세/필터 연결용
- `tags`: 필터 확장용

### 7.2 초기 커서 전략
1차 구현은 아래 규칙으로 충분하다.

- `after = null`이면 첫 페이지
- `after = 마지막으로 받은 항목의 id`
- 정렬은 `id asc` 또는 `createdAt desc`

실서비스/API 단계에서는 아래처럼 자연스럽게 옮길 수 있다.

```js
{
  limit: 10,
  after: "opaque-cursor-token",
  filters: { mountainId: "bukhansan" },
  sort: { field: "createdAt", direction: "desc" }
}
```

## 8. 테스트 및 검증 계획

### 8.1 기능 검증
최소 검증 시나리오는 아래다.

1. 홈 동행 목록 첫 페이지가 2개만 보인다.
2. `더 보기` 클릭 시 다음 동행이 이어서 보인다.
3. 상세 산 변경 시 상세 피드가 해당 산 기준 첫 페이지로 리셋된다.
4. 모달 동행 목록도 현재 산 기준으로 다시 조회된다.
5. 필터 변경 시 이전 커서가 남지 않는다.
6. 마지막 페이지에서 `더 보기`가 사라지거나 비활성화된다.

### 8.2 회귀 검증
현재 상호작용이 깨지지 않아야 한다.

- 산 카드 클릭 시 상세 화면 갱신
- 좋아요 버튼 동작
- 참가 신청 모달 동작
- 상세 탭 전환
- 모집 폼 검증
- 하단 내비 전환

### 8.3 구조 검증
이 단계에서는 최소한 아래를 확인한다.

- `node --check /home/user/un-ad/assets/js/app.js`
- 각 pager slot이 실제 DOM에 존재하는지 확인
- 빈 결과일 때 렌더가 깨지지 않는지 확인

## 9. 롤아웃 순서 제안
한 번에 모든 목록을 바꾸기보다 아래 순서가 안전하다.

1. 공통 input/query/pagination 유틸 도입
2. 홈 동행 목록 전환
3. 모달 동행 목록 전환
4. 상세 피드 전환
5. 전체 동행 목록 전환
6. 홈 피드 전환
7. 필요 시 홈 산 목록까지 확장

이 순서를 추천하는 이유는 다음과 같다.

- 현재 실제로 개수 제한이 있는 목록이 동행 계열부터다.
- `activeMountainId`와 연동되는 목록을 먼저 정리하면 상태 모델이 안정된다.
- 피드와 산 목록은 그 다음에 같은 패턴으로 붙일 수 있다.

## 10. 최종 권고
이 코드베이스에서는 “오프셋 페이징을 인풋 기반으로 바꾼다”는 표현보다, “목록 조회를 인풋 기반 계약으로 재설계한다”가 더 정확하다. 현재는 진짜 오프셋 페이징이 없고, 일부 고정 개수 렌더와 전체 렌더만 존재하기 때문이다.

따라서 구현 우선순위는 아래 한 줄로 정리된다.

- `state`에 목록별 input을 도입하고
- `query + paginateByInput` 레이어를 만든 뒤
- 기존 `.slice()`와 전체 배열 전달을 모두 그 레이어 뒤로 숨긴다.

이 구조로 가면 다음 단계에서 실제 백엔드 API가 붙더라도, 프론트엔드는 `input`과 `result.pageInfo` 계약만 유지한 채 데이터 소스만 교체하면 된다. 지금 이 정적 프로토타입에서 먼저 그 경계를 만드는 것이 가장 비용 대비 효과가 크다.
