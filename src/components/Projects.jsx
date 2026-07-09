const projects = [
  {
    title: 'Tomasulo’s Algorithm Simulator',
    description:
      'An out-of-order execution simulator implementing dynamic instruction scheduling with a Register Alias Table and reservation stations, tracking per-cycle issue/complete/writeback and IPC across pipelined functional units.',
    tags: ['C++', 'Computer Architecture'],
    repo: '',
    demo: '',
  },
  {
    title: 'Football Watchlist',
    description:
      'A full-stack web app for tracking NFL prospects: searches players via the TheSportsDB API and stores them with scouting notes in MongoDB, served through Express with server-rendered views. Built with two teammates.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/eglickman/Football-Watchlist',
  },
  {
    title: 'Neural Network & Softmax Classifier',
    description:
      'A neural network and softmax classifier built with NumPy (no PyTorch/TensorFlow), implementing forward/backward propagation, mini-batch SGD, and PCA-based dimensionality reduction, trained on MNIST.',
    tags: ['Python', 'NumPy'],
    repo: '',
    demo: '',
  },
  {
    title: 'Custom Language Lexer, Parser, Typechecker & Optimizer',
    description:
      'A full interpreter pipeline for a custom functional language: a hand-written lexer and parser, a big-step evaluator, a structural typechecker, and an AST optimizer performing constant folding and algebraic simplification.',
    tags: ['OCaml'],
    repo: '',
    demo: '',
  },
  {
    title: 'Music on the Mental',
    description:
      'A data science tutorial exploring the relationship between music habits and mental health: statistical hypothesis testing (chi-squared, ANOVA) on a Kaggle survey dataset, followed by a Decision Tree Classifier that recommends genres from a listener’s mental health profile. Built with two teammates.',
    tags: ['Python', 'pandas', 'scikit-learn'],
    repo: 'https://github.com/eyalarkin/cmsc320-final',
    demo: '',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            {(project.repo || project.demo) && (
              <div className="project-links">
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
