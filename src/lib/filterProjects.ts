import type { Category, Project } from '../data/projects'

export interface ProjectFilter {
  category: Category | 'all'
  language: string | 'all'
  query: string
}

export const EMPTY_FILTER: ProjectFilter = { category: 'all', language: 'all', query: '' }

/** Normalizuje text pro hledání: malá písmena, bez diakritiky. */
export function normalize(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')
}

export function filterProjects(list: readonly Project[], filter: ProjectFilter): Project[] {
  const query = normalize(filter.query.trim())
  return list
    .filter((p) => filter.category === 'all' || p.category === filter.category)
    .filter((p) => filter.language === 'all' || p.languages.includes(filter.language))
    .filter((p) => {
      if (!query) return true
      const haystack = normalize([p.title, p.description, ...p.languages, ...p.tech].join(' '))
      return query.split(/\s+/).every((word) => haystack.includes(word))
    })
    .sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false) || b.year - a.year)
}

/** Seznam jazyků seřazený podle počtu projektů (nejčastější první). */
export function languagesByUsage(list: readonly Project[]): string[] {
  const counts = new Map<string, number>()
  for (const p of list) for (const lang of p.languages) counts.set(lang, (counts.get(lang) ?? 0) + 1)
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'cs')).map(([lang]) => lang)
}
