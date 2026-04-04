import {
  curriculum, simulations, youtubePlaylists, youtubeVideos,
  type TreeNode, type Simulation
} from './data'
type Page = 'simulations' | 'blog' | 'youtube'

let currentPage: Page = 'simulations'
let activeFilter: string | null = null
let activePlaylist: string | null = null
let activeCategory: string | null = null
const expandedNodes: Set<string> = new Set()

export function renderApp(): void {
  const app = document.getElementById('app')!
  const showSidebar = currentPage === 'simulations' || currentPage === 'youtube' || currentPage === 'blog'
  app.innerHTML = `
    ${renderNav()}
    <div class="main-layout">
      ${showSidebar ? renderSidebarForPage() : ''}
      <div class="content page-enter" id="page-content">
        ${renderPageContent()}
      </div>
    </div>
  `
  bindEvents()
}

function renderNav(): string {
  const pages: { id: Page; label: string }[] = [
    { id: 'simulations', label: '시뮬레이션' },
    { id: 'blog', label: '블로그' },
    { id: 'youtube', label: '유튜브' },
  ]

  return `
    <nav class="top-nav">
      <div class="site-title" data-nav="simulations">
        알풀<span>과학</span>
      </div>
      <span class="site-subtitle">알기 쉽게 풀어주는 과학 이야기</span>
      <div class="nav-menu">
        ${pages.map(p => `
          <button class="nav-item ${currentPage === p.id ? 'active' : ''}" data-nav="${p.id}">
            ${p.label}
          </button>
        `).join('')}
      </div>
    </nav>
  `
}

function renderSidebarForPage(): string {
  switch (currentPage) {
    case 'simulations': return renderSimSidebar()
    case 'youtube': return renderYoutubeSidebar()
    case 'blog': return renderBlogSidebar()
  }
}

function renderSimSidebar(): string {
  return `
    <aside class="sidebar">
      <div class="sidebar-title">교과서 목록</div>
      ${renderTree(curriculum)}
    </aside>
  `
}

function renderYoutubeSidebar(): string {
  return `
    <aside class="sidebar">
      <div class="sidebar-title">재생목록</div>
      <div class="tree-child ${activePlaylist === null ? 'active' : ''}" data-playlist="all">
        <span class="tree-dot"></span>
        전체 영상
      </div>
      ${youtubePlaylists.map(pl => `
        <div class="tree-child ${activePlaylist === pl.id ? 'active' : ''}" data-playlist="${pl.id}">
          <span class="tree-dot"></span>
          ${pl.title}
        </div>
      `).join('')}
    </aside>
  `
}

function renderBlogSidebar(): string {
  return `
    <aside class="sidebar">
      <div class="sidebar-title">카테고리</div>
      <div class="tree-child ${activeCategory === null ? 'active' : ''}" data-category="all">
        <span class="tree-dot"></span>
        전체 글
      </div>
      <div class="tree-child ${activeCategory === 'science' ? 'active' : ''}" data-category="science">
        <span class="tree-dot"></span>
        과학 이야기
      </div>
      <div class="tree-child ${activeCategory === 'study' ? 'active' : ''}" data-category="study">
        <span class="tree-dot"></span>
        공부법
      </div>
      <div class="tree-child ${activeCategory === 'news' ? 'active' : ''}" data-category="news">
        <span class="tree-dot"></span>
        과학 뉴스
      </div>
      <div style="margin-top: 24px; padding: 12px; background: rgba(200,169,110,0.1); border-radius: 8px; font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;">
        네이버 블로그 연결 예정
      </div>
    </aside>
  `
}

function renderTree(nodes: TreeNode[], depth = 0): string {
  return nodes.map(node => {
    if (node.children) {
      const nodeKey = `${depth}-${node.label}`
      // 첫 렌더링 시 depth < 2는 기본 펼침
      if (expandedNodes.size === 0 && depth < 2) {
        expandedNodes.add(nodeKey)
      }
      const isExpanded = expandedNodes.has(nodeKey)
      return `
        <div class="tree-group">
          <div class="tree-parent ${isExpanded ? 'expanded' : ''}" data-toggle data-node-key="${nodeKey}">
            <span class="tree-arrow">▶</span>
            ${node.label}
          </div>
          <div class="tree-children ${isExpanded ? 'open' : ''}">
            ${renderTree(node.children, depth + 1)}
          </div>
        </div>
      `
    }
    return `
      <div class="tree-child ${activeFilter === node.filterId ? 'active' : ''}" data-filter="${node.filterId}">
        <span class="tree-dot"></span>
        ${node.label}
      </div>
    `
  }).join('')
}

function renderPageContent(): string {
  switch (currentPage) {
    case 'simulations': return renderSimulationsPage()
    case 'blog': return renderBlogPage()
    case 'youtube': return renderYoutubePage()
  }
}

function renderSimulationsPage(): string {
  const filtered = activeFilter
    ? simulations.filter(s => s.chapter.includes(getFilterLabel(activeFilter!)))
    : simulations

  return `
    <div class="content-header">
      <h1>과학 시뮬레이션</h1>
      <p>교과서 속 과학 개념을 인터랙티브 3D 시뮬레이션으로 체험하세요.</p>
      <div class="sim-count">
        ✦ ${filtered.length}개 시뮬레이션
      </div>
    </div>
    <div class="card-grid">
      ${filtered.map(sim => renderSimCard(sim)).join('')}
    </div>
  `
}

function getFilterLabel(filterId: string): string {
  const map: Record<string, string> = {
    'basic-quantities': '1. 과학의 기본량',
    'measurement-info': '2. 측정 표준과 정보',
    'element-creation': '1. 원소의 생성과 규칙성',
    'natural-materials': '2. 자연의 구성 물질',
    'earth-system': '1. 지구시스템',
    'mechanics': '2. 역학 시스템',
    'life-system': '3. 생명 시스템',
    'sci2-env-bio': '1. 환경 변화와 생물다양성',
    'sci2-change': '2. 우리 주변의 변화',
    'sci2-ecosystem': '1. 생태계와 환경',
    'sci2-energy': '2. 에너지',
    'sci2-bigdata': '1. 과학의 유용성과 빅데이터',
    'sci2-ethics': '2. 과학기술의 발전과 윤리',
    'phys-force-motion': '1. 힘과 운동',
    'phys-energy-heat': '2. 에너지와 열',
    'phys-electric': '1. 전기장과 전기 에너지',
    'phys-magnetic': '2. 전기와 자기의 상호작용',
    'phys-light': '1. 빛과 물질의 이중성',
    'phys-atom': '2. 원자와 에너지 준위',
    'mech-force': '1. 힘의 합성과 운동',
    'mech-various': '2. 여러 가지 운동',
    'mech-gravity': '3. 중력과 에너지',
    'mech-relativity': '4. 등가 원리와 시공간',
    'mech-heat-transfer': '1. 열 전달과 열팽창',
    'mech-thermo': '2. 열역학',
    'mech-wave': '1. 진동과 파동',
    'mech-sound': '2. 소리와 악기',
  }
  return map[filterId] || ''
}

function getSubjectBadge(subject: string): string {
  const labels: Record<string, string> = {
    physics: '물리',
    chemistry: '화학',
    biology: '생물',
    earth: '지구과학',
  }
  return `<span class="subject-badge badge-${subject}">${labels[subject]}</span>`
}

function renderSimCard(sim: Simulation): string {
  return `
    <div class="sim-card" data-sim-id="${sim.id}">
      <div class="sim-card-preview">
        <span class="icon">${sim.icon}</span>
        ${getSubjectBadge(sim.subject)}
      </div>
      <div class="sim-card-body">
        <h3>${sim.title}</h3>
        <p>${sim.description}</p>
      </div>
      <div class="sim-card-footer">
        <span class="sim-card-unit">${sim.unit}</span>
        <span class="sim-card-action">${sim.file ? '실행 →' : '준비 중'}</span>
      </div>
    </div>
  `
}

function renderBlogPage(): string {
  return `
    <div class="content-header">
      <h1>블로그</h1>
      <p>알기 쉽게 풀어주는 과학 이야기</p>
    </div>
    <div class="blog-list" id="blog-list">
      <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 12px;">네이버 블로그 연결 예정</p>
        <p style="font-size: 0.85rem;">블로그 ID가 설정되면 자동으로 글 목록이 표시됩니다.</p>
      </div>
    </div>
  `
}

function renderYoutubePage(): string {
  const filtered = activePlaylist
    ? youtubeVideos.filter(v => v.playlistId === activePlaylist)
    : youtubeVideos

  const playlistLabel = activePlaylist
    ? youtubePlaylists.find(p => p.id === activePlaylist)?.title || '전체 영상'
    : '전체 영상'

  return `
    <div class="content-header">
      <h1>유튜브</h1>
      <p>알풀과학 채널 — ${playlistLabel}</p>
      <div class="sim-count">
        ✦ ${filtered.length}개 영상
      </div>
    </div>
    <div class="youtube-grid">
      ${filtered.map(video => `
        <div class="youtube-card" data-video-url="${video.url}">
          <div class="youtube-thumb" style="${video.thumbnailUrl ? `background: url(${video.thumbnailUrl}) center/cover;` : ''}">
            <div class="youtube-play"></div>
          </div>
          <div class="youtube-body">
            <h3>${video.title}</h3>
            <div class="youtube-meta">
              <span>${video.date}</span>
              ${video.views ? `<span>조회수 ${video.views}</span>` : ''}
              ${video.duration ? `<span>${video.duration}</span>` : ''}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `
}

function openSimModal(simId: string): void {
  const sim = simulations.find(s => s.id === simId)
  if (!sim) return

  const iframeSrc = sim.file ? `./simulations/${sim.file}` : 'about:blank'
  const overlay = document.createElement('div')
  overlay.className = 'sim-modal-overlay'
  overlay.innerHTML = `
    <button class="sim-modal-close">← 돌아가기</button>
    <div class="sim-modal">
      ${sim.file
        ? `<iframe src="${iframeSrc}"></iframe>`
        : `<div style="display:flex;align-items:center;justify-content:center;flex:1;color:#999;font-size:1.1rem;">준비 중입니다</div>`
      }
    </div>
  `
  document.body.appendChild(overlay)

  requestAnimationFrame(() => overlay.classList.add('visible'))

  // 닫기 이벤트
  const close = (): void => {
    overlay.classList.remove('visible')
    setTimeout(() => overlay.remove(), 300)
  }
  overlay.querySelector('.sim-modal-close')!.addEventListener('click', close)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close()
  })
  document.addEventListener('keydown', function handler(e) {
    if (e.key === 'Escape') {
      close()
      document.removeEventListener('keydown', handler)
    }
  })
}

function bindEvents(): void {
  // 네비게이션 클릭
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const page = (el as HTMLElement).dataset.nav as Page
      if (page !== currentPage) {
        currentPage = page
        activeFilter = null
        renderApp()
      }
    })
  })

  // 사이드바 트리 토글 (상태 유지)
  document.querySelectorAll('[data-toggle]').forEach(el => {
    el.addEventListener('click', () => {
      const nodeKey = (el as HTMLElement).dataset.nodeKey!
      if (expandedNodes.has(nodeKey)) {
        expandedNodes.delete(nodeKey)
      } else {
        expandedNodes.add(nodeKey)
      }
      el.classList.toggle('expanded')
      const children = el.nextElementSibling as HTMLElement
      if (children) children.classList.toggle('open')
    })
  })

  // 사이드바 필터 클릭
  document.querySelectorAll('[data-filter]').forEach(el => {
    el.addEventListener('click', () => {
      const filterId = (el as HTMLElement).dataset.filter!
      activeFilter = activeFilter === filterId ? null : filterId
      renderApp()
    })
  })

  // 시뮬레이션 카드 클릭
  document.querySelectorAll('[data-sim-id]').forEach(el => {
    el.addEventListener('click', () => {
      const simId = (el as HTMLElement).dataset.simId!
      openSimModal(simId)
    })
  })

  // 유튜브 재생목록 필터
  document.querySelectorAll('[data-playlist]').forEach(el => {
    el.addEventListener('click', () => {
      const playlistId = (el as HTMLElement).dataset.playlist!
      activePlaylist = playlistId === 'all' ? null : playlistId
      renderApp()
    })
  })

  // 블로그 카테고리 필터
  document.querySelectorAll('[data-category]').forEach(el => {
    el.addEventListener('click', () => {
      const categoryId = (el as HTMLElement).dataset.category!
      activeCategory = categoryId === 'all' ? null : categoryId
      renderApp()
    })
  })

  // 유튜브 카드 클릭 → 새 탭에서 열기
  document.querySelectorAll('[data-video-url]').forEach(el => {
    el.addEventListener('click', () => {
      const url = (el as HTMLElement).dataset.videoUrl!
      if (url) window.open(url, '_blank')
    })
  })

}
