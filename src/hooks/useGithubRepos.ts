import { useEffect, useState } from 'react'
import { GITHUB_USER } from '../config'

export interface RepoInfo {
  stars: number
  pushedAt: string
}

type State =
  | { status: 'loading' }
  | { status: 'ok'; repos: Record<string, RepoInfo> }
  | { status: 'error' }

const CACHE_KEY = 'github-repos'

interface ApiRepo {
  name: string
  stargazers_count: number
  pushed_at: string
}

function readCache(): State {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY)
    if (cached) return { status: 'ok', repos: JSON.parse(cached) }
  } catch {
    // poškozená nebo nedostupná cache – načteme znovu
  }
  return { status: 'loading' }
}

/**
 * Načte veřejné repozitáře z GitHub API (bez tokenu, limit 60 požadavků/h na IP).
 * Výsledek se cachuje v sessionStorage; při chybě stránka funguje dál bez živých dat.
 */
export function useGithubRepos(): State {
  const [state, setState] = useState<State>(readCache)
  const needsFetch = state.status === 'loading'

  useEffect(() => {
    if (!needsFetch) return

    const controller = new AbortController()
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}`)
        return res.json() as Promise<ApiRepo[]>
      })
      .then((data) => {
        const repos = Object.fromEntries(
          data.map((r) => [r.name, { stars: r.stargazers_count, pushedAt: r.pushed_at }]),
        )
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(repos))
        } catch {
          // bez cache to funguje taky
        }
        setState({ status: 'ok', repos })
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'AbortError') return
        setState({ status: 'error' })
      })

    return () => controller.abort()
  }, [needsFetch])

  return state
}
