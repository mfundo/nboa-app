
import type { Block } from 'payload';

export const Gallery: Block = {
  slug: 'gallery',
  interfaceName: 'GalleryBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      minRows: 4,
      maxRows: 12,
      required: true,
      fields: [
        {
          name: 'imageBottom',
          type: 'upload',
          relationTo: 'media',
          required: true,
        }
      ]
    }
  ]
}
