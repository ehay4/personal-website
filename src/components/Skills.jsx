const skills = [
  'Python',
  'C++',
  'OCaml',
  'Java',
  'TypeScript',
  'JavaScript',
  'C',
  'React.js',
  'Node.js',
  'Express.js',
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
      <h2>Skills</h2>
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
