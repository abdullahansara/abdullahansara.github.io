import { config } from 'dotenv'
import { getPayload } from 'payload'

config({ path: '.env.local' })

const paragraph = (text: string) => ({
  root: {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    children: [
      {
        type: 'paragraph',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'text',
            text,
            version: 1,
          },
        ],
      },
    ],
    direction: 'ltr',
  },
})

async function upsertBySlug(collection: any, slug: string, data: Record<string, unknown>) {
  const existing = await payload.find({
    collection,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (existing.docs[0]) {
    return payload.update({
      collection,
      id: existing.docs[0].id,
      data,
    })
  }

  return payload.create({
    collection,
    data: {
      slug,
      ...data,
    },
  })
}

async function createPublication(title: string, data: Record<string, unknown>) {
  const existing = await payload.find({
    collection: 'publications',
    limit: 1,
    where: {
      title: {
        equals: title,
      },
    },
  })

  if (existing.docs[0]) {
    return payload.update({
      collection: 'publications',
      id: existing.docs[0].id,
      data,
    })
  }

  return payload.create({
    collection: 'publications',
    data: {
      title,
      ...data,
    },
  })
}

const { default: configPromise } = await import('@payload-config')
console.log('Initializing Payload...')
const payload = (await getPayload({ config: configPromise })) as any
console.log('Payload initialized. Seeding content...')

await payload.updateGlobal({
  slug: 'site-settings',
  data: {
    name: 'Abdullah Ansar',
    role: 'Researcher in philosophy, cognitive science, and Islamic intellectual history',
    homepageDeck:
      "I work at the intersection of philosophy, cognition, religion, and textual transmission, with a focus on Qur'anic orality, memory studies, recitation, and the intellectual traditions of Islam.",
    profileNote:
      'This site gathers research interests, current projects, developing publications, and reflections on oral tradition, philosophical inquiry, scriptural transmission, and the history of ideas.',
  },
})

await upsertBySlug('pages', 'about', {
  title: 'About',
  kicker: 'Academic Profile',
  summary:
    'A concise intellectual biography with room to grow into a full CV, teaching record, and contact page.',
  content: paragraph(
    "I am a researcher working at the intersection of philosophy, cognitive science, and Islamic intellectual history. My research focuses on Qur'anic orality, memory, and textual transmission, with particular attention to the interaction between oral and written forms. I also work on early Shi'i intellectual history, Islamic philosophy, and the development of legal and theological thought in formative Islam.",
  ),
})

const researchAreas = [
  {
    title: "Qur'anic Orality",
    description:
      'Recitation, memorization, variant readings, and the relationship between written fixation and living oral transmission.',
    order: 10,
  },
  {
    title: 'Memory and Cognition',
    description:
      'How repetition, embodiment, communal discipline, and musicality support durable memory systems in religious traditions.',
    order: 20,
  },
  {
    title: 'Islamic Intellectual History',
    description:
      "Islamic philosophy, formative Shi'i thought, legal theory, theology, and traditions of commentary and disciplined study.",
    order: 30,
  },
]

for (const area of researchAreas) {
  const existing = await payload.find({
    collection: 'research-areas',
    limit: 1,
    where: { title: { equals: area.title } },
  })

  if (existing.docs[0]) {
    await payload.update({
      collection: 'research-areas',
      id: existing.docs[0].id,
      data: area,
    })
  } else {
    await payload.create({
      collection: 'research-areas',
      data: area,
    })
  }
}

await upsertBySlug('posts', 'welcome', {
  title: 'Welcome: Scholarly Site and Blog',
  subtitle: 'A short note introducing this site as a home for academic materials and essays.',
  publishedAt: new Date('2026-05-17T09:00:00.000Z').toISOString(),
  _status: 'published',
  content: paragraph(
    'This is the first post in the site publication archive. The blog is designed to work like a personal Substack-style space: essays can be drafted in the CMS, published, tagged by topic, and displayed in a clean reading layout.',
  ),
})

await createPublication(
  "The Law of the Imam: Realist Particularism and Proto-Usulism in Formative Shi'i Islam",
  {
    authors: 'Abdullah Ansar',
    year: 2025,
    venue: 'Islamic Law and Society',
    type: 'article',
    selected: true,
    abstract: paragraph(
      "Published online ahead of print. This article examines legal reasoning, particularism, and early Imami approaches to authority and normativity in formative Shi'i Islam.",
    ),
  },
)

await createPublication('Ya Muhammad Madad: Sunni Scholars Who Permit Istighatha (Intercessory Prayer)', {
  authors: 'Khalil Andani and Abdullah Ansar',
  year: 2024,
  venue: 'Substack',
  type: 'public-essay',
  selected: true,
  externalUrl: 'https://substack.com/home/post/p-153472233',
  abstract: paragraph('Public essay on Sunni scholarly discussions of istighatha and intercessory prayer.'),
})

await createPublication('Enlightened by One Lamp', {
  authors: 'Abdullah Ansar',
  year: 2024,
  venue: 'HMML Stories',
  type: 'public-essay',
  selected: true,
  externalUrl: 'https://hmml.org/stories/enlightened-by-one-lamp/',
  abstract: paragraph('Public-facing reflection published by HMML Stories.'),
})

console.log('Seed complete.')
process.exit(0)
