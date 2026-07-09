const skills = [
  'Python',
  'React.js',
  'TypeScript',
  'JavaScript',
  'Java',
  'C',
  'OCaml',
  'AWS',
  'Node.js',
  'Express.js',
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
