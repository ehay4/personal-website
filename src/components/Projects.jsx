const projects = [
  {
    slug: 'tomasulo-simulator',
    title: 'Tomasulo’s Algorithm Simulator',
    description:
      'An out-of-order execution simulator implementing dynamic instruction scheduling with a Register Alias Table and reservation stations, tracking per-cycle issue/complete/writeback and IPC across pipelined functional units.',
    tags: ['C++', 'Computer Architecture'],
    repo: '',
    demo: '',
  },
  {
    slug: 'football-watchlist',
    title: 'Football Watchlist',
    description:
      'A full-stack web app for tracking NFL prospects: searches players via the TheSportsDB API and stores them with scouting notes in MongoDB, served through Express with server-rendered views. Built with two teammates.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/eglickman/Football-Watchlist',
    demo: 'https://football-watchlist.onrender.com/',
  },
  {
    slug: 'neural-network-softmax',
    title: 'Neural Network & Softmax Classifier',
    description:
      'A neural network and softmax classifier built with NumPy (no PyTorch/TensorFlow), implementing forward/backward propagation, mini-batch SGD, and PCA-based dimensionality reduction, trained on MNIST.',
    tags: ['Python', 'NumPy'],
    repo: '',
    demo: '',
  },
  {
    slug: 'language-interpreter',
    title: 'Custom Language Lexer, Parser, Typechecker & Optimizer',
    description:
      'A full interpreter pipeline for a custom functional language: a hand-written lexer and parser, a big-step evaluator, a structural typechecker, and an AST optimizer performing constant folding and algebraic simplification.',
    tags: ['OCaml'],
    repo: '',
    demo: '',
  },
  {
    slug: 'music-on-the-mental',
    title: 'Music on the Mental',
    description:
      'A data science tutorial exploring the relationship between music habits and mental health: statistical hypothesis testing (chi-squared, ANOVA) on a Kaggle survey dataset, followed by a Decision Tree Classifier that recommends genres from a listener’s mental health profile. Built with two teammates.',
    tags: ['Python', 'pandas', 'scikit-learn'],
    repo: 'https://github.com/eyalarkin/cmsc320-final',
    demo: '',
  },
  {
    slug: 'parallel-3d-printing',
    title: 'Parallel 3D Printing G-Code Segmenter',
    description:
      'A tool that segments G-code into independent zones so multiple print heads can print a single object in parallel, with a boundary-optimization algorithm that balances extrusion load across zones and a GUI for configuring print heads, gantry offsets, and custom layer changes. Built during a software engineering internship at Modix 3D, achieving up to a 35% reduction in print times for large-scale prints.',
    tags: ['Python', 'GUI', '3D Printing'],
    repo: 'https://github.com/3eory/Parallel_Printing_GCode',
    demo: '',
  },
]

const courses = [
  {
    slug: 'cmsc-330',
    code: 'CMSC 330',
    title: 'Organization of Programming Languages',
    items: [
      'Built a full interpreter pipeline for a custom functional language — a hand-written lexer and parser, a big-step evaluator, a structural typechecker, and an AST optimizer performing constant folding and algebraic simplification.',
      'Implemented an NFA/DFA/regex engine from scratch: e-closure and subset-construction algorithms, plus a Thompson’s-construction compiler that converts regular expressions into automata.',
      'Additional exercises in OCaml and Rust, including a finite-state-machine vending machine simulator.',
    ],
  },
  {
    slug: 'cmsc-411',
    code: 'CMSC 411',
    title: 'Computer Systems Architecture',
    items: [
      'Built a Tomasulo’s Algorithm simulator modeling out-of-order execution with a Register Alias Table and reservation stations, tracking per-cycle issue/complete/writeback and IPC.',
      'Built a branch-prediction simulator implementing bimodal, two-level adaptive, and g-share predictors, validated against real benchmark traces.',
    ],
  },
  {
    slug: 'cmsc-422',
    code: 'CMSC 422',
    title: 'Introduction to Machine Learning',
    items: [
      'Built a neural network and softmax classifier with NumPy, including custom forward/backward propagation, mini-batch SGD, and PCA-based dimensionality reduction, trained on MNIST.',
      'Implemented multiclass classification via One-Against-All and All-vs-All reductions, plus a from-scratch gradient descent optimizer for a generic linear classifier framework, applied to text classification.',
      'Implemented foundational algorithms from scratch: decision trees, k-nearest neighbors, and the perceptron.',
    ],
  },
  {
    slug: 'cmsc-320',
    code: 'CMSC 320',
    title: 'Introduction to Data Science',
    items: [
      'Co-built "Music on the Mental," a data science tutorial exploring music habits and mental health using statistical hypothesis testing (chi-squared, ANOVA) and a Decision Tree Classifier that recommends genres from a listener’s mental health profile.',
    ],
  },
  {
    slug: 'cmsc-335',
    code: 'CMSC 335',
    title: 'Web Application Development with JavaScript',
    items: [
      'Built "Football Watchlist," a full-stack Express/MongoDB app for tracking NFL prospects, integrating a third-party sports API and deployed live.',
      'Built a CRUD web app for managing summer camp applications with an admin review workflow, backed by MongoDB.',
    ],
  },
  {
    slug: 'cmsc-216',
    code: 'CMSC 216',
    title: 'Introduction to Computer Systems',
    items: [
      'Implemented priority queue and linked-list abstract data types in C with manual memory management.',
      'Built a process-control test harness using fork/exec/wait to automate compiling and running test suites.',
    ],
  },
  {
    slug: 'cmsc-472',
    code: 'CMSC 472',
    title: 'Introduction to Deep Learning',
    items: [
      'Implemented a two-layer neural network from scratch (forward/backward propagation) applied to image classification (cat vs. non-cat) and IMDB sentiment analysis.',
    ],
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects &amp; Coursework</h2>

      <div className="section-overview">
        <div>
          <h3>Main Projects</h3>
          <ul className="overview-list">
            {projects.map((project) => (
              <li key={project.slug}>
                <a href={`#${project.slug}`}>{project.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Coursework</h3>
          <ul className="overview-list">
            {courses.map((course) => (
              <li key={course.slug}>
                <a href={`#${course.slug}`}>
                  {course.code} — {course.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="subsection-title">Projects</h3>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.slug} id={project.slug} className="project-card">
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

      <h3 className="subsection-title">Coursework</h3>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.slug} id={course.slug} className="course-block">
            <p className="course-code">{course.code}</p>
            <h4>{course.title}</h4>
            <ul>
              {course.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
