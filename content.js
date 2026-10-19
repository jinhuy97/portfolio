// =====================================================
//  ★ 여기에 내 내용을 넣어주세요 ★
//  - 따옴표(" ") 안의 글자만 바꾸면 돼요.
//  - 따옴표, 쉼표(,), 괄호는 지우지 마세요.
//  - 모르는 칸은 ""로 비워두면 화면에 나오지 않아요.
//  - 저장한 뒤 index.html을 새로고침하면 바로 반영돼요.
// =====================================================

const CONTENT = {
  // ---------- 첫 화면 ----------
  name: "김진휘",
  eyebrow: "Opera Director · Music Therapy",
  role: "오페라 연출가 · 음악치료",
  intro: "무대 위에서는 즐거움을, 무대 밖에서는 쉼과 회복을. 음악으로 사람 곁에 머무는 사람이 되고 싶습니다.", // ✏️ 초안이에요. 내 말투로 바꿔주세요.

  // ---------- 01 나의 이야기 ----------
  about: {
    // 프로필 사진 ↓ (images 폴더 안의 파일 이름)
    photo: "images/profile.jpg",

    // 이야기 첫머리 (한 문장)
    lead: "저는 노래로 음악을 시작했고, 무대를 만들며 음악의 힘을 배웠고, 이제 그 힘으로 사람을 돌보려 합니다.",

    // ✏️ 초안이에요. 실제로 겪은 장면(기억에 남는 관객, 아이의 변화 등)을 한 문장씩 넣으면 훨씬 진짜 이야기가 돼요.
    story: [
      {
        step: "노래하다",
        period: "2016 – 2020",
        text: "처음 음악을 시작한 건 노래였습니다. 계명대학교에서 성악을 공부하며, 목소리 하나가 듣는 사람의 마음을 움직일 수 있다는 것을 배웠습니다.",
      },
      {
        step: "무대를 만들다",
        period: "2021 – 2025",
        text: "노래하던 사람에서 무대를 만드는 사람이 되었습니다. 국립오페라단 KNO 오페라스튜디오에서 연출을 배우고, 30편이 넘는 오페라 무대를 연출부로 함께 만들었습니다. 막이 오르고 객석이 웃고 우는 순간을 가장 가까이에서 지켜보며, 공연이 사람들에게 건네는 즐거움이 얼마나 큰지 알게 되었습니다.",
      },
      {
        step: "사람에게 닿다",
        period: "2025 –",
        text: "무대 밖에서도 음악은 힘이 있었습니다. 영유아 아이들과 함께 노래하고 악기를 연주하면서, 음악 하나로 아이들의 표정과 몸짓이 달라지는 순간을 매주 만납니다. 위기청소년과 10년을 함께해 온 마음톡톡 예술치유 사업의 무대에도 연주자이자 배우로 서게 되었습니다.",
      },
      {
        step: "치유하다",
        period: "2026 –",
        text: "그래서 음악치료를 공부하기로 했습니다. 즐거움을 주는 음악에서 한 걸음 더 나아가, 음악으로 누군가의 마음을 돌보고 회복을 돕는 사람이 되고 싶습니다. 지금 이화여자대학교 대학원에서 음악치료를 배우고 있습니다.",
      },
    ],

    // 이야기의 마지막에 크게 보이는 한 문장
    vision: "공연으로 즐거움을 나누고, 음악으로 힐링을 전하는 사람.",
    facts: [
      { label: "전공", value: "성악 (계명대학교)" },
      { label: "연출 교육", value: "국립오페라단 KNO 오페라스튜디오 3기" },
      { label: "대학원", value: "이화여자대학교 음악치료학과" },
      { label: "교육 활동", value: "노래하는 크레용 동작지사" },
      { label: "자격", value: "문화예술교육사 2급" },
    ],
  },

  // ---------- 02 대표작 / 03 공연 ----------
  // 공연 하나 = { ... } 덩어리 하나. 최신 공연이 위에 오도록 적어주세요.
  //   period      참여 기간 (이력서 기준)
  //   title       한글 제목 / original 원제 / composer 작곡가
  //   org         제작 기관 / director 연출가 / role 내 역할
  //   dates       실제 공연 날짜 / venue 공연장 (확인된 것만)
  //   note        한 줄 메모 / description 대표작 카드에 들어갈 설명
  //   featured    true면 대표작에 크게 나와요
  //   poster      포스터 이미지 주소 / posterCredit 이미지 출처 / link 공식 페이지
  //   programBook 프로그램북 사진 (탄호이저 예시를 복사해서 쓰면 돼요)
  productions: [
    {
      period: "2025.10 – 2025.11", title: "운명의 힘", original: "La forza del destino", composer: "베르디",
      org: "호남오페라단", director: "김지영", role: "조연출",
      dates: "2025.11.14 – 11.15", venue: "전주 한국소리문화의전당 모악당",
      note: "호남오페라단 창단 40주년 기념 특별공연 · 제54회 정기공연",
      programBook: {
        // 다른 분들의 얼굴 사진은 모자이크 처리했어요
        credit: "프로그램북 ⓒ 호남오페라단",
        pages: [
          { src: "images/programbook/2025-forza-1-cover.jpg", caption: "표지 · 호남오페라단 창단 40주년 기념, 제54회 정기공연" },
          { src: "images/programbook/2025-forza-2-overview.jpg", caption: "공연 개요 · 2025.11.14 – 11.15 한국소리문화의전당 모악당 · 연출 김지영", highlight: [11.8, 82.2, 76.0, 6.9] },
          { src: "images/programbook/2025-forza-3-staff.jpg", caption: "CAST / STAFF (16쪽) · 조연출 김진휘 (다른 분들의 얼굴은 모자이크 처리)", highlight: [35.1, 49.7, 17.3, 18.0] },
          { src: "images/programbook/2025-forza-4-back.jpg", caption: "뒤표지" },
        ],
      },
    },
    {
      period: "2025.08 – 2025.09", title: "죽음의 도시 (재공연)", original: "Die tote Stadt", composer: "코른골트",
      org: "국립오페라단", director: "줄리앙 샤바즈 (재연출 김동일)", role: "조연출",
    },
    {
      period: "2025.06 – 2025.08", title: "창극 심청", original: "", composer: "판소리 〈심청가〉",
      org: "국립창극단 · 전주세계소리축제", director: "요나 김", role: "조연출",
      // 참여한 공연은 전주 공연만 (국립극장 공연은 참여하지 않음)
      dates: "2025.08.13 – 08.14", venue: "전주 한국소리문화의전당 모악당",
      note: "제24회 전주세계소리축제 개막공연 · 국립극장/전주세계소리축제 공동제작",
      featured: true,
      description: "독일에서 활동하는 오페라 연출가 요나 김이 처음으로 판소리 작품을 각색·연출한 신작 창극. 국립창극단 전 단원을 포함해 150여 명이 출연한 대작으로, 제24회 전주세계소리축제 개막공연으로 전주에서 처음 선보였습니다.",
      poster: "https://www.mcst.go.kr/attachFiles/cultureInfoCourt/monthServ/1753834923929.gif",
      posterCredit: "ⓒ 전주세계소리축제조직위원회",
      link: "https://www.mcst.go.kr/site/s_culture/culture/cultureView.jsp?pSeq=56265",
      programBook: {
        credit: "프로그램북 ⓒ 국립극장 · 전주세계소리축제",
        pages: [
          { src: "images/programbook/2025-simcheong-1-cover.jpg", caption: "표지" },
          { src: "images/programbook/2025-simcheong-2-title.jpg", caption: "속표지 · 2025.08.13 – 14 전주 한국소리문화의전당 모악당", highlight: [17.0, 82.6, 60.7, 2.5] },
          { src: "images/programbook/2025-simcheong-3-staff.jpg", caption: "제작진 · 극본·연출 요나 김, 조연출 김하늬 · 한상호 · 김진휘", highlight: [3.7, 49.7, 27.6, 2.5] },
          { src: "images/programbook/2025-simcheong-4-crew.jpg", caption: "스태프 · 국립극장 · 국립창극단 · 전주세계소리축제조직위원회" },
          { src: "images/programbook/2025-simcheong-5-back.jpg", caption: "뒤표지 · 전주세계소리축제 · 국립극장 | 국립창극단" },
        ],
      },
    },
    {
      period: "2025.04 – 2025.05", title: "람메르무어의 루치아", original: "Lucia di Lammermoor", composer: "도니체티",
      org: "세아이운형문화재단", director: "윤상호", role: "조연출",
      dates: "2025.05.16", venue: "군산예술의전당",
    },
    {
      period: "2025.03 – 2025.04", title: "파우스트", original: "Faust", composer: "구노",
      org: "서울시오페라단", director: "엄숙정", role: "조연출 보조",
      dates: "2025.04.10 – 04.13", venue: "세종문화회관 대극장",
      note: "2025 세종시즌 · 서울시오페라단",
      programBook: {
        // 다른 분들의 얼굴 사진은 모자이크 처리했어요
        credit: "프로그램북 ⓒ 세종문화회관 · 서울시오페라단",
        pages: [
          { src: "images/programbook/2025-faust-1-cover.jpg", caption: "표지 · FAUST Charles Gounod" },
          { src: "images/programbook/2025-faust-2-overview.jpg", caption: "공연 개요 · 2025.4.10 – 4.13 세종문화회관 대극장", highlight: [13.3, 51.9, 69.2, 3.1] },
          { src: "images/programbook/2025-faust-3-staff.jpg", caption: "프로덕션 스태프 (68쪽) · 조연출보 김진휘 (다른 분들의 얼굴은 모자이크 처리)", highlight: [23.6, 68.2, 16.5, 2.2] },
          { src: "images/programbook/2025-faust-4-back.jpg", caption: "뒤표지 · 세종문화회관" },
        ],
      },
    },
    {
      period: "2024.12", title: "박쥐", original: "Die Fledermaus", composer: "J. 슈트라우스 2세",
      org: "국립오페라단", director: "김동일", role: "조연출",
    },
    {
      period: "2024.10 – 2024.12", title: "라 보엠", original: "La Bohème", composer: "푸치니",
      org: "서울시오페라단", director: "엄숙정", role: "조연출", // 프로그램북 기준 (이력서: 조연출 보조)
      dates: "2024.11.21 – 11.24", venue: "세종문화회관 대극장",
      programBook: {
        credit: "프로그램북 ⓒ 세종문화회관 · 서울시오페라단",
        pages: [
          { src: "images/programbook/2024-laboheme-1-cover.jpg", caption: "표지 · 표지그림 조문수" },
          { src: "images/programbook/2024-laboheme-2-overview.jpg", caption: "공연 개요 · 2024.11.21 – 11.24 세종문화회관 대극장", highlight: [18.7, 59.5, 65.2, 2.7] },
          { src: "images/programbook/2024-laboheme-3-staff.jpg", caption: "프로덕션 크레딧 (66쪽) · 연출 엄숙정, 조연출 한지현 · 여지은 · 김진휘 · 한봄", highlight: [46.9, 45.8, 34.6, 2.6] },
          { src: "images/programbook/2024-laboheme-4-back.jpg", caption: "뒤표지 · 세종문화회관 / 서울시오페라단", highlight: [7.1, 92.5, 88.0, 3.4] },
        ],
      },
      note: "서울시오페라단 창단 이후 첫 〈라 보엠〉",
      featured: true,
      description: "서울시오페라단이 창단 39년 만에 처음 올린 〈라 보엠〉. 국립심포니오케스트라와 처음 함께한 무대로, 무대·의상·영상까지 새로 제작했습니다.",
      poster: "https://www.sejongpac.or.kr/cmmn/file/imageSrc.do?fileStreCours=faec0c25744c22e99776405c0fa72802b034c11453522f543494e84872ada102&streFileNm=bb50b34a2485c8234a8fbe032b5688a23f48942c620f71cc3fc0c508cc687eff",
      posterCredit: "ⓒ 세종문화회관",
      link: "https://www.sejongpac.or.kr/portal/performance/performance/performTicket.do?performIdx=34825&menuNo=200320",
    },
    {
      period: "2024.09 – 2024.10", title: "탄호이저", original: "Tannhäuser", composer: "바그너",
      org: "국립오페라단", director: "요나 김", role: "조연출",
      dates: "2024.10.17 – 10.20", venue: "예술의전당 오페라극장",
      featured: true,
      description: "1979년 한국어 번역 공연 이후 국내에서 두 번째로 오른 전막 무대. 인터미션 두 번을 포함해 약 4시간 동안 이어지는 바그너의 대작을 원어(독일어)로 공연했습니다.",
      poster: "https://www.sac.or.kr/site/main/file/thumbnail/uu/7dcdda468ec8490ba661780d4e35612a",
      posterCredit: "ⓒ 국립오페라단",
      link: "https://www.sac.or.kr/site/main/show/show_view?SN=60924",
      // 프로그램북 사진 (경력 증빙). highlight는 내 이름 위치를 %로 표시해요: [왼쪽, 위, 너비, 높이]
      programBook: {
        credit: "프로그램북 ⓒ 국립오페라단",
        pages: [
          { src: "images/programbook/2024-tannhauser-1-cover.jpg", caption: "표지" },
          { src: "images/programbook/2024-tannhauser-2-overview.jpg", caption: "공연 개요 · 2024.10.17 – 10.20 예술의전당 오페라극장", highlight: [72.2, 11.6, 10, 3.8] },
          { src: "images/programbook/2024-tannhauser-3-staff.jpg", caption: "제작진 (45쪽) · 연출 요나 김, 조연출 다니엘라 키제베터 · 한상호 · 김진휘", highlight: [15.9, 36.6, 4.2, 2.2] },
          { src: "images/programbook/2024-tannhauser-4-name.jpg", caption: "조연출 김진휘 (확대)", highlight: [26.5, 47.4, 7.8, 3.4] },
        ],
      },
    },
    {
      period: "2024.07 – 2024.08", title: "오텔로", original: "Otello", composer: "베르디",
      org: "예술의전당", director: "키스 워너 (원연출)", role: "조연출",
      dates: "2024.08.18 – 08.25", venue: "예술의전당 오페라극장",
      featured: true,
      description: "2017년 영국 로열오페라하우스에서 초연된 키스 워너 연출 프로덕션을 예술의전당과 로열오페라하우스가 함께 올린 공연입니다.",
      poster: "https://www.sac.or.kr/site/main/file/thumbnail/uu/566324d5f78948cab1d2c7960fe90c6d",
      posterCredit: "ⓒ 예술의전당",
      link: "https://www.sac.or.kr/site/main/show/show_view?SN=70772",
      programBook: {
        credit: "프로그램북 ⓒ 예술의전당",
        pages: [
          { src: "images/programbook/2024-otello-1-cover.jpg", caption: "표지 · 2024 예술의전당 오페라" },
          { src: "images/programbook/2024-otello-2-overview.jpg", caption: "공연 개요 (4쪽) · 2024.8.18 – 8.25 · 원연출 키스 워너, 리바이벌 연출 카타리나 카스트닝", highlight: [19.3, 82.6, 67.5, 4.6] },
          { src: "images/programbook/2024-otello-3-staff.jpg", caption: "프로덕션 스태프 · 조연출 한지현 · 김진휘", highlight: [7.6, 42.2, 27.1, 2.3] },
          { src: "images/programbook/2024-otello-4-name.jpg", caption: "조연출 김진휘 (확대)", highlight: [5.7, 44.7, 48.6, 6.8] },
        ],
      },
    },
    {
      period: "2024.07", title: "마술피리", original: "Die Zauberflöte", composer: "모차르트",
      org: "대구오페라하우스", director: "김진휘", role: "연출",
      note: "찾아가는 학교 오페라 (2023 유네스코 포럼 공연 재공연)",
    },
    {
      period: "2024.06 – 2024.07", title: "일 트리티코", original: "Il trittico", composer: "푸치니",
      org: "대구오페라하우스", director: "유철우", role: "조연출",
    },
    {
      period: "2024.05 – 2024.06", title: "카발레리아 루스티카나", original: "Cavalleria rusticana", composer: "마스카니",
      org: "서울시오페라단", director: "엄숙정", role: "조연출 보조",
      dates: "2024.06.11 – 06.12", venue: "광화문광장 놀이마당",
      note: "제2회 광화문광장 야외오페라 · 시민예술단 100여 명 참여",
      programBook: {
        credit: "프로그램북 ⓒ 세종문화회관 · 서울시오페라단",
        pages: [
          { src: "images/programbook/2024-cavalleria-1-cover.jpg", caption: "표지 · 2024.6.11 – 6.12 광화문광장 놀이마당", highlight: [13.6, 80.7, 72.5, 9.4] },
          { src: "images/programbook/2024-cavalleria-2-staff.jpg", caption: "제작진 · 연출 엄숙정, 조연출보 장가림 · 김진휘", highlight: [51.5, 74.8, 28.0, 2.5] },
          { src: "images/programbook/2024-cavalleria-3-cast.jpg", caption: "출연진 · 시민예술단" },
        ],
      },
    },
    {
      period: "2024.04 – 2024.05", title: "죽음의 도시", original: "Die tote Stadt", composer: "코른골트",
      org: "국립오페라단", director: "줄리앙 샤바즈", role: "조연출",
      dates: "2024.05.23 – 05.26", venue: "예술의전당 오페라극장",
      note: "국내 초연",
      featured: true,
      description: "코른골트가 23살에 작곡한 작품으로, 국립오페라단이 국내에서 처음 올렸습니다. 세상을 떠난 아내를 그리워하는 파울의 이야기를 다룹니다.",
      poster: "https://www.sac.or.kr/site/main/file/thumbnail/uu/ae4fc06f7b6d4ec4bbf6bb71495bbeb3",
      posterCredit: "ⓒ 국립오페라단",
      link: "https://www.sac.or.kr/site/main/show/show_view?SN=60925",
    },
    {
      period: "2024.03 – 2024.04", title: "라 트라비아타", original: "La traviata", composer: "베르디",
      org: "서울시오페라단", director: "이래이", role: "조연출", // ✏️ 연출가 이름을 확인해 주세요
      dates: "2024.04.25 – 04.28", venue: "세종문화회관 대극장",
      note: "서울시오페라단 2024년 정기공연 〈춘희〉 · 제1조연출",
      programBook: {
        // 다른 분들의 얼굴 사진은 모자이크 처리했어요
        credit: "프로그램북 ⓒ 세종문화회관 · 서울시오페라단",
        pages: [
          { src: "images/programbook/2024-traviata-1-cover.jpg", caption: "표지 · 춘희 La Traviata" },
          { src: "images/programbook/2024-traviata-2-overview.jpg", caption: "공연 개요 · 서울시오페라단 2024년 정기공연 · 2024.4.25 – 4.28 세종문화회관 대극장", highlight: [19.7, 28.4, 50.0, 6.2] },
          { src: "images/programbook/2024-traviata-3-staff.jpg", caption: "프로덕션 스태프 (66쪽) · 제1조연출 김진휘 (다른 분들의 얼굴은 모자이크 처리)", highlight: [28.5, 12.3, 28.0, 3.2] },
          { src: "images/programbook/2024-traviata-4-back.jpg", caption: "뒤표지 · 서울시오페라단" },
        ],
      },
    },
    {
      period: "2024.02 – 2024.04", title: "오르페오와 에우리디체", original: "Orfeo ed Euridice", composer: "글루크",
      org: "대구오페라하우스", director: "엄숙정", role: "조연출 보조",
      dates: "2024.03.22 – 03.23 · 03.29 – 03.30", venue: "대구오페라하우스",
      note: "2024 대구오페라하우스 시즌오페라 · 개관 20주년 시즌 개막작",
      programBook: {
        credit: "프로그램북 ⓒ 대구오페라하우스",
        pages: [
          { src: "images/programbook/2024-orfeo-1-cover.jpg", caption: "표지 · 2024 대구오페라하우스 시즌오페라" },
          { src: "images/programbook/2024-orfeo-2-overview.jpg", caption: "공연 개요 · 2024.3.22 – 23, 3.29 – 30 · 연출 엄숙정", highlight: [7.5, 30.9, 21.6, 4.6] },
          { src: "images/programbook/2024-orfeo-3-staff.jpg", caption: "프로덕션 스태프 · 연출 엄숙정, 조연출보 김진휘", highlight: [5.8, 42.9, 22.4, 2.2] },
          { src: "images/programbook/2024-orfeo-4-back.jpg", caption: "뒤표지 · 대구오페라하우스" },
        ],
      },
    },
    {
      period: "2024.02", title: "알제리의 이탈리아 여인", original: "L'italiana in Algeri", composer: "로시니",
      org: "국립오페라단", director: "최지형", role: "소품",
      dates: "2024.02.22 – 02.25", venue: "국립극장 해오름극장",
      note: "국내 초연",
      programBook: {
        credit: "프로그램북 ⓒ 국립오페라단",
        pages: [
          { src: "images/programbook/2024-italiana-1-cover.jpg", caption: "표지 · 국립오페라단" },
          { src: "images/programbook/2024-italiana-2-overview.jpg", caption: "공연개요 (7쪽) · 2024.2.22 – 2.25 국립극장 해오름극장 · 연출 최지형", highlight: [58.9, 9.1, 20.5, 4.4] },
          { src: "images/programbook/2024-italiana-3-staff.jpg", caption: "프로덕션 스태프 (45쪽) · 소품팀 김윤혜(팀장), 김진휘", highlight: [26.1, 46.8, 10.5, 5.3] },
          { src: "images/programbook/2024-italiana-4-back.jpg", caption: "뒤표지 · 국립오페라단" },
        ],
      },
    },
    {
      period: "2023.11 – 2023.12", title: "비밀결혼", original: "Il matrimonio segreto", composer: "치마로사",
      org: "국립오페라단", director: "홍민정", role: "소품",
    },
    {
      period: "2023.11", title: "투란도트", original: "Turandot", composer: "푸치니",
      org: "대구오페라하우스 · Teatro Comunale di Ferrara", director: "플라멘 카르탈로프 (재연출 기민정)", role: "조연출 보조",
      note: "이탈리아 페라라 시립극장 협업 · 한국 캐스트와 페라라 출연진 현장 담당",
    },
    {
      period: "2023.11", title: "마술피리", original: "Die Zauberflöte", composer: "모차르트",
      org: "대구오페라하우스", director: "김진휘", role: "연출",
      note: "유네스코 음악창의도시 대구 국제포럼",
      featured: true,
      // 대표작 카드에는 두 번의 공연을 함께 보여줘요
      featuredDates: "2023.11 유네스코 음악창의도시 대구 국제포럼 · 2024.07 찾아가는 학교 오페라",
      description: "유네스코 음악창의도시 대구 국제포럼 행사로 처음 올린 뒤, 이듬해 학교로 찾아가는 오페라로 다시 무대에 올린 연출작입니다. 두 공연 모두 연출과 함께 오퍼레이터, 무대감독 업무를 맡았습니다.",
    },
    {
      period: "2023.09 – 2023.10", title: "노르마", original: "Norma", composer: "벨리니",
      org: "예술의전당", director: "알렉스 오예 (재연출 에밀리오 로페스)", role: "조연출",
      dates: "2023.10.26 – 10.29", venue: "예술의전당 오페라극장",
      featured: true,
      description: "예술의전당 전관 개관 30주년 기념작. 2016년 영국 로열오페라하우스 시즌 개막작으로 초연된 프로덕션으로, 무대를 가득 채운 3,500개의 십자가로 화제가 되었습니다.",
      poster: "https://www.sac.or.kr/site/main/file/thumbnail/uu/aa2455e33547400e9fe2d6a69988e0d7",
      posterCredit: "ⓒ 예술의전당",
      link: "https://www.sac.or.kr/site/main/show/show_view?SN=63652",
      programBook: {
        credit: "프로그램북 ⓒ 예술의전당",
        pages: [
          { src: "images/programbook/2023-norma-1-cover.jpg", caption: "표지 · 예술의전당 전관 개관 30주년" },
          { src: "images/programbook/2023-norma-2-overview.jpg", caption: "공연 개요 · 2023.10.26 – 10.29 · 원작 연출 알렉스 오예, 리바이벌 연출 에밀리오 로페즈", highlight: [20.6, 78.8, 50.6, 3.0] },
          { src: "images/programbook/2023-norma-3-staff.jpg", caption: "프로덕션 스태프 (45쪽) · 조연출 한지현 · 김진휘", highlight: [4.0, 34.7, 23.2, 2.1] },
        ],
      },
    },
    {
      period: "2023.09 – 2023.10", title: "살로메", original: "Salome", composer: "R. 슈트라우스",
      org: "대구오페라하우스", director: "미하엘 슈트루밍어 (Michael Sturminger)", role: "조연출 보조",
      dates: "2023.10.06 – 10.07", venue: "대구오페라하우스",
      note: "제20회 대구국제오페라축제 개막작",
      programBook: {
        credit: "프로그램북 ⓒ 대구오페라하우스",
        pages: [
          { src: "images/programbook/2023-salome-1-cover.jpg", caption: "표지 · 제20회 대구국제오페라축제" },
          { src: "images/programbook/2023-salome-2-overview.jpg", caption: "공연 개요 · 2023.10.6 – 10.7 대구오페라하우스", highlight: [12.6, 15.0, 31.4, 4.2] },
          { src: "images/programbook/2023-salome-3-staff.jpg", caption: "제작진 (32쪽) · 연출 미하엘 슈트루밍어, 조연출보 김진휘", highlight: [12.6, 55.8, 15.8, 2.8] },
        ],
      },
    },
    {
      period: "2023.08", title: "돈 조반니", original: "Don Giovanni", composer: "모차르트",
      org: "국립오페라단", director: "오유빈 · 김진휘 · 한상호 (총괄 연출 지도 이경재)", role: "연출",
      dates: "2023.08.29", venue: "광림아트센터 장천홀",
      note: "KNO 오페라스튜디오 3기 수료 공연 · 콘서트 오페라",
      featured: true,
      description: "국립오페라스튜디오 3기 성악가 16명과 신예 연출가 3명이 함께 만든 해설이 있는 콘서트 오페라. 장면을 나누어 맡아 연출했습니다.",
      poster: "https://tkfile.yes24.com/upload2/PerfBlog/202308/20230801/20230801-46698_1.jpg",
      posterCredit: "ⓒ 국립오페라단",
      link: "http://ticket.yes24.com/Perf/46698",
    },
    {
      period: "2023.07 – 2023.09", title: "마술피리 (투어)", original: "Die Zauberflöte", composer: "모차르트",
      org: "국립오페라단", director: "김동일", role: "조연출",
      note: "화성 · 안성 · 밀양 투어",
    },
    {
      period: "2023.04", title: "방방곡곡 콘서트 오페라 마술피리", original: "Die Zauberflöte", composer: "모차르트",
      org: "국립오페라단", director: "이회수", role: "조연출",
    },
    {
      period: "2023.02 – 2023.04", title: "토스카", original: "Tosca", composer: "푸치니",
      org: "대구오페라하우스", director: "정선영", role: "조연출 보조",
      dates: "2023.03.03 – 03.04 · 03.10 – 03.11 · 04.14 · 04.21", venue: "대구오페라하우스",
      note: "2023 대구오페라하우스 시즌오페라 · 대구오페라하우스 제작",
      programBook: {
        credit: "프로그램북 ⓒ 대구오페라하우스",
        pages: [
          { src: "images/programbook/2023-tosca-1-cover.jpg", caption: "표지 · 2023 대구오페라하우스 시즌오페라" },
          { src: "images/programbook/2023-tosca-2-overview.jpg", caption: "개요 (3쪽) · 2023.3.3 – 4 / 10 – 11 / 4.14 / 21 대구오페라하우스 · 연출 정선영", highlight: [39.6, 18.3, 29.9, 3.6] },
          { src: "images/programbook/2023-tosca-3-staff.jpg", caption: "제작진 (30쪽) · 연출/무대디자인 정선영, 조연출보 김진휘", highlight: [27.3, 29.2, 22.4, 1.9] },
          { src: "images/programbook/2023-tosca-4-back.jpg", caption: "뒤표지 · 대구오페라하우스 개관 20주년" },
        ],
      },
    },
    {
      period: "2022.11 – 2022.12", title: "신데렐라", original: "La Cenerentola", composer: "로시니",
      org: "대구오페라하우스 · 영남오페라단", director: "김성경", role: "조연출 보조",
      dates: "2022.12.23 – 12.24", venue: "대구오페라하우스",
      note: "제19회 대구국제오페라축제 · 영남오페라단 창단 38주년 제39회 정기공연",
      programBook: {
        credit: "프로그램북 ⓒ 대구오페라하우스 · 영남오페라단",
        pages: [
          { src: "images/programbook/2022-cenerentola-1-cover.jpg", caption: "표지 · 제19회 대구국제오페라축제" },
          { src: "images/programbook/2022-cenerentola-2-overview.jpg", caption: "공연 개요 (5쪽) · 대구오페라하우스 / 영남오페라단 합작 · 12.23 – 12.24", highlight: [9.7, 24.4, 49.8, 4.7] },
          { src: "images/programbook/2022-cenerentola-3-staff.jpg", caption: "제작진 (30쪽) · 연출 김성경, 조연출보 김진휘", highlight: [10.5, 68.1, 9.5, 2.0] },
          { src: "images/programbook/2022-cenerentola-4-back.jpg", caption: "뒤표지 · 주최 대구광역시, 대구오페라하우스 / 주관 대구오페라하우스, 영남오페라단", highlight: [3.5, 88.3, 52.5, 2.5] },
        ],
      },
    },
    {
      period: "2022.10 – 2022.11", title: "심청", original: "Sim Tjong", composer: "윤이상",
      org: "대구오페라하우스", director: "정갑균", role: "조연출 보조",
      dates: "2022.11.18 – 11.19", venue: "대구오페라하우스",
      note: "제19회 대구국제오페라축제 폐막작 · 대구오페라하우스 제작",
      programBook: {
        credit: "프로그램북 ⓒ 대구오페라하우스",
        pages: [
          { src: "images/programbook/2022-simtjong-1-cover.jpg", caption: "표지 · 제19회 대구국제오페라축제" },
          { src: "images/programbook/2022-simtjong-2-overview.jpg", caption: "공연 개요 (5쪽) · 대구오페라하우스 제작 · 11.18 – 11.19", highlight: [11.0, 26.3, 40.0, 4.4] },
          { src: "images/programbook/2022-simtjong-3-staff.jpg", caption: "제작진 (45쪽) · 예술감독/연출 정갑균, 조연출보 김진휘", highlight: [10.7, 41.0, 10.8, 2.1] },
          { src: "images/programbook/2022-simtjong-4-back.jpg", caption: "뒤표지 · 주최 대구광역시, 대구오페라하우스 / 주관 대구오페라하우스", highlight: [14.5, 92.8, 44.8, 2.4] },
        ],
      },
    },
    {
      period: "2022.08 – 2022.09", title: "투란도트", original: "Turandot", composer: "푸치니",
      org: "대구오페라하우스 · 광주시립오페라단", director: "플라멘 카르탈로프", role: "조연출 보조",
      dates: "2022.09.23 – 09.24", venue: "대구오페라하우스",
      note: "제19회 대구국제오페라축제 개막작",
      programBook: {
        credit: "프로그램북 ⓒ 대구오페라하우스",
        pages: [
          { src: "images/programbook/2022-turandot-1-cover.jpg", caption: "표지 · 제19회 대구국제오페라축제" },
          { src: "images/programbook/2022-turandot-2-overview.jpg", caption: "공연 개요 · 2022.9.23 – 9.24 · 연출 플라멘 카르탈로프", highlight: [31.8, 25.8, 35.0, 3.6] },
          { src: "images/programbook/2022-turandot-3-staff.jpg", caption: "제작진 (36쪽) · 조연출보 김진휘", highlight: [9.9, 44.5, 9.8, 2.5] },
          { src: "images/programbook/2022-turandot-4-back.jpg", caption: "뒤표지 · 주최 대구광역시, 대구오페라하우스", highlight: [20.6, 92.5, 32.4, 2.6] },
        ],
      },
    },
    {
      period: "2022.06 – 2022.07", title: "헨젤과 그레텔", original: "Hänsel und Gretel", composer: "훔퍼딩크",
      org: "대구오페라하우스", director: "헨드릭 뮐러 (재연출 이혜영)", role: "조연출 보조",
      dates: "2022.07.22 – 07.24 · 07.28 – 07.30", venue: "대구오페라하우스",
      note: "대구오페라하우스 기획공연 · 2022 방방곡곡 문화공감사업 선정작",
      programBook: {
        credit: "프로그램북 ⓒ 대구오페라하우스",
        pages: [
          { src: "images/programbook/2022-hansel-1-cover.jpg", caption: "표지 · 2022 대구오페라하우스 기획공연" },
          { src: "images/programbook/2022-hansel-2-overview.jpg", caption: "공연 개요 (3쪽) · 2022.7.22 – 24, 28 – 30 · 연출 헨드릭 뮐러, 재연출 이혜영", highlight: [7.6, 17.6, 24.0, 3.6] },
          { src: "images/programbook/2022-hansel-3-staff.jpg", caption: "프로덕션 스태프 · 조연출보 김진휘", highlight: [36.6, 31.5, 21.6, 1.9] },
          { src: "images/programbook/2022-hansel-4-back.jpg", caption: "뒤표지 · 재단법인 대구오페라하우스" },
        ],
      },
    },
    {
      period: "2022.05 – 2022.06", title: "콘서트 오페라 마술피리", original: "Die Zauberflöte", composer: "모차르트",
      org: "대구오페라하우스", director: "이수은", role: "조연출",
    },
    {
      period: "2022.04 – 2022.05", title: "아이다", original: "Aida", composer: "베르디",
      org: "대구오페라하우스", director: "이회수", role: "소품",
      dates: "2022.05.25 – 05.28", venue: "대구오페라하우스",
      note: "대구오페라하우스 기획공연 · 2022 대구세계가스총회 기념",
      programBook: {
        credit: "프로그램북 ⓒ 대구오페라하우스",
        pages: [
          { src: "images/programbook/2022-aida-1-cover.jpg", caption: "표지 · 대구오페라하우스 기획공연" },
          { src: "images/programbook/2022-aida-2-overview.jpg", caption: "공연 개요 · 2022.5.25 – 5.28 대구오페라하우스 · 연출 이회수", highlight: [11.0, 29.2, 27.0, 6.4] },
          { src: "images/programbook/2022-aida-3-staff.jpg", caption: "제작진 (36쪽) · 소품수 오혜진 · 김진휘", highlight: [31.2, 33.6, 30.0, 1.9] },
          { src: "images/programbook/2022-aida-4-back.jpg", caption: "뒤표지 · 재단법인 대구오페라하우스" },
        ],
      },
    },
    {
      period: "2022.03 – 2022.04", title: "마술피리", original: "Die Zauberflöte", composer: "모차르트",
      org: "대구오페라하우스", director: "헨드릭 뮐러 (재연출 이수은)", role: "조연출 보조",
    },
    {
      period: "2021.12 – 2022.01", title: "박쥐", original: "Die Fledermaus", composer: "J. 슈트라우스 2세",
      org: "대구오페라하우스", director: "표현진", role: "소품",
      dates: "2022.01.20 – 01.22 · 01.27 – 01.29", venue: "대구오페라하우스",
      note: "대구오페라하우스 2022 시즌제 기획공연 · 신년 오페레타",
      programBook: {
        credit: "프로그램북 ⓒ 대구오페라하우스",
        pages: [
          { src: "images/programbook/2022-fledermaus-1-cover.jpg", caption: "표지 · 대구오페라하우스 2022 시즌제 기획공연" },
          { src: "images/programbook/2022-fledermaus-2-overview.jpg", caption: "공연 개요 (3쪽) · 2022.1.20 – 22, 1.27 – 29 대구오페라하우스 · 연출 표현진", highlight: [32.4, 18.6, 23.2, 9.3] },
          { src: "images/programbook/2022-fledermaus-3-staff.jpg", caption: "제작진 (33쪽) · 소품수 김진휘", highlight: [23.6, 29.4, 11.8, 1.9] },
          { src: "images/programbook/2022-fledermaus-4-back.jpg", caption: "뒤표지 · 재단법인 대구오페라하우스" },
        ],
      },
    },
  ],

  // ---------- 04 경력 · 활동 (공연 연출 외의 일) ----------
  //   date를 "YYYY-MM-DD"로 적으면, 그날이 오기 전까지 "예정" 표시가 붙어요
  //   current: true면 "재직 중" 표시가 붙어요
  career: [
    {
      period: "2026.10.23", date: "2026-10-23",
      title: "마음톡톡 예술치유 사업 10주년 기념식 · 음악극",
      org: "이화뮤직웰니스연구센터 · 이화여자대학교 음악치료학과",
      role: "연주 · 노래 · 연기",
      detail: "위기청소년과 함께한 마음톡톡 예술치유 10년을 기념하는 자리(마음톡톡 아카이브 출간 기념)의 음악극에 출연합니다. 이화여자대학교 중강당, 후원 GS칼텍스.",
      image: "images/maumtoktok-10th.webp",
    },
    {
      period: "2025.12 – 현재", current: true,
      title: "음악&미술 오감놀이 교육자",
      org: "노래하는 크레용 동작지사",
      role: "영유아 수업",
      detail: "생후 6개월부터 60개월까지의 영유아를 대상으로, 음악 수업과 미술 수업을 함께 진행하는 통합 놀이 수업을 하고 있습니다. 아이의 발달 단계에 맞춘 커리큘럼으로 노래, 악기 연주, 오감놀이를 이어가며 아이들의 발달을 돕습니다.",
      points: [
        "노래와 악기 연주로 리듬과 소리를 경험하는 음악 활동",
        "음악 수업의 주제를 이어받아 색, 재료, 촉감을 탐색하는 미술 활동",
        "몸 전체를 쓰는 대근육 놀이와 손끝을 쓰는 소근육 놀이로 감각 자극",
        "발달 시기별 단계 과정: 오감 탐색 → 모방 놀이 → 상상·역할 놀이 → 이야기 표현",
      ],
      link: "https://www.edu-prime.com/playnok",
      linkLabel: "노래하는 크레용 프로그램 소개 →",
    },
  ],

  // ---------- 05 학력 · 자격 ----------
  education: [
    { period: "2026.03 – 현재", title: "이화여자대학교 일반대학원", detail: "음악치료학과 재학" },
    { period: "2023.03 – 2023.08", title: "국립오페라단 KNO 오페라스튜디오 3기", detail: "전문가 과정 · 연출자 과정 수료" },
    { period: "2016.03 – 2020.02", title: "계명대학교 음악공연예술대학", detail: "성악 전공 졸업" },
  ],
  certificates: [
    { date: "2022.04", title: "문화예술교육사 2급", issuer: "문화체육관광부" },
    { date: "2021.07", title: "ACA Photoshop", issuer: "Adobe" },
    { date: "2021.07", title: "ACA Illustrator", issuer: "Adobe" },
    { date: "2021.07", title: "Premiere Pro CS6", issuer: "Adobe" },
  ],

  // ---------- 06 연락 ----------
  contact: {
    message: "함께 무대를 만들거나, 음악으로 사람을 돕는 일을 함께하고 싶다면 편하게 연락 주세요.",
    email: "97bietbiet@naver.com",
    subject: "[포트폴리오 문의] ", // 메일 앱이 열릴 때 제목에 자동으로 들어가요
    links: [
      { label: "Instagram", url: "" }, // ✏️ 예: "https://www.instagram.com/아이디" (비워두면 숨겨져요)
    ],
  },
};
