import type { CollectionConfig } from 'payload'

export const MissingBits: CollectionConfig = {
  slug: 'missing_bits',
  labels: {
    singular: 'Missing Bits',
    plural: 'Missing Bits',
  },
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
      name: 'photos',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'audio',
      type: 'relationship',
      relationTo: 'media',
    },
  ],
}
