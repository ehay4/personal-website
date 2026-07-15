const milestones = [
  { year: 'UMD', label: 'CS × Finance' },
  { year: '2024', label: 'Modix 3D' },
  { year: '2025', label: 'Barclays' },
  { year: '2026', label: 'Graduated, Latin honors' },
]

const pathPoints =
  '40,150 70,146 95,151 120,140 150,143 180,131 210,135 240,124 265,128 290,118 320,110 ' +
  '345,114 370,102 395,106 420,94 450,98 475,85 505,90 530,78 560,68 ' +
  '585,73 610,60 635,64 660,52 690,56 715,44 740,40 760,32'

const dots = [
  { x: 40, y: 150 },
  { x: 320, y: 110 },
  { x: 560, y: 68 },
  { x: 760, y: 32 },
]

function Hero() {
  return (
    <section className="hero" id="top">
      <div>
        <p className="hero-eyebrow">Software Engineer — University of Maryland</p>
        <h1>Eric Hay</h1>
        <p className="hero-tagline">
          I build production software at the intersection of computer science
          and finance &mdash; full-stack systems, machine learning, and things
          that are actually useful.
        </p>
        <div className="hero-links">
          <a href="#projects" className="button button-primary">
            View my work
          </a>
          <a href="#contact" className="button button-secondary">
            Get in touch
          </a>
        </div>
      </div>
      <div className="headshot">
        <span>Add photo</span>
      </div>
      <figure className="career" aria-label="Career timeline">
        <svg
          className="career-chart"
          viewBox="0 0 800 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline className="career-path" points={pathPoints} pathLength="1" />
          {dots.map((dot) => (
            <circle
              key={dot.x}
              className="career-dot"
              cx={dot.x}
              cy={dot.y}
              r="4.5"
            />
          ))}
          <circle
            className="career-dot-halo"
            cx="760"
            cy="32"
            r="4.5"
            style={{ transformOrigin: '760px 32px' }}
          />
        </svg>
        <figcaption className="career-legend">
          {milestones.map((milestone, i) => (
            <span
              key={milestone.year}
              className="career-milestone"
              style={{ left: `${(dots[i].x / 800) * 100}%` }}
            >
              <span className="career-year">{milestone.year}</span>
              <span className="career-label">{milestone.label}</span>
            </span>
          ))}
        </figcaption>
      </figure>
    </section>
  )
}

export default Hero
