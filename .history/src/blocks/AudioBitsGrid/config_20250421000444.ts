
import type { Block } from 'payload';

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  HeadingFeature
} from '@payloadcms/richtext-lexical';

export const AudioBitsGrid: Block = {
  slug: 'audioBitsGrid',
  interfaceName: 'AudioBitsGridBlock',
  fields: [
    {
      name: 'blocks',
      type: 'array',
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
          required: true
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
          required: true
        },
        {
          name: 'audio',
          type: 'relationship',
          relationTo: 'media',
          required: true
        }

      ]

    }

  ]

}
