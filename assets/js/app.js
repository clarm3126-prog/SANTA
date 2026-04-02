const APP_DATA = {
  mountains: [
    {
      id: "bukhansan",
      name: "북한산",
      area: "서울 · 경기",
      elevation: "836m",
      heroClass: "bg-bukhansan",
      badge: "🔥 인기",
      cardMeta: "서울 · 해발 836m",
      cardStats: ["⭐ 4.8", "⚠ 주의 1구간"],
      stats: [
        { value: "4.8", key: "⭐ 평점" },
        { value: "1,847", key: "📝 후기" },
        { value: "보통", key: "📊 혼잡도" },
        { value: "12°C", key: "🌤 기온" }
      ],
      liveSummary: "현재 정상 혼잡도는 보통이며, 3.2km 암릉 구간은 바람이 강합니다. 오늘 방문 예상자 47명, 질문 게시글은 불광능선 입구와 암릉 구간에 집중됩니다.",
      entryPoint: "불광역 2번 출구 · 불광탐방지원센터",
      mapNote: "초보는 불광능선, 경험자는 의상능선이 많이 선택됩니다. 3.2km 암릉은 바람과 미끄럼 질문이 반복됩니다.",
      communityPulse: "오늘 커뮤니티 메모 18건 · 길찾기 질문 6건",
      routes: [
        {
          name: "🌿 불광능선 코스",
          difficultyLabel: "쉬움",
          difficultyClass: "diff-easy",
          distance: "7.2km",
          time: "약 4시간",
          gain: "+680m",
          tags: ["🔰 초보 추천", "📸 포토스팟", "🚇 불광역"]
        },
        {
          name: "⛰ 의상능선 코스",
          difficultyLabel: "중급",
          difficultyClass: "diff-mid",
          distance: "9.8km",
          time: "약 5시간",
          gain: "+836m",
          tags: ["🌅 뷰맛집", "💪 체력 필요", "⚠ 3.2km 주의"],
          highlight: "🔥 이번 주 가장 인기"
        },
        {
          name: "🏔 우이령 종주 코스",
          difficultyLabel: "어려움",
          difficultyClass: "diff-hard",
          distance: "15.1km",
          time: "약 8시간",
          gain: "+1,100m",
          tags: ["⚡ 고급자", "🎒 충분한 준비", "🌄 일출 명소"]
        }
      ],
      infoCards: [
        {
          title: "📍 기본 정보",
          body: "주소: 서울 강북구 / 경기 고양시<br>해발고도: 836m<br>국립공원: 북한산 국립공원<br>입장 시간: 04:00 ~ 일몰 전"
        },
        {
          title: "⚠ 안전 주의사항",
          body: "3.2km 암릉 구간은 우천 시 미끄럽고, 겨울철에는 아이젠이 필요합니다. 혼자 갈 경우 귀가 예상 시간 공유를 권장합니다.",
          style: "margin-top:12px; border-color: rgba(232, 101, 42, 0.15); background: rgba(232, 101, 42, 0.05);",
          titleStyle: "color: var(--ember);"
        },
        {
          title: "☕ 하산 후 추천",
          body: "감자골 칼국수, 북한산 브루어리, 불광동 샐러드 카페",
          style: "margin-top:12px;"
        }
      ]
    },
    {
      id: "gwanaksan",
      name: "관악산",
      area: "서울",
      elevation: "629m",
      heroClass: "bg-gwanaksan",
      badge: "✨ 추천",
      cardMeta: "서울 · 해발 629m",
      cardStats: ["⭐ 4.6", "👶 초보동행 多"],
      stats: [
        { value: "4.6", key: "⭐ 평점" },
        { value: "1,104", key: "📝 후기" },
        { value: "낮음", key: "📊 혼잡도" },
        { value: "14°C", key: "🌤 기온" }
      ],
      liveSummary: "서울대입구 코스 기준 안내 표지판이 잘 되어 있고, 주말 오전에는 초보 질문과 입구 확인 글이 가장 많이 올라옵니다.",
      entryPoint: "서울대입구역 · 관악산공원 입구",
      mapNote: "서울대입구 코스는 입문자 질문이 많고, 연주대 코스는 계단 체감 난이도와 하산 시간 문의가 잦습니다.",
      communityPulse: "오늘 커뮤니티 메모 11건 · 초보 질문 5건",
      routes: [
        {
          name: "🌿 서울대입구 코스",
          difficultyLabel: "쉬움",
          difficultyClass: "diff-easy",
          distance: "6.1km",
          time: "약 3시간 30분",
          gain: "+540m",
          tags: ["👶 초보 동행", "🚇 접근성 좋음", "🍜 하산 맛집"]
        },
        {
          name: "⛰ 연주대 코스",
          difficultyLabel: "중급",
          difficultyClass: "diff-mid",
          distance: "8.4km",
          time: "약 4시간 30분",
          gain: "+690m",
          tags: ["💪 운동 목적", "🌇 서울 야경", "📸 전망 포인트"],
          highlight: "🔥 저녁 시간 인기"
        }
      ],
      infoCards: [
        {
          title: "📍 기본 정보",
          body: "주소: 서울 관악구<br>해발고도: 629m<br>대표 코스: 서울대입구역, 과천향교 방향"
        },
        {
          title: "⚠ 안전 주의사항",
          body: "연주대 부근 바위 구간은 비가 오면 미끄럽습니다. 야간 하산 시 헤드랜턴을 권장합니다.",
          style: "margin-top:12px; border-color: rgba(232, 101, 42, 0.15); background: rgba(232, 101, 42, 0.05);",
          titleStyle: "color: var(--ember);"
        }
      ]
    },
    {
      id: "cheonggyesan",
      name: "청계산",
      area: "경기",
      elevation: "618m",
      heroClass: "bg-cheonggyesan",
      badge: "🌱 초보",
      cardMeta: "경기 · 해발 618m",
      cardStats: ["⭐ 4.7", "🟢 쉬움"],
      stats: [
        { value: "4.7", key: "⭐ 평점" },
        { value: "928", key: "📝 후기" },
        { value: "보통", key: "📊 혼잡도" },
        { value: "13°C", key: "🌤 기온" }
      ],
      liveSummary: "입문자 비중이 높고, 매바위 코스는 길 안내가 비교적 명확합니다. 최근 글은 입구 동선과 하산 동선 공유 비중이 큽니다.",
      entryPoint: "청계산입구역 · 원터골 입구",
      mapNote: "원터골 코스는 처음 가는 사람에게 가장 많이 추천되며, 카페 거리와 연계된 후기가 많습니다.",
      communityPulse: "오늘 커뮤니티 메모 9건 · 후기 4건",
      routes: [
        {
          name: "🌿 원터골 코스",
          difficultyLabel: "쉬움",
          difficultyClass: "diff-easy",
          distance: "5.8km",
          time: "약 3시간",
          gain: "+420m",
          tags: ["🔰 입문 추천", "☕ 카페 연계", "🚇 청계산입구역"]
        }
      ],
      infoCards: [
        {
          title: "📍 기본 정보",
          body: "주소: 경기 성남시 / 서울 서초구 경계<br>해발고도: 618m<br>대표 코스: 원터골, 옛골"
        }
      ]
    },
    {
      id: "achasan",
      name: "아차산",
      area: "서울",
      elevation: "295m",
      heroClass: "bg-achasan",
      badge: "🌇 야경",
      cardMeta: "서울 · 해발 295m",
      cardStats: ["⭐ 4.5", "👥 입문 그룹"],
      stats: [
        { value: "4.5", key: "⭐ 평점" },
        { value: "684", key: "📝 후기" },
        { value: "높음", key: "📊 혼잡도" },
        { value: "15°C", key: "🌤 기온" }
      ],
      liveSummary: "퇴근 후 가벼운 산행과 야경 수요가 많습니다. 최근 글은 야간 동선, 혼잡 시간, 사진 포인트 공유가 중심입니다.",
      entryPoint: "아차산역 · 해맞이광장 입구",
      mapNote: "짧은 코스지만 저녁 시간 혼잡이 빠르게 올라옵니다. 야간 하산 동선 공유 글이 자주 올라옵니다.",
      communityPulse: "오늘 커뮤니티 메모 7건 · 야경 후기 3건",
      routes: [
        {
          name: "🌆 야경 코스",
          difficultyLabel: "쉬움",
          difficultyClass: "diff-easy",
          distance: "3.4km",
          time: "약 1시간 40분",
          gain: "+220m",
          tags: ["🌇 야경", "👥 입문 그룹", "🚇 접근성 좋음"]
        }
      ],
      infoCards: [
        {
          title: "📍 기본 정보",
          body: "주소: 서울 광진구 / 경기 구리시 경계<br>해발고도: 295m<br>대표 이용 시간: 퇴근 후 저녁"
        }
      ]
    }
  ],
  companions: [
    {
      id: "minjun-bukhansan",
      avatar: "🧑",
      avatarBg: "#e8f4e8",
      name: "민준이",
      meta: "산행 23회 · 후기 19개 · 실명 인증",
      trust: "매너 4.9",
      title: "북한산 의상능선 소규모 4인 동행",
      tags: ["🔰 초보 환영", "📸 사진", "☕ 하산 카페", "🛡 위치 공유 필수"],
      note: "집합 후 1차 인원 확인, 중간 체크포인트 2회, 하산 완료 체크까지 진행합니다.",
      people: ["👩", "🧑"],
      slots: "2명 모집 중 · 토요일 오전 7시",
      mountainId: "bukhansan"
    },
    {
      id: "sua-gwanaksan",
      avatar: "👩",
      avatarBg: "#fdf0e8",
      name: "수아 언니",
      meta: "등산 가이드 · 후기 34개 · 여성 호스트 인증",
      trust: "가이드 5.0",
      title: "관악산 입문자 그룹 산행",
      tags: ["🌿 힐링", "👶 완전 초보", "🍜 맛집", "👥 최대 5명"],
      note: "속도 느린 참가자 기준으로 운영하고, 초반 30분은 장비와 보행 요령을 같이 확인합니다.",
      people: ["👩", "🧑", "👴"],
      slots: "1명 남음 · 일요일 오전 8시",
      mountainId: "gwanaksan"
    },
    {
      id: "dobong-king",
      avatar: "🧓",
      avatarBg: "#e8edf8",
      name: "도봉산킹",
      meta: "산행 67회 · 후기 8개 · 실명 인증",
      trust: "도전 4.7",
      title: "도봉산 자운봉 도전 코스 소규모 모집",
      tags: ["⚡ 도전", "🌄 일출", "👥 소규모", "🔺 중급 이상"],
      note: "우천 시 자동 취소, 구조 연락처 공유, 집합 시 장비 체크를 진행합니다.",
      people: ["🧑"],
      slots: "2명 모집 중 · 토요일 오전 5시",
      mountainId: "bukhansan"
    }
  ],
  feeds: [
    {
      id: "feed-bukhansan-1",
      userAvatar: "🧗",
      userName: "정우현",
      time: "3시간 전 · 북한산",
      visualClass: "bg-bukhansan",
      visualIcon: "🏔",
      visualText: "정상 인증샷",
      mountainLabel: "북한산 백운대 836m",
      description: "오늘 의상능선은 뷰가 좋았지만 3.2km 암릉 구간은 바람이 강했습니다. 초보라면 불광능선으로 올라가고, 의상능선은 하산 전에 체력 여유를 꼭 확인하는 편이 안전합니다.",
      reviewItems: [
        { label: "⚠ 길 헷갈린 구간", value: "1.2km 삼거리 우회로" },
        { label: "👥 정상 혼잡도", value: "보통 (오전 10시)" },
        { label: "☕ 하산 추천", value: "북한산 입구 감자골" }
      ],
      likes: 48,
      comments: 12,
      mountainId: "bukhansan"
    },
    {
      id: "feed-cheonggye-1",
      userAvatar: "🌸",
      userName: "이지은",
      time: "어제 · 청계산",
      visualClass: "bg-cheonggyesan",
      visualIcon: "🌿",
      visualText: "청계산 매바위",
      mountainLabel: "청계산 매바위",
      description: "원터골 입구 기준 표지판이 명확했고, 초보가 길 찾기 어렵지 않았습니다. 매바위 쪽은 중간 쉼 포인트가 분명해서 입문자 질문에 답하기 좋은 코스였습니다.",
      reviewItems: [
        { label: "💪 난이도 체감", value: "생각보다 쉬움" },
        { label: "🚌 교통", value: "청계산입구역 도보 15분" },
        { label: "☕ 하산 추천", value: "원터골 카페거리" }
      ],
      likes: 31,
      comments: 7,
      mountainId: "cheonggyesan"
    },
    {
      id: "feed-gwanak-1",
      userAvatar: "📷",
      userName: "정해린",
      time: "1일 전 · 관악산",
      visualClass: "bg-gwanaksan",
      visualIcon: "🌇",
      visualText: "연주대 전망",
      mountainLabel: "관악산 연주대",
      description: "서울대입구 코스는 처음 가는 사람도 따라가기 쉬웠고, 초반 계단 구간 이후에는 길이 단순했습니다. 입문자라면 오전 9시 이전 출발이 혼잡도와 체력 면에서 유리합니다.",
      reviewItems: [
        { label: "👶 초보 적합도", value: "높음" },
        { label: "📍 주의 포인트", value: "암반 계단 구간" },
        { label: "🍜 하산 추천", value: "샤로수길 식사" }
      ],
      likes: 22,
      comments: 5,
      mountainId: "gwanaksan"
    }
  ],
  profile: {
    certs: ["✅ 실명 인증", "📱 휴대폰 인증", "🆔 본인 확인 완료", "🛡 귀가 체크 사용"],
    reviews: [
      {
        title: "수아언니 · 2024년 3월",
        body: "정말 좋은 분이에요. 배려심이 있고 페이스를 잘 맞춰줘서 초보자도 안심할 수 있었어요. 다음에도 같이 가고 싶습니다."
      },
      {
        title: "민준이 · 2024년 2월",
        body: "코스를 잘 알고 있어서 산행 내내 안정감이 있었습니다. 진행 속도와 휴식 타이밍이 적절했고, 하산 체크까지 꼼꼼했어요."
      }
    ]
  }
};

const runtimeData = JSON.parse(JSON.stringify(APP_DATA));
const mountainFallbackByName = Object.fromEntries(APP_DATA.mountains.map((mountain, index) => [mountain.name, { ...mountain, defaultOrder: index + 1 }]));
const supabaseUrl = window.SANTA_SUPABASE_URL || "";
const supabaseAnonKey = window.SANTA_SUPABASE_ANON_KEY || "";
const supabaseClient = window.supabase && supabaseUrl && supabaseAnonKey
  ? window.supabase.createClient(supabaseUrl, supabaseAnonKey)
  : null;

const state = {
  activeMountainId: "bukhansan",
  mountainSearch: ""
};

const screens = [...document.querySelectorAll(".screen")];
const navBars = [...document.querySelectorAll(".bottomnav")];
const toast = document.getElementById("toast");
const modalJoin = document.getElementById("modal-join");
const modalCompanion = document.getElementById("modal-companion");
const joinMessage = document.getElementById("join-message");
const companionForm = document.getElementById("companion-form");
const validationMessage = document.getElementById("form-validation");

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function setActiveNav(name) {
  navBars.forEach((bar) => {
    bar.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.toggle("active", item.dataset.go === name);
    });
  });
}

function goScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === `screen-${name}`);
  });
  setActiveNav(name);
  const scrollArea = document.querySelector(`#screen-${name} .scroll-area`);
  if (scrollArea) {
    scrollArea.scrollTop = 0;
  }
}

function closeModal() {
  document.querySelectorAll(".modal-overlay").forEach((modal) => modal.classList.remove("open"));
}

function openJoinModal() {
  joinMessage.value = "";
  modalJoin.classList.add("open");
}

function openCompanionModal() {
  modalCompanion.classList.add("open");
}

function likePost(button) {
  const icon = button.querySelector("span:first-child");
  const count = button.querySelector("span:last-child");
  const liked = icon.textContent === "❤️";
  const current = Number.parseInt(count.textContent, 10);
  icon.textContent = liked ? "🤍" : "❤️";
  count.textContent = liked ? current - 1 : current + 1;
  if (!liked) {
    showToast("❤️ 좋아요!");
  }
}

function setSingleSelection(button) {
  const group = button.closest("[data-single-group]");
  group.querySelectorAll(".option-btn").forEach((option) => option.classList.remove("selected"));
  button.classList.add("selected");
}

function toggleMultiSelection(button) {
  button.classList.toggle("selected");
}

function switchTab(tabButton) {
  const tabId = tabButton.dataset.tab;
  document.querySelectorAll(".dtab").forEach((button) => {
    button.classList.toggle("active", button === tabButton);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.style.display = panel.id === tabId ? "block" : "none";
  });
}

function validateCompanionForm() {
  const mountain = document.getElementById("mountain").value.trim();
  const title = document.getElementById("post-title").value.trim();
  const meetingTime = document.getElementById("meeting-time").value.trim();
  const meetingPoint = document.getElementById("meeting-point").value.trim();
  const groupSize = document.getElementById("group-size").value.trim();
  const description = document.getElementById("description").value.trim();

  const missing = [];
  if (!mountain) missing.push("산 선택");
  if (!title) missing.push("제목");
  if (!meetingTime) missing.push("산행 날짜와 시간");
  if (!meetingPoint) missing.push("코스 또는 출발 지점");
  if (!groupSize) missing.push("글 유형");
  if (!description) missing.push("상세 내용");

  if (missing.length) {
    validationMessage.textContent = `다음 항목을 입력해 주세요: ${missing.join(", ")}`;
    validationMessage.classList.add("show");
    return false;
  }

  validationMessage.classList.remove("show");
  return true;
}

function getMountains() {
  return runtimeData.mountains;
}

function getCompanions() {
  return runtimeData.companions;
}

function getFeeds() {
  return runtimeData.feeds;
}

function buildLookup(items) {
  return Object.fromEntries(items.map((item) => [item.id, item]));
}

function formatRelativeTime(value) {
  if (!value) {
    return "방금 전";
  }

  const diffMs = Date.now() - new Date(value).getTime();
  const diffMinutes = Math.max(1, Math.floor(diffMs / 60000));

  if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  }

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours}시간 전`;
  }

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) {
    return `${diffDays}일 전`;
  }

  return new Intl.DateTimeFormat("ko-KR", { month: "numeric", day: "numeric" }).format(new Date(value));
}

function firstAvatarSeed(name) {
  if (!name) {
    return "🧗";
  }

  const first = name.trim().charAt(0);
  return first || "🧗";
}

function buildMountainId(name, index) {
  const fallback = mountainFallbackByName[name];
  return fallback ? fallback.id : `mountain-${index + 1}`;
}

function buildMountainMeta(region, elevationM, fallback) {
  const safeRegion = region || fallback?.area || "정보 준비 중";
  const safeElevation = elevationM ? `${elevationM}m` : fallback?.elevation || "정보 준비 중";
  return `${safeRegion} · 해발 ${safeElevation}`;
}

function mapRouteRecord(route, index, fallbackRoute) {
  const difficultyMap = {
    easy: { label: "쉬움", className: "diff-easy" },
    medium: { label: "중급", className: "diff-mid" },
    hard: { label: "어려움", className: "diff-hard" }
  };

  const difficulty = difficultyMap[route.difficulty] || { label: "보통", className: "diff-mid" };
  const tags = [
    route.start_point ? `📍 ${route.start_point}` : null,
    route.end_point ? `🏁 ${route.end_point}` : null,
    route.caution_notes ? "⚠ 주의 구간" : null
  ].filter(Boolean);

  return {
    id: route.id || fallbackRoute?.id || `route-${index + 1}`,
    name: route.name || fallbackRoute?.name || `추천 코스 ${index + 1}`,
    difficultyLabel: difficulty.label,
    difficultyClass: difficulty.className,
    distance: route.distance_km ? `${route.distance_km}km` : fallbackRoute?.distance || "거리 정보 준비 중",
    time: route.duration_min ? `약 ${route.duration_min}분` : fallbackRoute?.time || "시간 정보 준비 중",
    gain: route.elevation_gain_m ? `+${route.elevation_gain_m}m` : fallbackRoute?.gain || "고도 정보 준비 중",
    startPoint: route.start_point || fallbackRoute?.startPoint || "정보 준비 중",
    endPoint: route.end_point || fallbackRoute?.endPoint || "정보 준비 중",
    tags: tags.length ? tags : (fallbackRoute?.tags || ["🧭 코스 정보 정리 중"]),
    highlight: route.is_recommended ? "🔥 추천 코스" : fallbackRoute?.highlight
  };
}

function mapMountainRecord(record, index) {
  const fallback = mountainFallbackByName[record.name] || APP_DATA.mountains[index % APP_DATA.mountains.length] || {};
  const routes = Array.isArray(record.routes) && record.routes.length
    ? record.routes.map((route, routeIndex) => mapRouteRecord(route, routeIndex, fallback.routes?.[routeIndex]))
    : (fallback.routes || []);
  const primaryRoute = routes[0];
  const cautionRoute = routes.find((route) => route.tags.some((tag) => tag.includes("⚠")));

  return {
    ...fallback,
    id: buildMountainId(record.name, index),
    dbId: record.id,
    name: record.name,
    area: record.region || fallback.area || "정보 준비 중",
    elevation: record.elevation_m ? `${record.elevation_m}m` : fallback.elevation || "정보 준비 중",
    badge: fallback.badge || (record.is_korea_100 ? "⛰ 100대 명산" : "🧭 탐색"),
    cardMeta: buildMountainMeta(record.region, record.elevation_m, fallback),
    cardStats: [
      routes.length ? `🥾 ${routes.length}개 코스` : "🥾 코스 준비 중",
      record.parking_info ? "🚗 주차 정보" : (fallback.cardStats?.[1] || "🧭 기본 정보")
    ],
    stats: [
      { value: String(routes.length || 0), key: "🥾 코스" },
      { value: "연동 전", key: "📝 후기" },
      { value: "업데이트 예정", key: "📊 혼잡도" },
      { value: record.best_season || "사계절", key: "🍃 추천 시기" }
    ],
    liveSummary: record.description || fallback.liveSummary || "산 설명이 아직 입력되지 않았습니다.",
    entryPoint: primaryRoute?.startPoint || fallback.entryPoint || record.address || "대표 입구 정보 준비 중",
    mapNote: primaryRoute?.summary || fallback.mapNote || "코스 상세 설명을 준비 중입니다.",
    communityPulse: "커뮤니티 데이터 연동 준비 중",
    routes,
    infoCards: [
      {
        title: "📍 기본 정보",
        body: `주소: ${record.address || "정보 준비 중"}<br>해발고도: ${record.elevation_m ? `${record.elevation_m}m` : "정보 준비 중"}<br>교통: ${record.transit_info || "정보 준비 중"}<br>추천 시기: ${record.best_season || "사계절"}`
      },
      {
        title: "🚗 편의 정보",
        body: `주차: ${record.parking_info || "정보 준비 중"}<br>화장실: ${record.restroom_info || "정보 준비 중"}`,
        style: "margin-top:12px;"
      },
      {
        title: "⚠ 코스 메모",
        body: cautionRoute?.tags?.join(", ") || primaryRoute?.tags?.join(", ") || "코스 메모 준비 중",
        style: "margin-top:12px; border-color: rgba(232, 101, 42, 0.15); background: rgba(232, 101, 42, 0.05);",
        titleStyle: "color: var(--ember);"
      }
    ]
  };
}

function filteredMountains() {
  const query = state.mountainSearch.trim().toLowerCase();
  if (!query) {
    return getMountains();
  }

  return getMountains().filter((mountain) => {
    return [mountain.name, mountain.area, mountain.entryPoint, mountain.mapNote]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(query));
  });
}

async function loadMountainsFromSupabase() {
  if (!supabaseClient) {
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from("mountains")
      .select(`
        id,
        name,
        region,
        address,
        elevation_m,
        description,
        thumbnail_url,
        parking_info,
        restroom_info,
        transit_info,
        best_season,
        is_korea_100,
        routes (
          id,
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
      `)
      .order("created_at", { ascending: true });

    if (error) {
      throw error;
    }

    if (!data?.length) {
      showToast("Supabase에 산 데이터가 아직 없습니다.");
      return;
    }

    runtimeData.mountains = data.map(mapMountainRecord);

    if (!runtimeData.mountains.some((mountain) => mountain.id === state.activeMountainId)) {
      state.activeMountainId = runtimeData.mountains[0].id;
    }

    renderMountainCards();
    renderHomeMapBriefs();
    renderDetailScreen();
    showToast("홈 산 목록을 Supabase 데이터로 불러왔습니다.");
  } catch (error) {
    console.error("Failed to load mountains from Supabase", error);
    showToast("Supabase 연결에 실패해 기본 샘플 데이터를 표시합니다.");
  }
}

function mapPostRecord(post, lookups) {
  const profile = lookups.profiles[post.user_id];
  const mountainRecord = post.mountain_id ? lookups.mountains[post.mountain_id] : null;
  const routeRecord = post.route_id ? lookups.routes[post.route_id] : null;
  const runtimeMountain = runtimeData.mountains.find((mountain) => mountain.dbId === post.mountain_id)
    || runtimeData.mountains.find((mountain) => mountain.name === mountainRecord?.name)
    || null;
  const mountainFallback = mountainRecord?.name ? mountainFallbackByName[mountainRecord.name] : null;
  const images = (lookups.images[post.id] || []).sort((a, b) => a.sort_order - b.sort_order);
  const typeLabelMap = {
    review: "실전 후기",
    tip: "팁",
    free: "자유글",
    badge_share: "배지"
  };

  const reviewItems = [
    post.perceived_difficulty ? { label: "💪 체감 난이도", value: post.perceived_difficulty } : null,
    post.crowd_level ? { label: "👥 혼잡도", value: post.crowd_level } : null,
    post.beginner_friendly !== null && post.beginner_friendly !== undefined
      ? { label: "🔰 초보 적합", value: post.beginner_friendly ? "추천" : "주의" }
      : null,
    post.confusing_section !== null && post.confusing_section !== undefined
      ? { label: "🧭 길찾기", value: post.confusing_section ? "헷갈리는 구간 있음" : "비교적 명확" }
      : null,
    post.weather_context ? { label: "🌤 날씨", value: post.weather_context } : null,
    routeRecord?.name ? { label: "🥾 코스", value: routeRecord.name } : null
  ].filter(Boolean).slice(0, 3);

  return {
    id: post.id,
    userAvatar: firstAvatarSeed(profile?.nickname),
    userName: profile?.nickname || "익명 등산러",
    time: `${formatRelativeTime(post.created_at)}${mountainRecord?.name ? ` · ${mountainRecord.name}` : ""}`,
    visualClass: runtimeMountain?.heroClass || mountainFallback?.heroClass || "bg-bukhansan",
    visualIcon: images.length ? "📷" : (post.post_type === "tip" ? "🧭" : post.post_type === "badge_share" ? "🏅" : "🏔"),
    visualText: post.title || typeLabelMap[post.post_type] || "커뮤니티 글",
    mountainLabel: routeRecord?.name || mountainRecord?.name || "커뮤니티",
    description: post.content,
    reviewItems: reviewItems.length ? reviewItems : [{ label: "💬 글 유형", value: typeLabelMap[post.post_type] || "커뮤니티" }],
    likes: post.like_count || 0,
    comments: post.comment_count || 0,
    mountainId: runtimeMountain?.id || mountainFallback?.id || buildMountainId(mountainRecord?.name || "mountain", 0)
  };
}

async function loadPostsFromSupabase() {
  if (!supabaseClient) {
    return;
  }

  try {
    const { data: posts, error: postsError } = await supabaseClient
      .from("posts")
      .select(`
        id,
        user_id,
        mountain_id,
        route_id,
        title,
        content,
        post_type,
        perceived_difficulty,
        crowd_level,
        beginner_friendly,
        confusing_section,
        weather_context,
        like_count,
        comment_count,
        created_at,
        visibility
      `)
      .eq("visibility", "public")
      .order("created_at", { ascending: false })
      .limit(12);

    if (postsError) {
      throw postsError;
    }

    if (!posts?.length) {
      showToast("Supabase에 커뮤니티 글이 아직 없습니다.");
      return;
    }

    const profileIds = [...new Set(posts.map((post) => post.user_id).filter(Boolean))];
    const mountainIds = [...new Set(posts.map((post) => post.mountain_id).filter(Boolean))];
    const routeIds = [...new Set(posts.map((post) => post.route_id).filter(Boolean))];
    const postIds = posts.map((post) => post.id);

    const [profilesResult, mountainsResult, routesResult, imagesResult] = await Promise.all([
      profileIds.length
        ? supabaseClient.from("profiles").select("id, nickname, profile_image_url").in("id", profileIds)
        : Promise.resolve({ data: [], error: null }),
      mountainIds.length
        ? supabaseClient.from("mountains").select("id, name").in("id", mountainIds)
        : Promise.resolve({ data: [], error: null }),
      routeIds.length
        ? supabaseClient.from("routes").select("id, name").in("id", routeIds)
        : Promise.resolve({ data: [], error: null }),
      postIds.length
        ? supabaseClient.from("post_images").select("post_id, image_url, sort_order").in("post_id", postIds)
        : Promise.resolve({ data: [], error: null })
    ]);

    if (profilesResult.error) throw profilesResult.error;
    if (mountainsResult.error) throw mountainsResult.error;
    if (routesResult.error) throw routesResult.error;
    if (imagesResult.error) throw imagesResult.error;

    const imageLookup = {};
    (imagesResult.data || []).forEach((image) => {
      imageLookup[image.post_id] = imageLookup[image.post_id] || [];
      imageLookup[image.post_id].push(image);
    });

    const lookups = {
      profiles: buildLookup(profilesResult.data || []),
      mountains: buildLookup(mountainsResult.data || []),
      routes: buildLookup(routesResult.data || []),
      images: imageLookup
    };

    runtimeData.feeds = posts.map((post) => mapPostRecord(post, lookups));
    renderFeedPosts("home-feed-list", getFeeds());
    renderFeedPosts("companion-list", getFeeds());
    renderDetailScreen();
    showToast("커뮤니티 글을 Supabase 데이터로 불러왔습니다.");
  } catch (error) {
    console.error("Failed to load posts from Supabase", error);
    showToast("커뮤니티 글 연결에 실패해 기본 샘플 데이터를 표시합니다.");
  }
}

function mountainById(id) {
  return getMountains().find((mountain) => mountain.id === id) || getMountains()[0];
}

function companionByMountain(id) {
  return getCompanions().filter((item) => item.mountainId === id);
}

function feedsByMountain(id) {
  return getFeeds().filter((item) => item.mountainId === id);
}

function renderMountainCards() {
  const target = document.getElementById("home-mountain-list");
  const mountains = filteredMountains();

  if (!mountains.length) {
    target.innerHTML = '<div class="empty-text" style="padding: 0 20px 12px;">검색 결과가 없습니다. 다른 산 이름이나 지역을 입력해 보세요.</div>';
    return;
  }

  target.innerHTML = mountains.map((mountain) => `
    <article class="mountain-card" data-go="detail" data-mountain-id="${mountain.id}">
      <div class="mountain-card-img ${mountain.heroClass}">
        <div class="badge">${mountain.badge}</div>
      </div>
      <div class="mountain-card-body">
        <div class="mountain-card-name">${mountain.name}</div>
        <div class="mountain-card-meta">${mountain.cardMeta}</div>
        <div class="mountain-card-stats">
          ${mountain.cardStats.map((stat) => `<div class="stat-pill">${stat}</div>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderCompanionCards(targetId, items) {
  const target = document.getElementById(targetId);

  if (!items.length) {
    target.innerHTML = '<div class="empty-text" style="padding: 0 20px 12px;">아직 연결된 동행 글이 없습니다.</div>';
    return;
  }

  target.innerHTML = items.map((item) => `
    <article class="companion-card" ${targetId === "home-companion-list" ? 'data-go="companion"' : ""}>
      <div class="cc-header">
        <div class="cc-avatar" style="background:${item.avatarBg};">${item.avatar}</div>
        <div class="cc-info">
          <div class="cc-name">${item.name}</div>
          <div class="cc-meta">${item.meta}</div>
        </div>
        <div class="cc-trust">${item.trust}</div>
      </div>
      <div class="cc-body">
        <div class="cc-title">${item.title}</div>
        <div class="cc-tags">
          ${item.tags.map((tag) => `<div class="cc-tag">${tag}</div>`).join("")}
        </div>
        <div class="safety-note">${item.note}</div>
      </div>
      <div class="cc-footer">
        <div>
          <div class="cc-people-avatars">
            ${item.people.map((person) => `<div class="cc-mini-avatar">${person}</div>`).join("")}
          </div>
          <div class="cc-slots">${item.slots}</div>
        </div>
        <button class="join-btn" type="button" data-action="join">참가 신청</button>
      </div>
    </article>
  `).join("");
}

function renderFeedPosts(targetId, items, compact = false) {
  const target = document.getElementById(targetId);

  if (!items.length) {
    target.innerHTML = '<div class="empty-text" style="padding: 0 20px 12px;">아직 연결된 커뮤니티 글이 없습니다.</div>';
    return;
  }
  target.innerHTML = items.map((item, index) => `
    <article class="feed-post" ${compact && index === 0 ? 'style="margin-top:12px;"' : ""}>
      <div class="fp-header">
        <div class="fp-avatar">${item.userAvatar}</div>
        <div>
          <div class="fp-user">${item.userName}</div>
          <div class="fp-time">${item.time}</div>
        </div>
      </div>
      <div class="fp-img ${item.visualClass}">
        <div style="text-align:center;color:rgba(255,255,255,.62);">
          <div style="font-size:40px;">${item.visualIcon}</div>
          <div style="margin-top:6px;font-size:12px;">${item.visualText}</div>
        </div>
        <div class="fp-mountain-label">${item.mountainLabel}</div>
      </div>
      <div class="fp-body">
        <div class="fp-desc">${item.description}</div>
        <div class="fp-review-strip">
          ${item.reviewItems.map((review) => `
            <div class="fp-review-item">
              <span>${review.label}</span>
              <span class="fp-review-val">${review.value}</span>
            </div>
          `).join("")}
        </div>
        ${compact ? "" : `
          <div class="fp-actions">
            <button class="fp-action" type="button" data-action="like"><span>🤍</span><span>${item.likes}</span></button>
            <div class="fp-action"><span>💬</span><span>${item.comments}</span></div>
            <div class="fp-action"><span>🔖</span><span>저장</span></div>
            <button class="fp-action" type="button" data-action="show-companion"><span>👥</span><span>동행 보기</span></button>
          </div>
        `}
      </div>
    </article>
  `).join("");
}

function renderDetailScreen() {
  const mountain = mountainById(state.activeMountainId);
  document.getElementById("detail-hero").innerHTML = `
    <div class="detail-hero ${mountain.heroClass}">
      <div class="detail-hero-back" data-go="home">←</div>
      <div class="detail-hero-name">
        <div class="dhn-main">${mountain.name}</div>
        <div class="dhn-sub">${mountain.area} / 해발 ${mountain.elevation}</div>
      </div>
    </div>
  `;

  document.getElementById("detail-stats").innerHTML = mountain.stats.map((stat) => `
    <div class="ds-item">
      <div class="ds-val">${stat.value}</div>
      <div class="ds-key">${stat.key}</div>
    </div>
  `).join("");

  document.getElementById("detail-live-summary").innerHTML = `
    <div style="padding:14px 20px 4px;">
      <div class="brief-card">
        <div class="brief-title">🗺 지도 브리핑</div>
        <div class="brief-body" style="margin-top:8px;">${mountain.liveSummary}</div>
      </div>
      <div class="brief-card" style="margin-top:12px;">
        <div class="brief-title">📍 입구 · 최근 메모</div>
        <div class="brief-body" style="margin-top:8px;">${mountain.entryPoint}<br>${mountain.mapNote}<br><strong style="color: var(--sage);">${mountain.communityPulse}</strong></div>
      </div>
    </div>
  `;

  document.getElementById("detail-routes").innerHTML = mountain.routes.map((route) => `
    <article class="route-card" ${route.highlight ? 'style="border-color: rgba(232, 101, 42, 0.35); background: rgba(232, 101, 42, 0.03);"' : ""}>
      ${route.highlight ? `<div style="margin-bottom:6px;font-size:10px;font-weight:800;color:var(--ember);">${route.highlight}</div>` : ""}
      <div class="rc-top">
        <div class="rc-name">${route.name}</div>
        <div class="rc-diff ${route.difficultyClass}">${route.difficultyLabel}</div>
      </div>
      <div class="rc-stats">
        <div class="rc-stat">거리 <strong>${route.distance}</strong></div>
        <div class="rc-stat">시간 <strong>${route.time}</strong></div>
        <div class="rc-stat">고도 <strong>${route.gain}</strong></div>
      </div>
      <div class="rc-tags">
        ${route.tags.map((tag) => `<div class="rc-tag">${tag}</div>`).join("")}
      </div>
    </article>
  `).join("");

  renderFeedPosts("detail-feed-list", feedsByMountain(mountain.id), true);

  document.getElementById("detail-info-list").innerHTML = mountain.infoCards.map((card) => `
    <article class="brief-card" style="${card.style || ""}">
      <div class="brief-title" style="${card.titleStyle || ""}">${card.title}</div>
      <div class="brief-body">${card.body}</div>
    </article>
  `).join("");

  document.getElementById("modal-companion-copy").innerHTML = `${mountain.name} 커뮤니티에서 동행으로 전환된 글이 현재 <strong style="color: var(--ember);">${companionByMountain(mountain.id).length}</strong>건 있습니다. 기본 추천은 3~5명 그룹이며, 후기와 신뢰도가 높은 호스트를 우선 노출합니다.`;
  renderModalCompanions();
}

function renderProfile() {
  document.getElementById("profile-certs").innerHTML = APP_DATA.profile.certs.map((item) => `
    <div class="cert-badge">${item}</div>
  `).join("");

  document.getElementById("profile-reviews").innerHTML = APP_DATA.profile.reviews.map((review, index) => `
    <article class="brief-card" style="margin-top: ${index === 0 ? 12 : 10}px;">
      <div class="brief-title">${review.title}</div>
      <div class="brief-body">${review.body}</div>
    </article>
  `).join("");
}

function renderHomeMapBriefs() {
  const target = document.getElementById("home-map-list");
  const mountains = filteredMountains().slice(0, 3);

  if (!mountains.length) {
    target.innerHTML = '<div class="empty-text">지도 브리핑을 보여줄 산이 없습니다.</div>';
    return;
  }

  target.innerHTML = mountains.map((mountain) => `
    <article class="brief-card map-brief-card" data-go="detail" data-mountain-id="${mountain.id}">
      <div class="brief-title">${mountain.name} 지도 브리핑</div>
      <div class="brief-body">📍 ${mountain.entryPoint}</div>
      <div class="brief-body">🗺 ${mountain.mapNote}</div>
      <div class="brief-body" style="color: var(--sage); font-weight: 800;">${mountain.communityPulse}</div>
    </article>
  `).join("");
}

function renderModalCompanions() {
  const items = companionByMountain(state.activeMountainId).slice(0, 2);
  document.getElementById("modal-companion-list").innerHTML = items.map((item) => `
    <article class="companion-card" style="margin: 0 0 12px;">
      <div class="cc-header">
        <div class="cc-avatar" style="background:${item.avatarBg};">${item.avatar}</div>
        <div class="cc-info">
          <div class="cc-name">${item.name}</div>
          <div class="cc-meta">${item.slots}</div>
        </div>
        <button class="join-btn" type="button" data-action="join-inline">신청</button>
      </div>
    </article>
  `).join("");
}

function renderApp() {
  renderMountainCards();
  renderFeedPosts("home-feed-list", getFeeds());
  renderHomeMapBriefs();
  renderCompanionCards("home-companion-list", getCompanions().slice(0, 2));
  renderFeedPosts("companion-list", getFeeds());
  renderCompanionCards("community-companion-list", getCompanions());
  renderDetailScreen();
  renderProfile();
}

document.addEventListener("click", (event) => {
  const mountainTrigger = event.target.closest("[data-mountain-id]");
  if (mountainTrigger) {
    state.activeMountainId = mountainTrigger.dataset.mountainId;
    renderDetailScreen();
  }

  const likeButton = event.target.closest("[data-action='like']");
  if (likeButton) {
    likePost(likeButton);
    return;
  }

  const joinButton = event.target.closest("[data-action='join']");
  if (joinButton) {
    openJoinModal();
    return;
  }

  const joinInlineButton = event.target.closest("[data-action='join-inline']");
  if (joinInlineButton) {
    closeModal();
    openJoinModal();
    return;
  }

  const showCompanionButton = event.target.closest("[data-action='show-companion']");
  if (showCompanionButton) {
    openCompanionModal();
    return;
  }

  const emergencyButton = event.target.closest("[data-action='emergency']");
  if (emergencyButton) {
    showToast("🚨 119 연결 중... 현재 위치와 비상 연락처가 준비됩니다.");
    return;
  }

  const multiOption = event.target.closest("[data-multi-group] .option-btn");
  if (multiOption) {
    toggleMultiSelection(multiOption);
    return;
  }

  const singleOption = event.target.closest("[data-single-group] .option-btn");
  if (singleOption) {
    setSingleSelection(singleOption);
    return;
  }

  const detailTab = event.target.closest(".dtab");
  if (detailTab) {
    switchTab(detailTab);
    return;
  }

  const toggle = event.target.closest("[data-toggle]");
  if (toggle) {
    toggle.classList.toggle("on");
    return;
  }

  const tag = event.target.closest(".tag");
  if (tag) {
    document.querySelectorAll(".tag").forEach((item) => item.classList.remove("active"));
    tag.classList.add("active");
    return;
  }

  const chip = event.target.closest(".filter-chip");
  if (chip) {
    document.querySelectorAll(".filter-chip").forEach((item) => item.classList.remove("on"));
    chip.classList.add("on");
    return;
  }

  const goTarget = event.target.closest("[data-go]");
  if (goTarget) {
    goScreen(goTarget.dataset.go);
  }
});

document.querySelectorAll(".modal-overlay").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});

document.getElementById("confirm-join-btn").addEventListener("click", () => {
  const intro = joinMessage.value.trim();
  if (intro.length < 10) {
    showToast("자기소개를 10자 이상 입력해 주세요.");
    return;
  }
  closeModal();
  goScreen("companion");
  showToast("✅ 참가 신청 완료! 호스트 확인 후 알림을 보내드립니다.");
});

document.getElementById("close-join-btn").addEventListener("click", closeModal);
document.getElementById("close-companion-btn").addEventListener("click", closeModal);
document.getElementById("view-companions-btn").addEventListener("click", () => {
  closeModal();
  goScreen("companion");
});

const mountainSearchInput = document.getElementById("mountain-search");

mountainSearchInput.addEventListener("input", (event) => {
  state.mountainSearch = event.target.value;
  renderMountainCards();
  renderHomeMapBriefs();
});

mountainSearchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  const [firstMountain] = filteredMountains();
  if (!firstMountain) {
    showToast("검색 결과가 없습니다.");
    return;
  }

  state.activeMountainId = firstMountain.id;
  renderDetailScreen();
  goScreen("detail");
  showToast(`${firstMountain.name} 지도와 커뮤니티 화면으로 이동했습니다.`);
});

companionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateCompanionForm()) {
    return;
  }
  goScreen("companion");
  companionForm.reset();
  document.querySelectorAll("[data-multi-group='intent'] .option-btn").forEach((button, index) => {
    button.classList.toggle("selected", index === 0);
  });
  document.querySelectorAll("[data-single-group='level'] .option-btn").forEach((button, index) => {
    button.classList.toggle("selected", index === 0);
  });
  showToast("🎉 게시글이 올라갔어요! 커뮤니티와 산 상세에 반영됩니다.");
});

async function initApp() {
  renderApp();
  updateClock();
  window.setInterval(updateClock, 10000);
  await loadMountainsFromSupabase();
  await loadPostsFromSupabase();
}

initApp();
