import { useMemo, useState } from 'react'
import type { Project } from '../data/projects'
import { useGithubRepos } from '../hooks/useGithubRepos'
import { EMPTY_FILTER, filterProjects, languagesByUsage, type ProjectFilter } from '../lib/filterProjects'
import { Filters } from './Filters'
import { ProjectCard } from './ProjectCard'

interface Props {
  projects: readonly Project[]
}

export function ProjectList({ projects }: Props) {
  const [filter, setFilter] = useState<ProjectFilter>(EMPTY_FILTER)
  const github = useGithubRepos()
  const languages = useMemo(() => languagesByUsage(projects), [projects])
  const visible = useMemo(() => filterProjects(projects, filter), [projects, filter])

  return (
    <section className="section" id="projekty" aria-labelledby="projekty-nadpis">
      <h2 id="projekty-nadpis">Projekty</h2>
      <Filters filter={filter} languages={languages} onChange={setFilter} />
      <p className="result-count" aria-live="polite">
        {visible.length === projects.length ? `Všech ${visible.length} projektů` : `Nalezeno ${visible.length} z ${projects.length}`}
      </p>
      {visible.length > 0 ? (
        <div className="grid">
          {visible.map((p) => (
            <ProjectCard key={p.repo} project={p} info={github.status === 'ok' ? github.repos[p.repo] : undefined} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>Žádný projekt neodpovídá filtru.</p>
          <button type="button" className="button" onClick={() => setFilter(EMPTY_FILTER)}>
            Zrušit filtry
          </button>
        </div>
      )}
    </section>
  )
}
