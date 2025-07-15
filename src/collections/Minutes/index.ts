import type { CollectionConfig } from 'payload'

export const Minutes: CollectionConfig = {
  slug: 'minutes',
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
      name: 'year',
      type: 'text',
      required: true,
      defaultValue: new Date().getFullYear(),
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
  ],
}
