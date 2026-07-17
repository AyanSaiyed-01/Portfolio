import useReveal from '../useReveal.js'

export default function Education() {
  const [ref, inView] = useReveal()

  return (
    <section id="education" className="page-container">
      <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
        <div className="page-header">
          <span className="page-eyebrow">Background</span>
          <h1 className="page-title">Education &amp; Qualifications</h1>
          <p className="page-subtitle">Academic foundation and continuous learning journey</p>
        </div>

        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>Software Engineering Technology &mdash; Artificial Intelligence</h3>
              <h4>Centennial College, Toronto, Canada</h4>
              <p className="timeline-date">2025 &mdash; Present (Expected Graduation: 2027)</p>
              <p>
                Advanced diploma program focusing on software development,
                machine learning algorithms, AI applications, and modern
                programming practices. Coursework includes data structures,
                algorithms, database management, web development, and
                artificial intelligence fundamentals. Gaining hands-on
                experience with industry-standard tools and methodologies.
              </p>
              <p>
                <strong>Key focus areas:</strong> full-stack development,
                AI/ML implementation, software architecture, and project
                management.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>Secondary High School Diploma</h3>
              <h4>Central School Dubai, UAE</h4>
              <p className="timeline-date">2012 &mdash; 2024</p>
              <p>
                Completed comprehensive secondary education with a strong
                focus on mathematics, physics, chemistry, and computer
                science fundamentals. Developed analytical thinking skills
                and problem-solving abilities that form the foundation for
                software engineering studies.
              </p>
              <p>
                <strong>Notable achievements:</strong> strong performance in
                STEM subjects, participation in technology-focused
                extracurricular activities.
              </p>
            </div>
          </div>
        </div>

        <div className="certifications">
          <h2>Professional Development &amp; Certifications</h2>
          <div className="cert-grid">
            <div className="cert-item">
              <h4>Web Development Fundamentals</h4>
              <p>Comprehensive understanding of HTML, CSS, JavaScript, and modern web development practices.</p>
            </div>
            <div className="cert-item">
              <h4>React Development</h4>
              <p>Proficient in the React ecosystem including hooks, state management, and component architecture.</p>
            </div>
            <div className="cert-item">
              <h4>Database Management</h4>
              <p>Experience with MongoDB, SQL databases, and data modeling principles.</p>
            </div>
            <div className="cert-item">
              <h4>Version Control</h4>
              <p>Proficient in Git workflow, collaborative development, and project management tools.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
