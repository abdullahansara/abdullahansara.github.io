import Link from 'next/link'

import {
  fallbackPosts,
  fallbackPublications,
  fallbackResearchAreas,
  fallbackSettings,
  getCMS,
  richTextToPlain,
} from '@/lib/payload'

export const dynamic = 'force-dynamic'

async function getHomeData() {
  try {
    const payload = await getCMS()
    const [settings, posts, publications, researchAreas] = await Promise.all([
      payload.findGlobal({ slug: 'site-settings' }),
      payload.find({ collection: 'posts', limit: 3, sort: '-publishedAt', where: { _status: { equals: 'published' } } }),
      payload.find({ collection: 'publications', limit: 3, sort: '-year', where: { selected: { equals: true } } }),
      payload.find({ collection: 'research-areas', limit: 6, sort: 'order' }),
    ])

    return {
      settings,
      posts: posts.docs,
      publications: publications.docs,
      researchAreas: researchAreas.docs,
    }
  } catch {
    return {
      settings: fallbackSettings,
      posts: fallbackPosts,
      publications: fallbackPublications,
      researchAreas: fallbackResearchAreas,
    }
  }
}

export default async function HomePage() {
  const { settings, posts, publications, researchAreas } = await getHomeData()

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="kicker">Academic page and publication notebook</div>
            <h1>{settings.name || 'Abdullah Ansar'}</h1>
            <p className="deck">{settings.homepageDeck || fallbackSettings.homepageDeck}</p>
            <div className="hero-actions">
              <Link className="button" href="/publications">View Publications</Link>
              <Link className="button secondary" href="/blog">Read Essays</Link>
            </div>
          </div>

          <aside className="profile-panel">
            <img src="/images/profile.jpg" alt="Abdullah Ansar" />
            <p>{settings.role || fallbackSettings.role}</p>
            <p>{settings.profileNote || fallbackSettings.profileNote}</p>
            <div className="link-list">
              <Link href="/about">About</Link>
              <Link href="/research">Research</Link>
              <Link href="/admin">Admin</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Research Themes</h2>
            <p>Selected areas that organize academic work and public writing.</p>
          </div>
          <div className="grid">
            {researchAreas.map((item: any) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <div className="section-header">
              <h2>Latest Essays</h2>
              <p>Substack-style long-form writing backed by a real CMS.</p>
            </div>
            <div className="post-list">
              {posts.map((post: any) => (
                <article className="post-preview" key={post.slug || post.title}>
                  <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                  <div className="meta">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}</div>
                  <p>{post.subtitle || richTextToPlain(post.content).slice(0, 220)}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="newsletter">
            <h2>Essays and Updates</h2>
            <p>Use the admin backend to publish essays, update academic pages, manage publications, and upload media.</p>
            <Link className="button" href="/admin">Open Admin</Link>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Selected Publications</h2>
            <p>Articles, chapters, public writing, and major academic projects.</p>
          </div>
          <div className="publication-list">
            {publications.map((item: any) => (
              <article className="publication-item" key={item.title}>
                <h3>{item.title}</h3>
                <div className="meta">{item.authors}{item.venue ? `, ${item.venue}` : ''}{item.year ? `, ${item.year}` : ''}</div>
                <p>{typeof item.abstract === 'string' ? item.abstract : richTextToPlain(item.abstract)}</p>
                {item.externalUrl ? <div className="link-list"><a href={item.externalUrl}>Read online</a></div> : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
