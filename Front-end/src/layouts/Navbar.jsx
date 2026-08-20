const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <header className="topbar">
      <div className="brand-mark">ADV.</div>

      <nav className="main-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button className="primary-button" type="button">
        Hire Me
      </button>
    </header>
  );
};