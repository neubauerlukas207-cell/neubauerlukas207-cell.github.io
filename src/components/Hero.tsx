import { GITHUB_URL } from '../config'

interface Props {
  projectCount: number
  languageCount: number
}

export function Hero({ projectCount, languageCount }: Props) {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">Student aplikované informatiky · VŠPJ</p>
      <h1>
        Junior vývojář, který se nebojí <span className="accent">backendu, frontendu ani algoritmů</span>.
      </h1>
      <p className="lead">
        Píšu v Javě, C#, Pythonu a TypeScriptu. Od překladače v C přes Android aplikace až po webové systémy
        s databází – všechno s testy a v Gitu.
      </p>
      <div className="hero-actions">
        <a className="button primary" href="#projekty">
          Prohlédnout projekty
        </a>
        <a className="button" href={GITHUB_URL}>
          GitHub profil
        </a>
      </div>
      <dl className="stats">
        <div>
          <dt>Projektů</dt>
          <dd>{projectCount}</dd>
        </div>
        <div>
          <dt>Jazyků</dt>
          <dd>{languageCount}</dd>
        </div>
        <div>
          <dt>Od roku</dt>
          <dd>2024</dd>
        </div>
      </dl>
    </section>
  )
}
