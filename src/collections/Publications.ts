import type { CollectionConfig } from 'payload'

export const Publications: CollectionConfig = {
  slug: 'publications',
  admin: {
    group: 'Academia',
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'type', 'selected'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'authors',
      type: 'text',
      required: true,
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      name: 'venue',
      type: 'text',
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'article',
      options: [
        { label: 'Article', value: 'article' },
        { label: 'Book Chapter', value: 'book-chapter' },
        { label: 'Public Essay', value: 'public-essay' },
        { label: 'Working Paper', value: 'working-paper' },
        { label: 'Thesis', value: 'thesis' },
        { label: 'Talk', value: 'talk' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'selected',
      type: 'checkbox',
      defaultValue: false,
      label: 'Feature on homepage',
    },
    {
      name: 'externalUrl',
      type: 'text',
    },
    {
      name: 'doi',
      type: 'text',
    },
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'abstract',
      type: 'richText',
    },
  ],
}
