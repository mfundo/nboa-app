
import { link } from '@/fields/link';
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
      minRows: 8,
      maxRows: 8,
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
          type: 'textarea',
        },
        link({})
      ],
    }


  ]

}
