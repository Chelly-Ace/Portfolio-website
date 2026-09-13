import mediaBuyerLogo from "../assets/media_buyer_logo.jpg";
import ProjectDetailLayout from "../components/ProjectDetailLayout";

const kpis = [
  { label: "Total Spend", value: "$1.6M" },
  { label: "Revenue", value: "$1.37M" },
  { label: "Overall ROAS", value: "0.86" },
  { label: "Target ROAS", value: "1.20" },
];

const platformRows = [
  { platform: "Facebook", spend: "$540K", revenue: "$456K", ctr: "2.8%", cpc: "$1.34", cvr: "4.1%", roas: "0.84" },
  { platform: "Google", spend: "$610K", revenue: "$520K", ctr: "3.1%", cpc: "$1.15", cvr: "5.2%", roas: "0.85" },
  { platform: "TikTok", spend: "$450K", revenue: "$394K", ctr: "4.6%", cpc: "$0.96", cvr: "3.3%", roas: "0.88" },
];

const findings = [
  "Overall ROAS is below target across the portfolio.",
  "Some campaigns are consistently underperforming and draining budget.",
  "High CPC is reducing efficiency in a subset of placements.",
  "CTR and CVR can help identify inefficient campaigns earlier.",
  "Week-over-week ROAS trends should be monitored closely.",
];

const recommendations = [
  "Reallocate budget toward the highest-performing channels.",
  "Pause or optimize campaigns with weak ROAS and elevated CPC.",
  "Test new creative variations and audience segments.",
  "Monitor conversion quality and budget pacing before scaling.",
  "Create a daily ROAS check for rapid campaign adjustments.",
];

const stack = ["Power BI", "Microsoft Excel", "Python", "Pandas", "NumPy", "Scikit-learn", "SQL"];

const chartVisual = (
  <div className="chart-placeholder" aria-label="Campaign performance chart placeholder">
    <div className="chart-bars">
      <span style={{ height: "42%" }} />
      <span style={{ height: "58%" }} />
      <span style={{ height: "72%" }} />
      <span style={{ height: "64%" }} />
      <span style={{ height: "80%" }} />
      <span style={{ height: "70%" }} />
      <span style={{ height: "92%" }} />
    </div>
    <div className="chart-legend">
      <span className="legend-dot purple" /> ROAS
      <span className="legend-dot teal" /> Spend
    </div>
  </div>
);

export default function MediaBuyingProject() {
  return (
    <ProjectDetailLayout
      kicker="MEDIA BUYING ANALYTICS"
      title="Media Buying Analytics"
      subtitle="Multichannel Campaign Performance & Budget Optimization"
      description="Analyzed a DTC fitness supplements brand spending 
                  $1.6M monthly across Facebook, Google, and TikTok, with an overall ROAS of 0.86 versus the 1.2 target. The project focuses on identifying performance gaps and optimizing ad spend to support 40% revenue growth while maintaining profitability.
"
      image={mediaBuyerLogo}
      kpis={kpis}
      platformRows={platformRows}
      findings={findings}
      recommendations={recommendations}
      stack={stack}
      visual={chartVisual}
    />
  );
}
