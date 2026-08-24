import ProjectDetailLayout from "../components/ProjectDetailLayout";

const projectImage = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80";

const kpis = [
  { label: "Monthly Active Users", value: "84K" },
  { label: "Transactions", value: "1.2M" },
  { label: "Avg. Rating", value: "4.8/5" },
  { label: "Onboarding Completion", value: "91%" },
];

const findings = [
  "Users responded best to simplified transaction flows and low-friction account setup.",
  "Budgeting tools were one of the most used features in the first 30 days.",
  "Feedback showed a clear need for clearer alerts and faster card controls.",
  "Retention improved significantly after introducing personal finance summaries.",
];

const recommendations = [
  "Continue improving onboarding clarity and verification speed.",
  "Add more proactive financial insights for recurring spending patterns.",
  "Prioritize alerts for unusual activity and account security events.",
  "Expand personalization to support customer growth and retention.",
];

const stack = ["React Native", "Figma", "Node.js", "SQLite", "Stripe", "Firebase"];

export default function BankingAppProject() {
  return (
    <ProjectDetailLayout
      kicker="MOBILE PRODUCT"
      title="Banking Mobile App"
      subtitle="Digital Finance Experience for Everyday Banking"
      description="A mobile banking concept designed to combine secure account management, budgeting tools, and financial insights in a single user-friendly experience."
      image={projectImage}
      kpis={kpis}
      findings={findings}
      recommendations={recommendations}
      stack={stack}
    />
  );
}
