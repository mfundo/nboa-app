import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { link } from '@/fields/link'

export const ContentWithMedia: Block = {
  slug: 'contentWithMedia',
  interfaceName: 'ContentWithMediaBlock',
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: false,
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
    },
    {
      name: 'links',
      type: 'array',
      maxRows: 3,
      admin: {
        initCollapsed: true,
      },
      fields: [link({ disableIcon: false })],
    },
  ],
}
