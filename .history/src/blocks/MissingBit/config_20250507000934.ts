
import type { Block } from 'payload';

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  HeadingFeature
} from '@payloadcms/richtext-lexical';

import { link } from '@/fields/link';

export const MissingBit: Block = {
  slug: 'missingBit',
  interfaceName: 'MissingBitBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imagePosition',
      type: 'select',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      defaultValue: 'left',
      required: true,
    },
    {
      name: 'android',
      type: 'text',
    },
    {
      name: 'ios',
      type: 'text',
    },
  ]

}
