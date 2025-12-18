"use client"

import { useState } from "react"
import { submitContactForm } from "../lib/data"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState({ type: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: "", message: "" })

    try {
      const result = await submitContactForm(formData)
      setStatus({ type: "success", message: result.message })
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to start your adventure? Contact us today!</p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>📧 Email</h3>
              <p>info@dreamdestinations.com</p>
            </div>

            <div className="contact-info-item">
              <h3>📞 Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className="contact-info-item">
              <h3>📍 Office</h3>
              <p>
                123 Travel Street
                <br />
                Adventure City, AC 12345
              </p>
            </div>

            <div className="contact-info-item">
              <h3>🕐 Hours</h3>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-input"
              ></textarea>
            </div>

            {status.message && <div className={`form-status ${status.type}`}>{status.message}</div>}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
