import { fallbackResearchAreas, getCMS } from '@/lib/payload'

export const dynamic = 'force-dynamic'

export default async function ResearchPage() {
  let areas: any[] = fallbackResearchAreas

  try {
    const payload = await getCMS()
    const result = await payload.find({
      collection: 'research-areas',
      limit: 100,
      sort: 'order',
    })
    areas = result.docs
  } catch {}

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Research</div>
          <h1>Research Areas</h1>
          <p>Editable academic themes managed from the backend.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid">
          {areas.map((area) => (
            <article className="card" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
