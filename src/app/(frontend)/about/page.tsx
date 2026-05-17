import { fallbackSettings, getCMS, richTextToPlain } from '@/lib/payload'

export const dynamic = 'force-dynamic'

export default async function AboutPage() {
  let body =
    "I am a researcher working at the intersection of philosophy, cognitive science, and Islamic intellectual history. My research focuses on Qur'anic orality, memory, and textual transmission, with particular attention to the interaction between oral and written forms."

  try {
    const payload = await getCMS()
    const page = await payload.find({
      collection: 'pages',
      limit: 1,
      where: {
        slug: {
          equals: 'about',
        },
      },
    })
    if (page.docs[0]?.content) body = richTextToPlain(page.docs[0].content)
  } catch {}

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="kicker">Academic Profile</div>
          <h1>About</h1>
          <p>{fallbackSettings.role}</p>
        </div>
      </section>
      <article className="prose readable">
        <p>{body}</p>
      </article>
    </>
  )
}
