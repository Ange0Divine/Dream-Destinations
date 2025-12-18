export default function EastAfricaPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">East Africa</h1>
          <p className="page-subtitle">Where wildlife, culture, and natural beauty converge</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="content-wrapper">
            <div className="content-image">
              <img src="/east-africa-wildlife-landscape.jpg" alt="East Africa" className="featured-image" />
            </div>
            <div className="content-text">
              <h2>The Safari Capital</h2>
              <p>
                East Africa is renowned as the premier safari destination in the world. Home to Kenya, Tanzania, Uganda,
                and Rwanda, this region offers some of the most spectacular wildlife viewing opportunities on the
                planet.
              </p>
              <p>
                From the snow-capped peaks of Mount Kilimanjaro to the pristine beaches of Zanzibar, East Africa
                combines adventure, relaxation, and cultural immersion in ways few other destinations can match.
              </p>
              <h3>East Africa Highlights</h3>
              <ul className="feature-list">
                <li>Masai Mara and Serengeti safaris</li>
                <li>Mountain gorilla trekking in Uganda and Rwanda</li>
                <li>Climb Mount Kilimanjaro</li>
                <li>Zanzibar's spice islands and beaches</li>
                <li>Lake Victoria and the Nile River source</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
