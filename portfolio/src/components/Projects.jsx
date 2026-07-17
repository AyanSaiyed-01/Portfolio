import { useRef } from 'react'
import useReveal from '../useReveal.js'

const PROJECTS = [
  {
    file: 'commit-flow.tsx',
    name: 'CommitFlow',
    status: 'in progress',
    desc: 'A kanban board that turns GitHub issues into a drag-and-drop sprint planner, synced in real time.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    stub: [
      { t: 'k', v: 'export' },
      { t: 'p', v: 'function ' },
      { t: 's', v: 'CommitFlow' },
      { t: 'p', v: '() {' },
      { t: 'c', v: '  // realtime board' },
      { t: 'p', v: '  return <Board />' },
      { t: 'p', v: '}' },
    ],
  },
  {
    file: 'pantry-py.py',
    name: 'Pantry.py',
    status: 'prototype',
    desc: "A recipe recommender that scans what's in your fridge and ranks meals by what you're about to waste.",
    stack: ['Python', 'FastAPI', 'MongoDB', 'OpenAI API'],
    stub: [
      { t: 'k', v: 'def' },
      { t: 's', v: ' suggest_meals' },
      { t: 'p', v: '(pantry):' },
      { t: 'c', v: '    # rank by expiry' },
      { t: 'k', v: '    return' },
      { t: 'p', v: ' ranked[:5]' },
    ],
  },
  {
    file: 'latency-lens.go',
    name: 'LatencyLens',
    status: 'planning',
    desc: 'A lightweight uptime and latency dashboard for side projects, with Slack alerts baked in.',
    stack: ['Go', 'React', 'Docker', 'Grafana'],
    stub: [
      { t: 'k', v: 'func' },
      { t: 's', v: ' Ping' },
      { t: 'p', v: '(url string) {' },
      { t: 'c', v: '  // sub-second checks' },
      { t: 'p', v: '  emit(latency)' },
      { t: 'p', v: '}' },
    ],
  },
]

function ProjectCard({ project }) {
  const cardRef = useRef(null)

  const handleMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-6px)`
  }

  const handleLeave = () => {
    const el = cardRef.current
    if (el) el.style.transform = ''
  }

  return (
    <div className="project-card-wrapper">
      <article
        className="window project-card"
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="window-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="window-title">{project.file}</span>
        </div>
        <div className="window-body">
          <span className="status">{project.status}</span>
          <div className="stub">
            {project.stub.map((line, i) => (
              <div key={i} className={line.t}>
                {line.v}
              </div>
            ))}
          </div>
          <h3>{project.name}</h3>
          <p>{project.desc}</p>
          <div className="stack">
            {project.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <div className="links">
            <a href="#" onClick={(e) => e.preventDefault()}>
              source &rarr;
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              live demo &rarr;
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useReveal()

  return (
    <section id="projects" className="page-container">
      <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
        <div className="page-header">
          <span className="page-eyebrow">Portfolio</span>
          <h1 className="page-title">Featured Projects</h1>
          <p className="page-subtitle">
            Selected work showcasing full-stack development, clean
            architecture, and attention to detail.
          </p>
        </div>
        <p className="projects-note">
          placeholder projects &mdash; swap these for your real repos, screenshots and links
        </p>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
