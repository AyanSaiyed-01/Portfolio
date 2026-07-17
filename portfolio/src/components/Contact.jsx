import { useState } from 'react'
import useReveal from '../useReveal.js'

const API_URL = import.meta.env.VITE_API_URL || '/api/contact'

export default function Contact() {
  const [ref, inView] = useReveal()
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget

    setStatus('loading')
    setFeedback('')

    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send message.')
      }

      setStatus('success')
      setFeedback(result.message)
      form.reset()
    } catch (error) {
      setStatus('error')
      setFeedback(
        error.message === 'Failed to fetch'
          ? 'Could not reach the server. Make sure the backend is running.'
          : error.message || 'Something went wrong. Please try again.',
      )
    }
  }

  return (
    <section id="contact" className="page-container">
      <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
        <div className="page-header">
          <span className="page-eyebrow">Contact</span>
          <h1 className="page-title">Let's Connect</h1>
          <p className="page-subtitle">Ready to discuss your next project or opportunity</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">EMAIL</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>ayansaiyed07x@gmail.com</p>
                <p style={{ fontSize: '0.85rem' }}>I typically respond within 24 hours</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">PHONE</div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+1 (473) 699-8786</p>
                <p style={{ fontSize: '0.85rem' }}>Available for calls and WhatsApp</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">LOCATION</div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Toronto, Ontario, Canada</p>
                <p style={{ fontSize: '0.85rem' }}>Open to remote and local opportunities</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">STATUS</div>
              <div className="contact-details">
                <h3>Availability</h3>
                <p>Open to new opportunities</p>
                <p style={{ fontSize: '0.85rem' }}>Part-time, contract, or full-time positions</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send me a message</h2>
            <p style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              Whether you have a project in mind, want to discuss
              opportunities, or just want to connect, I'd love to hear from
              you.
            </p>

            {feedback && (
              <div className={`form-feedback form-feedback--${status}`} role="alert">
                {feedback}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  disabled={status === 'loading'}
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={status === 'loading'}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={status === 'loading'}
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  minLength={10}
                  disabled={status === 'loading'}
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
