import Link from 'next/link'

import { fallbackPosts, getCMS, richTextToPlain } from '@/lib/payload'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  let posts: any[] = fallbackPosts

  try {
    const payload = await getCMS()
    const result = await payload.find({
      collection: 'posts',
      limit: 100,
      sort: '-publishedAt',
      where: {
        _status: {
          equals: 'published',
        },
      },
    })
    posts = result.docs
  } catch {}

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Essays</div>
          <h1>Blog</h1>
          <p>Long-form essays, notes, public scholarship, and reflections in a Substack-inspired format.</p>
        </div>
      </section>
      <section className="section">
        <div className="container two-col">
          <div className="post-list">
            {posts.map((post) => (
              <article className="post-preview" key={post.slug || post.title}>
                <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <div className="meta">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}</div>
                <p>{post.subtitle || richTextToPlain(post.content).slice(0, 260)}</p>
              </article>
            ))}
          </div>
          <aside className="newsletter">
            <h2>Publish From Admin</h2>
            <p>Posts are created, drafted, scheduled, and edited in Payload at /admin.</p>
            <Link className="button" href="/admin">Open Admin</Link>
          </aside>
        </div>
      </section>
    </>
  )
}
