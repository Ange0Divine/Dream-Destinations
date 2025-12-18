export default function ValuesPage() {
  const values = [
    {
      id: 1,
      title: "Excellence",
      description:
        "We strive for perfection in every detail of your journey, ensuring exceptional service and memorable experiences.",
      icon: "⭐",
    },
    {
      id: 2,
      title: "Authenticity",
      description:
        "We connect you with genuine local experiences, immersing you in the true culture and spirit of each destination.",
      icon: "🌍",
    },
    {
      id: 3,
      title: "Sustainability",
      description: "We are committed to responsible tourism that protects environments and supports local communities.",
      icon: "♻️",
    },
    {
      id: 4,
      title: "Innovation",
      description: "We continuously evolve our offerings to provide cutting-edge travel experiences and services.",
      icon: "💡",
    },
    {
      id: 5,
      title: "Trust",
      description:
        "We build lasting relationships with our clients through transparency, reliability, and dedicated support.",
      icon: "🤝",
    },
    {
      id: 6,
      title: "Adventure",
      description: "We inspire exploration and discovery, encouraging travelers to step outside their comfort zones.",
      icon: "🏔️",
    },
  ]

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Values</h1>
          <p className="page-subtitle">The principles that guide every journey we create</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.id} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
