import type { CollectionConfig } from 'payload'

export const Seasons: CollectionConfig = {
  slug: 'seasons',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'audio',
      type: 'relationship',
      relationTo: 'media',
    },
  ],
}
