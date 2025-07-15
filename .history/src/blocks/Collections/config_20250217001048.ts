
import type { Block } from 'payload';

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  HeadingFeature
} from '@payloadcms/richtext-lexical';

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
      name: 'slides',
      type: 'array',
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      minRows: 4,
      maxRows: 8,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true
        },
        {
          name: 'caption',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        }
      ],
    }


  ]

}
