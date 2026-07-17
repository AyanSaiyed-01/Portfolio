import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['about', 'education', 'services', 'projects', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a
        className="nav-logo"
        href="#top"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        Ayan<span>.dev</span>
      </a>
      <ul className="nav-links">
        {LINKS.map(({ id, label }) => (
          <li key={id}>
            <button className={active === id ? 'active' : ''} onClick={() => scrollTo(id)}>
              {label}
            </button>
          </li>
        ))}
      </ul>
      <button className="nav-cta" onClick={() => scrollTo('contact')}>
        Contact
      </button>
    </nav>
  )
}
