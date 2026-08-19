export const Contact = () => {
  return (
    <section className="contact-section" id="contact" data-reveal>
      <div className="contact-copy" data-reveal>
        <span className="mini-label">Get In Touch</span>
        <h2>Let’s Work Together</h2>

        <p>
          Have a project in mind? Let’s discuss how we can bring your vision to life.
        </p>

        <ul className="contact-info">
          <li>Email: hello@yourdomain.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Location: San Francisco, CA</li>
        </ul>
      </div>

      <form className="contact-form" data-reveal>
        <div className="form-row">
          <label>
            Your Name
            <input type="text" placeholder="Your Name" />
          </label>

          <label>
            Your Email
            <input type="email" placeholder="Your Email" />
          </label>
        </div>

        <label>
          Subject
          <input type="text" placeholder="Subject" />
        </label>

        <label>
          Project Details
          <textarea rows="5" placeholder="Tell me about your project..." />
        </label>

        <button type="submit" className="primary-button wide-button">
          Send Message
        </button>
      </form>
    </section>
  );
};
