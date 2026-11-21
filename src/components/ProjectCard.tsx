import { repoUrl } from '../config'
import { CATEGORY_LABELS, type Project } from '../data/projects'
import type { RepoInfo } from '../hooks/useGithubRepos'

interface Props {
  project: Project
  info?: RepoInfo
}

const dateFormat = new Intl.DateTimeFormat('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' })

export function ProjectCard({ project, info }: Props) {
  return (
    <article className={project.featured ? 'card featured' : 'card'}>
      <div className="card-top">
        <span className="badge">{CATEGORY_LABELS[project.category]}</span>
        {project.team && <span className="badge muted">týmový</span>}
        <span className="year">{project.year}</span>
      </div>
      <h3>
        <a href={repoUrl(project.repo)}>{project.title}</a>
      </h3>
      <p>{project.description}</p>
      <ul className="tags" aria-label="Technologie">
        {[...project.languages, ...project.tech].map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="card-bottom">
        <a href={repoUrl(project.repo)}>Kód →</a>
        {project.demo && <a href={project.demo}>Živé demo →</a>}
        {info && <span className="updated">aktualizováno {dateFormat.format(new Date(info.pushedAt))}</span>}
      </div>
    </article>
  )
}
