interface Props {
  projectCount: number
  languageCount: number
}

export function Hero({ projectCount, languageCount }: Props) {
  return (
    <section className="hero" id="top">
      <h1>Portfolio</h1>
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
