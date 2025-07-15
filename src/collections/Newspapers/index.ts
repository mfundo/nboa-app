import type { CollectionConfig } from 'payload'

export const Newspapers: CollectionConfig = {
  slug: 'newspapers',
  labels: {
    singular: 'Newspaper / Gazette',
    plural: 'Newspaper / Gazette',
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
      name: 'type',
      type: 'radio',
      options: ['Issue', 'Volume'],
      admin: {
        layout: 'horizontal',
      },
      required: true,
    },
    {
      name: 'year',
      type: 'text',
      required: true,
      defaultValue: new Date().getFullYear(),
    },
    {
      name: 'country',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
    },
  ],
}
