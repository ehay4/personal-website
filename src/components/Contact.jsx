const links = [
  { label: 'Email', href: 'mailto:eshay06@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/erichay06' },
  { label: 'GitHub', href: 'https://github.com/ehay4' },
]

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
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
