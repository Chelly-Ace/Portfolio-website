import { useEffect } from "react";
import { Navbar } from "./layouts/Navbar";
import { About } from "./sections/about-section";
import { Projects } from "./sections/projects-section";
import { Experience } from "./sections/experience-section";
import { Skills } from "./sections/skills-section";
import { Contact } from "./sections/contacts-section";

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateScrollShift = () => {
      const shift = window.scrollY * 0.08;
      document.documentElement.style.setProperty("--scroll-shift", `${shift}px`);
    };

    updateScrollShift();
    window.addEventListener("scroll", updateScrollShift, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollShift);
  }, []);

  return (
    <div className="page-shell">
      <div className="topbar-wrap">
        <Navbar />
      </div>

      <div className="page-frame">
        <main>
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <footer className="site-footer">
          <span>© 2026 Adv. All rights reserved.</span>
          <span>Crafted with passion and precision</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
