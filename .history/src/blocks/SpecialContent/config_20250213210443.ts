
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
      name: 'slides',
      type: 'group',
      fields: [
        {
          name: 'pageMeta', // required
          type: 'group', // required
          interfaceName: 'Meta', // optional
          fields: [
            // required
            {
              name: 'title',
              type: 'text',
              required: true,
              minLength: 20,
              maxLength: 100,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              minLength: 40,
              maxLength: 160,
            },
          ],
        },
      ]
    }


  ]

}
