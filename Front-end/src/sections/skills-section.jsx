const skills = [
  {
    icon: "UI/UX",
    title: "UI/UX Design",
    text: "Creating intuitive and visually appealing user interfaces with a focus on user experience.",
    tags: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    icon: "</>",
    title: "Frontend Development",
    text: "Building responsive and performant web applications with modern frameworks.",
    tags: ["React", "Vite", "Tailwind"],
  },
  {
    icon: "◫",
    title: "Mobile Development",
    text: "Developing cross-platform mobile applications with seamless functionality.",
    tags: ["React Native", "Flutter", "SwiftUI"],
  },
  {
    icon: "◇",
    title: "Brand Identity",
    text: "Designing memorable brand identities that strengthen market presence and trust.",
    tags: ["Logo", "Packaging", "Strategy"],
  },
  {
    icon: "◎",
    title: "Backend Development",
    text: "Crafting secure and scalable backend systems for data-heavy applications.",
    tags: ["Node.js", "Python", "PostgreSQL"],
  },
  {
    icon: "✦",
    title: "Digital Marketing",
    text: "Implementing effective digital strategies to grow online visibility and engagement.",
    tags: ["SEO", "Social", "Ads"],
  },
];

export const Skills = () => {
  return (
    <section className="skills-section" id="skills" data-reveal>
      <div className="section-heading centered" data-reveal>
        <span className="mini-label">Expertise</span>
        <h2>Skills &amp; Tools</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article key={skill.title} className="skill-card" data-reveal style={{ transitionDelay: `${index * 120}ms` }}>
            <div className="skill-icon" aria-hidden="true">
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>
            <p>{skill.text}</p>

            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
