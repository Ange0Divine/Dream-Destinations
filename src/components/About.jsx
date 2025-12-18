import { getTestimonials } from "../lib/data"

export default function About() {
  const testimonials = getTestimonials()

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Why Choose Dream Destinations</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              With over 15 years of experience, we've been crafting unforgettable travel experiences for adventurers
              around the world. Our commitment to excellence and attention to detail ensures every journey exceeds
              expectations.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">✓</div>
                <div>
                  <h3>Expert Planning</h3>
                  <p>Every itinerary is carefully curated by travel specialists</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon">✓</div>
                <div>
                  <h3>24/7 Support</h3>
                  <p>Round-the-clock assistance throughout your journey</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon">✓</div>
                <div>
                  <h3>Best Value</h3>
                  <p>Competitive pricing without compromising on quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials">
          <h3 className="testimonials-title">What Our Travelers Say</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">{"★".repeat(testimonial.rating)}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
                <div className="testimonial-tour">{testimonial.tour}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
