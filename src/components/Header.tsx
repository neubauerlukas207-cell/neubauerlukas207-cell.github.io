import { GITHUB_URL } from '../config'
import type { Theme } from '../hooks/useTheme'

interface Props {
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ theme, onToggleTheme }: Props) {
  return (
    <header className="header">
      <a className="logo" href="#top">
        <span aria-hidden="true">{'</>'}</span> portfolio
      </a>
      <nav aria-label="Hlavní navigace">
        <a href="#fitbook">FitBook</a>
        <a href="#dovednosti">Dovednosti</a>
        <a href="#projekty">Projekty</a>
        <a href={GITHUB_URL}>GitHub</a>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </nav>
    </header>
  )
}
