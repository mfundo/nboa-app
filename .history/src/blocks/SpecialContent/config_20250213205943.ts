
import type { Block } from 'payload';

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  HeadingFeature
} from '@payloadcms/richtext-lexical';

export const SpecialContent: Block = {
  slug: 'specialContent',
  interfaceName: 'SpecialContentBlock',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },


  ]

}
