
import { link } from '@/fields/link';
import type { Block } from 'payload';

export const Collections: Block = {
  slug: 'collections',
  interfaceName: 'CollectionsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea'
    }


  ]

}
