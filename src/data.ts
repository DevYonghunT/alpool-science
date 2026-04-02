// 시뮬레이션 데이터 (통합과학1 기반)
export interface Simulation {
  id: string
  title: string
  description: string
  subject: 'physics' | 'chemistry' | 'biology' | 'earth'
  unit: string
  chapter: string
  icon: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  icon: string
}

export interface YouTubePlaylist {
  id: string
  title: string
}

export interface YouTubeVideo {
  id: string
  title: string
  date: string
  views: string
  duration: string
  url: string
  thumbnailUrl: string
  playlistId: string
}

// 교과서 단원 구조
export interface TreeNode {
  label: string
  children?: TreeNode[]
  filterId?: string
}

export const curriculum: TreeNode[] = [
  {
    label: '고등학교',
    children: [
      {
        label: '통합과학1',
        children: [
          {
            label: 'I. 물질과 규칙성',
            children: [
              { label: '1-1. 우주 초기의 원소', filterId: 'bigbang' },
              { label: '1-2. 별의 진화와 원소', filterId: 'star-evolution' },
              { label: '1-3. 원소의 주기성', filterId: 'periodicity' },
              { label: '1-4. 화학 결합', filterId: 'chemical-bond' },
              { label: '2. 자연의 구성 물질', filterId: 'natural-materials' },
            ]
          },
          {
            label: 'II. 시스템과 상호작용',
            children: [
              { label: '1-1. 지구시스템', filterId: 'earth-system' },
              { label: '1-2. 판 구조론', filterId: 'plate-tectonics' },
              { label: '2. 역학 시스템', filterId: 'mechanics' },
              { label: '3. 생명 시스템', filterId: 'life-system' },
            ]
          },
          {
            label: 'III. 변화와 다양성',
            children: [
              { label: '1. 화학 변화', filterId: 'chemical-change' },
              { label: '2. 생물 다양성', filterId: 'biodiversity' },
            ]
          },
          {
            label: 'IV. 환경과 에너지',
            children: [
              { label: '1. 생태계와 환경', filterId: 'ecosystem' },
              { label: '2. 에너지와 환경', filterId: 'energy' },
            ]
          },
        ]
      },
      {
        label: '통합과학2',
        children: [
          { label: '준비 중...', filterId: 'tbd' }
        ]
      },
      {
        label: '물리학 I',
        children: [
          { label: '준비 중...', filterId: 'tbd' }
        ]
      },
    ]
  }
]

// 샘플 시뮬레이션 데이터 (통합과학1 토픽)
export const simulations: Simulation[] = [
  {
    id: 'bigbang-nucleosynthesis',
    title: '빅뱅 핵합성',
    description: '우주 초기 3분 동안 수소와 헬륨이 만들어지는 과정을 시뮬레이션합니다.',
    subject: 'physics',
    unit: 'I. 물질과 규칙성',
    chapter: '1-1. 우주 초기의 원소',
    icon: '💥'
  },
  {
    id: 'cosmic-background-radiation',
    title: '우주 배경 복사',
    description: '빅뱅 후 38만 년에 방출된 우주 마이크로파 배경 복사를 시각화합니다.',
    subject: 'physics',
    unit: 'I. 물질과 규칙성',
    chapter: '1-1. 우주 초기의 원소',
    icon: '🌌'
  },
  {
    id: 'star-lifecycle',
    title: '별의 일생',
    description: '성운에서 태어나 적색거성, 백색왜성 또는 초신성으로 죽어가는 별의 진화 과정.',
    subject: 'physics',
    unit: 'I. 물질과 규칙성',
    chapter: '1-2. 별의 진화와 원소',
    icon: '⭐'
  },
  {
    id: 'hr-diagram',
    title: 'H-R도 (헤르츠스프룽-러셀 도표)',
    description: '별의 광도와 표면 온도의 관계를 나타내는 H-R 도표를 인터랙티브하게 탐색합니다.',
    subject: 'physics',
    unit: 'I. 물질과 규칙성',
    chapter: '1-2. 별의 진화와 원소',
    icon: '📊'
  },
  {
    id: 'periodic-trend',
    title: '원소의 주기적 성질',
    description: '원자 반지름, 이온화 에너지, 전기 음성도의 주기적 변화를 탐색합니다.',
    subject: 'chemistry',
    unit: 'I. 물질과 규칙성',
    chapter: '1-3. 원소의 주기성',
    icon: '⚛️'
  },
  {
    id: 'ionic-bond',
    title: '이온 결합',
    description: '나트륨과 염소의 전자 이동으로 이온 결합이 형성되는 과정을 보여줍니다.',
    subject: 'chemistry',
    unit: 'I. 물질과 규칙성',
    chapter: '1-4. 화학 결합',
    icon: '🔗'
  },
  {
    id: 'covalent-bond',
    title: '공유 결합',
    description: '원자들이 전자쌍을 공유하여 분자를 형성하는 과정을 시뮬레이션합니다.',
    subject: 'chemistry',
    unit: 'I. 물질과 규칙성',
    chapter: '1-4. 화학 결합',
    icon: '🧪'
  },
  {
    id: 'plate-tectonics-sim',
    title: '판 구조론',
    description: '지구의 판 경계에서 일어나는 수렴, 발산, 보존 경계를 시뮬레이션합니다.',
    subject: 'earth',
    unit: 'II. 시스템과 상호작용',
    chapter: '1-2. 판 구조론',
    icon: '🌍'
  },
  {
    id: 'structural-stability',
    title: '구조물의 안정성',
    description: '다양한 구조물에 힘을 가해 안정성을 테스트하는 인터랙티브 시뮬레이션.',
    subject: 'physics',
    unit: 'II. 시스템과 상호작용',
    chapter: '2. 역학 시스템',
    icon: '🏗️'
  },
  {
    id: 'newtons-laws',
    title: '뉴턴의 운동 법칙',
    description: '힘, 질량, 가속도의 관계를 실험으로 확인하는 시뮬레이션.',
    subject: 'physics',
    unit: 'II. 시스템과 상호작용',
    chapter: '2. 역학 시스템',
    icon: '🍎'
  },
  {
    id: 'cell-structure',
    title: '세포의 구조',
    description: '동물 세포와 식물 세포의 소기관을 3D로 탐색합니다.',
    subject: 'biology',
    unit: 'II. 시스템과 상호작용',
    chapter: '3. 생명 시스템',
    icon: '🔬'
  },
  {
    id: 'earth-system-interaction',
    title: '지구시스템 상호작용',
    description: '기권, 수권, 지권, 생물권의 상호작용을 시각화합니다.',
    subject: 'earth',
    unit: 'II. 시스템과 상호작용',
    chapter: '1-1. 지구시스템',
    icon: '🌏'
  },
]

// 샘플 블로그 데이터
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '빅뱅 우주론의 증거 3가지',
    excerpt: '우주 배경 복사, 우주 팽창, 원소 비율. 빅뱅 우주론을 뒷받침하는 핵심 증거들을 정리했습니다.',
    date: '2026-04-01',
    readTime: '5분',
    icon: '🌌'
  },
  {
    id: '2',
    title: '주기율표를 외우는 과학적 방법',
    excerpt: '원소의 주기적 성질을 이해하면 외울 필요가 없다? 주기율표 학습법을 과학적으로 접근합니다.',
    date: '2026-03-28',
    readTime: '7분',
    icon: '📋'
  },
  {
    id: '3',
    title: '지진은 왜 일어날까? 판 구조론 완전 정복',
    excerpt: '2025년 국내 지진 발생 현황과 함께 판 구조론의 핵심 원리를 쉽게 설명합니다.',
    date: '2026-03-25',
    readTime: '6분',
    icon: '🌍'
  },
  {
    id: '4',
    title: '별은 어떻게 태어나고 죽는가',
    excerpt: '성운에서 시작해 백색왜성, 중성자별, 블랙홀로 끝나는 별의 일생을 시각적으로 정리합니다.',
    date: '2026-03-20',
    readTime: '8분',
    icon: '⭐'
  },
]

// 유튜브 재생목록 (실제 @alpoolscience 채널)
export const youtubePlaylists: YouTubePlaylist[] = [
  { id: 'hs-physics', title: '고등 물리학 (2022 개정)' },
  { id: 'hs-integrated', title: '고등 통합과학 (2022 개정)' },
  { id: 'ms3', title: '중등 3학년 (2015 개정)' },
  { id: 'ms2', title: '중등 2학년 (2022 개정)' },
  { id: 'ms1', title: '중등 1학년 (2022 개정)' },
  { id: 'es6', title: '초등 6학년 (2015 개정)' },
  { id: 'es5', title: '초등 5학년 (2015 개정)' },
  { id: 'es4', title: '초등 4학년 (2022 개정)' },
  { id: 'es3', title: '초등 3학년 (2022 개정)' },
]

// 유튜브 영상 실제 데이터 (채널: @alpoolscience, 82개)
function yt(id: string, title: string, videoId: string, playlistId: string): YouTubeVideo {
  return {
    id,
    title,
    date: '',
    views: '',
    duration: '',
    url: `https://www.youtube.com/watch?v=${videoId}`,
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    playlistId,
  }
}

export const youtubeVideos: YouTubeVideo[] = [
  // 고등과학 물리학 (2022 개정)
  yt('1', '[5분 교과서] 고등 물리학 3단원 – 2.물질의 시공간의 세계', '9m37jdaX9w8', 'hs-physics'),
  yt('2', '[5분 교과서] 고등 물리학 3단원 – 1.빛과 물질의 이중성', 'YTfWg9ADRcg', 'hs-physics'),
  yt('3', '[5분 교과서] 고등 물리학 2단원 – 2.전기와 자기의 상호작용', 'WWeJbKbTABk', 'hs-physics'),
  yt('4', '[5분 교과서] 고등 물리학 2단원 – 1.전기장과 전기 에너지', 'uE9cfi8FIck', 'hs-physics'),
  yt('5', '[5분 교과서] 고등 물리학 1단원 – 2.에너지와 열', 'qnYvzymKIn0', 'hs-physics'),
  yt('6', '[5분 교과서] 고등 물리학 1단원 – 1.힘과 운동', 'vJNeRF7546w', 'hs-physics'),
  // 고등과학 통합과학 (2022 개정)
  yt('7', '[5분 교과서] 통합과학2 3단원 – 2.과학기술의 발전과 윤리', '_JhCtkF5RVU', 'hs-integrated'),
  yt('8', '[5분 교과서] 통합과학2 3단원 – 1.과학의 유용성과 빅데이터의 활용', 'f1H2knZANKI', 'hs-integrated'),
  yt('9', '[5분 교과서] 통합과학2 2단원 – 2.에너지', 'hC97Z5WcGm8', 'hs-integrated'),
  yt('10', '[5분 교과서] 통합과학2 2단원 – 1.생태계와 환경', '82z7VB1_sk4', 'hs-integrated'),
  yt('11', '[5분 교과서] 통합과학2 1단원 – 2.우리 주변의 변화', 'ZHInKbpDU88', 'hs-integrated'),
  yt('12', '[5분 교과서] 통합과학2 1단원 – 1.환경 변화와 생물다양성', 'Ig5nsl3-q1s', 'hs-integrated'),
  yt('13', '[5분 교과서] 통합과학1 3단원 – 3.생명 시스템', 'w8q5uTgzodA', 'hs-integrated'),
  yt('14', '[5분 교과서] 통합과학1 3단원 – 2.역학 시스템', 'w8CcaVN5-hA', 'hs-integrated'),
  yt('15', '[5분 교과서] 통합과학1 3단원 – 1.지구시스템', 'muabiEswBYM', 'hs-integrated'),
  yt('16', '[5분 교과서] 통합과학1 2단원 – 2.자연의 구성 물질', '3kvcZ8d6wQg', 'hs-integrated'),
  yt('17', '[5분 교과서] 통합과학1 2단원 – 1.원소의 생성과 규칙성', 'TyGc8GVl8z8', 'hs-integrated'),
  yt('18', '[5분 교과서] 통합과학1 1단원 – 2.측정표준과 정보', 'iszq2VeRVaI', 'hs-integrated'),
  yt('19', '[5분 교과서] 통합과학1 1단원 – 1.과학의 기본량', 'OcNlg3EjAsc', 'hs-integrated'),
  // 중등과학 3학년 (2015 개정)
  yt('20', '[5분 교과서] 중3 8단원 – 과학기술과 인류 문명', 'Kx4-hs0pFns', 'ms3'),
  yt('21', '[5분 교과서] 중3 7단원 – 별과 우주', 'nHxZhdZzvG8', 'ms3'),
  yt('22', '[5분 교과서] 중3 6단원 – 에너지 전환과 보존', '8xcwxG6SCz0', 'ms3'),
  yt('23', '[5분 교과서] 중3 5단원 – 생식과 유전', 'cDFFGMMfszk', 'ms3'),
  yt('24', '[5분 교과서] 중3 4단원 – 자극과 반응', 'mwFfeG0A94Q', 'ms3'),
  yt('25', '[5분 교과서] 중3 3단원 – 운동과 에너지', '0s52VHo3548', 'ms3'),
  yt('26', '[5분 교과서] 중3 2단원 – 기권과 날씨', 'jeibFo5cOtA', 'ms3'),
  yt('27', '[5분 교과서] 중3 1단원 – 화학 반응', 'kixD2TJmIYA', 'ms3'),
  // 중등과학 2학년 (2022 개정)
  yt('28', '[5분 교과서] 중2 8단원 – 별과 우주', 'PMd8x1C4tEw', 'ms2'),
  yt('29', '[5분 교과서] 중2 7단원 – 전기와 자기', 'F6aPfD0FBVY', 'ms2'),
  yt('30', '[5분 교과서] 중2 6단원 – 동물과 에너지', '7-MCarxpsJs', 'ms2'),
  yt('31', '[5분 교과서] 중2 5단원 – 식물과 에너지', 'R5mp2OqnTvs', 'ms2'),
  yt('32', '[5분 교과서] 중2 4단원 – 물질의 구성', 'WUZJ5dVVdpc', 'ms2'),
  yt('33', '[5분 교과서] 중2 3단원 – 빛과 파동', 'EP2retuONEs', 'ms2'),
  yt('34', '[5분 교과서] 중2 2단원 – 지권의 변화', 'VMxrpdgCLCU', 'ms2'),
  yt('35', '[5분 교과서] 중2 1단원 – 물질의 특성', 'c5BIzy6EJ8o', 'ms2'),
  // 중등과학 1학년 (2022 개정)
  yt('36', '[5분 교과서] 중1 7단원 – 태양계', 'LByvZVdKS54', 'ms1'),
  yt('37', '[5분 교과서] 중1 6단원 – 기체의 성질', 'RBxP-oUkXQM', 'ms1'),
  yt('38', '[5분 교과서] 중1 5단원 – 힘의 작용', 'so9aZZdUfQk', 'ms1'),
  yt('39', '[5분 교과서] 중1 4단원 – 물질의 상태변화', 'NV2Lfl7xYo8', 'ms1'),
  yt('40', '[5분 교과서] 중1 3단원 – 열', 'Yx1mUMheWcU', 'ms1'),
  yt('41', '[5분 교과서] 중1 2단원 – 생물의 구성과 다양성', 'xIIe15AWFTo', 'ms1'),
  yt('42', '[5분 교과서] 중1 1단원 – 과학과 인류의 지속 가능한 삶', 'mJdI4nmE2as', 'ms1'),
  // 초등과학 6학년 (2015 개정)
  yt('43', '초6 2학기 4단원 – 우리 몸의 구조와 기능', 'ewoVVxY3vIA', 'es6'),
  yt('44', '초6 2학기 5단원 – 에너지와 생활', 'HwpZHb5lRmw', 'es6'),
  yt('45', '초6 2학기 3단원 – 연소와 소화', 'kVyrUY5vgCc', 'es6'),
  yt('46', '초6 2학기 2단원 – 계절의 변화', 'J5Y1Gkp_4YQ', 'es6'),
  yt('47', '초6 2학기 1단원 – 전기의 이용', '04OKKaFzyHM', 'es6'),
  yt('48', '초6 1학기 4단원 – 빛과 렌즈', 'NcyERcAGWU8', 'es6'),
  yt('49', '초6 1학기 3단원 – 식물의 구조와 기능', '9HZnG2e64Ws', 'es6'),
  yt('50', '초6 1학기 2단원 – 여러 가지 기체', 'TgQYQBZUnYM', 'es6'),
  yt('51', '초6 1학기 1단원 – 지구와 달의 운동', 'li9r-K5KtE8', 'es6'),
  yt('52', '초6 1학기 과학자처럼 탐구하기', '8_uhnKF1kU8', 'es6'),
  // 초등과학 5학년 (2015 개정)
  yt('53', '초5 2학기 4단원 – 산과 염기', 'Bgbxk5y8HKI', 'es5'),
  yt('54', '초5 2학기 3단원 – 물체의 운동', 'klXNpOHyfaY', 'es5'),
  yt('55', '초5 2학기 2단원 – 날씨와 우리 생활', 'VMmgksDkdrA', 'es5'),
  yt('56', '초5 2학기 1단원 – 생물과 환경', 'nG0F7L2YuU4', 'es5'),
  yt('57', '초5 2학기 재미있는 탐구 생활', 'z5s8QMkhXt8', 'es5'),
  yt('58', '초5 1학기 4단원 – 다양한 생물과 우리 생활', 'blzYGEcN460', 'es5'),
  yt('59', '초5 1학기 3단원 – 용해와 용액', 'X-rfXCezRIY', 'es5'),
  yt('60', '초5 1학기 2단원 – 태양계와 별', 'm6wisejLVSc', 'es5'),
  yt('61', '초5 1학기 1단원 – 온도와 열', 'C1pp5dHs6Fk', 'es5'),
  yt('62', '초5 1학기 과학자처럼 탐구하기', 'MXuG4S4GpKo', 'es5'),
  // 초등과학 4학년 (2022 개정)
  yt('63', '초4 2학기 4단원 – 기후변화와 우리 생활', 'gie3XKPlpbw', 'es4'),
  yt('64', '초4 2학기 3단원 – 여러가지 기체', 'ZeyBzauIg44', 'es4'),
  yt('65', '초4 2학기 2단원 – 생물과 환경', 'hhJPbBcp7Oo', 'es4'),
  yt('66', '초4 2학기 1단원 – 밤하늘 관찰', 'p4gOk4OSTQg', 'es4'),
  yt('67', '초4 2학기 안전하게 탐구하기', 'Mt3M-wZFP4Y', 'es4'),
  yt('68', '초4 1학기 4단원 – 다양한 생물과 우리 생활', 'vDd3n-vH33k', 'es4'),
  yt('69', '초4 1학기 3단원 – 땅의 변화', '6CE0-Yxh8H8', 'es4'),
  yt('70', '초4 1학기 2단원 – 물의 상태 변화', '1ZBEjkc7b0U', 'es4'),
  yt('71', '초4 1학기 1단원 – 자석의 이용', 'ytcTVBiKOq0', 'es4'),
  yt('72', '초4 1학기 안전하게 탐구하기', 'XbQV1vqBoTQ', 'es4'),
  // 초등과학 3학년 (2022 개정)
  yt('73', '초3 2학기 안전하게 탐구하기', 'MvT1cHJrqbc', 'es3'),
  yt('74', '초3 2학기 4단원 – 감염병과 건강한 생활', 'Y0qqWb2lxX0', 'es3'),
  yt('75', '초3 2학기 3단원 – 소리의 성질', '3AHQyjiGZ4s', 'es3'),
  yt('76', '초3 2학기 2단원 – 지구와 바다', '3c18BXImtA4', 'es3'),
  yt('77', '초3 2학기 1단원 – 물체와 물질', 'FJilUgo5Vn8', 'es3'),
  yt('78', '초3 1학기 안전하게 탐구하기', 'KCCMANpuMh8', 'es3'),
  yt('79', '초3 1학기 4단원 – 생물의 한살이', '_vRduDNtjrw', 'es3'),
  yt('80', '초3 1학기 3단원 – 식물의 생활', 'QF9JZWj64xQ', 'es3'),
  yt('81', '초3 1학기 2단원 – 동물의 생활', '76b8eLyYuII', 'es3'),
  yt('82', '초3 1학기 1단원 – 힘과 우리 생활', 'T53QVO4xz5A', 'es3'),
]
