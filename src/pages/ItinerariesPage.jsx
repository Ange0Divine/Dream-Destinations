import { getTours } from "../lib/data"

export default function ItinerariesPage() {
  const tours = getTours()

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Tour Itineraries</h1>
          <p className="page-subtitle">Detailed day-by-day guides for all our adventures</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {tours.map((tour) => (
            <div key={tour.id} className="itinerary-detail">
              <h2 className="itinerary-title">{tour.title}</h2>
              <p className="itinerary-intro">{tour.description}</p>

              <div className="itinerary-info">
                <span>
                  <strong>Duration:</strong> {tour.duration}
                </span>
                <span>
                  <strong>Destination:</strong> {tour.destination}
                </span>
                <span>
                  <strong>Price:</strong> ${tour.price} per person
                </span>
              </div>

              <h3>Tour Highlights</h3>
              <ul className="highlights-list">
                {tour.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>

              <h3>What's Included</h3>
              <div className="included-items">
                {tour.included.map((item, index) => (
                  <span key={index} className="included-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
