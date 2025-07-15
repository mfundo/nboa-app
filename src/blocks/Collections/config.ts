
import type { Block } from 'payload';

export const Collections: Block = {

  slug: 'collections',
  interfaceName: 'CollectionsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea'
    },
    {
      name: 'collection',
      type: 'array',
      minRows: 5,
      maxRows: 5,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        },
      ],

    }

  ]

}
