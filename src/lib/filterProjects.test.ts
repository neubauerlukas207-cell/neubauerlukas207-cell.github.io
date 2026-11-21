import { describe, expect, it } from 'vitest'
import type { Project } from '../data/projects'
import { EMPTY_FILTER, filterProjects, languagesByUsage, normalize } from './filterProjects'

const make = (over: Partial<Project>): Project => ({
  repo: 'r',
  title: 'Projekt',
  description: '',
  category: 'web',
  languages: ['Java'],
  tech: [],
  year: 2025,
  ...over,
})

const list: Project[] = [
  make({ repo: 'a', title: 'Překladač', category: 'systems', languages: ['C'], tech: ['bison'], year: 2026 }),
  make({ repo: 'b', title: 'Android směnárna', category: 'mobile', languages: ['Java'], year: 2026, featured: true }),
  make({ repo: 'c', title: 'Fitko', category: 'web', languages: ['PHP'], tech: ['Symfony'], year: 2025 }),
  make({ repo: 'd', title: 'Banka', category: 'backend', languages: ['Java'], tech: ['JUnit 5'], year: 2024 }),
]

describe('normalize', () => {
  it('odstraní diakritiku a velká písmena', () => {
    expect(normalize('Překladač ŽLUŤOUČKÝ')).toBe('prekladac zlutoucky')
  })
})

describe('filterProjects', () => {
  it('bez filtru vrátí vše, zvýrazněné první a pak od nejnovějších', () => {
    expect(filterProjects(list, EMPTY_FILTER).map((p) => p.repo)).toEqual(['b', 'a', 'c', 'd'])
  })

  it('filtruje podle kategorie', () => {
    expect(filterProjects(list, { ...EMPTY_FILTER, category: 'web' }).map((p) => p.repo)).toEqual(['c'])
  })

  it('filtruje podle jazyka', () => {
    expect(filterProjects(list, { ...EMPTY_FILTER, language: 'Java' }).map((p) => p.repo)).toEqual(['b', 'd'])
  })

  it('hledá bez ohledu na diakritiku a velikost písmen, i v technologiích', () => {
    expect(filterProjects(list, { ...EMPTY_FILTER, query: 'PREKLADAC' }).map((p) => p.repo)).toEqual(['a'])
    expect(filterProjects(list, { ...EMPTY_FILTER, query: 'junit' }).map((p) => p.repo)).toEqual(['d'])
  })

  it('víceslovný dotaz musí obsahovat všechna slova', () => {
    expect(filterProjects(list, { ...EMPTY_FILTER, query: 'android java' })).toHaveLength(1)
    expect(filterProjects(list, { ...EMPTY_FILTER, query: 'android php' })).toHaveLength(0)
  })

  it('kombinuje všechny filtry najednou', () => {
    const result = filterProjects(list, { category: 'backend', language: 'Java', query: 'banka' })
    expect(result.map((p) => p.repo)).toEqual(['d'])
  })

  it('nemění vstupní pole', () => {
    const copy = [...list]
    filterProjects(list, EMPTY_FILTER)
    expect(list).toEqual(copy)
  })
})

describe('languagesByUsage', () => {
  it('řadí jazyky podle počtu projektů, při shodě abecedně', () => {
    expect(languagesByUsage(list)).toEqual(['Java', 'C', 'PHP'])
  })
})
