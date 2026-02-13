import type { GlobalConfig } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TermsOfUse: GlobalConfig = {
  slug: 'termsOfUse',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Modal Heading',
      required: true,
      defaultValue: 'Terms of Use',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Modal Content',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
  ],
}
