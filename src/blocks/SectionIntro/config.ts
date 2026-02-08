import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const SectionIntro: Block = {
  slug: 'sectionIntro',
  interfaceName: 'SectionIntroBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h3'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    {
      name: 'imageMain',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imageTop',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imageBottom',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
