import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import { projects } from './data/projects'

beforeEach(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue(
    new Response(JSON.stringify([{ name: 'pjp-compiler', stargazers_count: 3, pushed_at: '2026-11-05T10:00:00Z' }])),
  )
})

const cards = () => screen.getAllByRole('article')

describe('App', () => {
  it('zobrazí všechny projekty', () => {
    render(<App />)
    expect(cards()).toHaveLength(projects.length)
  })

  it('filtruje projekty podle kategorie', async () => {
    render(<App />)
    await userEvent.click(within(screen.getByRole('group', { name: 'Kategorie' })).getByRole('button', { name: 'Mobilní' }))
    expect(cards()).toHaveLength(projects.filter((p) => p.category === 'mobile').length)
    expect(screen.getByText(/Nalezeno/)).toBeInTheDocument()
  })

  it('při hledání bez výsledku nabídne zrušení filtrů', async () => {
    render(<App />)
    await userEvent.type(screen.getByRole('searchbox'), 'neexistujici-technologie')
    expect(screen.queryAllByRole('article')).toHaveLength(0)
    await userEvent.click(screen.getByRole('button', { name: 'Zrušit filtry' }))
    expect(cards()).toHaveLength(projects.length)
  })

  it('doplní datum aktualizace z GitHub API', async () => {
    render(<App />)
    expect(await screen.findByText(/aktualizováno 5\. 11\. 2026/)).toBeInTheDocument()
  })

  it('funguje i když GitHub API selže', async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error('offline'))
    render(<App />)
    expect(cards()).toHaveLength(projects.length)
    expect(screen.queryByText(/aktualizováno/)).not.toBeInTheDocument()
  })

  it('přepíná tmavý a světlý režim', async () => {
    render(<App />)
    const before = document.documentElement.dataset.theme
    await userEvent.click(screen.getByRole('button', { name: /Přepnout na/ }))
    expect(document.documentElement.dataset.theme).not.toBe(before)
  })
})
