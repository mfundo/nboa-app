
import type { Block } from 'payload';

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  HeadingFeature
} from '@payloadcms/richtext-lexical';

import { link } from '@/fields/link';

export const Services: Block = {
  slug: 'services',
  interfaceName: 'ServicesBlock',
  fields: [
    {
      name: 'title',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
             HeadingFeature({ enabledHeadingSizes: ['h2'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature()
          ]
        },
      }),
      label: false,
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
             HeadingFeature({ enabledHeadingSizes: ['h2'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature()
          ]
        },
      }),
      label: false,
      required: true,
    },
    {
      name: 'link',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        link()
      ]
    }
  ]

}
