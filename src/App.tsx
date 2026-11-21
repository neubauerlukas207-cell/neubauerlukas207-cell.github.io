import { Ecosystem } from './components/Ecosystem'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectList } from './components/ProjectList'
import { Skills } from './components/Skills'
import { GITHUB_USER, repoUrl } from './config'
import { projects } from './data/projects'
import { useTheme } from './hooks/useTheme'
import { languagesByUsage } from './lib/filterProjects'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Header theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero projectCount={projects.length} languageCount={languagesByUsage(projects).length} />
        <Ecosystem />
        <Skills />
        <ProjectList projects={projects} />
      </main>
      <footer className="footer">
        <p>
          Postaveno v React + TypeScript, nasazeno přes GitHub Actions na GitHub Pages ·{' '}
          <a href={repoUrl(`${GITHUB_USER}.github.io`)}>zdrojový kód</a>
        </p>
      </footer>
    </>
  )
}
