export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Your First African Safari",
      excerpt: "Planning your first safari? Here are expert tips to ensure an unforgettable experience.",
      date: "March 15, 2024",
      image: "/safari-tips.jpg",
      category: "Travel Tips",
    },
    {
      id: 2,
      title: "The Best Time to Visit Rwanda for Gorilla Trekking",
      excerpt: "Discover the optimal seasons for encountering mountain gorillas in their natural habitat.",
      date: "March 10, 2024",
      image: "/gorilla-trekking.jpg",
      category: "Destinations",
    },
    {
      id: 3,
      title: "Sustainable Tourism: How We Protect Wildlife",
      excerpt: "Learn about our commitment to conservation and responsible travel practices.",
      date: "March 5, 2024",
      image: "/wildlife-conservation-mosaic.png",
      category: "Conservation",
    },
  ]

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Travel Blog</h1>
          <p className="page-subtitle">Stories, tips, and insights from our travel experts</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image-wrapper">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="blog-image" />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <p className="blog-date">{post.date}</p>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <button className="btn-link">Read More →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
