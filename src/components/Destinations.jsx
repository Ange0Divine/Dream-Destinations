import { getDestinations } from "../lib/data"

export default function Destinations() {
  const destinations = getDestinations().filter((d) => d.featured)

  return (
    <section id="destinations" className="section">
      <div className="container">
        <h2 className="section-title">Featured Destinations</h2>
        <p className="section-subtitle">Handpicked locations that promise unforgettable experiences</p>

        <div className="destinations-grid">
          {destinations.map((destination) => (
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
  )
}
