import { getTeamMembers } from "../lib/data"

export default function TeamPage() {
  const team = getTeamMembers()

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Team</h1>
          <p className="page-subtitle">Meet the passionate individuals who make your dreams come true</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image-wrapper">
                  <img
                    src={member.image || `/placeholder.svg?height=300&width=300&query=${member.name}`}
                    alt={member.name}
                    className="team-image"
                  />
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
