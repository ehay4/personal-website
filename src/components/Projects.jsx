const projects = [
  {
    title: 'Music & Mental Health Recommendation Engine',
    description:
      'A personalized music recommendation engine that analyzes the correlation between music genres and mental health indicators. Built a genre-effectiveness scoring algorithm and a scikit-learn decision tree model, with EDA in pandas and matplotlib.',
    tags: ['Python', 'scikit-learn', 'pandas'],
    link: '',
  },
  {
    title: 'Custom Language Lexer, Parser & Evaluator',
    description:
      'A full lexer, parser, and evaluator for a custom programming language, transforming raw input strings into a final output through tokenization, syntax analysis, and semantic evaluation.',
    tags: ['OCaml'],
    link: '',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => {
          const Card = project.link ? 'a' : 'div'
          return (
            <Card
              key={project.title}
              href={project.link || undefined}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noreferrer' : undefined}
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
