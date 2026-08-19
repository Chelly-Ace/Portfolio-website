export const Experience = () => {
  return (
    <section className="reality-section" id="experience" data-reveal>
      <div className="reality-media" data-reveal>
        <div className="media-card">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Team collaborating in a workspace"
          />
        </div>
      </div>

      <div className="reality-copy" data-reveal>
        <span className="mini-label">About Me</span>
        <h2>Turning Ideas Into Reality</h2>

        <p>
          I’m a passionate designer and developer with over 5 years of experience creating
          digital products that users love. My approach combines clean design, practical
          development, and deep collaboration to turn complex ideas into engaging,
          high-performing experiences.
        </p>

        <div className="reality-stats">
          <div>
            <strong>150+</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>98%</strong>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};
