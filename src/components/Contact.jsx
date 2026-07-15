const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/erichay06' },
  { label: 'GitHub', href: 'https://github.com/ehay4' },
]

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-head">
        <h2>Contact</h2>
        <span className="section-meta">open to full-time roles</span>
      </div>
      <p className="contact-lede">The fastest way to reach me is email.</p>
      <a className="contact-email" href="mailto:eshay06@gmail.com">
        eshay06@gmail.com
      </a>
      <ul className="contact-links">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
