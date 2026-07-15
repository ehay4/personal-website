const skills = [
  'Python',
  'Java',
  'TypeScript',
  'JavaScript',
  'C',
  'React.js',
  'Node.js',
  'Express.js',
  'OCaml',
  'MongoDB',
  'NumPy',
  'pandas',
  'scikit-learn',
  'AWS',
  'Tableau',
  'D3.js',
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-head">
        <h2>Skills</h2>
        <span className="section-meta">{skills.length} entries</span>
      </div>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill} className="skill-tag">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
