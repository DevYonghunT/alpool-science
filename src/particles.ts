// 밝은 베이지 톤 별 파티클 배경 + 귀여운 유성 (팔레트 B: 미니멀 크림)
import * as THREE from 'three'

export function initParticles(): void {
  const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0xFFFDF7, 1)

  // 별 파티클 (골드 톤)
  const starCount = 800
  const positions = new Float32Array(starCount * 3)
  const sizes = new Float32Array(starCount)

  for (let i = 0; i < starCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    sizes[i] = Math.random() * 3 + 1
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const starMaterial = new THREE.PointsMaterial({
    color: 0xB5835A,
    size: 0.04,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
  })

  const stars = new THREE.Points(geometry, starMaterial)
  scene.add(stars)

  // 더스트 레이어
  const dustCount = 400
  const dustPositions = new Float32Array(dustCount * 3)
  for (let i = 0; i < dustCount; i++) {
    dustPositions[i * 3] = (Math.random() - 0.5) * 25
    dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 25
    dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  const dustGeometry = new THREE.BufferGeometry()
  dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3))

  const dustMaterial = new THREE.PointsMaterial({
    color: 0x7D6B5D,
    size: 0.02,
    transparent: true,
    opacity: 0.3,
    sizeAttenuation: true,
  })

  const dust = new THREE.Points(dustGeometry, dustMaterial)
  scene.add(dust)

  // ===== 귀여운 유성 (옅은 노란색) =====
  interface ShootingStar {
    mesh: THREE.Mesh
    trail: THREE.Line
    velocity: THREE.Vector3
    life: number
    maxLife: number
  }

  const shootingStars: ShootingStar[] = []

  function createShootingStar(): ShootingStar {
    // 작고 귀여운 별 모양
    const starGeo = new THREE.SphereGeometry(0.025, 8, 8)
    const starMat = new THREE.MeshBasicMaterial({
      color: 0xFFF5CC, // 옅은 노란색
      transparent: true,
      opacity: 0.9,
    })
    const mesh = new THREE.Mesh(starGeo, starMat)

    // 시작 위치 (화면 바깥에서)
    mesh.position.set(
      (Math.random() - 0.3) * 12,
      (Math.random() * 4) + 4,
      (Math.random() - 0.5) * 6
    )

    // 꼬리 (트레일)
    const trailPoints = []
    for (let i = 0; i < 12; i++) {
      trailPoints.push(mesh.position.clone())
    }
    const trailGeo = new THREE.BufferGeometry().setFromPoints(trailPoints)
    const trailMat = new THREE.LineBasicMaterial({
      color: 0xFFF8DD, // 약간 더 옅은 노란색
      transparent: true,
      opacity: 0.4,
    })
    const trail = new THREE.Line(trailGeo, trailMat)

    scene.add(mesh)
    scene.add(trail)

    // 이동 방향 (대각선 아래로)
    const speed = 0.02 + Math.random() * 0.03
    const velocity = new THREE.Vector3(
      -speed * (0.8 + Math.random() * 0.4),
      -speed * (0.6 + Math.random() * 0.3),
      0
    )

    const maxLife = 120 + Math.random() * 100

    return { mesh, trail, velocity, life: 0, maxLife }
  }

  let shootingStarTimer = 0
  const shootingStarInterval = 180 + Math.random() * 300 // 3~8초마다

  // 마우스 추적
  let mouseX = 0
  let mouseY = 0
  window.addEventListener('mousemove', (e: MouseEvent) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5
  })

  // 리사이즈
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  // 애니메이션 루프
  const animate = (): void => {
    requestAnimationFrame(animate)

    stars.rotation.y += 0.0003
    stars.rotation.x += 0.0001
    dust.rotation.y -= 0.0002
    dust.rotation.x -= 0.0001

    // 마우스 패럴랙스
    camera.position.x += (mouseX - camera.position.x) * 0.02
    camera.position.y += (-mouseY - camera.position.y) * 0.02
    camera.lookAt(scene.position)

    // 유성 생성 타이머
    shootingStarTimer++
    if (shootingStarTimer > shootingStarInterval && shootingStars.length < 3) {
      shootingStars.push(createShootingStar())
      shootingStarTimer = 0
    }

    // 유성 업데이트
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const ss = shootingStars[i]
      ss.life++

      // 이동
      ss.mesh.position.add(ss.velocity)

      // 트레일 업데이트 (위치 기록을 뒤로 밀기)
      const trailPositions = ss.trail.geometry.attributes.position as THREE.BufferAttribute
      const arr = trailPositions.array as Float32Array
      for (let j = arr.length - 3; j >= 3; j -= 3) {
        arr[j] = arr[j - 3]
        arr[j + 1] = arr[j - 2]
        arr[j + 2] = arr[j - 1]
      }
      arr[0] = ss.mesh.position.x
      arr[1] = ss.mesh.position.y
      arr[2] = ss.mesh.position.z
      trailPositions.needsUpdate = true

      // 페이드 아웃
      const progress = ss.life / ss.maxLife
      const opacity = progress < 0.2
        ? progress / 0.2
        : progress > 0.7
          ? 1 - (progress - 0.7) / 0.3
          : 1

      ;(ss.mesh.material as THREE.MeshBasicMaterial).opacity = opacity * 0.9
      ;(ss.trail.material as THREE.LineBasicMaterial).opacity = opacity * 0.4

      // 수명 다하면 제거
      if (ss.life >= ss.maxLife) {
        scene.remove(ss.mesh)
        scene.remove(ss.trail)
        ss.mesh.geometry.dispose()
        ;(ss.mesh.material as THREE.MeshBasicMaterial).dispose()
        ss.trail.geometry.dispose()
        ;(ss.trail.material as THREE.LineBasicMaterial).dispose()
        shootingStars.splice(i, 1)
      }
    }

    renderer.render(scene, camera)
  }

  animate()
}
