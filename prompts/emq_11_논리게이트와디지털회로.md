너는 Three.js 과학 시뮬레이션 전문 개발자다. 고등학교 물리학 교과서 기반의 인터랙티브 3D 시뮬레이션을 단일 HTML 파일로 제작한다.

## 시뮬레이션 정보
- 과목: 전자기와 양자
- 단원: I. 전자기적 상호작용 > 06. 반도체 소자를 활용한 전자 회로
- 토픽: 논리 게이트와 디지털 회로
- 대상: 고등학교 (진로 선택과목)
- 핵심 개념: 디지털 회로는 0(LOW)과 1(HIGH) 두 가지 상태만 사용한다. 기본 논리 게이트에는 AND(둘 다 1일 때만 1), OR(하나라도 1이면 1), NOT(반전)이 있다. 이들을 조합하여 NAND, NOR, XOR 등 복합 게이트를 만들 수 있다. 트랜지스터를 이용하여 논리 게이트를 구현하며, 컴퓨터의 모든 연산은 논리 게이트의 조합으로 수행된다.

## 씬 구성
- 화면 좌측 50%: 3D 논리 게이트 기호 + 입출력 LED
- 화면 우측 50%: 진리표 + 조합 회로 (HTML overlay)
- 6가지 게이트: AND / OR / NOT / NAND / NOR / XOR
- 배경: 0x1a1a2e
- 카메라: PerspectiveCamera(FOV 45) + OrbitControls
- 조명: AmbientLight(0.4) + DirectionalLight(0.5)

## 3D 논리 게이트

### 게이트 기호 (3D 블록)
- AND: BoxGeometry(2, 1.5, 0.3) + 우측 반원(SphereGeometry 반구), 0x4488aa
- OR: BoxGeometry + 곡면 입구, 0x44aa88
- NOT: 삼각형(ConeGeometry 옆으로) + 출력에 작은 원, 0xaa4444
- NAND/NOR/XOR: 각각 해당 기호 형태
- 게이트 위에 이름 라벨: "AND", "OR" 등

### 입력 스위치
- 입력 A: BoxGeometry 스위치, 0/1 토글 가능
  - 0: 0xcc4444 (빨강, OFF), "0" 라벨
  - 1: 0x44cc44 (초록, ON), "1" 라벨
- 입력 B: 동일 스위치 (NOT 게이트는 입력 1개만)
- 클릭으로 0↔1 토글

### 출력 LED
- SphereGeometry(r=0.2), 출력에 따라:
  - 0: 0x444444 (어두움, OFF)
  - 1: 0xffff44 (밝은 노랑, ON, emissive)
- 출력 라벨: "Y = [0/1]"

### 전선
- 입력→게이트→출력: TubeGeometry, 0xcccccc
- 전류 흐름: 1일 때 노란 파티클 이동, 0일 때 정지

## 6가지 논리 게이트

### AND (논리곱)
- Y = A·B: 둘 다 1일 때만 Y=1
- 진리표:
  | A | B | Y |
  |---|---|---|
  | 0 | 0 | 0 |
  | 0 | 1 | 0 |
  | 1 | 0 | 0 |
  | 1 | 1 | 1 |

### OR (논리합)
- Y = A+B: 하나라도 1이면 Y=1
- 진리표: 00→0, 01→1, 10→1, 11→1

### NOT (반전)
- Y = Ā: 입력 반전
- 진리표: 0→1, 1→0

### NAND (AND + NOT)
- Y = NOT(A·B)
- 진리표: AND의 반전

### NOR (OR + NOT)
- Y = NOT(A+B)

### XOR (배타적 OR)
- Y = A⊕B: 둘이 다를 때만 1
- 진리표: 00→0, 01→1, 10→1, 11→0

## 조합 회로 (고급)
- "조합 회로" 모드: 여러 게이트를 연결하여 복합 회로 구성
  - 반가산기(Half Adder): XOR + AND → Sum, Carry 출력
  - 입력 A, B → Sum = A⊕B, Carry = A·B
- 3D에서 게이트 2개가 연결된 회로 시각화
- 진리표로 확인: 0+0=00, 0+1=01, 1+0=01, 1+1=10 (2진 덧셈!)

## 트랜지스터로 논리 게이트 구현 (보너스)
- NOT 게이트: 트랜지스터 1개
  - 입력 HIGH → 트랜지스터 ON → 출력 LOW (반전)
  - 입력 LOW → 트랜지스터 OFF → 출력 HIGH
- "컴퓨터의 모든 연산 = 수십억 개의 트랜지스터(논리 게이트)" 라벨

## 인터랙션 (GUI 패널)
lil-gui 라이브러리(CDN)로 우측 상단에 컨트롤 패널을 배치한다:
- "게이트" 드롭다운: AND / OR / NOT / NAND / NOR / XOR / 반가산기
- "입력 A" 토글: 0 / 1 (기본값 0)
- "입력 B" 토글: 0 / 1 (기본값 0)
- "진리표 표시" 토글: ON/OFF (기본값 ON)
- "트랜지스터 구현" 토글: ON/OFF (NOT 게이트의 트랜지스터 회로)
- "전류 흐름 표시" 토글: ON/OFF (기본값 ON)
- "모든 입력 순환" 버튼: 00→01→10→11 자동 순환 (각 1초)
- "초기화" 버튼

## 수식 패널
화면 좌측 하단에 반투명 HTML overlay 패널로 표시:

```
💻 논리 게이트와 디지털 회로
━━━━━━━━━━━━━━━━━
게이트: [AND/OR/NOT/...]
입력: A=[0/1], B=[0/1]
출력: Y=[0/1]

논리식: Y = [A·B / A+B / Ā / ...]

진리표:
  A B | Y
  0 0 | [값]
  0 1 | [값]
  1 0 | [값]
  1 1 | [값]

디지털: 0(LOW)과 1(HIGH) 두 상태
컴퓨터 = 수십억 논리 게이트의 조합
```

## 교육적 요소
화면 상단에 토글 가능한 "📖 학습 가이드" 패널:
- 핵심 원리: "디지털 회로는 0과 1 두 상태만 사용합니다. AND, OR, NOT 기본 게이트를 조합하면 모든 논리 연산이 가능합니다. 컴퓨터의 CPU는 수십억 개의 트랜지스터(논리 게이트)로 구성됩니다."
- 탐구 질문:
  1. "NAND 게이트만으로 AND, OR, NOT을 모두 구현할 수 있는 까닭은 무엇인가요? (범용 게이트)"
  2. "반가산기로 1+1=10(2진수)을 계산하는 과정을 설명해 보세요."
  3. "스마트폰 CPU에 100억 개 이상의 트랜지스터가 들어있습니다. 이것이 가능한 까닭은?"
- 실생활 예시: CPU(컴퓨터 연산), 메모리(데이터 저장), 디지털 시계, 자동문 센서 회로
- 교과서 연계: "전자기와 양자 I편 p38~47 — 반도체 소자, 논리 게이트, 전자 회로"

## 코드 규칙
- 단일 HTML 파일로 작성 (외부 파일 없음)
- Three.js는 CDN import: https://unpkg.com/three@0.160.0/build/three.module.js
- OrbitControls CDN: https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js
- lil-gui CDN: https://unpkg.com/lil-gui@0.19.2/dist/lil-gui.esm.js
- ES6 모듈 방식 (type="module")
- 주석은 한국어
- 반응형: window resize 이벤트 처리
- 모바일 터치 지원 (OrbitControls 기본 지원)
- 게이트 전환 시 이전 객체 dispose() + 새 객체 생성
- gui.controllersRecursive().forEach(c => c.updateDisplay()) 동기화
- 성능: requestAnimationFrame 루프
- 파일명: emq_11_logic_gates.html
