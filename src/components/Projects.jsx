const projects = [
  {
    title: 'Tomasulo’s Algorithm Simulator',
    description:
      'An out-of-order execution simulator implementing dynamic instruction scheduling with a Register Alias Table and reservation stations, tracking per-cycle issue/complete/writeback and IPC across pipelined functional units.',
    tags: ['C++', 'Computer Architecture'],
    link: '',
  },
  {
    title: 'Football Watchlist',
    description:
      'A full-stack web app for tracking NFL prospects: searches players via the TheSportsDB API and stores them with scouting notes in MongoDB, served through Express with server-rendered views.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    link: '',
  },
  {
    title: 'Neural Network & Softmax Classifier from Scratch',
    description:
      'A from-scratch neural network and softmax classifier (no PyTorch/TensorFlow) trained on MNIST, with custom forward/backward propagation, mini-batch SGD, and PCA-based dimensionality reduction.',
    tags: ['Python', 'NumPy'],
    link: '',
  },
  {
    title: 'Custom Language Lexer, Parser, Typechecker & Optimizer',
    description:
      'A full interpreter pipeline for a custom functional language: a hand-written lexer and parser, a big-step evaluator, a structural typechecker, and an AST optimizer performing constant folding and algebraic simplification.',
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
