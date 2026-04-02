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
      liveSummary: "현재 정상 혼잡도는 보통이며, 3.2km 암릉 구간은 바람이 강합니다. 오늘 방문 예상자 47명, 그룹 산행 비중이 높습니다.",
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
      liveSummary: "서울대입구 코스 기준 안내 표지판이 잘 되어 있고, 주말 오전에는 초보 그룹 산행 수요가 높습니다.",
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
      liveSummary: "입문자 비중이 높고, 매바위 코스는 길 안내가 비교적 명확합니다. 하산 후 카페 거리 연계 수요가 큽니다.",
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
      liveSummary: "퇴근 후 가벼운 산행과 야경 수요가 많습니다. 짧은 시간 입문 그룹 코스로 적합합니다.",
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
      title: "이번 주말 북한산 의상능선 소규모 4인 동행",
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
      title: "관악산 입문자 그룹 산행, 처음인 분 우선",
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
      title: "도봉산 자운봉 도전 코스, 중급 이상 소규모 모집",
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
      description: "오늘 의상능선은 뷰가 정말 좋았고, 3.2km 암릉 구간은 바람이 강해서 초보자면 천천히 가는 게 좋았습니다.",
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
      description: "초보 코스로 좋았고 입구에서부터 표지판이 명확했습니다. 혼자보다 3인 정도 그룹으로 가면 더 편안할 코스예요.",
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
      description: "서울대입구 코스는 처음 가는 사람도 따라가기 쉬웠고, 4명 정도 그룹으로 움직이니 체감 난이도가 낮았습니다.",
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

const state = {
  activeMountainId: "bukhansan"
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
  if (!title) missing.push("모집 제목");
  if (!meetingTime) missing.push("날짜와 시간");
  if (!meetingPoint) missing.push("집합 장소");
  if (!groupSize) missing.push("모집 인원");
  if (!description) missing.push("상세 소개");

  if (missing.length) {
    validationMessage.textContent = `다음 항목을 입력해 주세요: ${missing.join(", ")}`;
    validationMessage.classList.add("show");
    return false;
  }

  validationMessage.classList.remove("show");
  return true;
}

function mountainById(id) {
  return APP_DATA.mountains.find((mountain) => mountain.id === id) || APP_DATA.mountains[0];
}

function companionByMountain(id) {
  return APP_DATA.companions.filter((item) => item.mountainId === id);
}

function feedsByMountain(id) {
  return APP_DATA.feeds.filter((item) => item.mountainId === id);
}

function renderMountainCards() {
  const target = document.getElementById("home-mountain-list");
  target.innerHTML = APP_DATA.mountains.map((mountain) => `
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
            <button class="fp-action" type="button" data-action="show-companion"><span>👥</span><span>같이 가기</span></button>
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
        <div class="brief-title">⚡ 실시간 현황</div>
        <div class="brief-body" style="margin-top:8px;">${mountain.liveSummary}</div>
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

  document.getElementById("modal-companion-copy").innerHTML = `${mountain.name} 관련 동행 모집 게시글이 현재 <strong style="color: var(--ember);">${companionByMountain(mountain.id).length}</strong>건 있습니다. 기본 추천은 3~5명 그룹이며, 실명 인증 호스트를 우선 노출합니다.`;
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
  renderCompanionCards("home-companion-list", APP_DATA.companions.slice(0, 2));
  renderCompanionCards("companion-list", APP_DATA.companions);
  renderFeedPosts("home-feed-list", APP_DATA.feeds);
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

document.getElementById("mountain-search").addEventListener("focus", () => {
  state.activeMountainId = "bukhansan";
  renderDetailScreen();
  goScreen("detail");
  showToast("북한산 상세 화면으로 이동했습니다.");
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
  showToast("🎉 동행 모집글이 올라갔어요! 기본 안전 설정도 함께 적용됩니다.");
});

renderApp();
updateClock();
window.setInterval(updateClock, 10000);
