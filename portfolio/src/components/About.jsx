import { useEffect, useRef, useState } from 'react'
import useReveal from '../useReveal.js'

const SKILLS = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'CSS / HTML', level: 88 },
]

export default function About() {
  const [ref, inView] = useReveal()
  const [barsIn, setBarsIn] = useState(false)
  const barsRef = useRef(null)

  useEffect(() => {
    const node = barsRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsIn(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="page-container">
      <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
        <div className="page-header">
          <span className="page-eyebrow">About</span>
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Passionate developer with a drive for innovation</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <div className="profile-wrap">
              <div className="profile-ring">
                <div className="profile-avatar">AS</div>
              </div>
            </div>
            <p style={{ marginTop: 28, textAlign: 'center' }}>
              Download my resume to see the full picture &mdash; experience,
              projects, and coursework.
            </p>
            <div style={{ textAlign: 'center' }}>
              <a href="/Resume.pdf" download className="project-link">
                Download Resume (PDF)
              </a>
            </div>
          </div>

          <div className="about-section">
            <h2>Hello, I'm Ayan Saiyed</h2>
            <p>
              I'm a dedicated Software Engineering Technology student at
              Centennial College, specializing in Artificial Intelligence.
              With a strong foundation in full-stack development, I'm
              passionate about creating innovative digital solutions that
              make a real impact. My journey in technology combines academic
              excellence with hands-on project experience.
            </p>
            <p>
              Based in Toronto, Canada, I bring a global perspective to
              software development, having completed my secondary education
              in Dubai. This diverse background has shaped my approach to
              problem-solving and collaboration in multicultural
              environments.
            </p>

            <h2 style={{ marginTop: 32 }}>Technical Skills</h2>
            <div className="skills-grid" ref={barsRef}>
              {SKILLS.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-name">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </span>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: barsIn ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
