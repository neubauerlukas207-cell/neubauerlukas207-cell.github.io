import { repoUrl } from '../config'

const SERVICES = [
  {
    repo: 'fitbook-admin',
    name: 'FitBook Admin',
    lang: 'C# · ASP.NET Core',
    text: 'Recepce a vedení: permanentky, vstupy, tržby',
  },
  {
    repo: 'fitbook-api',
    name: 'FitBook API',
    lang: 'Java · Spring Boot',
    text: 'Rezervace lekcí, rozvrh, PostgreSQL',
  },
  {
    repo: 'fitbook-insights',
    name: 'FitBook Insights',
    lang: 'Python · FastAPI · scikit-learn',
    text: 'Předpověď obsazenosti lekcí (ML)',
  },
]

export function Ecosystem() {
  return (
    <section className="section" id="fitbook" aria-labelledby="fitbook-nadpis">
      <h2 id="fitbook-nadpis">Hlavní projekt: FitBook</h2>
      <p className="section-lead">
        Systém pro fitness centrum ze tří služeb ve třech jazycích, které spolu komunikují přes REST. Navazuje na můj
        školní návrh databáze – každá služba má testy, Docker a CI.
      </p>
      <ol className="ecosystem">
        {SERVICES.map((s, i) => (
          <li key={s.repo}>
            <a className="service" href={repoUrl(s.repo)}>
              <span className="service-lang">{s.lang}</span>
              <strong>{s.name}</strong>
              <span>{s.text}</span>
            </a>
            {i < SERVICES.length - 1 && (
              <span className="arrow" aria-hidden="true">
                REST <span className="arrow-icon">→</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
