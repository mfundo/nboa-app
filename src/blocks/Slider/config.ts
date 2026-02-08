import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  HeadingFeature,
} from '@payloadcms/richtext-lexical'

export const Slider: Block = {
  slug: 'slider',
  interfaceName: 'SliderBlock',
  fields: [
    {
      name: 'slide',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      minRows: 2,
      maxRows: 5,
      fields: [
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h2'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
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
      ],
    },
  ],
}
