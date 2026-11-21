import { skills } from '../data/skills'

export function Skills() {
  return (
    <section className="section" id="dovednosti" aria-labelledby="dovednosti-nadpis">
      <h2 id="dovednosti-nadpis">Dovednosti</h2>
      <div className="skills">
        {skills.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
