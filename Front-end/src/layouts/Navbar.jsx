import { useEffect, useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefers =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(stored ? stored === "dark" : !!prefers);
    } catch (e) {
      setIsDark(false);
    }
  }, []);

  const handleToggle = () => {
    try {
      const newTheme = isDark ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      if (newTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      setIsDark(!isDark);
    } catch (e) {
      // ignore
    }
  };

  return (
    <header className="topbar">
      <div className="brand-stack">
        <div className="brand-mark">ADV.</div>
        <div className="brand-subtitle">Albert De Villa</div>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button
          className="theme-toggle linkedin-button"
          type="button"
          title="LinkedIn"
          onClick={() =>
            window.open("https://www.linkedin.com/in/albert-de-villa-447032393/", "_blank")
          }
        >
          <FaLinkedinIn />
        </button>
        
        <button
          className="theme-toggle"
          type="button"
          onClick={handleToggle}
          aria-pressed={isDark}
          aria-label="Toggle theme"
        >
          {isDark ? <FaRegMoon /> : <FaRegSun />}
        </button>

        <button className="primary-button" type="button">
          Hire Me
        </button>
      </div>
    </header>
  );
};