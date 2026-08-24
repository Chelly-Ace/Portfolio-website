import ProjectDetailLayout from "../components/ProjectDetailLayout";

const projectImage = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80";

const kpis = [
  { label: "Brand Clarity", value: "High" },
  { label: "Audience Reach", value: "3.4x" },
  { label: "Visual Consistency", value: "94%" },
  { label: "Engagement Lift", value: "+28%" },
];

const findings = [
  "The visual identity needed stronger differentiation in a crowded startup market.",
  "Clearer messaging improved audience understanding and trust quickly.",
  "A modern brand system created a stronger digital-first presence.",
  "Consistency across touchpoints made the brand feel more premium and credible.",
];

const recommendations = [
  "Keep the brand system flexible for future product and campaign expansion.",
  "Use the visual language consistently across web, product, and marketing assets.",
  "Build reusable templates for campaigns and presentations.",
  "Invest in clear storytelling to support fundraising and customer acquisition.",
];

const stack = ["Brand Strategy", "Typography", "Visual Identity", "Packaging", "UI Systems", "Marketing Design"];

export default function CorporateBrandingProject() {
  return (
    <ProjectDetailLayout
      kicker="BRAND DESIGN"
      title="Corporate Branding"
      subtitle="Identity System for a Growing Business"
      description="A complete brand refresh developed to clarify value, elevate trust, and give the business a consistent identity across digital and physical touchpoints."
      image={projectImage}
      kpis={kpis}
      findings={findings}
      recommendations={recommendations}
      stack={stack}
    />
  );
}
