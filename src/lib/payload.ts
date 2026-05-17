import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function getCMS() {
  return getPayload({ config: configPromise })
}

export function richTextToPlain(value: unknown): string {
  if (!value || typeof value !== 'object') return ''

  const walk = (node: unknown): string => {
    if (!node || typeof node !== 'object') return ''

    if ('text' in node && typeof node.text === 'string') {
      return node.text
    }

    if ('children' in node && Array.isArray(node.children)) {
      return node.children.map(walk).join(' ')
    }

    if ('root' in node) {
      return walk(node.root)
    }

    return ''
  }

  return walk(value).replace(/\s+/g, ' ').trim()
}

export const fallbackSettings = {
  name: 'Abdullah Ansar',
  role: 'Researcher in philosophy, cognitive science, and Islamic intellectual history',
  homepageDeck:
    "I work at the intersection of philosophy, cognition, religion, and textual transmission, with a focus on Qur'anic orality, memory studies, recitation, and the intellectual traditions of Islam.",
  profileNote:
    'This site gathers research interests, current projects, developing publications, and reflections on oral tradition, philosophical inquiry, scriptural transmission, and the history of ideas.',
}

export const fallbackResearchAreas = [
  {
    title: "Qur'anic Orality",
    description:
      'Recitation, memorization, variant readings, and the relationship between written fixation and living oral transmission.',
  },
  {
    title: 'Memory and Cognition',
    description:
      'How repetition, embodiment, communal discipline, and musicality support durable memory systems in religious traditions.',
  },
  {
    title: 'Islamic Intellectual History',
    description:
      "Islamic philosophy, formative Shi'i thought, legal theory, theology, and traditions of commentary and disciplined study.",
  },
]

export const fallbackPublications = [
  {
    title: "The Law of the Imam: Realist Particularism and Proto-Usulism in Formative Shi'i Islam",
    authors: 'Abdullah Ansar',
    venue: 'Islamic Law and Society',
    year: 2025,
    type: 'Article',
    selected: true,
    abstract:
      "Published online ahead of print. This article examines legal reasoning, particularism, and early Imami approaches to authority and normativity in formative Shi'i Islam.",
  },
  {
    title: 'Ya Muhammad Madad: Sunni Scholars Who Permit Istighatha (Intercessory Prayer)',
    authors: 'Khalil Andani and Abdullah Ansar',
    venue: 'Substack',
    year: 2024,
    type: 'Public Essay',
    selected: true,
    externalUrl: 'https://substack.com/home/post/p-153472233',
    abstract: 'Public essay on Sunni scholarly discussions of istighatha and intercessory prayer.',
  },
  {
    title: 'Enlightened by One Lamp',
    authors: 'Abdullah Ansar',
    venue: 'HMML Stories',
    year: 2024,
    type: 'Public Essay',
    selected: true,
    externalUrl: 'https://hmml.org/stories/enlightened-by-one-lamp/',
    abstract: 'Public-facing reflection published by HMML Stories.',
  },
]

export const fallbackPosts = [
  {
    title: 'Welcome: Scholarly Site and Blog',
    slug: 'welcome',
    subtitle:
      'A short note introducing this site as a home for academic materials and essays.',
    publishedAt: '2026-05-17T09:00:00.000Z',
    content:
      'This is the first post in the site publication archive. The blog is designed to work like a personal Substack-style space: essays can be drafted in the CMS, published, tagged by topic, and displayed in a clean reading layout.',
  },
]
