import { getTours } from "../lib/data"

export default function Tours() {
  const tours = getTours()

  return (
    <section id="tours" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Popular Tour Packages</h2>
        <p className="section-subtitle">All-inclusive packages designed for comfort and adventure</p>

        <div className="tours-grid">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <img src={tour.image || "/placeholder.svg"} alt={tour.title} className="tour-image" />
              <div className="tour-content">
                <div className="tour-header">
                  <h3 className="tour-title">{tour.title}</h3>
                  <div className="tour-rating">
                    <span className="rating-stars">★ {tour.rating}</span>
                    <span className="rating-count">({tour.reviews} reviews)</span>
                  </div>
                </div>

                <p className="tour-destination">📍 {tour.destination}</p>

                <div className="tour-highlights">
                  <h4>Highlights:</h4>
                  <ul>
                    {tour.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="tour-included">
                  <h4>Included:</h4>
                  <div className="included-tags">
                    {tour.included.map((item, index) => (
                      <span key={index} className="included-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="tour-footer">
                  <div className="tour-price-info">
                    <span className="tour-duration">{tour.duration}</span>
                    <span className="tour-price">${tour.price}</span>
                  </div>
                  <button className="btn btn-secondary">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
