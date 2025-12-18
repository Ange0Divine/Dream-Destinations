export default function AfricaPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Discover Africa</h1>
          <p className="page-subtitle">Experience the diverse beauty and rich culture of the African continent</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-image">
              <img src="/african-landscape-safari.jpg" alt="African Landscape" className="featured-image" />
            </div>
            <div className="content-text">
              <h2>The Heart of Adventure</h2>
              <p>
                Africa is a continent of extraordinary diversity, from the vast savannas teeming with wildlife to
                ancient cultures that have thrived for millennia. Our African adventures offer unparalleled
                opportunities to witness nature's grandest spectacles and connect with vibrant communities.
              </p>
              <p>
                Whether you're seeking the thrill of a safari, the tranquility of pristine beaches, or the richness of
                historical sites, Africa promises experiences that will transform the way you see the world.
              </p>
              <h3>Why Visit Africa?</h3>
              <ul className="feature-list">
                <li>Witness the Great Migration in the Serengeti</li>
                <li>Encounter the Big Five in their natural habitat</li>
                <li>Explore ancient pyramids and historical wonders</li>
                <li>Experience diverse cultures and traditions</li>
                <li>Relax on pristine Indian Ocean beaches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
