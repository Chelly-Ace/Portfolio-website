const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "25+", label: "Awards Won" },
  { value: "5+", label: "Years Experience" },
];

export const About = () => {
  return (
    <section className="hero-section" id="about" data-reveal>
      <div className="hero-copy" data-reveal>
        <div className="eyebrow-row">
          <span className="eyebrow-text">Portfolio</span>
        </div>

        <h1>
          Data
          <span className="hero-highlight">Analyst</span>
        </h1>

        <p>
          Crafting data-driven solutions that bridge business objectives with analytical
          insights. Specialize in data analytics, business intelligence, and visualization,
          with a passion for uncovering meaningful patterns and making smarter decisions.
        </p>

        <div className="hero-actions">
          <button className="primary-button" type="button">
            View Projects
          </button>
          <button className="secondary-button" type="button">
            Download CV
          </button>
        </div>
      </div>

      <div className="hero-visual" aria-label="Profile portrait" data-reveal>
        <div className="portrait-glow" />
        <div className="portrait-frame">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
            alt="Professional portrait"
          />
        </div>
      </div>

      <div className="stats-grid" aria-label="Key statistics">
        {stats.map((stat, index) => (
          <div key={stat.label} className="stat-item" data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
