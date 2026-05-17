import { fallbackPublications, getCMS, richTextToPlain } from '@/lib/payload'

export const dynamic = 'force-dynamic'

export default async function PublicationsPage() {
  let publications: any[] = fallbackPublications

  try {
    const payload = await getCMS()
    const result = await payload.find({
      collection: 'publications',
      limit: 100,
      sort: '-year',
    })
    publications = result.docs
  } catch {}

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Research and writing</div>
          <h1>Publications</h1>
          <p>Published articles, collaborative works, public writing, and major academic projects.</p>
        </div>
      </section>
      <section className="section">
        <div className="container publication-list">
          {publications.map((item) => (
            <article className="publication-item" key={item.title}>
              <div className="kicker">{item.type || 'Publication'}</div>
              <h3>{item.title}</h3>
              <div className="meta">{item.authors}{item.venue ? `, ${item.venue}` : ''}{item.year ? `, ${item.year}` : ''}</div>
              <p>{typeof item.abstract === 'string' ? item.abstract : richTextToPlain(item.abstract)}</p>
              {item.externalUrl ? <div className="link-list"><a href={item.externalUrl}>Read online</a></div> : null}
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
