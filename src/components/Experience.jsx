const jobs = [
  {
    company: 'Barclays',
    role: 'Software Engineering Intern',
    location: 'Whippany, NJ',
    dates: 'June 2025 – August 2025',
    bullets: [
      'Built a dynamic UI in React.js with TypeScript to streamline onboarding consumers to enterprise data systems.',
      'Implemented secure authentication/authorization by connecting a custom Axios instance to a Spring Boot backend, dynamically rendering UI based on user roles and permissions.',
      'Connected to AWS DynamoDB supporting CRUD operations for consumer data, and exposed new RESTful API endpoints.',
      'Built and dockerized artifacts using Jenkins and deployed on an AWS ECS cluster.',
    ],
  },
  {
    company: 'Modix 3D',
    role: 'Software Engineering Intern',
    location: 'Tel Aviv-Yafo, Israel',
    dates: 'June 2024 – July 2024',
    bullets: [
      'Collaborated with a team to redesign the traditional 3D printing process, achieving up to a 35% reduction in print times for large-scale prints.',
      'Researched 3D mesh manipulation, G-Code generation, and tool path manipulation to develop an advanced print-path algorithm in Python.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-head">
        <h2>Experience</h2>
        <span className="section-meta">{jobs.length} positions</span>
      </div>
      <div className="job-list">
        {jobs.map((job) => (
          <article key={job.company} className="job">
            <div className="job-when">
              <span className="job-dates">{job.dates}</span>
              <span className="job-location">{job.location}</span>
            </div>
            <div className="job-body">
              <h3>{job.company}</h3>
              <p className="job-role">{job.role}</p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
