
import type { Block } from 'payload';

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  HeadingFeature
} from '@payloadcms/richtext-lexical';

export const AudioBitsCards: Block = {
  slug: 'audioBitsCards',
  interfaceName: 'AudioBitsCardsBlock',
  fields: [
    {
      name: 'cards',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text'
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
        }

      ]

    }

  ]

}
