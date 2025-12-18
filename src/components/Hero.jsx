"use client"

export default function Hero() {
  const scrollToTours = () => {
    const element = document.getElementById("tours")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h2 className="hero-title">Discover Your Next Adventure</h2>
        <p className="hero-subtitle">Curated travel experiences to the world's most breathtaking destinations</p>
        <button onClick={scrollToTours} className="btn btn-primary">
          Explore Tours
        </button>
      </div>
    </section>
  )
}
