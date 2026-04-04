// 시뮬레이션 데이터 (통합과학1 기반)
export interface Simulation {
  id: string
  title: string
  description: string
  subject: 'physics' | 'chemistry' | 'biology' | 'earth'
  unit: string
  chapter: string
  icon: string
  file?: string
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
            label: 'I. 과학의 기초',
            children: [
              { label: '1. 과학의 기본량', filterId: 'basic-quantities' },
              { label: '2. 측정 표준과 정보', filterId: 'measurement-info' },
            ]
          },
          {
            label: 'II. 물질과 규칙성',
            children: [
              { label: '1. 원소의 생성과 규칙성', filterId: 'element-creation' },
              { label: '2. 자연의 구성 물질', filterId: 'natural-materials' },
            ]
          },
          {
            label: 'III. 시스템과 상호작용',
            children: [
              { label: '1. 지구시스템', filterId: 'earth-system' },
              { label: '2. 역학 시스템', filterId: 'mechanics' },
              { label: '3. 생명 시스템', filterId: 'life-system' },
            ]
          },
        ]
      },
      {
        label: '통합과학2',
        children: [
          {
            label: 'I. 변화와 다양성',
            children: [
              { label: '1. 환경 변화와 생물다양성', filterId: 'sci2-env-bio' },
              { label: '2. 우리 주변의 변화', filterId: 'sci2-change' },
            ]
          },
          {
            label: 'II. 환경과 에너지',
            children: [
              { label: '1. 생태계와 환경', filterId: 'sci2-ecosystem' },
              { label: '2. 에너지', filterId: 'sci2-energy' },
            ]
          },
          {
            label: 'III. 과학과 미래 사회',
            children: [
              { label: '1. 과학의 유용성과 빅데이터', filterId: 'sci2-bigdata' },
              { label: '2. 과학기술의 발전과 윤리', filterId: 'sci2-ethics' },
            ]
          },
        ]
      },
      {
        label: '물리학',
        children: [
          {
            label: 'I. 힘과 에너지',
            children: [
              { label: '1. 힘과 운동', filterId: 'phys-force-motion' },
              { label: '2. 에너지와 열', filterId: 'phys-energy-heat' },
            ]
          },
          {
            label: 'II. 전기와 자기',
            children: [
              { label: '1. 전기장과 전기 에너지', filterId: 'phys-electric' },
              { label: '2. 전기와 자기의 상호작용', filterId: 'phys-magnetic' },
            ]
          },
          {
            label: 'III. 빛과 물질',
            children: [
              { label: '1. 빛과 물질의 이중성', filterId: 'phys-light' },
              { label: '2. 원자와 에너지 준위', filterId: 'phys-atom' },
            ]
          },
        ]
      },
      {
        label: '역학과 에너지',
        children: [
          {
            label: 'I. 시공간과 운동',
            children: [
              { label: '1. 힘의 합성과 운동', filterId: 'mech-force' },
              { label: '2. 여러 가지 운동', filterId: 'mech-various' },
              { label: '3. 중력과 에너지', filterId: 'mech-gravity' },
              { label: '4. 등가 원리와 시공간', filterId: 'mech-relativity' },
            ]
          },
          {
            label: 'II. 열과 에너지',
            children: [
              { label: '1. 열 전달과 열팽창', filterId: 'mech-heat-transfer' },
              { label: '2. 열역학', filterId: 'mech-thermo' },
            ]
          },
          {
            label: 'III. 탄성파와 소리',
            children: [
              { label: '1. 진동과 파동', filterId: 'mech-wave' },
              { label: '2. 소리와 악기', filterId: 'mech-sound' },
            ]
          },
        ]
      },
    ]
  }
]

// 시뮬레이션 데이터 (통합과학1 2022 개정 기반) — 전체 35개
export const simulations: Simulation[] = [
  // ── I. 과학의 기초 > 1. 과학의 기본량 ──
  { id: '01', title: '미시 세계와 거시 세계 크기 비교', description: '양성자(10⁻¹⁵m)부터 관측 가능한 우주(10²⁶m)까지 14개 스케일을 3D로 탐험하세요.', subject: 'physics', unit: 'I. 과학의 기초', chapter: '1. 과학의 기본량', icon: '🔬', file: '01_micro_macro_scale.html' },
  // ── I. 과학의 기초 > 2. 측정 표준과 정보 ──
  { id: '02', title: '시간과 길이 측정의 발전', description: '앙부일구부터 세슘 원자시계까지, 측정 도구의 발전을 3D로 체험하세요.', subject: 'physics', unit: 'I. 과학의 기초', chapter: '2. 측정 표준과 정보', icon: '⏱️', file: '02_time_length_measurement.html' },
  { id: '03', title: '아날로그 vs 디지털 신호 변환', description: '아날로그 신호를 디지털로 변환하는 샘플링 과정을 시각적으로 확인하세요.', subject: 'physics', unit: 'I. 과학의 기초', chapter: '2. 측정 표준과 정보', icon: '📡', file: '03_analog_digital_signal.html' },
  { id: '04', title: '센서와 신호 측정', description: '빛 센서, 온도 센서, 열화상 카메라의 원리를 3D 시나리오로 체험하세요.', subject: 'physics', unit: 'I. 과학의 기초', chapter: '2. 측정 표준과 정보', icon: '🌡️', file: '04_sensor_signal_measurement.html' },
  // ── II. 물질과 규칙성 > 1. 원소의 생성과 규칙성 ──
  { id: '05', title: '스펙트럼과 원소 분석', description: '프리즘으로 빛을 분산시키고, 원소별 스펙트럼을 비교 분석하세요.', subject: 'chemistry', unit: 'II. 물질과 규칙성', chapter: '1. 원소의 생성과 규칙성', icon: '🌈', file: '05_spectrum_element_analysis.html' },
  { id: '06', title: '빅뱅과 우주 진화', description: '빅뱅부터 별과 은하 형성까지, 138억 년 우주 진화를 6단계로 체험하세요.', subject: 'physics', unit: 'II. 물질과 규칙성', chapter: '1. 원소의 생성과 규칙성', icon: '💥', file: '06_bigbang_universe_evolution.html' },
  { id: '07', title: '별의 진화와 원소 생성', description: '성운에서 초신성까지, 별의 일생과 원소 생성 과정을 3D로 탐험하세요.', subject: 'physics', unit: 'II. 물질과 규칙성', chapter: '1. 원소의 생성과 규칙성', icon: '⭐', file: '07_stellar_evolution_elements.html' },
  { id: '08', title: '태양계 형성 과정', description: '태양계 성운의 수축부터 8개 행성의 형성까지, 태양계 탄생 과정을 단계별 3D로 살펴보세요.', subject: 'physics', unit: 'II. 물질과 규칙성', chapter: '1. 원소의 생성과 규칙성', icon: '🪐', file: '08_solar_system_formation.html' },
  { id: '09', title: '지구의 형성과 분화', description: '미행성체 충돌, 마그마 바다, 층 분화, 원시 바다와 생명체 탄생까지 원시 지구의 역사를 3D로 체험하세요.', subject: 'earth', unit: 'II. 물질과 규칙성', chapter: '1. 원소의 생성과 규칙성', icon: '🌏', file: '09_earth_formation_differentiation.html' },
  { id: '10', title: '주기율표와 전자 배치', description: '1~18번 원소를 클릭하며 전자 껍질과 원자가 전자의 규칙성을 3D 보어 모형으로 확인하세요.', subject: 'chemistry', unit: 'II. 물질과 규칙성', chapter: '1. 원소의 생성과 규칙성', icon: '⚛️', file: 'periodic_table_electron_config_sim.html' },
  { id: '11', title: '알칼리 금속과 할로젠의 반응성', description: 'Li, Na, K의 물 반응성과 F₂, Cl₂, Br₂, I₂의 상태를 좌우 분할 3D 장면으로 비교하세요.', subject: 'chemistry', unit: 'II. 물질과 규칙성', chapter: '1. 원소의 생성과 규칙성', icon: '🧪', file: 'alkali_metal_halogen_reactivity_sim.html' },
  // ── II. 물질과 규칙성 > 2. 자연의 구성 물질 ──
  { id: '12', title: '이온 결합 형성', description: '전자 이동, 정전기적 인력, NaCl 결정 구조를 3단계 인터랙션으로 살펴보세요.', subject: 'chemistry', unit: 'II. 물질과 규칙성', chapter: '2. 자연의 구성 물질', icon: '🔗', file: 'ionic_bonding_formation_sim.html' },
  { id: '13', title: '공유 결합 형성', description: 'H₂O, O₂, HF를 전환하며 공유 전자쌍과 비공유 전자쌍을 3D로 비교하세요.', subject: 'chemistry', unit: 'II. 물질과 규칙성', chapter: '2. 자연의 구성 물질', icon: '🧬', file: 'covalent_bonding_formation_sim.html' },
  { id: '14', title: '이온 결합 vs 공유 결합 전기 전도성', description: '이온 결합 물질과 공유 결합 물질의 전기 전도성 차이를 실험으로 비교하세요.', subject: 'chemistry', unit: 'II. 물질과 규칙성', chapter: '2. 자연의 구성 물질', icon: '⚡', file: 'ionic_covalent_conductivity_sim.html' },
  { id: '15', title: '규산염 사면체와 광물 구조', description: '규산염 사면체가 산소를 공유하며 다양한 광물 구조로 바뀌는 과정을 3D로 비교하세요.', subject: 'earth', unit: 'II. 물질과 규칙성', chapter: '2. 자연의 구성 물질', icon: '💎', file: 'silicate_tetrahedra_mineral_sim.html' },
  { id: '16', title: '단백질 형성 과정', description: '아미노산의 결합, 폴리펩타이드 형성, 접힘에 따른 단백질 구조 차이를 3D로 탐구하세요.', subject: 'biology', unit: 'II. 물질과 규칙성', chapter: '2. 자연의 구성 물질', icon: '🧫', file: 'protein_formation_sim.html' },
  { id: '17', title: 'DNA 이중나선 구조', description: 'DNA 이중나선과 상보적 염기쌍 규칙을 3D로 살펴보세요.', subject: 'biology', unit: 'II. 물질과 규칙성', chapter: '2. 자연의 구성 물질', icon: '🧬', file: 'dna_double_helix_sim.html' },
  { id: '18', title: '도체, 반도체, 부도체의 전기적 성질', description: '클립, 연필심, 지우개 등을 회로에 넣어 전류와 에너지 띠 변화를 비교하세요.', subject: 'physics', unit: 'II. 물질과 규칙성', chapter: '2. 자연의 구성 물질', icon: '💡', file: 'conductor_semiconductor_insulator_sim.html' },
  // ── III. 시스템과 상호작용 > 1. 지구시스템 ──
  { id: '19', title: '기권의 층상 구조', description: '대류권부터 열권까지의 층상 구조를 3D 지구와 높이-기온 그래프로 탐구하세요.', subject: 'earth', unit: 'III. 시스템과 상호작용', chapter: '1. 지구시스템', icon: '🌤️', file: 'atmosphere_layers_sim.html' },
  { id: '20', title: '수권의 층상 구조', description: '혼합층·수온 약층·심해층을 3D 단면과 깊이-수온 그래프로 비교하세요.', subject: 'earth', unit: 'III. 시스템과 상호작용', chapter: '1. 지구시스템', icon: '🌊', file: '20_ocean_layers_sim.html' },
  { id: '21', title: '지구 내부 구조', description: '쐐기 절단 단면으로 지각, 맨틀, 외핵, 내핵을 비교하고 깊이별 정보를 탐구하세요.', subject: 'earth', unit: 'III. 시스템과 상호작용', chapter: '1. 지구시스템', icon: '🌍', file: 'earth_internal_structure_sim.html' },
  { id: '22', title: '물의 순환', description: '태양 에너지에 의한 증발·응결·강수·지표 흐름을 하나의 3D 풍경에서 탐구하세요.', subject: 'earth', unit: 'III. 시스템과 상호작용', chapter: '1. 지구시스템', icon: '💧', file: 'water_cycle_sim.html' },
  { id: '23', title: '탄소 순환', description: '대기, 생물, 해양, 지권 사이의 탄소 순환을 3D로 시각화합니다.', subject: 'earth', unit: 'III. 시스템과 상호작용', chapter: '1. 지구시스템', icon: '♻️', file: 'carbon_cycle_sim.html' },
  { id: '24', title: '지구시스템 상호작용', description: '기권, 수권, 지권, 생물권의 상호작용을 시각화합니다.', subject: 'earth', unit: 'III. 시스템과 상호작용', chapter: '1. 지구시스템', icon: '🌐', file: 'earth_system_interaction_sim.html' },
  { id: '25', title: '판 구조론과 판의 경계', description: '3D 지구 위 실제 판 경계와 6개 대표 사례 단면도를 연결해 비교하세요.', subject: 'earth', unit: 'III. 시스템과 상호작용', chapter: '1. 지구시스템', icon: '🗺️', file: 'plate_tectonics_boundaries_sim.html' },
  { id: '26', title: '화산과 지진', description: '화산 분출 4단계와 지진파 전파를 3D로 체험하세요.', subject: 'earth', unit: 'III. 시스템과 상호작용', chapter: '1. 지구시스템', icon: '🌋', file: '26_volcano_earthquake_sim.html' },
  // ── III. 시스템과 상호작용 > 2. 역학 시스템 ──
  { id: '27', title: '자유 낙하 운동', description: '진공과 공기 중에서의 자유 낙하를 비교하는 시뮬레이션입니다.', subject: 'physics', unit: 'III. 시스템과 상호작용', chapter: '2. 역학 시스템', icon: '🍎', file: 'free_fall_motion_sim.html' },
  { id: '28', title: '수평 방향 투사체 운동', description: '발사 각도와 속력에 따른 포물선 궤적을 3D로 확인하세요.', subject: 'physics', unit: 'III. 시스템과 상호작용', chapter: '2. 역학 시스템', icon: '🎯', file: 'projectile_motion_sim.html' },
  { id: '29', title: '뉴턴의 대포', description: '발사 속력에 따라 포탄 궤도가 바뀌는 모습을 3D 지구와 함께 탐구하세요.', subject: 'physics', unit: 'III. 시스템과 상호작용', chapter: '2. 역학 시스템', icon: '🚀', file: 'newtons_cannon_sim.html' },
  { id: '30', title: '달에서의 중력', description: '지구와 달의 중력 차이를 비교 실험으로 체험하세요.', subject: 'physics', unit: 'III. 시스템과 상호작용', chapter: '2. 역학 시스템', icon: '🌙', file: 'moon_gravity_comparison_sim.html' },
  { id: '31', title: '관성과 운동량', description: '급출발 버스와 운동량 비교 레일을 통해 관성과 질량×속도의 관계를 탐구하세요.', subject: 'physics', unit: 'III. 시스템과 상호작용', chapter: '2. 역학 시스템', icon: '🚌', file: 'inertia_momentum_sim.html' },
  { id: '32', title: '충격량과 안전장치', description: '달걀 낙하 실험과 다양한 안전장치를 함께 보며 충돌 시간과 힘의 관계를 탐구하세요.', subject: 'physics', unit: 'III. 시스템과 상호작용', chapter: '2. 역학 시스템', icon: '🥚', file: 'impulse_safety_device_sim.html' },
  { id: 'structural-stability', title: '구조물의 안정성', description: '다양한 구조물에 힘을 가해 안정성을 테스트하는 인터랙티브 시뮬레이션.', subject: 'physics', unit: 'III. 시스템과 상호작용', chapter: '2. 역학 시스템', icon: '🏗️', file: 'structural_stability_sim.html' },
  // ── III. 시스템과 상호작용 > 3. 생명 시스템 ──
  { id: '33', title: '세포 구조와 기능', description: '동물 세포와 식물 세포를 전환하며 소기관의 구조와 기능을 3D로 비교하세요.', subject: 'biology', unit: 'III. 시스템과 상호작용', chapter: '3. 생명 시스템', icon: '🔬', file: 'cell_structure_function_sim.html' },
  { id: '34', title: '물질대사와 효소', description: '효소-기질 결합 3D 모형과 온도·pH 활성 그래프를 함께 탐구하세요.', subject: 'biology', unit: 'III. 시스템과 상호작용', chapter: '3. 생명 시스템', icon: '🧫', file: 'metabolism_enzyme_sim.html' },

  // ════════════════════════════════════════
  // 통합과학2
  // ════════════════════════════════════════

  // ── I. 변화와 다양성 > 1. 환경 변화와 생물다양성 ──
  { id: 'sci2-01', title: '지질 시대 타임라인과 생물 변화', description: '4개 지질 시대의 3D 풍경 전환과 대륙이동, 대표 생물을 체험하세요.', subject: 'earth', unit: 'I. 변화와 다양성', chapter: '1. 환경 변화와 생물다양성', icon: '🦕', file: 'sci2_01_geological_timeline.html' },
  { id: 'sci2-02', title: '화석의 형성 과정', description: '생물이 화석이 되는 과정을 단계별 3D 애니메이션으로 살펴보세요.', subject: 'earth', unit: 'I. 변화와 다양성', chapter: '1. 환경 변화와 생물다양성', icon: '🦴', file: 'sci2_02_fossil_formation.html' },
  { id: 'sci2-03', title: '대멸종의 원인과 그 이후의 변화', description: '5대 대멸종 사건과 해양 생물 과의 수 변화를 시각화합니다.', subject: 'earth', unit: 'I. 변화와 다양성', chapter: '1. 환경 변화와 생물다양성', icon: '☄️', file: 'sci2_03_mass_extinction.html' },
  { id: 'sci2-04', title: '변이와 자연선택 — 딱정벌레 시뮬레이션', description: '딱정벌레 색깔 변이에 대한 자연선택 과정을 모의실험하세요.', subject: 'biology', unit: 'I. 변화와 다양성', chapter: '1. 환경 변화와 생물다양성', icon: '🐛', file: 'sci2_04_natural_selection_beetles.html' },
  { id: 'sci2-05', title: '자연선택 모의실험', description: '초콜릿 실험으로 자연선택 과정을 직접 체험하세요.', subject: 'biology', unit: 'I. 변화와 다양성', chapter: '1. 환경 변화와 생물다양성', icon: '🧬', file: 'sci2_05_natural_selection_experiment.html' },
  { id: 'sci2-06', title: '갈라파고스 핀치의 적응 방산', description: '핀치 부리의 다양한 형태와 환경 적응을 3D로 비교하세요.', subject: 'biology', unit: 'I. 변화와 다양성', chapter: '1. 환경 변화와 생물다양성', icon: '🐦', file: 'sci2_06_galapagos_finch.html' },
  { id: 'sci2-07', title: '생물다양성의 세 가지 요소', description: '유전적, 종, 생태계 다양성을 3D로 비교하세요.', subject: 'biology', unit: 'I. 변화와 다양성', chapter: '1. 환경 변화와 생물다양성', icon: '🌿', file: 'sci2_07_biodiversity_three_elements.html' },
  // ── I. 변화와 다양성 > 2. 우리 주변의 변화 ──
  { id: 'sci2-08', title: '광합성·연소·제련 — 산소의 역할', description: '광합성, 연소, 제련에서 산소가 하는 역할을 입자 모형으로 비교하세요.', subject: 'chemistry', unit: 'I. 변화와 다양성', chapter: '2. 우리 주변의 변화', icon: '🔥', file: 'sci2_08_photosynthesis_combustion_smelting.html' },
  { id: 'sci2-09', title: '산화와 환원 — 산소 이동 입자 모형', description: '구리판 가열 실험으로 산소 이동 과정을 입자 모형으로 확인하세요.', subject: 'chemistry', unit: 'I. 변화와 다양성', chapter: '2. 우리 주변의 변화', icon: '⚗️', file: 'sci2_09_oxidation_reduction_oxygen.html' },
  { id: 'sci2-10', title: '산화와 환원 — 전자 이동 입자 모형', description: '아연+황산구리 반응에서 전자 이동을 입자 모형으로 확인하세요.', subject: 'chemistry', unit: 'I. 변화와 다양성', chapter: '2. 우리 주변의 변화', icon: '⚡', file: 'sci2_10_oxidation_reduction_electron.html' },
  { id: 'sci2-11', title: '산과 염기 — 이온화와 지시약', description: 'H⁺/OH⁻ 이온 모형과 리트머스/BTB 색 변화를 확인하세요.', subject: 'chemistry', unit: 'I. 변화와 다양성', chapter: '2. 우리 주변의 변화', icon: '🧪', file: 'sci2_11_acid_base_ionization.html' },
  { id: 'sci2-12', title: '중화 반응과 온도 변화', description: '산과 염기 혼합 시 온도/BTB 변화를 실험으로 확인하세요.', subject: 'chemistry', unit: 'I. 변화와 다양성', chapter: '2. 우리 주변의 변화', icon: '🌡️', file: 'sci2_12_neutralization_reaction.html' },
  { id: 'sci2-13', title: '에너지의 흡수와 방출', description: '흡열/발열 반응 비교, 냉찜질팩/손난로의 원리를 탐구하세요.', subject: 'chemistry', unit: 'I. 변화와 다양성', chapter: '2. 우리 주변의 변화', icon: '🧊', file: 'sci2_13_energy_absorption_release.html' },
  { id: 'sci2-14', title: '발열 반응을 이용한 음식 조리', description: '산화 칼슘+물 반응을 이용한 발열 조리 실험을 체험하세요.', subject: 'chemistry', unit: 'I. 변화와 다양성', chapter: '2. 우리 주변의 변화', icon: '🍳', file: 'sci2_14_exothermic_cooking.html' },
  // ── II. 환경과 에너지 > 1. 생태계와 환경 ──
  { id: 'sci2-15', title: '생태계 구성요소와 상호 관계', description: '연못 생태계의 구성요소와 상호 관계를 3D로 탐구하세요.', subject: 'biology', unit: 'II. 환경과 에너지', chapter: '1. 생태계와 환경', icon: '🏞️', file: 'sci2_15_ecosystem_components.html' },
  { id: 'sci2-16', title: '먹이 관계와 에너지 피라미드', description: '먹이그물과 에너지 피라미드를 3D로 시각화합니다.', subject: 'biology', unit: 'II. 환경과 에너지', chapter: '1. 생태계와 환경', icon: '🔺', file: 'sci2_16_food_web_energy_pyramid.html' },
  { id: 'sci2-17', title: '생태계 평형과 개체군 변동', description: '카이바브 고원 늑대-사슴 시뮬레이션으로 생태계 평형을 탐구하세요.', subject: 'biology', unit: 'II. 환경과 에너지', chapter: '1. 생태계와 환경', icon: '🐺', file: 'sci2_17_ecosystem_equilibrium.html' },
  { id: 'sci2-18', title: '온실 효과와 지구 온난화', description: 'CO₂ 농도-기온 그래프와 온실효과 메커니즘을 시각화합니다.', subject: 'earth', unit: 'II. 환경과 에너지', chapter: '1. 생태계와 환경', icon: '🌡️', file: 'sci2_18_greenhouse_effect.html' },
  { id: 'sci2-19', title: '엘니뇨와 라니냐', description: '해수면 온도 변화와 대기 순환 패턴을 3D로 비교하세요.', subject: 'earth', unit: 'II. 환경과 에너지', chapter: '1. 생태계와 환경', icon: '🌊', file: 'sci2_19_el_nino_la_nina.html' },
  { id: 'sci2-20', title: '기후 변화와 생태계 영향', description: '알프스/아마존 환경 변화가 생태계에 미치는 영향을 탐구하세요.', subject: 'earth', unit: 'II. 환경과 에너지', chapter: '1. 생태계와 환경', icon: '🏔️', file: 'sci2_20_climate_change_ecosystem.html' },
  // ── II. 환경과 에너지 > 2. 에너지 ──
  { id: 'sci2-21', title: '태양 에너지의 생성과 전환', description: '수소 핵융합에서 광합성/바람/물 순환까지 에너지 흐름을 탐구하세요.', subject: 'physics', unit: 'II. 환경과 에너지', chapter: '2. 에너지', icon: '☀️', file: 'sci2_21_solar_energy_conversion.html' },
  { id: 'sci2-22', title: '전자기 유도와 발전기 원리', description: '발전기 구조와 전자기 유도 원리를 3D로 체험하세요.', subject: 'physics', unit: 'II. 환경과 에너지', chapter: '2. 에너지', icon: '⚡', file: 'sci2_22_electromagnetic_induction.html' },
  { id: 'sci2-23', title: '화력 발전과 핵발전 비교', description: '화력/핵 발전의 에너지 전환 경로를 3D로 비교하세요.', subject: 'physics', unit: 'II. 환경과 에너지', chapter: '2. 에너지', icon: '🏭', file: 'sci2_23_thermal_nuclear_power.html' },
  { id: 'sci2-24', title: '신재생 에너지 기술 비교', description: '태양광/풍력/수력/지열 발전을 비교하세요.', subject: 'physics', unit: 'II. 환경과 에너지', chapter: '2. 에너지', icon: '🌱', file: 'sci2_24_renewable_energy.html' },
  { id: 'sci2-25', title: '자가발전 학교 설계', description: '신재생 에너지로 학교를 설계하는 탐구 활동입니다.', subject: 'physics', unit: 'II. 환경과 에너지', chapter: '2. 에너지', icon: '🏫', file: 'sci2_25_self_powered_school.html' },
  // ── III. 과학과 미래 사회 ──
  { id: 'sci2-26', title: '감염병 진단과 PCR', description: 'PCR 핵산 증폭 과정과 자가진단 원리를 3D로 살펴보세요.', subject: 'biology', unit: 'III. 과학과 미래 사회', chapter: '1. 과학의 유용성과 빅데이터', icon: '🧬', file: 'sci2_26_pcr_diagnosis.html' },
  { id: 'sci2-27', title: '빅데이터의 활용', description: '감염병 전파 경로 추적과 데이터 시각화를 체험하세요.', subject: 'physics', unit: 'III. 과학과 미래 사회', chapter: '1. 과학의 유용성과 빅데이터', icon: '📊', file: 'sci2_27_bigdata_application.html' },
  { id: 'sci2-28', title: '과학기술의 양면성과 윤리', description: '유전자 가위, AI 윤리 등 과학기술의 유용성과 문제점을 탐구하세요.', subject: 'physics', unit: 'III. 과학과 미래 사회', chapter: '2. 과학기술의 발전과 윤리', icon: '⚖️', file: 'sci2_28_science_technology_ethics.html' },

  // ════════════════════════════════════════
  // 고등 물리학
  // ════════════════════════════════════════

  // ── I. 힘과 에너지 > 1. 힘과 운동 ──
  { id: 'phys-01', title: '알짜힘과 힘의 평형', description: '여러 힘의 합성과 평형 조건을 3D로 탐구하세요.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '1. 힘과 운동', icon: '⚖️', file: 'phys_01_net_force_equilibrium.html' },
  { id: 'phys-02', title: '돌림힘과 돌림힘의 평형', description: '시소와 저울로 돌림힘의 평형을 체험하세요.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '1. 힘과 운동', icon: '🔄', file: 'phys_02_torque_equilibrium.html' },
  { id: 'phys-03', title: '구조물의 안정성 (무게중심)', description: '무게중심 위치와 바닥 면적에 따른 구조물의 안정성을 3D로 체험하세요.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '1. 힘과 운동', icon: '🏗️', file: 'structural_stability_sim.html' },
  { id: 'phys-04', title: '가속도 법칙 (뉴턴 제2법칙)', description: 'F=ma 관계를 수레 실험으로 확인하세요.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '1. 힘과 운동', icon: '🏎️', file: 'phys_04_newtons_second_law.html' },
  { id: 'phys-05', title: '등가속도 직선 운동 그래프', description: 'v-t, s-t 그래프와 운동 관계식을 탐구하세요.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '1. 힘과 운동', icon: '📈', file: 'phys_05_uniform_acceleration_graphs.html' },
  { id: 'phys-06', title: '등가속도 운동과 교통안전', description: '제동 거리와 안전장치의 원리를 시뮬레이션합니다.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '1. 힘과 운동', icon: '🚗', file: 'phys_06_stopping_distance_safety.html' },
  { id: 'phys-07', title: '작용 반작용 법칙', description: '로켓 추진과 힘센서 실험으로 뉴턴 제3법칙을 확인하세요.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '1. 힘과 운동', icon: '🚀', file: 'phys_07_action_reaction.html' },
  { id: 'phys-08', title: '운동량 보존 법칙', description: '수레 충돌 실험으로 운동량 보존을 확인하세요.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '1. 힘과 운동', icon: '💥', file: 'phys_08_momentum_conservation.html' },
  // ── I. 힘과 에너지 > 2. 에너지와 열 ──
  { id: 'phys-09', title: '일과 운동 에너지', description: 'W=Fs와 운동에너지 정리를 체험하세요.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '2. 에너지와 열', icon: '⚡', file: 'phys_09_work_kinetic_energy.html' },
  { id: 'phys-10', title: '역학적 에너지 보존', description: '롤러코스터와 진자로 에너지 보존을 확인하세요.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '2. 에너지와 열', icon: '🎢', file: 'phys_10_mechanical_energy_conservation.html' },
  { id: 'phys-11', title: '역학적 에너지와 열에너지 전환', description: '마찰과 줄의 실험으로 에너지 전환을 탐구하세요.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '2. 에너지와 열', icon: '🔥', file: 'phys_11_mechanical_thermal_energy.html' },
  { id: 'phys-12', title: '열기관과 에너지 전환', description: '증기 기관의 열→역학 에너지 전환을 시각화합니다.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '2. 에너지와 열', icon: '🏭', file: 'phys_12_heat_engine.html' },
  { id: 'phys-13', title: '에너지 효율과 영구 기관', description: '에너지 효율 계산과 영구 기관의 불가능성을 탐구하세요.', subject: 'physics', unit: 'I. 힘과 에너지', chapter: '2. 에너지와 열', icon: '♻️', file: 'phys_13_energy_efficiency.html' },
  // ── II. 전기와 자기 > 1. 전기장과 전기 에너지 ──
  { id: 'phys-14', title: '전기장과 전기력선', description: '쿨롱 법칙과 점전하 주위 전기장을 시각화합니다.', subject: 'physics', unit: 'II. 전기와 자기', chapter: '1. 전기장과 전기 에너지', icon: '⚡', file: 'phys_14_electric_field_lines.html' },
  { id: 'phys-15', title: '전위와 전위차', description: '등전위면과 전위차를 3D로 탐구하세요.', subject: 'physics', unit: 'II. 전기와 자기', chapter: '1. 전기장과 전기 에너지', icon: '🔋', file: 'phys_15_electric_potential.html' },
  { id: 'phys-16', title: '옴의 법칙과 소비 전력', description: 'V=IR, P=VI 관계를 회로 실험으로 확인하세요.', subject: 'physics', unit: 'II. 전기와 자기', chapter: '1. 전기장과 전기 에너지', icon: '💡', file: 'phys_16_ohms_law_power.html' },
  { id: 'phys-17', title: '축전기의 원리와 활용', description: 'C=Q/V와 유전체, 에너지 저장을 탐구하세요.', subject: 'physics', unit: 'II. 전기와 자기', chapter: '1. 전기장과 전기 에너지', icon: '🔌', file: 'phys_17_capacitor.html' },
  { id: 'phys-18', title: '전기 에너지와 안전', description: '접지, 차단기, 감전 방지를 시뮬레이션합니다.', subject: 'physics', unit: 'II. 전기와 자기', chapter: '1. 전기장과 전기 에너지', icon: '⚠️', file: 'phys_18_electrical_safety.html' },
  // ── II. 전기와 자기 > 2. 전기와 자기의 상호작용 ──
  { id: 'phys-19', title: '자성체의 종류', description: '강자성, 상자성, 반자성체를 비교하세요.', subject: 'physics', unit: 'II. 전기와 자기', chapter: '2. 전기와 자기의 상호작용', icon: '🧲', file: 'phys_19_magnetic_materials.html' },
  { id: 'phys-20', title: '전류에 의한 자기장', description: '직선/원형/솔레노이드 전류의 자기장을 시각화합니다.', subject: 'physics', unit: 'II. 전기와 자기', chapter: '2. 전기와 자기의 상호작용', icon: '🔄', file: 'phys_20_current_magnetic_field.html' },
  { id: 'phys-21', title: '전동기 원리', description: '전류가 자기장에서 받는 힘으로 회전하는 원리를 체험하세요.', subject: 'physics', unit: 'II. 전기와 자기', chapter: '2. 전기와 자기의 상호작용', icon: '⚙️', file: 'phys_21_electric_motor.html' },
  { id: 'phys-22', title: '전자기 유도', description: '자석과 코일로 유도 전류를 생성하는 패러데이 법칙을 탐구하세요.', subject: 'physics', unit: 'II. 전기와 자기', chapter: '2. 전기와 자기의 상호작용', icon: '🌀', file: 'phys_22_electromagnetic_induction.html' },
  { id: 'phys-23', title: '상호 유도와 무선 충전', description: '무선 충전기, NFC, 인덕션의 원리를 탐구하세요.', subject: 'physics', unit: 'II. 전기와 자기', chapter: '2. 전기와 자기의 상호작용', icon: '📱', file: 'phys_23_mutual_induction_wireless.html' },
  // ── III. 빛과 물질 > 1. 빛과 물질의 이중성 ──
  { id: 'phys-24', title: '빛의 이중 슬릿 간섭', description: '영의 실험으로 보강/상쇄 간섭을 확인하세요.', subject: 'physics', unit: 'III. 빛과 물질', chapter: '1. 빛과 물질의 이중성', icon: '🌈', file: 'phys_24_double_slit_interference.html' },
  { id: 'phys-25', title: '빛의 굴절과 전반사', description: '스넬 법칙과 광섬유 원리를 탐구하세요.', subject: 'physics', unit: 'III. 빛과 물질', chapter: '1. 빛과 물질의 이중성', icon: '💎', file: 'phys_25_refraction_total_reflection.html' },
  { id: 'phys-26', title: '광전 효과와 빛의 입자성', description: 'E=hf와 광전류를 실험으로 확인하세요.', subject: 'physics', unit: 'III. 빛과 물질', chapter: '1. 빛과 물질의 이중성', icon: '☀️', file: 'phys_26_photoelectric_effect.html' },
  { id: 'phys-27', title: '물질파와 전자 회절', description: '드브로이 λ=h/mv와 전자 회절을 시각화합니다.', subject: 'physics', unit: 'III. 빛과 물질', chapter: '1. 빛과 물질의 이중성', icon: '🌊', file: 'phys_27_matter_wave_electron_diffraction.html' },
  // ── III. 빛과 물질 > 2. 원자와 에너지 준위 ──
  { id: 'phys-28', title: '보어 원자 모형과 수소 스펙트럼', description: '에너지 준위와 선 스펙트럼을 3D로 탐구하세요.', subject: 'physics', unit: 'III. 빛과 물질', chapter: '2. 원자와 에너지 준위', icon: '⚛️', file: 'phys_28_bohr_model_hydrogen_spectrum.html' },
  { id: 'phys-29', title: '에너지띠와 반도체', description: '전도띠/띠틈과 n형/p형 도핑을 시각화합니다.', subject: 'physics', unit: 'III. 빛과 물질', chapter: '2. 원자와 에너지 준위', icon: '🔬', file: 'phys_29_energy_band_semiconductor.html' },
  { id: 'phys-30', title: 'p-n 접합 다이오드와 LED', description: '정류 작용과 발광 원리를 탐구하세요.', subject: 'physics', unit: 'III. 빛과 물질', chapter: '2. 원자와 에너지 준위', icon: '💡', file: 'phys_30_pn_junction_diode_led.html' },

  // ════════════════════════════════════════
  // 역학과 에너지
  // ════════════════════════════════════════

  // ── I. 시공간과 운동 ──
  { id: 'mech-01', title: '벡터의 합성과 분해', description: '평행사변형 법칙으로 힘의 합성과 분해를 탐구하세요.', subject: 'physics', unit: 'I. 시공간과 운동', chapter: '1. 힘의 합성과 운동', icon: '➡️', file: 'mech_01_vector_composition.html' },
  { id: 'mech-02', title: '알짜힘에 의한 운동 예측', description: '빗면 위 물체의 가속도를 예측하세요.', subject: 'physics', unit: 'I. 시공간과 운동', chapter: '1. 힘의 합성과 운동', icon: '📐', file: 'mech_02_net_force_motion.html' },
  { id: 'mech-03', title: '뉴턴 법칙과 연결된 물체', description: '도르래와 수레 시스템의 운동을 분석하세요.', subject: 'physics', unit: 'I. 시공간과 운동', chapter: '1. 힘의 합성과 운동', icon: '🔗', file: 'mech_03_connected_objects.html' },
  { id: 'mech-04', title: '포물선 운동', description: '수평 투사와 비스듬히 던지기의 궤적을 비교하세요.', subject: 'physics', unit: 'I. 시공간과 운동', chapter: '1. 힘의 합성과 운동', icon: '🎯', file: 'mech_04_projectile_motion.html' },
  { id: 'mech-05', title: '등속 원운동과 구심력', description: '원운동 가속도와 구심력을 시각화합니다.', subject: 'physics', unit: 'I. 시공간과 운동', chapter: '2. 여러 가지 운동', icon: '🔄', file: 'mech_05_circular_motion.html' },
  { id: 'mech-06', title: '단진자 운동', description: '단진자 주기와 등시성을 탐구하세요.', subject: 'physics', unit: 'I. 시공간과 운동', chapter: '2. 여러 가지 운동', icon: '⏱️', file: 'mech_06_simple_pendulum.html' },
  { id: 'mech-07', title: '케플러 법칙', description: '타원 궤도, 면적 속도, T²∝a³를 시각화합니다.', subject: 'physics', unit: 'I. 시공간과 운동', chapter: '3. 중력과 에너지', icon: '🪐', file: 'mech_07_kepler_laws.html' },
  { id: 'mech-08', title: '만유인력과 중력 가속도', description: '뉴턴 중력 법칙과 g=GM/r²를 탐구하세요.', subject: 'physics', unit: 'I. 시공간과 운동', chapter: '3. 중력과 에너지', icon: '🌍', file: 'mech_08_universal_gravitation.html' },
  { id: 'mech-09', title: '중력에 의한 역학적 에너지 보존', description: '인공위성의 역학적 에너지 보존을 확인하세요.', subject: 'physics', unit: 'I. 시공간과 운동', chapter: '3. 중력과 에너지', icon: '🛰️', file: 'mech_09_gravitational_energy_conservation.html' },
  { id: 'mech-10', title: '탈출 속도와 블랙홀', description: 'v_esc=√(2GM/R)과 블랙홀을 탐구하세요.', subject: 'physics', unit: 'I. 시공간과 운동', chapter: '3. 중력과 에너지', icon: '🕳️', file: 'mech_10_escape_velocity_blackhole.html' },
  { id: 'mech-11', title: '등가 원리', description: '엘리베이터 무중력과 GPS 보정을 체험하세요.', subject: 'physics', unit: 'I. 시공간과 운동', chapter: '4. 등가 원리와 시공간', icon: '🛗', file: 'mech_11_equivalence_principle.html' },
  { id: 'mech-12', title: '시공간의 휨과 중력 렌즈', description: '일반 상대성 이론과 중력 렌즈를 시각화합니다.', subject: 'physics', unit: 'I. 시공간과 운동', chapter: '4. 등가 원리와 시공간', icon: '🌌', file: 'mech_12_spacetime_curvature.html' },
  // ── II. 열과 에너지 ──
  { id: 'mech-13', title: '열전도·대류·복사', description: '열 전달 3가지 방식을 비교하세요.', subject: 'physics', unit: 'II. 열과 에너지', chapter: '1. 열 전달과 열팽창', icon: '🔥', file: 'mech_13_heat_transfer.html' },
  { id: 'mech-14', title: '열팽창과 응용', description: '선팽창, 부피팽창, 바이메탈을 탐구하세요.', subject: 'physics', unit: 'II. 열과 에너지', chapter: '1. 열 전달과 열팽창', icon: '🌡️', file: 'mech_14_thermal_expansion.html' },
  { id: 'mech-15', title: '비열과 열용량', description: 'Q=cmΔT로 물질별 비열을 비교하세요.', subject: 'physics', unit: 'II. 열과 에너지', chapter: '2. 열역학', icon: '💧', file: 'mech_15_specific_heat.html' },
  { id: 'mech-16', title: '상태 변화와 잠열', description: '융해열과 기화열을 그래프로 확인하세요.', subject: 'physics', unit: 'II. 열과 에너지', chapter: '2. 열역학', icon: '🧊', file: 'mech_16_phase_change_latent_heat.html' },
  { id: 'mech-17', title: '이상 기체 법칙', description: 'PV=nRT와 등온/등적/단열 과정을 탐구하세요.', subject: 'physics', unit: 'II. 열과 에너지', chapter: '2. 열역학', icon: '🎈', file: 'mech_17_ideal_gas_law.html' },
  { id: 'mech-18', title: '열역학 제1법칙', description: 'Q=ΔU+W 관계를 시각화합니다.', subject: 'physics', unit: 'II. 열과 에너지', chapter: '2. 열역학', icon: '⚡', file: 'mech_18_first_law_thermodynamics.html' },
  { id: 'mech-19', title: '열기관과 카르노 사이클', description: '카르노 효율과 열기관 원리를 탐구하세요.', subject: 'physics', unit: 'II. 열과 에너지', chapter: '2. 열역학', icon: '🏭', file: 'mech_19_carnot_cycle.html' },
  { id: 'mech-20', title: '열효율과 에너지 전환', description: '가솔린/디젤 엔진과 냉장고를 비교하세요.', subject: 'physics', unit: 'II. 열과 에너지', chapter: '2. 열역학', icon: '🔧', file: 'mech_20_thermal_efficiency.html' },
  { id: 'mech-21', title: '비가역 과정과 열역학 제2법칙', description: '열의 이동 방향과 자발적 과정을 탐구하세요.', subject: 'physics', unit: 'II. 열과 에너지', chapter: '2. 열역학', icon: '🔀', file: 'mech_21_irreversible_second_law.html' },
  { id: 'mech-22', title: '엔트로피와 무질서도', description: '엔트로피 증가 법칙을 시각화합니다.', subject: 'physics', unit: 'II. 열과 에너지', chapter: '2. 열역학', icon: '🌀', file: 'mech_22_entropy.html' },
  // ── III. 탄성파와 소리 ──
  { id: 'mech-23', title: '용수철 진자와 단진동', description: 'SHM과 x=Asin(ωt)를 시각화합니다.', subject: 'physics', unit: 'III. 탄성파와 소리', chapter: '1. 진동과 파동', icon: '🔄', file: 'mech_23_spring_pendulum_shm.html' },
  { id: 'mech-24', title: '탄성파의 전파 (종파와 횡파)', description: '매질 전파와 파장/주기/진폭을 비교하세요.', subject: 'physics', unit: 'III. 탄성파와 소리', chapter: '1. 진동과 파동', icon: '🌊', file: 'mech_24_elastic_wave_propagation.html' },
  { id: 'mech-25', title: '탄성파의 투과와 반사', description: '매질 경계면과 초음파 활용을 탐구하세요.', subject: 'physics', unit: 'III. 탄성파와 소리', chapter: '1. 진동과 파동', icon: '📡', file: 'mech_25_wave_reflection_transmission.html' },
  { id: 'mech-26', title: '도플러 효과와 속도 측정', description: '음원/관측자 이동에 따른 주파수 변화를 체험하세요.', subject: 'physics', unit: 'III. 탄성파와 소리', chapter: '2. 소리와 악기', icon: '🚑', file: 'mech_26_doppler_effect.html' },
  { id: 'mech-27', title: '음파의 간섭과 소음 제어', description: '보강/상쇄 간섭과 ANC를 탐구하세요.', subject: 'physics', unit: 'III. 탄성파와 소리', chapter: '2. 소리와 악기', icon: '🎧', file: 'mech_27_sound_interference_anc.html' },
  { id: 'mech-28', title: '맥놀이와 진동수 측정', description: '두 음파 중첩과 맥놀이 진동수를 확인하세요.', subject: 'physics', unit: 'III. 탄성파와 소리', chapter: '2. 소리와 악기', icon: '🔊', file: 'mech_28_beats.html' },
  { id: 'mech-29', title: '정상파와 공명', description: '고정단/자유단 반사와 배/마디를 시각화합니다.', subject: 'physics', unit: 'III. 탄성파와 소리', chapter: '2. 소리와 악기', icon: '🎵', file: 'mech_29_standing_wave_resonance.html' },
  { id: 'mech-30', title: '현악기와 관악기의 원리', description: '기타줄 진동과 관의 공명을 시각화합니다.', subject: 'physics', unit: 'III. 탄성파와 소리', chapter: '2. 소리와 악기', icon: '🎸', file: 'mech_30_string_wind_instruments.html' },
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
