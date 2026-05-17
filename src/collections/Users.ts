import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'System',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
}
