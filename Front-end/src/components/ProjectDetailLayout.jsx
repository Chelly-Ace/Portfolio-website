import { useState } from "react";
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
  const [activePage, setActivePage] = useState("overview");

  const navigationItems = [
    {
      id: "overview",
      label: "Executive Overview",
    },
    {
      id: "business-context",
      label: "Business Context",
    },
    {
      id: "data-quality",
      label: "Data Quality & Exploration",
    },
    {
      id: "performance",
      label: "Performance Analysis",
    },
    {
      id: "recommendations",
      label: "Strategic Recommendations",
    },
    {
      id: "methodology",
      label: "Methodology",
    },
    {
      id: "tech-stack",
      label: "Technical Stack",
    },
  ];

  const renderPageContent = () => {
    switch (activePage) {
      /* =========================================
         EXECUTIVE OVERVIEW
         ========================================= */

      case "overview":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>

            <section className="project-panel overview-panel">
              <div className="project-hero-image">
                <img src={image} alt={title} />

                <div className="project-hero-copy">
                  <h2>Project Overview</h2>
                  <p>{description}</p>
                </div>
              </div>
            </section>

            {kpis.length > 0 && (
              <section className="project-kpi-grid">
                {kpis.map((item) => (
                  <div key={item.label} className="project-kpi-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </section>
            )}

            <section className="project-panel">
              <h3>Analytical Objective</h3>

              <p>
                This project evaluates multichannel marketing performance to
                identify inefficient spending, understand performance drivers,
                and develop data-driven recommendations for improving ROAS
                while supporting revenue growth.
              </p>
            </section>
          </div>
        );

      /* =========================================
         BUSINESS CONTEXT
         ========================================= */

      case "business-context":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>Business Context</h1>
              <p>
                Understanding the business objectives, marketing environment,
                and performance challenges that guided the analysis.
              </p>
            </div>

            <section className="project-panel">
              <h3>Business Situation</h3>

              <p>
                The business is a direct-to-consumer fitness supplements brand
                running multichannel marketing campaigns across Facebook,
                Google, and TikTok.
              </p>

              <p>
                The main objective is to optimize marketing spend, improve
                advertising efficiency, and support revenue growth while
                maintaining profitability.
              </p>
            </section>

            <section className="project-kpi-grid">
              <div className="project-kpi-card">
                <span>Monthly Ad Spend</span>
                <strong>$1.6M</strong>
              </div>

              <div className="project-kpi-card">
                <span>Current ROAS</span>
                <strong>0.86</strong>
              </div>

              <div className="project-kpi-card">
                <span>Minimum ROAS Target</span>
                <strong>1.20</strong>
              </div>

              <div className="project-kpi-card">
                <span>Revenue Growth Goal</span>
                <strong>40%</strong>
              </div>
            </section>

            <section className="project-panel">
              <h3>Key Business Challenges</h3>

              <ul className="project-bullets">
                <li>
                  Overall ROAS is below the required business target.
                </li>
                <li>
                  Marketing performance varies across platforms, campaigns,
                  creatives, and product categories.
                </li>
                <li>
                  Weekly campaign efficiency has been declining.
                </li>
                <li>
                  Regional performance patterns require further analysis.
                </li>
                <li>
                  The impact of competitive events is not yet fully understood.
                </li>
                <li>
                  Underperforming areas need to be reduced while protecting
                  revenue growth.
                </li>
              </ul>
            </section>
          </div>
        );

      /* =========================================
         DATA QUALITY AND EXPLORATION
         ========================================= */

      case "data-quality":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>Data Quality & Exploration</h1>
              <p>
                Assessing data reliability, validating performance metrics,
                and preparing the dataset for analysis.
              </p>
            </div>

            <section className="project-panel">
              <h3>Data Preparation Objective</h3>

              <p>
                Before analyzing campaign performance, the dataset must be
                reviewed for completeness, consistency, accuracy, and unusual
                values. This helps ensure that the insights and recommendations
                are based on reliable information.
              </p>
            </section>

            <section className="project-panel">
              <h3>Dataset Scope</h3>

              <ul className="project-bullets">
                <li>Three months of daily marketing performance data</li>
                <li>Analysis period: January to March 2024</li>
                <li>Platforms: Facebook, Google, and TikTok</li>
                <li>Regions: West, South, Northeast, and Midwest</li>
                <li>
                  Product categories: Pre-workout, Protein, Weight Loss, and
                  Diet
                </li>
                <li>
                  Creative types: Video, Image, Carousel, Search, and Display
                </li>
                <li>
                  Target audiences: Athletes, Fitness Enthusiasts, and Weight
                  Loss
                </li>
              </ul>
            </section>

            <section className="project-panel">
              <h3>Data Quality Checks</h3>

              <ul className="project-bullets">
                <li>Identify and handle missing values.</li>
                <li>Check for duplicate records.</li>
                <li>Validate date formats and categorical values.</li>
                <li>
                  Review unusual values in ad spend, revenue, clicks,
                  impressions, and purchases.
                </li>
                <li>
                  Check whether zero or null values affect metric calculations.
                </li>
                <li>Document assumptions made during data preparation.</li>
              </ul>
            </section>

            <section className="project-panel">
              <h3>Performance Metrics Validation</h3>

              <div className="project-table-wrap">
                <table className="project-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Formula</th>
                      <th>Business Purpose</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>CTR</td>
                      <td>Clicks ÷ Impressions × 100</td>
                      <td>Measures ad engagement</td>
                    </tr>

                    <tr>
                      <td>CPC</td>
                      <td>Ad Spend ÷ Clicks</td>
                      <td>Measures cost per click</td>
                    </tr>

                    <tr>
                      <td>CVR</td>
                      <td>Purchases ÷ Clicks × 100</td>
                      <td>Measures conversion efficiency</td>
                    </tr>

                    <tr>
                      <td>ROAS</td>
                      <td>Revenue ÷ Ad Spend</td>
                      <td>Measures advertising return</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="project-panel">
              <h3>Data Quality Documentation</h3>

              <p>
                The final analysis should document the data issues identified,
                the cleaning actions performed, and the assumptions that may
                influence the interpretation of the results.
              </p>
            </section>
          </div>
        );

      /* =========================================
         PERFORMANCE ANALYSIS
         ========================================= */

      case "performance":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>Performance Analysis</h1>
              <p>
                Evaluating channel, regional, creative, product, audience,
                and time-based performance to identify optimization
                opportunities.
              </p>
            </div>

            {kpis.length > 0 && (
              <section className="project-kpi-grid">
                {kpis.map((item) => (
                  <div key={item.label} className="project-kpi-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </section>
            )}

            {visual && (
              <section className="project-panel chart-panel">
                <h3>Campaign Performance</h3>
                {visual}
              </section>
            )}

            {platformRows.length > 0 && (
              <section className="project-panel">
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
              </section>
            )}

            <section className="project-panel">
              <h3>Analysis Areas</h3>

              <ul className="project-bullets">
                <li>
                  Compare Facebook, Google, and TikTok across key performance
                  metrics.
                </li>
                <li>
                  Identify overperforming and underperforming regions.
                </li>
                <li>
                  Compare creative formats such as video, image, carousel,
                  search, and display.
                </li>
                <li>
                  Analyze product category and target audience performance.
                </li>
                <li>Review week-over-week ROAS trends.</li>
                <li>
                  Assess the effect of competitive events on campaign results.
                </li>
                <li>
                  Evaluate the relationship between ad frequency and conversion
                  rates.
                </li>
              </ul>
            </section>
          </div>
        );

      /* =========================================
         STRATEGIC RECOMMENDATIONS
         ========================================= */

      case "recommendations":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>Strategic Recommendations</h1>
              <p>
                Translating analytical findings into actionable marketing,
                budget allocation, testing, and measurement strategies.
              </p>
            </div>

            <section className="project-panel">
              <h3>Immediate Optimization Opportunities</h3>

              <ul className="project-bullets">
                <li>
                  Identify the lowest-performing campaigns and areas for spend
                  reduction.
                </li>
                <li>
                  Develop a framework for reducing 30% of inefficient spend.
                </li>
                <li>
                  Reallocate budget toward high-performing channels and
                  campaigns.
                </li>
                <li>
                  Recommend bidding adjustments around competitive events.
                </li>
              </ul>
            </section>

            <section className="project-panel">
              <h3>Testing Recommendations</h3>

              <ul className="project-bullets">
                <li>
                  Propose three data-driven A/B tests based on the analysis.
                </li>
                <li>
                  Define a clear hypothesis and experimental design for each
                  test.
                </li>
                <li>
                  Identify success metrics and measurement methods.
                </li>
                <li>
                  Estimate potential impact and define implementation
                  timelines.
                </li>
              </ul>
            </section>

            <section className="project-panel">
              <h3>Long-Term Strategy</h3>

              <ul className="project-bullets">
                <li>
                  Develop a data-driven regional budget allocation strategy.
                </li>
                <li>
                  Create a platform-specific creative strategy.
                </li>
                <li>
                  Prioritize high-value audiences and product categories.
                </li>
                <li>
                  Incorporate seasonality and competitive events into quarterly
                  planning.
                </li>
              </ul>
            </section>

            {recommendations.length > 0 && (
              <section className="project-panel">
                <h3>Project-Specific Recommendations</h3>

                <ul className="project-bullets">
                  {recommendations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        );

      /* =========================================
         METHODOLOGY
         ========================================= */

      case "methodology":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>Methodology</h1>
              <p>
                Documenting the analytical framework, metric definitions,
                statistical methods, and decision-making process.
              </p>
            </div>

            <section className="project-panel">
              <h3>Analytical Approach</h3>

              <ol className="project-bullets">
                <li>
                  Understand the business objectives and performance targets.
                </li>
                <li>Inspect and clean the dataset.</li>
                <li>Validate the core marketing performance metrics.</li>
                <li>Conduct exploratory data analysis.</li>
                <li>
                  Compare performance across platforms, regions, creatives,
                  products, and audiences.
                </li>
                <li>
                  Evaluate weekly trends and competitive-event effects.
                </li>
                <li>Translate findings into prioritized recommendations.</li>
                <li>
                  Define a measurement plan for tracking improvements.
                </li>
              </ol>
            </section>

            <section className="project-panel">
              <h3>Statistical Analysis</h3>

              <p>
                Statistical significance testing can be used to determine
                whether observed differences between platforms or regions are
                likely to represent meaningful performance variation rather
                than random fluctuations.
              </p>

              <p>
                The final report should document the statistical tests used,
                significance levels, assumptions, and interpretation of the
                results.
              </p>
            </section>

            <section className="project-panel">
              <h3>Measurement Framework</h3>

              <ul className="project-bullets">
                <li>Primary metric: ROAS</li>
                <li>Efficiency metrics: CPC, CPM, CTR, and CVR</li>
                <li>Business outcomes: Revenue and profitability</li>
                <li>Customer value metric: Customer LTV</li>
                <li>
                  Monitoring frequency: Weekly and monthly performance reviews
                </li>
              </ul>
            </section>

            <section className="project-panel">
              <h3>Assumptions and Limitations</h3>

              <ul className="project-bullets">
                <li>
                  Missing or inconsistent records may affect certain
                  calculations.
                </li>
                <li>
                  Correlation between metrics does not necessarily indicate
                  causation.
                </li>
                <li>
                  Competitive events and seasonality may influence campaign
                  performance.
                </li>
                <li>
                  Budget recommendations should be validated through controlled
                  testing and ongoing monitoring.
                </li>
              </ul>
            </section>
          </div>
        );

      /* =========================================
         TECHNICAL STACK
         ========================================= */

      case "tech-stack":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>Technical Stack</h1>
              <p>
                Tools and technologies used for data preparation, analysis,
                visualization, and business reporting.
              </p>
            </div>

            <section className="project-panel">
              <h3>Tools and Technologies</h3>

              <div className="project-stack">
                {stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar-content">
          <div className="dashboard-sidebar-heading">
            <h2>{title}</h2>
          </div>

          <nav className="dashboard-navigation">
            <p className="dashboard-navigation-label">Project Menu</p>

            {navigationItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`dashboard-nav-item ${
                  activePage === item.id ? "active" : ""
                }`}
                onClick={() => setActivePage(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="dashboard-sidebar-bottom">
          <Link to="/" className="back-link">
            <span className="back-link-arrow">←</span>
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </aside>

      <main className="dashboard-content">
        <div className="dashboard-content-inner">
          {renderPageContent()}
        </div>
      </main>
    </div>
  );
}