/**
 * ============================================================================
 * [통합 데이터 설정 파일 — SITE_DATA]
 * - 작가소개 글, 연력(학력/주요 전시 및 프로젝트), 현재·예정 전시,
 *   그리고 작업 목록(SITE_DATA.works)을 모두 이 상단 객체에서 관리합니다.
 * - 새로운 작업을 추가할 때는 SITE_DATA.works 배열에 객체를 하나 더 추가하면
 *   '작업' 목차의 타일 그리드와 상세 화면에 자동으로 반영됩니다.
 * ============================================================================
 */

const SITE_DATA = {
  // 1. 메인 화면 — 현재 전시 / 예정 전시 목록
  currentExhibitions: [
    {
      title: "없음",
      meta: "None"
    }
  ],
  upcomingExhibitions: [
    {
      title: "미정",
      meta: "TBA"
    }
  ],

  // 2. 세부화면 1: 작가소개 (ABOUT) — 작가 소개글 및 연력(CV)
  about: {
    profileImage: "./images/profile.jpg",
    // 작가소개 글(국문)
    statementsKo: [
      "작가 류호범은 순수한 육체노동에서 발현되는 '기묘한 감각'에 주목하고, 이를 기계와 시스템의 언어로 치환하여 새로운 차원의 장을 창조합니다.",
      "작가가 인간의 육체노동에 기반한 실체와 디지털, 혹은 기계 언어를 교차시키는 것은 단순한 매체적 실험이 아닙니다. 자연 속에서 몸을 쓰며 물리적 감각을 맹신하게 된 유년기의 경험과, 그로 인해 역설적으로 커져버린 기계 언어에 대한 결핍. 이 두 가지 개인적이고 필연적인 생애 감각이 융합되어 작가만의 고유한 매체 선택과 태도를 완성합니다.",
      "이러한 태도는 나아가 인간과 기계 사이, 혹은 인간 스스로도 온전히 이해하지 못하는 불완전한 '미지의 틈'을 발견하는 출발점이 됩니다. 작가는 이 틈을 '4차원의 세계'로 바라보며, 그 안에서 잉태되는 새로운 인식의 주체를 '제3의 주체'라 명명합니다.",
      "작가는 육체노동에서 비롯된 감각을 기계어와 시스템의 언어로 번역하고 모의실험하며, 그 결과로 ‘4차원을 구현한 시뮬레이션 장(場)’을 구축합니다. 이 장은 경험해 본 적 없는 낯선 차원의 감각을 현실로 끌어오는 가장 직관적인 매개체입니다. 관객은 이곳에서 새로운 차원에 접속하고, 현재와 미래에 필연적으로 마주하게 될 낯선 감각을 이해하는 '제3의 주체'로 거듭납니다."
    ],
    // 작가소개 글(영문 번역본)
    statementsEn: [
      "Artist Ryu HoBeom focuses on the 'uncanny sensations' that emerge from pure physical labor, translating them into the language of machines and systems to construct a field of a new dimension.",
      "Intersecting physical reality grounded in human bodily labor with digital or machine language is not a mere media experiment for the artist. Childhood experiences of working with the body in nature—which led to an absolute faith in physical sensation—paradoxically deepened a sense of lack toward machine language. The fusion of these two deeply personal and inevitable life sensations shapes the artist's distinct choice of media and artistic attitude.",
      "Furthermore, this attitude serves as a point of departure for discovering the imperfect 'unknown fissure' between humans and machines—or within territories that humans themselves cannot fully comprehend. Viewing this fissure as a 'fourth-dimensional world,' the artist names the new subject of perception conceived within it the 'Third Subject.'",
      "By translating and simulating sensations born of physical labor into machine code and systemic language, the artist constructs a 'simulation field embodying the fourth dimension.' This field acts as the most intuitive medium for drawing unfamiliar dimensional sensations into reality. Here, viewers connect to a new dimension and are reborn as the 'Third Subject,' capable of grasping the unfamiliar sensations we will inevitably confront in the present and future."
    ],
    // 학력 및 주요 전시 및 프로젝트 (시간순 정렬, (개인전)/(단체전) 표기)
    cvSections: [
      {
        heading: "학력 (Education)",
        items: [
          {
            year: "2020 - 2027",
            text: "계원예술대학교 융합예술과 졸업 예정"
          }
        ]
      },
      {
        heading: "주요 전시 및 프로젝트 (Selected Exhibitions & Projects)",
        items: [
          {
            year: "2025. 11. 21 - 11. 24",
            text: "졸업전시 《모든 장면은 농담과 함께 도착한다》 (출품작: 지각 레시피 kaywon), 계원예술대학교 창조관, 경기 (단체전)"
          },
          {
            year: "2025. 12. 26 ~ 1. 12",
            text: "《지각 레시피 jongno - gu》, 코트(KOTE), 서울 (개인전)"
          },
          {
            year: "2026. 6. 10 - 6. 18",
            text: "《남겨진 감각들》 (출품작: 마모되는 윤곽선), 아트코리아랩, 서울 (단체전)"
          }
        ]
      }
    ]
  },

  // 3. 세부화면 2: 작업 (WORKS)
  // - 각 객체가 하나의 작업(타일 1개)이 되며, 클릭 시 해당 작업의 images 배열 사진들을 상세 화면에서 볼 수 있습니다.
  works: [
    {
      id: 1,
      artist: "류호범",
      title: "마모되는 윤곽선",
      year: "2026. 6",
      medium: "혼합매체 (사운드, 영상, 설치)",
      dimensions: "가변크기 (Dimensions variable)",
      metaLine1: "류호범 《마모되는 윤곽선》, 2026. 6",
      metaLine2: "2026, 가변크기, 혼합매체 | 사운드, 영상, 설치",
      // 작업 목차 타일에 표시될 대표 썸네일 이미지
      thumbnail: "./images/work01.jpg",
      // 타일 클릭 후 상세 화면에서 볼 수 있는 작업 이미지 목록 (순서대로 연결)
      images: [
        "./images/work01.jpg",
        "./images/work02.jpg",
        "./images/work03.jpg",
        "./images/work04.jpg",
        "./images/work05.jpg"
      ],
      videoUrl: "",
      noteKo:
        "이 작업은 기계와 인간의 관계에서 ‘노동의 목적성’을 해체하는 것에서 출발한다. 순수한 신체 감각을 동원하는 피지컬적 행위를 ‘인간의 1차 노동’이라 한다면, 기계가 인간을 위해 동력을 생성하는 상태는 상호작용에 기반한 ‘2차 노동’이다. 그러나 선풍기에서 날개를 제거하는 순간, 기계는 인간을 향한 목적성을 상실하고 오직 모터의 회전이라는 맹목적이고 명상적인 ‘기계의 1차 노동(순수 동력)’ 상태에 진입한다. 본 작업은 인간의 1차 노동(피지컬)으로만 작동하던 전통 악기 장구의 가죽을 벗겨내고, 그 통제권을 기계의 1차 노동(순수 회전과 소음)에 넘겨줌으로써 인간의 개입이 소거된 새로운 작동 환경을 구축한다.\n\n인간의 물리적 노동으로 만들어진 공산품(선풍기)과 인간의 신체적 타격으로만 연주되던 전통 악기(장구)를 해체하고 결합했다. 날개를 잃은 모터의 헛도는 소음은 마이크와 진동기를 거쳐 장구의 가죽을 타격한다. 인간의 개입이 완전히 소거된 판 위에서, 목적을 잃은 기계의 순수한 노동이 인간의 악기를 연주하는 사태 및 상황이 벌어지는 것이다.",
      noteEn:
        "This work begins by deconstructing the 'teleology of labor' within the relationship between human and machine. If physical action mobilizing pure bodily sensation is defined as 'human primary labor,' the state in which a machine generates power for human utility is 'secondary labor' based on interaction. However, the moment the blades are removed from an electric fan, the machine loses its purpose toward humans and enters a blind, meditative state of 'machine primary labor (pure motive power)'—the sheer rotation of its motor. By stripping the hide from the Janggu, a traditional percussion instrument operated solely through human primary labor (physicality), and handing control over to the machine's primary labor (pure rotation and noise), this work establishes a new operating environment from which human intervention is erased.\n\nAn industrial product manufactured through human physical labor (the electric fan) and a traditional instrument played exclusively through bodily strikes (the Janggu) are disassembled and conjoined. The idling noise of the bladeless motor passes through a microphone and transducer to strike the drumhead of the Janggu. Upon a stage completely devoid of human intervention, a situation unfolds in which the pure, purposeless labor of a machine plays a human instrument."
    },
    {
      id: 2,
      artist: "류호범",
      title: "지각 레시피 kaywoon",
      year: "2025. 11",
      medium: "혼합매체 (사운드, 영상, 설치)",
      dimensions: "가변크기 (Dimensions variable)",
      metaLine1: "류호범 《지각 레시피 kaywoon》, 2025. 11",
      metaLine2: "2025, 가변크기, 혼합매체 | 사운드, 영상, 설치",
      thumbnail: "./images/kaywoon01.png",
      images: [
        "./images/kaywoon01.png",
        "./images/kaywoon02.jpg",
        "./images/kaywoon03.jpg"
      ],
      videoUrl: "",
      noteKo:
        "[스테이트먼트]\n〈지각 레시피〉는 현대 감각 구조의 전환, ‘감각의 주권이 인간에서 기계로 이동한 시대’를 신체적 수행과 장소 기반 매체 설치로 분석한다.\n작가는 남한산 로타리를 감각의 최초 발원지, 즉 모선의 대표적인 예로 설정한다. 그리고 ALMA 전파망원경과 Tierra Amarilla 싱크홀을 연결해 기계, 지구, 인간이 공유하는 원형적 감각 회로를 구축한다.\n작가는 고철로 남은 기계의 뼈대를 불(용접)로 연결해 작동하지 않는 새로운 기계적 신체를 만든다. 이 신체는 기계 감각을 모방하려는 인간의 수행적 흔적이며 감각의 실패·시도·측정이 축적된 물질적 기록이다.\n각각의 설치는 기계 감각의 반사, 확산, 소멸 구조를 시각화하며, 관객은 모선 구조 속에서 기계 → 인간 → 기계로 이어지는 감각의 순환을 시연하며 인간 감각이 어떻게 비중심화되는지 또는 현재 인간의 감각의 위치에 대하여 기록한다.\n\n[브로슈어]\n기계가 먼저 감각하는 시대.\n인간은 이전에 기계가 그러했듯 기계의 감각을 신체로 다시 배운다.\n〈지각 레시피〉는 이 한 문장에서 출발한다.\n기계는 오랫동안 인간의 신체, 지각, 행동을 모방하며 성장해왔지만, 오늘의 세계는 성장이 끝난 기계로서 구동된다.\n이제 기계가 먼저 감각하고, 인간은 그 감각의 뒤편을 따라가는 존재가 되었다.\n작가는 이 시대적 전환을 자신의 신체와 유년기의 장소기억인 남한산과 그 중심에 위치한 로타리를 통해 다시 탐험한다.\n남한산에서 디지털 없이 자라온 그는 도시에서 경험한 ‘디지털 이방인’의 감각을 기계 감각을 학습하는 인간의 새로운 상태로 전환한다.\n그에게 로타리는 단순한 지형이 아니라, 감각이 원형으로 회전하며 생성·확장·소멸하는 모선(母線)의 사건 장소이다.",
      noteEn:
        "[Statement]\n<Perceptual Recipe> analyzes the contemporary shift in sensory structure—'an era in which the sovereignty of sensation has migrated from human to machine'—through bodily performance and site-based media installation.\nThe artist establishes the Namhansan Rotary as the primal origin of sensation, a representative model of the 'generatrix (mother-ship).' By linking the ALMA radio telescope with the Tierra Amarilla sinkhole, the artist constructs a circular sensory circuit shared by machine, Earth, and human.\nWelding together skeletal scrap-metal machine parts with fire, the artist fabricates a new, non-functioning mechanical body. This body stands as a performative trace of the human attempt to imitate machine perception, a material archive where sensory failures, trials, and measurements accumulate.\nEach installation visualizes the reflection, diffusion, and extinction of machine sensation. Within this generatrix structure, viewers enact the circulation of sensation from machine → human → machine, recording how human perception becomes decentered and where human sensation currently resides.\n\n[Brochure]\nAn era in which machines sense first.\nHumans now re-learn the sensations of machines through their own bodies, just as machines once learned from humans.\n<Perceptual Recipe> departs from this single sentence.\nFor a long time, machines grew by imitating the human body, perception, and behavior; yet today's world is driven by machines whose growth has reached completion.\nNow, machines sense first, and humans have become beings following in the wake of that perception.\nThe artist re-explores this epochal shift through his own body and his childhood site-memory of Namhansan and the rotary at its center.\nHaving grown up in Namhansan without digital technology, he transforms the sensation of being a 'digital stranger' experienced in the city into a new human condition of learning machine perception.\nTo him, the rotary is not a mere topography, but an event-site of the generatrix (母線) where sensation rotates in a circle—generating, expanding, and vanishing."
    },
    {
      id: 3,
      artist: "류호범",
      title: "지각 레시피 Jongno-gu",
      year: "2026. 1",
      medium: "혼합매체 (사운드, 영상, 설치)",
      dimensions: "가변크기 (Dimensions variable)",
      metaLine1: "류호범 《지각 레시피 Jongno-gu》, 2026. 1",
      metaLine2: "2025, 가변크기, 혼합매체 | 사운드, 영상, 설치",
      thumbnail: "./images/jongno01.jpg",
      images: [
        "./images/jongno01.jpg",
        "./images/jongno02.jpg",
        "./images/jongno03.jpg",
        "./images/jongno04.jpg"
      ],
      videoUrl: "",
      noteKo:
        "[스테이트먼트]\n〈지각 레시피〉는 현대 감각 구조의 전환, ‘감각의 주권이 인간에서 기계로 이동한 시대’를 신체적 수행과 장소 기반 매체 설치로 분석한다.\n작가는 남한산 로타리를 감각의 최초 발원지, 즉 모선의 대표적인 예로 설정한다. 그리고 ALMA 전파망원경과 Tierra Amarilla 싱크홀을 연결해 기계, 지구, 인간이 공유하는 원형적 감각 회로를 구축한다.\n작가는 고철로 남은 기계의 뼈대를 불(용접)로 연결해 작동하지 않는 새로운 기계적 신체를 만든다. 이 신체는 기계 감각을 모방하려는 인간의 수행적 흔적이며 감각의 실패·시도·측정이 축적된 물질적 기록이다.\n각각의 설치는 기계 감각의 반사, 확산, 소멸 구조를 시각화하며, 관객은 모선 구조 속에서 기계 → 인간 → 기계로 이어지는 감각의 순환을 시연하며 인간 감각이 어떻게 비중심화되는지 또는 현재 인간의 감각의 위치에 대하여 기록한다.\n\n[브로슈어]\n기계가 먼저 감각하는 시대.\n인간은 이전에 기계가 그러했듯 기계의 감각을 신체로 다시 배운다.\n〈지각 레시피〉는 이 한 문장에서 출발한다.\n기계는 오랫동안 인간의 신체, 지각, 행동을 모방하며 성장해왔지만, 오늘의 세계는 성장이 끝난 기계로서 구동된다.\n이제 기계가 먼저 감각하고, 인간은 그 감각의 뒤편을 따라가는 존재가 되었다.\n작가는 이 시대적 전환을 자신의 신체와 유년기의 장소기억인 남한산과 그 중심에 위치한 로타리를 통해 다시 탐험한다.\n남한산에서 디지털 없이 자라온 그는 도시에서 경험한 ‘디지털 이방인’의 감각을 기계 감각을 학습하는 인간의 새로운 상태로 전환한다.\n그에게 로타리는 단순한 지형이 아니라, 감각이 원형으로 회전하며 생성·확장·소멸하는 모선(母線)의 사건 장소이다.",
      noteEn:
        "[Statement]\n<Perceptual Recipe> analyzes the contemporary shift in sensory structure—'an era in which the sovereignty of sensation has migrated from human to machine'—through bodily performance and site-based media installation.\nThe artist establishes the Namhansan Rotary as the primal origin of sensation, a representative model of the 'generatrix (mother-ship).' By linking the ALMA radio telescope with the Tierra Amarilla sinkhole, the artist constructs a circular sensory circuit shared by machine, Earth, and human.\nWelding together skeletal scrap-metal machine parts with fire, the artist fabricates a new, non-functioning mechanical body. This body stands as a performative trace of the human attempt to imitate machine perception, a material archive where sensory failures, trials, and measurements accumulate.\nEach installation visualizes the reflection, diffusion, and extinction of machine sensation. Within this generatrix structure, viewers enact the circulation of sensation from machine → human → machine, recording how human perception becomes decentered and where human sensation currently resides.\n\n[Brochure]\nAn era in which machines sense first.\nHumans now re-learn the sensations of machines through their own bodies, just as machines once learned from humans.\n<Perceptual Recipe> departs from this single sentence.\nFor a long time, machines grew by imitating the human body, perception, and behavior; yet today's world is driven by machines whose growth has reached completion.\nNow, machines sense first, and humans have become beings following in the wake of that perception.\nThe artist re-explores this epochal shift through his own body and his childhood site-memory of Namhansan and the rotary at its center.\nHaving grown up in Namhansan without digital technology, he transforms the sensation of being a 'digital stranger' experienced in the city into a new human condition of learning machine perception.\nTo him, the rotary is not a mere topography, but an event-site of the generatrix (母線) where sensation rotates in a circle—generating, expanding, and vanishing."
    }
  ],

  // 4. 세부화면 3: 연락 (CONTACT)
  contact: {
    email: "hogu38295@gmail.com",
    phone: "010-6444-3142",
    instagramHandle: "@hoguwart_",
    instagramUrl: "https://instagram.com/hoguwart_"
  }
};

/* ============================================================================
   화면 렌더링 및 인터랙션 스크립트
   ============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const navTargets = document.querySelectorAll("[data-target]");
  const topNavButtons = document.querySelectorAll(".nav-item[data-target]");
  const heroBannerCard = document.getElementById("heroBannerCard");
  const heroGoWorksBtn = document.getElementById("heroGoWorksBtn");

  const views = {
    home: document.getElementById("view-home"),
    about: document.getElementById("view-about"),
    works: document.getElementById("view-works"),
    contact: document.getElementById("view-contact")
  };

  // 메인 화면 전시 리스트 요소
  const currentExhibitionsList = document.getElementById("currentExhibitionsList");
  const upcomingExhibitionsList = document.getElementById("upcomingExhibitionsList");

  // 작가소개(About) 화면 요소
  const aboutProfileImg = document.getElementById("aboutProfileImg");
  const aboutStatementBox = document.getElementById("aboutStatementBox");
  const aboutCvBox = document.getElementById("aboutCvBox");

  // 작업(Works) 화면: 타일 그리드 서브뷰 & 상세 서브뷰
  const worksGridSubView = document.getElementById("worksGridSubView");
  const worksTilesGrid = document.getElementById("worksTilesGrid");
  const worksDetailSubView = document.getElementById("worksDetailSubView");
  const backToTilesBtn = document.getElementById("backToTilesBtn");

  // 작업 상세 화면 내부 요소
  const workMainStage = document.getElementById("workMainStage");
  const stageCounter = document.getElementById("stageCounter");
  const workPrimaryMeta = document.getElementById("workPrimaryMeta");
  const workSecondaryMeta = document.getElementById("workSecondaryMeta");
  const specTitle = document.getElementById("specTitle");
  const specYear = document.getElementById("specYear");
  const specMedium = document.getElementById("specMedium");
  const specDimensions = document.getElementById("specDimensions");
  const workThumbsRow = document.getElementById("workThumbsRow");
  const workNoteKo = document.getElementById("workNoteKo");
  const workNoteEn = document.getElementById("workNoteEn");
  const openLightboxBtn = document.getElementById("openLightboxBtn");
  const toggleVideoBtn = document.getElementById("toggleVideoBtn");
  const prevImgBtn = document.getElementById("prevImgBtn");
  const nextImgBtn = document.getElementById("nextImgBtn");

  // 고화질 원본 확대 모달(Lightbox) 요소
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");

  let currentWorkIdx = 0; // 선택된 작업(Project) 인덱스
  let currentImgIdx = 0;  // 선택된 작업 내부의 이미지 인덱스
  let isPlayingVideo = false;

  /**
   * 1. 상단 메뉴 클릭 시 화면 전환 함수 ('home' | 'about' | 'works' | 'contact')
   */
  function switchView(targetKey, openDetailDirectly = false) {
    if (!views[targetKey]) targetKey = "home";

    Object.entries(views).forEach(([key, sectionEl]) => {
      if (!sectionEl) return;
      sectionEl.classList.toggle("is-active", key === targetKey);
    });

    topNavButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.target === targetKey);
    });

    // '작업(works)' 탭으로 들어갈 때 기본적으로 타일 그리드 목록을 보여줌
    if (targetKey === "works" && !openDetailDirectly) {
      showWorksTilesGrid();
    }

    if (history.replaceState) {
      history.replaceState(null, "", `#${targetKey}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /**
   * 2. 메인 화면 전시 목록 & 작가소개(About) 데이터 렌더링
   */
  function renderHomeAndAbout() {
    if (currentExhibitionsList) {
      currentExhibitionsList.innerHTML = SITE_DATA.currentExhibitions
        .map(
          (item) => `
          <li>
            <span class="exh-title">${item.title}</span>
            <span class="exh-meta">${item.meta}</span>
          </li>
        `
        )
        .join("");
    }

    if (upcomingExhibitionsList) {
      upcomingExhibitionsList.innerHTML = SITE_DATA.upcomingExhibitions
        .map(
          (item) => `
          <li>
            <span class="exh-title">${item.title}</span>
            <span class="exh-meta">${item.meta}</span>
          </li>
        `
        )
        .join("");
    }

    if (aboutProfileImg && SITE_DATA.about.profileImage) {
      aboutProfileImg.src = SITE_DATA.about.profileImage;
    }

    if (aboutStatementBox) {
      const koParagraphs = (SITE_DATA.about.statementsKo || [])
        .map((p) => `<p>${p}</p>`)
        .join("");
      const enParagraphs = (SITE_DATA.about.statementsEn || [])
        .map((p) => `<p class="statement-en">${p}</p>`)
        .join("");
      aboutStatementBox.innerHTML = koParagraphs + enParagraphs;
    }

    if (aboutCvBox) {
      aboutCvBox.innerHTML = (SITE_DATA.about.cvSections || [])
        .map(
          (section) => `
          <div class="cv-section-block">
            <h2 class="cv-section-title">${section.heading}</h2>
            <table class="cv-archive-table">
              <tbody>
                ${section.items
                  .map(
                    (row) => `
                  <tr>
                    <th>${row.year}</th>
                    <td>${row.text}</td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        `
        )
        .join("");
    }
  }

  /**
   * 3. 유튜브 / 비메오 링크를 임베드 URL로 자동 변환
   */
  function getEmbedUrl(url) {
    if (!url || typeof url !== "string") return null;
    const trimmed = url.trim();
    if (!trimmed) return null;

    if (trimmed.includes("youtube.com/embed/") || trimmed.includes("player.vimeo.com/video/")) {
      return trimmed;
    }

    const ytMatch = trimmed.match(
      /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?rel=0&modestbranding=1`;
    }

    const vimeoMatch = trimmed.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|)(\d+)/);
    if (vimeoMatch && vimeoMatch[1]) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0`;
    }

    return trimmed;
  }

  /**
   * 4-A. 작업 목차 진입 시: 작업 대표 이미지 타일 그리드 렌더링 및 표시
   */
  function renderWorksTilesGrid() {
    if (!worksTilesGrid) return;
    worksTilesGrid.innerHTML = "";

    SITE_DATA.works.forEach((work, workIndex) => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "work-tile-card";
      tile.setAttribute("aria-label", `《${work.title}》 (${work.year}) 상세 보기`);

      const repThumb =
        work.thumbnail || (Array.isArray(work.images) && work.images[0]) || "";

      tile.innerHTML = `
        <div class="work-tile-thumb-wrap">
          <img src="${repThumb}" alt="${work.title}" class="work-tile-thumb" loading="lazy" />
        </div>
        <div class="work-tile-info">
          <p class="work-tile-title">《${work.title}》</p>
          <p class="work-tile-meta">${work.year} · ${work.medium}</p>
        </div>
      `;

      tile.addEventListener("click", () => {
        openWorkDetail(workIndex);
      });

      worksTilesGrid.appendChild(tile);
    });
  }

  function showWorksTilesGrid() {
    if (worksGridSubView) worksGridSubView.hidden = false;
    if (worksDetailSubView) worksDetailSubView.hidden = true;
  }

  /**
   * 4-B. 타일 클릭 시: 해당 작업의 상세 화면 열기 및 내부 이미지 전환
   */
  function openWorkDetail(workIndex) {
    const works = SITE_DATA.works;
    if (!works.length) return;
    currentWorkIdx = (workIndex + works.length) % works.length;
    currentImgIdx = 0;
    isPlayingVideo = false;

    if (worksGridSubView) worksGridSubView.hidden = true;
    if (worksDetailSubView) worksDetailSubView.hidden = false;

    const work = works[currentWorkIdx];

    // 메타데이터 업데이트
    workPrimaryMeta.textContent =
      work.metaLine1 || `${work.artist} 《${work.title}》, ${work.year}`;
    workSecondaryMeta.textContent =
      work.metaLine2 || `${work.medium}${work.dimensions ? ` | ${work.dimensions}` : ""}`;

    // 스펙 테이블 업데이트
    specTitle.textContent = `《${work.title}》`;
    specYear.textContent = work.year || "-";
    specMedium.textContent = work.medium || "-";
    specDimensions.textContent = work.dimensions || "-";

    // 하단 2단 작업 설명 (한글 / 영어) 업데이트
    workNoteKo.textContent = work.noteKo || "";
    workNoteEn.textContent = work.noteEn || "";

    // 영상 링크 유무에 따른 영상 토글 버튼 제어
    const embedUrl = getEmbedUrl(work.videoUrl);
    if (embedUrl) {
      toggleVideoBtn.hidden = false;
      toggleVideoBtn.textContent = "▶ Video";
    } else {
      toggleVideoBtn.hidden = true;
    }

    renderDetailThumbnails();
    selectDetailImage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getWorkImages(work) {
    if (Array.isArray(work.images) && work.images.length > 0) {
      return work.images;
    }
    return work.thumbnail ? [work.thumbnail] : [];
  }

  function renderDetailThumbnails() {
    const work = SITE_DATA.works[currentWorkIdx];
    const images = getWorkImages(work);
    workThumbsRow.innerHTML = "";

    images.forEach((imgSrc, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `work-thumb-item ${idx === currentImgIdx ? "is-selected" : ""}`;
      btn.setAttribute("aria-label", `${work.title} 사진 ${idx + 1}`);

      btn.innerHTML = `<img src="${imgSrc}" alt="${work.title} ${idx + 1}" loading="lazy" />`;

      btn.addEventListener("click", () => {
        selectDetailImage(idx);
      });

      workThumbsRow.appendChild(btn);
    });
  }

  function selectDetailImage(imgIndex) {
    const work = SITE_DATA.works[currentWorkIdx];
    const images = getWorkImages(work);
    if (!images.length) return;

    currentImgIdx = (imgIndex + images.length) % images.length;
    isPlayingVideo = false;

    const currentNum = String(currentImgIdx + 1).padStart(2, "0");
    const totalNum = String(images.length).padStart(2, "0");
    stageCounter.textContent = `${currentNum} / ${totalNum}`;

    const thumbButtons = workThumbsRow.querySelectorAll(".work-thumb-item");
    thumbButtons.forEach((btn, idx) => {
      btn.classList.toggle("is-selected", idx === currentImgIdx);
    });

    if (!toggleVideoBtn.hidden) {
      toggleVideoBtn.textContent = "▶ Video";
    }

    renderMainStage();
  }

  function renderMainStage() {
    const work = SITE_DATA.works[currentWorkIdx];
    const images = getWorkImages(work);
    const activeImgSrc = images[currentImgIdx] || "";
    const embedUrl = getEmbedUrl(work.videoUrl);

    if (isPlayingVideo && embedUrl) {
      workMainStage.innerHTML = `
        <iframe
          src="${embedUrl}"
          title="${work.title} 영상"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen
        ></iframe>
      `;
    } else {
      workMainStage.innerHTML = `
        <img
          src="${activeImgSrc}"
          alt="${work.artist} 《${work.title}》, ${work.year}"
          id="stagePreviewImg"
        />
      `;
      const stageImg = document.getElementById("stagePreviewImg");
      if (stageImg) {
        stageImg.addEventListener("click", openLightbox);
      }
    }
  }

  /**
   * 5. 고화질 원본 확대 모달(Lightbox) 제어
   */
  function openLightbox() {
    const work = SITE_DATA.works[currentWorkIdx];
    const images = getWorkImages(work);
    const activeImgSrc = images[currentImgIdx] || "";
    lightboxImg.src = activeImgSrc;
    lightboxImg.alt = work.title;
    lightboxCaption.textContent = `${work.artist} 《${work.title}》, ${work.year} — ${work.medium}`;
    lightboxModal.classList.add("is-open");
    lightboxModal.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    lightboxModal.classList.remove("is-open");
    lightboxModal.setAttribute("aria-hidden", "true");
  }

  // 이벤트 리스너 등록
  navTargets.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      switchView(el.dataset.target);
    });
  });

  if (heroBannerCard) {
    heroBannerCard.addEventListener("click", () => {
      switchView("works", true);
      openWorkDetail(0);
    });
    heroBannerCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        switchView("works", true);
        openWorkDetail(0);
      }
    });
  }

  if (heroGoWorksBtn) {
    heroGoWorksBtn.addEventListener("click", () => switchView("works"));
  }

  if (backToTilesBtn) {
    backToTilesBtn.addEventListener("click", showWorksTilesGrid);
  }

  if (prevImgBtn) {
    prevImgBtn.addEventListener("click", () => selectDetailImage(currentImgIdx - 1));
  }

  if (nextImgBtn) {
    nextImgBtn.addEventListener("click", () => selectDetailImage(currentImgIdx + 1));
  }

  openLightboxBtn.addEventListener("click", openLightbox);

  toggleVideoBtn.addEventListener("click", () => {
    isPlayingVideo = !isPlayingVideo;
    toggleVideoBtn.textContent = isPlayingVideo ? "Image" : "▶ Video";
    renderMainStage();
  });

  lightboxCloseBtn.addEventListener("click", closeLightbox);
  lightboxBackdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (lightboxModal.classList.contains("is-open")) {
      if (e.key === "Escape") closeLightbox();
      return;
    }
    if (
      views.works &&
      views.works.classList.contains("is-active") &&
      worksDetailSubView &&
      !worksDetailSubView.hidden
    ) {
      if (e.key === "ArrowLeft") selectDetailImage(currentImgIdx - 1);
      if (e.key === "ArrowRight") selectDetailImage(currentImgIdx + 1);
      if (e.key === "Escape") showWorksTilesGrid();
    }
  });

  // 초기화 실행
  renderHomeAndAbout();
  renderWorksTilesGrid();
  openWorkDetail(0);
  showWorksTilesGrid();

  const initialHash = window.location.hash.replace("#", "");
  if (initialHash && views[initialHash]) {
    switchView(initialHash);
  } else {
    switchView("home");
  }
});
