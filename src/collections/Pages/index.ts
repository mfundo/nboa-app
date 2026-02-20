import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { AudioBitsCards } from '../../blocks/AudioBitsCards/config'
import { AudioBitsGrid } from '../../blocks/AudioBitsGrid/config'
import { Banner } from '../../blocks/Banner/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Code } from '../../blocks/Code/config'
import { Collections } from '../../blocks/Collections/config'
import { Content } from '../../blocks/Content/config'
import { ContentWithImageStack } from '../../blocks/ContentWithImageStack/config'
import { ContentWithMedia } from '../../blocks/ContentWithMedia/config'
import { FeaturedContent } from '../../blocks/FeaturedContent/config'
import { FormBlock } from '../../blocks/Form/config'
import { Gallery } from '../../blocks/Gallery/config'
import { Grid6Masonry } from '../../blocks/Grid-6-Masonry/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { MissingBit } from '../../blocks/MissingBit/config'
import { SectionIntro } from '../../blocks/SectionIntro/config'
import { Services } from '../../blocks/Services/config'
import { Slider } from '../../blocks/Slider/config'
import { SpecialContent } from '../../blocks/SpecialContent/config'
import { customSlugField } from '@/fields/Slug/config'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
    layout: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [Archive, AudioBitsCards, AudioBitsGrid, Banner, CallToAction, Code, Collections, Content, ContentWithImageStack, ContentWithMedia, FeaturedContent, FormBlock, Gallery, Grid6Masonry, MediaBlock, MissingBit, SectionIntro, Services, Slider, SpecialContent],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    customSlugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
