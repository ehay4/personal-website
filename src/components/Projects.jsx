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
  {
    title: 'Parallel 3D Printing G-Code Segmenter',
    description:
      'A tool that segments G-code into independent zones so multiple print heads can print a single object in parallel, with a boundary-optimization algorithm that balances extrusion load across zones and a GUI for configuring print heads, gantry offsets, and custom layer changes. Built during a software engineering internship at Modix 3D, achieving up to a 35% reduction in print times for large-scale prints.',
    tags: ['Python', 'GUI', '3D Printing'],
    repo: 'https://github.com/3eory/Parallel_Printing_GCode',
    demo: '',
  },
]

const coursework = [
  'Machine Learning',
  'Artificial Intelligence',
  'Data Science',
  'Data Structures & Algorithms',
  'Web Development',
  'Computer Systems',
  'Object-Oriented Programming',
  'Data Visualization',
  'Linear Algebra',
  'Applied Probability & Statistics',
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects &amp; Coursework</h2>
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
      <div className="coursework">
        <h3>Relevant Coursework</h3>
        <ul className="coursework-list">
          {coursework.map((course) => (
            <li key={course} className="coursework-tag">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
