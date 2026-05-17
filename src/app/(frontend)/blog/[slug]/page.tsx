import { notFound } from 'next/navigation'

import { fallbackPosts, getCMS, richTextToPlain } from '@/lib/payload'

export const dynamic = 'force-dynamic'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post: any = fallbackPosts.find((item) => item.slug === slug)

  try {
    const payload = await getCMS()
    const result = await payload.find({
      collection: 'posts',
      limit: 1,
      where: {
        slug: {
          equals: slug,
        },
      },
    })
    post = result.docs[0]
  } catch {}

  if (!post) notFound()

  return (
    <>
      <section className="page-hero">
        <div className="readable">
          <div className="kicker">Essay</div>
          <h1>{post.title}</h1>
          {post.subtitle ? <p>{post.subtitle}</p> : null}
          <p className="meta">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}</p>
        </div>
      </section>
      <article className="prose readable">
        <p>{typeof post.content === 'string' ? post.content : richTextToPlain(post.content)}</p>
      </article>
    </>
  )
}
