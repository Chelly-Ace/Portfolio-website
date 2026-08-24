import { Link } from "react-router-dom";
import mediaBuyerLogo from "../assets/media_buyer_logo.jpg";

export const projectCards = [
  {
    title: "Media Buying Analytics",
    path: "/projects/media-buying",
    description:
      "Analyzed multichannel advertising performance with Power BI to identify campaign trends, optimize budget allocation, and improve ROAS.",
    label: "Power BI Dashboard",
    tone: "rose",
    image: mediaBuyerLogo,
  },
  {
    title: "Banking Mobile App",
    path: "/projects/banking-app",
    description:
      "Intuitive financial management with real-time transactions and analytics.",
    label: "Mobile App",
    tone: "ivory",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Corporate Branding",
    path: "/projects/corporate-branding",
    description:
      "Complete brand identity system for a startup with global ambitions.",
    label: "Branding",
    tone: "charcoal",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Analytics Dashboard",
    path: "/projects/analytics-dashboard",
    description:
      "Data-driven insights with real-time monitoring and reporting capabilities.",
    label: "Dashboard",
    tone: "sage",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
];

export const Projects = () => {
  return (
    <section className="featured-work" id="projects" data-reveal>
      <div className="section-heading" data-reveal>
        <div className="heading-group">
          <span className="mini-label">Portfolio</span>
          <h2>Featured Work</h2>
        </div>
      </div>

      <div className="projects-grid">
        {projectCards.map((project, index) => (
          <Link
            key={project.title}
            to={project.path}
            className="project-card-link"
            aria-label={`Open ${project.title} project page`}
          >
            <article
              className={`work-card ${project.tone}`}
              data-reveal
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="project-visual">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <div className="project-label-row">
                  <span>{project.label}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <span className="project-link">
                  View Project <span aria-hidden="true">→</span>
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};
