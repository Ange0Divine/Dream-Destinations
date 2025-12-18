import { getDestinations } from "../lib/data"

export default function DestinationsPage() {
  const allDestinations = getDestinations()

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">All Destinations</h1>
          <p className="page-subtitle">Explore our curated collection of extraordinary places</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="destinations-grid">
            {allDestinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <div className="destination-image-wrapper">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="destination-image"
                  />
                  <div className="destination-badge">
                    <span className="rating">★ {destination.rating}</span>
                  </div>
                </div>
                <div className="destination-content">
                  <h3 className="destination-name">{destination.name}</h3>
                  <p className="destination-description">{destination.description}</p>
                  <div className="destination-footer">
                    <span className="destination-duration">{destination.duration}</span>
                    <span className="destination-price">From ${destination.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
