const projectCards = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern shopping experience with seamless checkouts and inventory management.",
    label: "Web Design",
    tone: "rose",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Banking Mobile App",
    description:
      "Intuitive financial management with real-time transactions and analytics.",
    label: "Mobile App",
    tone: "ivory",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Corporate Branding",
    description:
      "Complete brand identity system for a startup with global ambitions.",
    label: "Branding",
    tone: "charcoal",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Analytics Dashboard",
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

        <button className="link-button" type="button">
          View All Projects
        </button>
      </div>

      <div className="projects-grid">
        {projectCards.map((project, index) => (
          <article key={project.title} className={`work-card ${project.tone}`} data-reveal style={{ transitionDelay: `${index * 120}ms` }}>
            <div className="project-visual">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <div className="project-label-row">
                <span>{project.label}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a href="#" className="project-link">
                View Project <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
