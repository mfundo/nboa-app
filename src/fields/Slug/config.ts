import type { Field, TextField } from 'payload'

type SlugFieldConfig = Partial<TextField> & {
  name?: string
}

export const customSlugField = (config: SlugFieldConfig = {}): Field => {
  const { name = 'slug', admin, ...rest } = config

  return {
    name,
    type: 'text',
    index: true,
    unique: true,
    required: true,
    admin: {
      position: 'sidebar',
      ...admin,
      components: {
        Field: '@/fields/Slug#SlugField',
      },
    },
    hooks: {
      beforeValidate: [
        ({ value, data }) => {
          if (!value && data?.title) {
            // Auto-generate slug from title if not provided
            return data.title
              .toString()
              .toLowerCase()
              .trim()
              .replace(/\s+/g, '-')
              .replace(/[^\w\-]+/g, '')
              .replace(/\-\-+/g, '-')
              .replace(/^-+/, '')
              .replace(/-+$/, '')
          }
          return value
        },
      ],
    },
    ...rest,
  } as TextField
}
