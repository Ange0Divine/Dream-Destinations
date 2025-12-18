import Contact from "../components/Contact"

export default function ContactPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Let's start planning your dream adventure together</p>
        </div>
      </div>
      <Contact />
    </div>
  )
}
