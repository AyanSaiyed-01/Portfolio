import useReveal from '../useReveal.js'

const SERVICES = [
  {
    icon: 'WEB',
    title: 'Full-Stack Web Development',
    desc: 'Complete web application development using modern technologies including React, Node.js, and MongoDB. From concept to deployment, I deliver scalable, responsive solutions with clean code and optimal performance.',
  },
  {
    icon: 'API',
    title: 'Backend Development & APIs',
    desc: 'Robust server-side development with secure REST APIs, authentication systems, and database integration. Experience with Express.js, MongoDB, and implementing best practices for scalable backend architecture.',
  },
  {
    icon: 'UI',
    title: 'Frontend Development',
    desc: 'Creating intuitive, responsive user interfaces with React, modern CSS techniques, and mobile-first design principles. Focus on user experience, accessibility, and cross-browser compatibility.',
  },
  {
    icon: 'AI',
    title: 'AI Integration & Data Analysis',
    desc: 'Implementing artificial intelligence solutions and data analysis using Python, machine learning algorithms, and modern AI frameworks. Specializing in practical AI applications for business solutions.',
  },
  {
    icon: 'CONSULT',
    title: 'Technical Consulting',
    desc: 'Providing technical guidance on architecture decisions, technology stack selection, and development best practices. Helping teams implement modern development workflows and code quality standards.',
  },
  {
    icon: 'PERF',
    title: 'Performance Optimization',
    desc: 'Optimizing applications for speed, scalability, and user experience. Implementing caching strategies, code splitting, and performance monitoring to ensure optimal application performance.',
  },
]

export default function Services() {
  const [ref, inView] = useReveal()

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="services" className="page-container">
      <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
        <div className="page-header">
          <span className="page-eyebrow">Services</span>
          <h1 className="page-title">Services &amp; Expertise</h1>
          <p className="page-subtitle">Professional development solutions tailored to your needs</p>
        </div>

        <div className="features-grid">
          {SERVICES.map((service) => (
            <div className="feature-card" key={service.title}>
              <span className="feature-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h2>Ready to work together?</h2>
          <p>
            I'm passionate about creating innovative solutions that drive
            business success. Let's discuss how I can help bring your ideas
            to life.
          </p>
          <a
            href="#contact"
            className="cta-button cta-button--outline"
            onClick={(e) => {
              e.preventDefault()
              scrollToContact()
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
