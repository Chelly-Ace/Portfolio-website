import ProjectDetailLayout from "../components/ProjectDetailLayout";

const projectImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";

const kpis = [
  { label: "Active Metrics", value: "28" },
  { label: "Performance Gain", value: "+36%" },
  { label: "Data Refresh", value: "Real-time" },
  { label: "Reporting Speed", value: "2x" },
];

const findings = [
  "A centralized dashboard made executive reporting faster and easier to interpret.",
  "The most valuable insights came from comparing performance by segment and region.",
  "Real-time monitoring allowed faster decisions for sales and marketing teams.",
  "Well-structured dashboards reduced time spent collecting manual reports.",
];

const recommendations = [
  "Add deeper trend analysis for forecasting and anomaly detection.",
  "Continue unifying reporting sources into a single source of truth.",
  "Make executive summaries more action-oriented for faster decisions.",
  "Introduce role-based views for different teams and stakeholders.",
];

const stack = ["React", "Power BI", "SQL", "Tableau", "Python", "Data Visualization"];

export default function AnalyticsDashboardProject() {
  return (
    <ProjectDetailLayout
      kicker="DATA VISUALIZATION"
      title="Analytics Dashboard"
      subtitle="Executive Reporting & Performance Monitoring"
      description="A dashboard concept built to help teams monitor KPIs, track trends, and understand performance across channels in one unified view."
      image={projectImage}
      kpis={kpis}
      findings={findings}
      recommendations={recommendations}
      stack={stack}
    />
  );
}
