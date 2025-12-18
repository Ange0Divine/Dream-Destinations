import Tours from "../components/Tours"

export default function SafariToursPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Safari Tours</h1>
          <p className="page-subtitle">Embark on the adventure of a lifetime with our curated safari experiences</p>
        </div>
      </div>
      <Tours />
    </div>
  )
}
