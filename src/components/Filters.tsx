import { CATEGORY_LABELS, type Category } from '../data/projects'
import type { ProjectFilter } from '../lib/filterProjects'

interface Props {
  filter: ProjectFilter
  languages: string[]
  onChange: (filter: ProjectFilter) => void
}

const CATEGORIES = Object.entries(CATEGORY_LABELS) as [Category, string][]

export function Filters({ filter, languages, onChange }: Props) {
  return (
    <div className="filters">
      <div className="chips" role="group" aria-label="Kategorie">
        <button
          type="button"
          aria-pressed={filter.category === 'all'}
          onClick={() => onChange({ ...filter, category: 'all' })}
        >
          Vše
        </button>
        {CATEGORIES.map(([key, label]) => (
          <button
            type="button"
            key={key}
            aria-pressed={filter.category === key}
            onClick={() => onChange({ ...filter, category: key })}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="filter-row">
        <label>
          <span className="visually-hidden">Jazyk</span>
          <select value={filter.language} onChange={(e) => onChange({ ...filter, language: e.target.value })}>
            <option value="all">Všechny jazyky</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </label>
        <label className="search">
          <span className="visually-hidden">Hledat</span>
          <input
            type="search"
            placeholder="Hledat (např. testy, AVL, Android)…"
            value={filter.query}
            onChange={(e) => onChange({ ...filter, query: e.target.value })}
          />
        </label>
      </div>
    </div>
  )
}
