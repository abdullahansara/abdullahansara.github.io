import type { CollectionConfig } from 'payload'

export const ResearchAreas: CollectionConfig = {
  slug: 'research-areas',
  admin: {
    group: 'Academia',
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 10,
    },
  ],
}
