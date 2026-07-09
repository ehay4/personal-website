function Hero() {
  return (
    <section className="hero">
      <div className="headshot">
        <span>Add photo</span>
      </div>
      <h1>Eric Hay</h1>
      <p className="hero-tagline">
        Software Engineer &mdash; Computer Science &amp; Finance, University of Maryland
      </p>
      <div className="hero-links">
        <a href="#projects" className="button button-primary">
          View my work
        </a>
        <a href="#contact" className="button button-secondary">
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Hero
