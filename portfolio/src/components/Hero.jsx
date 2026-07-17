import { useEffect, useState } from 'react'

const COMMAND = 'whoami --verbose'
const LINES = [
  { key: 'name', val: 'Ayan Saiyed' },
  { key: 'role', val: 'Full-Stack Developer' },
  { key: 'studying', val: 'Software Eng. Tech — AI, Centennial College' },
  { key: 'based_in', val: 'Toronto, ON' },
  { key: 'status', val: 'open to opportunities' },
]

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [lineIdx, setLineIdx] = useState(-1)

  useEffect(() => {
    let i = 0
    const type = setInterval(() => {
      i += 1
      setTyped(COMMAND.slice(0, i))
      if (i >= COMMAND.length) {
        clearInterval(type)
        setTimeout(() => setLineIdx(0), 250)
      }
    }, 55)
    return () => clearInterval(type)
  }, [])

  useEffect(() => {
    if (lineIdx < 0 || lineIdx >= LINES.length) return
    const t = setTimeout(() => setLineIdx((n) => n + 1), 240)
    return () => clearTimeout(t)
  }, [lineIdx])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="reveal in">
          <span className="hero-eyebrow">
            <span className="pulse" />
            available for internships &amp; contract work
          </span>
          <h1>
            Hi, I'm Ayan &mdash;<br />
            I build <span className="grad">full-stack</span>
            <br />
            products that ship.
          </h1>
          <p className="hero-sub">
            Software Engineering Technology (AI) student at Centennial
            College and full-stack developer based in Toronto. I like
            turning rough ideas into fast, dependable products &mdash; schema
            to pixel.
          </p>
          <div className="hero-cta">
            <a
              className="btn btn-primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('projects')
              }}
            >
              View projects &rarr;
            </a>
            <a
              className="btn btn-ghost"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('contact')
              }}
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="window terminal">
          <div className="window-bar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="window-title">ayan@portfolio: ~</span>
          </div>
          <div className="window-body">
            <div className="line">
              <span className="prompt">$</span> {typed}
              {typed.length < COMMAND.length && <span className="cursor">&nbsp;</span>}
            </div>
            {LINES.slice(0, lineIdx).map(({ key, val }) => (
              <div className="line" key={key}>
                <span className="comment">&gt;</span> <span className="key">{key}</span>
                <span className="comment">:</span> <span className="val">"{val}"</span>
              </div>
            ))}
            {lineIdx >= LINES.length && (
              <div className="line">
                <span className="prompt">$</span>
                <span className="cursor">&nbsp;</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
