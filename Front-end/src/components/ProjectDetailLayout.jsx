import { Link } from "react-router-dom";

export default function ProjectDetailLayout({
  kicker,
  title,
  subtitle,
  description,
  image,
  kpis = [],
  platformRows = [],
  findings = [],
  recommendations = [],
  stack = [],
  visual,
}) {
  return (
    <div className="project-page-shell">
      <div className="project-page-header">
        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>

        <div className="project-page-title-box">
          <span className="project-page-tag">{kicker}</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="project-main-panel">
        <div className="project-hero-image">
          <img src={image} alt={title} />
          <div className="project-hero-copy">
            <h2>Project Overview</h2>
            <p>{description}</p>
          </div>
        </div>

        {kpis.length > 0 && (
          <div className="project-kpi-grid">
            {kpis.map((item) => (
              <div key={item.label} className="project-kpi-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        )}

        {visual && (
          <div className="project-panel chart-panel">
            <h3>Campaign Performance</h3>
            {visual}
          </div>
        )}

        {platformRows.length > 0 && (
          <div className="project-panel">
            <h3>Platform Performance</h3>
            <div className="project-table-wrap">
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Spend</th>
                    <th>Revenue</th>
                    <th>CTR</th>
                    <th>CPC</th>
                    <th>CVR</th>
                    <th>ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  {platformRows.map((row) => (
                    <tr key={row.platform}>
                      <td>{row.platform}</td>
                      <td>{row.spend}</td>
                      <td>{row.revenue}</td>
                      <td>{row.ctr}</td>
                      <td>{row.cpc}</td>
                      <td>{row.cvr}</td>
                      <td>{row.roas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {findings.length > 0 && (
          <div className="project-panel split-panel">
            <div>
              <h3>Key Findings</h3>
              <ul className="project-bullets">
                {findings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Recommendations</h3>
              <ul className="project-bullets">
                {recommendations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {stack.length > 0 && (
          <div className="project-panel">
            <h3>Technical Stack</h3>
            <div className="project-stack">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
