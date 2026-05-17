import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Site',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      defaultValue: 'Abdullah Ansar',
    },
    {
      name: 'role',
      type: 'text',
      defaultValue: 'Researcher in philosophy, cognitive science, and Islamic intellectual history',
    },
    {
      name: 'homepageDeck',
      type: 'textarea',
      defaultValue:
        "I work at the intersection of philosophy, cognition, religion, and textual transmission, with a focus on Qur'anic orality, memory studies, recitation, and the intellectual traditions of Islam.",
    },
    {
      name: 'profileNote',
      type: 'textarea',
      defaultValue:
        'This site gathers research interests, current projects, developing publications, and reflections on oral tradition, philosophical inquiry, scriptural transmission, and the history of ideas.',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'substackUrl',
      type: 'text',
    },
    {
      name: 'googleScholarUrl',
      type: 'text',
    },
    {
      name: 'orcidUrl',
      type: 'text',
    },
    {
      name: 'linkedinUrl',
      type: 'text',
    },
  ],
}
