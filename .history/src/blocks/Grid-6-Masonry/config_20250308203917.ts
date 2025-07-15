
import type { Block } from 'payload';

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  HeadingFeature
} from '@payloadcms/richtext-lexical';

export const Grid6Masonry: Block = {
  slug: 'Grid6Masonry',
  interfaceName: 'Grid6MasonryBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
             HeadingFeature({ enabledHeadingSizes: ['h3'] }),
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
      defaultValue: 'right',
      required: true,
    },

  ]

}
