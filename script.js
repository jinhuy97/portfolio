// content.js의 내용을 읽어서 화면에 그려주는 코드예요.
// 내용만 바꾸고 싶다면 이 파일은 고치지 않아도 돼요.

(function () {
  const C = CONTENT;
  const productions = C.productions || [];

  // 전체 공연 목록의 필터 순서
  const ROLE_ORDER = ["연출", "조연출", "조연출 보조", "소품"];

  // 제목 카드 배경색 (포스터가 없을 때 돌아가며 사용)
  const POSTER_COLORS = ["#8b1e3f", "#2f3e66", "#5b3a29", "#3f5a4a", "#6b2f5f", "#7a5a1e"];

  // ---------- 도우미 함수 ----------
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function hasItems(list) {
    return Array.isArray(list) && list.length > 0;
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function hideSection(id) {
    byId(id).hidden = true;
    const link = document.querySelector('.nav-links a[href="#' + id + '"]');
    if (link) link.hidden = true;
  }

  function externalLink(label, url, className) {
    const a = el("a", className, label);
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }

  function roleBadge(role) {
    return el("span", "role-badge" + (role === "연출" ? " is-director" : ""), role);
  }

  // 기관 이름을 " · "로 나눠서 셈
  function organizations() {
    const set = new Set();
    productions.forEach(function (p) {
      (p.org || "").split("·").forEach(function (name) {
        if (name.trim()) set.add(name.trim());
      });
    });
    return set;
  }

  // ---------- 첫 화면 ----------
  document.title = C.name + " | 포트폴리오";
  byId("nav-name").textContent = C.name;
  byId("hero-eyebrow").textContent = C.eyebrow || "";
  byId("hero-name").textContent = C.name;
  byId("hero-role").textContent = C.role;
  byId("hero-intro").textContent = C.intro;

  // 같은 작품을 다시 올린 경우는 한 작품으로 셈 (원제 기준)
  const directed = productions.filter(function (p) { return p.role === "연출"; });
  const directedWorks = new Set(directed.map(function (p) { return p.original || p.title; })).size;

  const stats = [
    { value: productions.length + "편", label: "참여 공연" },
    { value: directedWorks + "작품", label: "연출 (" + directed.length + "회 공연)" },
    { value: organizations().size + "곳", label: "함께한 기관" },
  ];
  stats.forEach(function (s) {
    const box = el("div");
    box.appendChild(el("dt", null, s.label));
    box.appendChild(el("dd", null, s.value));
    byId("hero-stats").appendChild(box);
  });

  // ---------- 01 나의 이야기 (이야기책) ----------
  // 컴퓨터: 펼친 책(왼쪽·오른쪽 두 쪽) / 휴대폰: 한 쪽짜리 책
  // 종이(leaf) 한 장의 앞면은 오른쪽 페이지, 뒷면은 다음 장의 왼쪽 페이지예요.
  const about = C.about || {};
  const story = about.story || [];

  // --- 페이지 내용 만들기 ---
  function inner(page) {
    const box = el("div", "page-inner");
    page.appendChild(box);
    return box;
  }

  function fillPhoto(page) {
    page.classList.add("photo-page");
    if (about.photo) {
      const img = el("img");
      img.src = about.photo;
      img.alt = C.name + " 프로필 사진";
      page.appendChild(img);
    }
    page.appendChild(el("div", "photo-caption", C.name));
  }

  function fillCover(page) {
    const box = inner(page);
    box.appendChild(el("p", "page-eyebrow", "MY STORY"));
    box.appendChild(el("h3", "page-title", "나의 이야기"));
    if (about.lead) box.appendChild(el("p", "page-lead", about.lead));
    box.appendChild(el("p", "page-hint", "페이지를 넘겨보세요  →"));
  }

  function chapterHead(box, scene, i) {
    box.appendChild(el("p", "chapter-num", String(i + 1)));
    box.appendChild(el("h3", "chapter-title", scene.step));
    if (scene.period) box.appendChild(el("p", "chapter-period", scene.period));
    box.appendChild(el("div", "chapter-rule"));
  }

  function fillChapterHead(page, scene, i) { chapterHead(inner(page), scene, i); }
  function fillChapterText(page, scene) { inner(page).appendChild(el("p", "chapter-text", scene.text)); }

  function fillChapterFull(page, scene, i) {
    const box = inner(page);
    box.style.justifyContent = "flex-start";
    chapterHead(box, scene, i);
    box.appendChild(el("p", "chapter-text", scene.text));
  }

  function fillEndHead(page) {
    const box = inner(page);
    box.appendChild(el("p", "page-eyebrow", "EPILOGUE"));
    box.appendChild(el("h3", "page-title", C.role));
  }

  function fillEndVision(page) {
    const box = inner(page);
    box.appendChild(el("p", "page-vision", about.vision || ""));
    box.appendChild(el("p", "page-sign", "— " + C.name));
  }

  function fillEndFull(page) {
    const box = inner(page);
    box.appendChild(el("p", "page-eyebrow", "EPILOGUE"));
    box.appendChild(el("p", "page-vision", about.vision || ""));
    box.appendChild(el("p", "page-sign", "— " + C.name));
  }

  function makePage(side, fill, number) {
    const page = el("div", "page " + (side === "left" ? "is-left" : "is-right"));
    if (fill) fill(page);
    if (number) page.appendChild(el("span", "page-no", number));
    return page;
  }

  // --- 책 만들기와 넘기기 ---
  const book = byId("book");
  const mobileQuery = window.matchMedia("(max-width: 760px)");
  const TURN_MS = 1000;
  let leaves = [];
  let current = 0; // 넘긴 종이 수

  function buildBook() {
    const single = mobileQuery.matches;
    book.textContent = "";
    book.dataset.mode = single ? "single" : "spread";
    leaves = [];
    current = 0;

    // 펼친 면 목록: [왼쪽 페이지, 오른쪽 페이지]
    const spreads = [[fillPhoto, fillCover]];
    story.forEach(function (scene, i) {
      spreads.push([
        function (p) { fillChapterHead(p, scene, i); },
        function (p) { fillChapterText(p, scene); },
      ]);
    });
    if (about.vision) spreads.push([fillEndHead, fillEndVision]);

    // 한 쪽 책의 페이지 목록
    const pages = [fillPhoto, fillCover];
    story.forEach(function (scene, i) { pages.push(function (p) { fillChapterFull(p, scene, i); }); });
    if (about.vision) pages.push(fillEndFull);

    if (single) {
      const last = makePage("right", pages[pages.length - 1], pages.length);
      last.classList.add("base-right");
      book.appendChild(last);
      for (let k = 0; k < pages.length - 1; k++) {
        addLeaf(makePage("right", pages[k], k > 0 ? k + 1 : null), makePage("left", null));
      }
    } else {
      const n = spreads.length;
      const left = makePage("left", spreads[0][0]);
      left.classList.add("base-left");
      const right = makePage("right", spreads[n - 1][1], 2 * n);
      right.classList.add("base-right");
      book.appendChild(left);
      book.appendChild(right);
      for (let k = 0; k < n - 1; k++) {
        addLeaf(
          makePage("right", spreads[k][1], 2 * k + 2),
          makePage("left", spreads[k + 1][0], 2 * k + 3)
        );
      }
    }
    render();
  }

  function addLeaf(front, back) {
    const leaf = el("div", "leaf");
    front.classList.add("front");
    back.classList.add("back");
    leaf.appendChild(front);
    leaf.appendChild(back);
    book.appendChild(leaf);
    leaves.push(leaf);
  }

  // 넘긴 종이는 왼쪽에, 안 넘긴 종이는 오른쪽에 순서대로 쌓기
  function render() {
    leaves.forEach(function (leaf, k) {
      leaf.classList.toggle("flipped", k < current);
      if (!leaf.classList.contains("turning")) {
        leaf.style.zIndex = k < current ? k + 1 : leaves.length - k + 1;
      }
    });
    const total = leaves.length + 1;
    byId("book-count").textContent = (current + 1) + " / " + total;
    byId("book-prev").disabled = current === 0;
    byId("book-next").disabled = current === leaves.length;
  }

  function turn(delta) {
    const next = Math.max(0, Math.min(leaves.length, current + delta));
    if (next === current) return;
    const leaf = leaves[delta > 0 ? current : current - 1];
    leaf.classList.add("turning");
    leaf.style.zIndex = 1000; // 넘어가는 종이는 맨 위로
    current = next;
    render();
    setTimeout(function () {
      leaf.classList.remove("turning");
      render();
    }, TURN_MS);
  }

  if (story.length || about.lead) {
    buildBook();

    // 오른쪽을 누르면 다음, 왼쪽을 누르면 이전
    book.addEventListener("click", function (event) {
      const leaf = event.target.closest(".leaf");
      if (leaf) turn(leaf.classList.contains("flipped") ? -1 : 1);
      else if (event.target.closest(".base-left")) turn(-1);
      else if (event.target.closest(".base-right")) turn(1);
    });

    byId("book-prev").addEventListener("click", function () { turn(-1); });
    byId("book-next").addEventListener("click", function () { turn(1); });

    book.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") { event.preventDefault(); turn(1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); turn(-1); }
    });

    // 휴대폰: 손가락으로 밀어서 넘기기
    let touchX = null;
    book.addEventListener("touchstart", function (event) { touchX = event.touches[0].clientX; }, { passive: true });
    book.addEventListener("touchend", function (event) {
      if (touchX === null) return;
      const dx = event.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) turn(dx < 0 ? 1 : -1);
      touchX = null;
    });

    // 화면 폭이 바뀌면 책 모양을 다시 만들기
    mobileQuery.addEventListener("change", buildBook);
  } else {
    byId("book").parentNode.hidden = true;
  }

  if (hasItems(about.facts)) {
    about.facts.forEach(function (fact) {
      const row = el("div");
      row.appendChild(el("dt", null, fact.label));
      row.appendChild(el("dd", null, fact.value));
      byId("about-facts").appendChild(row);
    });
  } else {
    byId("about-facts").hidden = true;
  }

  // ---------- 프로그램북 크게 보기 ----------
  const viewer = byId("viewer");
  let viewerPages = [];
  let viewerIndex = 0;

  function hasProgramBook(p) {
    return p.programBook && hasItems(p.programBook.pages);
  }

  function programBookButton(p) {
    const button = el("button", "book-chip", "📖 프로그램북");
    button.type = "button";
    button.setAttribute("aria-label", p.title + " 프로그램북 보기");
    button.addEventListener("click", function () { openViewer(p, 0); });
    return button;
  }

  function showViewerPage(index) {
    viewerIndex = Math.max(0, Math.min(viewerPages.length - 1, index));
    const page = viewerPages[viewerIndex];
    const img = byId("viewer-img");
    const mark = byId("viewer-mark");

    mark.hidden = true;
    img.onload = function () {
      // 이름 위치 표시 (사진 크기에 대한 %)
      if (page.highlight) {
        const h = page.highlight;
        mark.style.left = h[0] + "%";
        mark.style.top = h[1] + "%";
        mark.style.width = h[2] + "%";
        mark.style.height = h[3] + "%";
        mark.hidden = false;
      }
    };
    const sameImage = img.getAttribute("src") === page.src;
    img.src = page.src;
    img.alt = page.caption || "";
    if (sameImage && img.complete) img.onload(); // 같은 사진이면 load가 다시 안 일어남

    byId("viewer-caption").textContent = (viewerIndex + 1) + " / " + viewerPages.length + "  ·  " + (page.caption || "");
    byId("viewer-prev").disabled = viewerIndex === 0;
    byId("viewer-next").disabled = viewerIndex === viewerPages.length - 1;
    byId("viewer-thumbs").querySelectorAll("button").forEach(function (b, i) {
      b.classList.toggle("active", i === viewerIndex);
    });
  }

  function openViewer(p, index) {
    viewerPages = p.programBook.pages;
    byId("viewer-title").textContent = "〈" + p.title + "〉 프로그램북";
    byId("viewer-credit").textContent = p.programBook.credit || "";

    const thumbs = byId("viewer-thumbs");
    thumbs.textContent = "";
    viewerPages.forEach(function (page, i) {
      const b = el("button");
      b.type = "button";
      b.setAttribute("aria-label", (i + 1) + "번째 사진: " + (page.caption || ""));
      const img = el("img");
      img.src = page.src;
      img.alt = "";
      b.appendChild(img);
      b.addEventListener("click", function () { showViewerPage(i); });
      thumbs.appendChild(b);
    });

    showViewerPage(index);
    if (typeof viewer.showModal === "function") viewer.showModal();
    else viewer.setAttribute("open", "");
  }

  function closeViewer() {
    if (typeof viewer.close === "function") viewer.close();
    else viewer.removeAttribute("open");
  }

  byId("viewer-close").addEventListener("click", closeViewer);
  byId("viewer-prev").addEventListener("click", function () { showViewerPage(viewerIndex - 1); });
  byId("viewer-next").addEventListener("click", function () { showViewerPage(viewerIndex + 1); });
  // 바깥(어두운 배경)을 누르면 닫기
  viewer.addEventListener("click", function (event) { if (event.target === viewer) closeViewer(); });
  viewer.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") showViewerPage(viewerIndex + 1);
    if (event.key === "ArrowLeft") showViewerPage(viewerIndex - 1);
  });
  // 휴대폰: 밀어서 넘기기
  let viewerTouchX = null;
  viewer.addEventListener("touchstart", function (event) { viewerTouchX = event.touches[0].clientX; }, { passive: true });
  viewer.addEventListener("touchend", function (event) {
    if (viewerTouchX === null) return;
    const dx = event.changedTouches[0].clientX - viewerTouchX;
    if (Math.abs(dx) > 40) showViewerPage(viewerIndex + (dx < 0 ? 1 : -1));
    viewerTouchX = null;
  });

  // ---------- 02 대표작 ----------
  // 포스터: 이미지가 있으면 이미지, 없거나 못 불러오면 제목 카드
  function poster(p, index) {
    const box = el("div", "poster");
    box.appendChild(roleBadge(p.role));

    const type = el("div", "poster-type");
    type.style.setProperty("--poster-color", POSTER_COLORS[index % POSTER_COLORS.length]);
    type.appendChild(el("strong", null, p.original || p.title));
    if (p.composer) type.appendChild(el("span", null, p.composer));
    box.appendChild(type);

    if (p.poster) {
      const img = el("img");
      img.alt = p.title + " 포스터";
      img.loading = "lazy";
      img.referrerPolicy = "no-referrer";
      img.onload = function () { type.remove(); };
      img.onerror = function () { img.remove(); };
      img.src = p.poster;
      box.appendChild(img);
    }
    return box;
  }

  function metaItem(list, label, value) {
    if (!value) return;
    const li = el("li");
    li.appendChild(el("b", null, label));
    li.appendChild(document.createTextNode(value));
    list.appendChild(li);
  }

  const featured = productions
    .filter(function (p) { return p.featured; })
    .sort(function (a, b) { return (a.role === "연출" ? 0 : 1) - (b.role === "연출" ? 0 : 1); });

  if (featured.length) {
    featured.forEach(function (p, i) {
      const card = el("article", "work-card");
      card.appendChild(poster(p, i));

      const body = el("div", "work-body");
      body.appendChild(el("h3", null, p.title));
      if (p.original) body.appendChild(el("p", "work-original", p.original));

      const meta = el("ul", "work-meta");
      metaItem(meta, "작곡", p.composer);
      metaItem(meta, "제작", p.org);
      metaItem(meta, "연출", p.director);
      metaItem(meta, "공연", p.featuredDates || [p.dates, p.venue].filter(Boolean).join(" · ") || p.period);
      body.appendChild(meta);

      if (p.description) body.appendChild(el("p", "work-desc", p.description));

      const foot = el("div", "work-foot");
      foot.appendChild(el("span", null, p.poster ? p.posterCredit || "" : p.note || ""));
      const actions = el("div", "work-actions");
      if (hasProgramBook(p)) actions.appendChild(programBookButton(p));
      if (p.link) actions.appendChild(externalLink("공식 페이지 →", p.link));
      foot.appendChild(actions);
      body.appendChild(foot);

      card.appendChild(body);
      byId("featured-list").appendChild(card);
    });
  } else {
    hideSection("featured");
  }

  // ---------- 03 전체 공연 ----------
  let currentRole = "전체";

  function renderWorks() {
    const list = byId("works-list");
    list.textContent = "";

    const visible = productions.filter(function (p) {
      return currentRole === "전체" || p.role === currentRole;
    });

    // 연도별로 묶기 (참여 기간의 시작 연도 기준)
    const years = [];
    const groups = {};
    visible.forEach(function (p) {
      const year = (p.period || "").slice(0, 4);
      if (!groups[year]) { groups[year] = []; years.push(year); }
      groups[year].push(p);
    });

    years.forEach(function (year) {
      const group = el("div", "year-group");
      group.appendChild(el("h3", "year-label", year));

      const rows = el("ul", "work-rows");
      groups[year].forEach(function (p) {
        const row = el("li", "work-row");
        row.appendChild(el("span", "work-row-period", p.period));

        const main = el("div");
        const title = el("p", "work-row-title");
        if (p.link) title.appendChild(externalLink(p.title, p.link));
        else title.appendChild(document.createTextNode(p.title));
        if (p.original) title.appendChild(el("em", null, p.original));
        main.appendChild(title);

        const sub = [p.composer, p.org, p.director ? "연출 " + p.director : ""].filter(Boolean).join(" · ");
        main.appendChild(el("p", "work-row-sub", sub));

        const extra = [p.dates, p.venue, p.note].filter(Boolean).join(" · ");
        if (extra) main.appendChild(el("p", "work-row-note", extra));
        if (hasProgramBook(p)) main.appendChild(programBookButton(p));
        row.appendChild(main);

        row.appendChild(roleBadge(p.role));
        rows.appendChild(row);
      });
      group.appendChild(rows);
      list.appendChild(group);
    });
  }

  function renderFilters() {
    const box = byId("filters");
    const roles = ["전체"].concat(ROLE_ORDER.filter(function (role) {
      return productions.some(function (p) { return p.role === role; });
    }));
    // ROLE_ORDER에 없는 역할도 필터에 추가
    productions.forEach(function (p) {
      if (p.role && roles.indexOf(p.role) === -1) roles.push(p.role);
    });

    roles.forEach(function (role) {
      const count = role === "전체"
        ? productions.length
        : productions.filter(function (p) { return p.role === role; }).length;
      const button = el("button", "filter" + (role === currentRole ? " active" : ""), role);
      button.type = "button";
      button.setAttribute("aria-pressed", role === currentRole);
      button.appendChild(el("span", null, count));
      button.addEventListener("click", function () {
        currentRole = role;
        box.querySelectorAll(".filter").forEach(function (b) {
          b.classList.toggle("active", b === button);
          b.setAttribute("aria-pressed", b === button);
        });
        renderWorks();
      });
      box.appendChild(button);
    });
  }

  if (productions.length) {
    renderFilters();
    renderWorks();
  } else {
    hideSection("works");
  }

  // ---------- 04 경력 · 활동 ----------
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  function careerStatus(item) {
    if (item.current) return "재직 중";
    if (item.date && new Date(item.date + "T00:00:00") > today) return "예정";
    return "";
  }

  if (hasItems(C.career)) {
    C.career.forEach(function (item) {
      const box = el("article", "career-item");

      if (item.image) {
        const figure = el("div", "career-image");
        const img = el("img");
        img.src = item.image;
        img.alt = item.title + " 포스터";
        img.loading = "lazy";
        img.onerror = function () { figure.remove(); };
        figure.appendChild(img);
        box.appendChild(figure);
      }

      const body = el("div", "career-body");
      const top = el("div", "career-top");
      top.appendChild(el("span", "career-period", item.period));
      const status = careerStatus(item);
      if (status) top.appendChild(el("span", "status-badge", status));
      if (item.role) top.appendChild(el("span", "role-badge", item.role));
      body.appendChild(top);

      body.appendChild(el("h3", null, item.title));
      if (item.org) body.appendChild(el("p", "career-org", item.org));
      if (item.detail) body.appendChild(el("p", "career-detail", item.detail));
      if (hasItems(item.points)) {
        const list = el("ul", "career-points");
        item.points.forEach(function (point) { list.appendChild(el("li", null, point)); });
        body.appendChild(list);
      }
      if (item.link) body.appendChild(externalLink(item.linkLabel || "자세히 보기 →", item.link, "career-link"));

      box.appendChild(body);
      byId("career-list").appendChild(box);
    });
  } else {
    hideSection("career");
  }

  // ---------- 05 학력 · 자격 ----------
  (C.education || []).forEach(function (item) {
    const li = el("li");
    li.appendChild(el("p", "timeline-period", item.period));
    li.appendChild(el("h4", "timeline-title", item.title));
    if (item.detail) li.appendChild(el("p", "timeline-detail", item.detail));
    byId("education-list").appendChild(li);
  });

  (C.certificates || []).forEach(function (cert) {
    const li = el("li");
    const name = el("div");
    name.appendChild(el("strong", null, cert.title));
    name.appendChild(el("small", null, cert.issuer));
    li.appendChild(name);
    li.appendChild(el("time", null, cert.date));
    byId("cert-list").appendChild(li);
  });

  if (!hasItems(C.education) && !hasItems(C.certificates)) hideSection("education");

  // ---------- 05 연락 ----------
  const contact = C.contact || {};
  byId("contact-message").textContent = contact.message || "";
  if (contact.email) {
    byId("contact-email").textContent = "✉ " + contact.email;
    byId("contact-email").href = "mailto:" + contact.email +
      (contact.subject ? "?subject=" + encodeURIComponent(contact.subject) : "");

    // 메일 앱이 없는 컴퓨터를 위해 주소 복사 버튼
    const hint = byId("contact-hint");
    byId("contact-copy").addEventListener("click", function () {
      function done() { hint.textContent = "메일 주소를 복사했어요: " + contact.email; }
      function fail() { hint.textContent = "복사가 안 되면 직접 적어주세요: " + contact.email; }
      // 예전 방식 복사 (새 방식이 막힌 브라우저용)
      function legacyCopy() {
        let ok = false;
        try {
          const area = el("textarea");
          area.value = contact.email;
          area.setAttribute("readonly", "");
          area.style.position = "fixed";
          area.style.opacity = "0";
          document.body.appendChild(area);
          area.select();
          ok = document.execCommand("copy");
          area.remove();
        } catch (e) {}
        ok ? done() : fail();
      }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(contact.email).then(done, legacyCopy);
      } else {
        legacyCopy();
      }
    });
  } else {
    byId("contact-email").hidden = true;
    byId("contact-copy").hidden = true;
    byId("contact-hint").hidden = true;
  }
  (contact.links || []).forEach(function (link) {
    if (link.url) byId("contact-links").appendChild(externalLink(link.label, link.url));
  });

  // ---------- 하단 ----------
  byId("footer-text").textContent = "© " + new Date().getFullYear() + " " + C.name;

  // ---------- 다크 모드 버튼 ----------
  byId("theme-toggle").addEventListener("click", function () {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // ---------- 메뉴 클릭: 부드럽게 미끄러지는 스크롤 ----------
  const NAV_OFFSET = 72; // 상단 메뉴 높이만큼 띄워서 멈춤
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  let scrollAnimation = null;
  let lockedLink = null; // 미끄러지는 동안에는 밑줄을 목적지에 고정

  // 천천히 출발해서 빨라졌다가 천천히 멈추는 움직임
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function stopSliding() {
    if (scrollAnimation) cancelAnimationFrame(scrollAnimation);
    scrollAnimation = null;
    lockedLink = null;
  }

  function slideTo(target, link) {
    const start = window.scrollY;
    // offsetTop은 등장 효과(transform)의 영향을 받지 않아서 정확한 위치를 줌
    const end = target.id === "top" ? 0 : Math.max(0, target.offsetTop - NAV_OFFSET);
    const distance = end - start;

    stopSliding();
    lockedLink = link || null;
    moveIndicator(lockedLink || currentSectionLink());

    if (reduceMotion || Math.abs(distance) < 2) {
      window.scrollTo(0, end);
      lockedLink = null;
      return;
    }

    // 멀리 갈수록 조금 더 오래 (0.6초 ~ 1.2초)
    const duration = Math.min(1200, Math.max(600, Math.abs(distance) * 0.4));
    const startTime = performance.now();

    function step(now) {
      const t = Math.min(1, (now - startTime) / duration);
      window.scrollTo(0, start + distance * easeInOutCubic(t));
      if (t < 1) {
        scrollAnimation = requestAnimationFrame(step);
      } else {
        scrollAnimation = null;
        lockedLink = null;
        // 도착한 섹션의 번호가 살짝 미끄러져 들어오게
        target.classList.remove("arrived");
        void target.offsetWidth;
        target.classList.add("arrived");
      }
    }
    scrollAnimation = requestAnimationFrame(step);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (event) {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.classList.add("visible"); // 등장 효과가 남아 있으면 바로 보이게
      slideTo(target, navLinks.indexOf(a) !== -1 ? a : null);
      history.replaceState(null, "", a.getAttribute("href"));
    });
  });

  // 직접 스크롤하면 자동 이동을 멈춤
  ["wheel", "touchstart", "keydown"].forEach(function (type) {
    window.addEventListener(type, function () { if (scrollAnimation) stopSliding(); }, { passive: true });
  });

  // ---------- 지금 보고 있는 섹션을 따라가는 메뉴 밑줄 ----------
  const indicator = el("span", "nav-indicator");
  indicator.setAttribute("aria-hidden", "true");
  document.querySelector(".nav-links").appendChild(indicator);

  function currentSectionLink() {
    const visibleLinks = navLinks.filter(function (a) { return !a.hidden; });
    // 페이지 맨 아래에 닿으면 마지막 메뉴
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      return visibleLinks[visibleLinks.length - 1] || null;
    }
    const line = window.scrollY + NAV_OFFSET + window.innerHeight * 0.3;
    let current = null;
    visibleLinks.forEach(function (a) {
      const section = document.querySelector(a.getAttribute("href"));
      if (section && section.offsetTop <= line) current = a;
    });
    return current;
  }

  function moveIndicator(link) {
    navLinks.forEach(function (a) { a.classList.toggle("active", a === link); });
    if (!link) {
      indicator.style.opacity = 0;
      return;
    }
    indicator.style.opacity = 1;
    indicator.style.width = link.offsetWidth + "px";
    indicator.style.transform = "translateX(" + link.offsetLeft + "px)";
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      moveIndicator(lockedLink || currentSectionLink());
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  if (document.fonts) document.fonts.ready.then(onScroll); // 글꼴이 바뀌면 메뉴 폭이 달라짐
  onScroll();

  // ---------- 스크롤하면 섹션이 나타나는 효과 ----------
  const sections = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    sections.forEach(function (s) { observer.observe(s); });
  } else {
    sections.forEach(function (s) { s.classList.add("visible"); });
  }
})();
