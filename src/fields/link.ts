import type { Field, GroupField } from 'payload'

import deepMerge from '@/utilities/deepMerge'

export type LinkAppearances = 'default' | 'outline' | 'icon'

export const appearanceOptions: Record<LinkAppearances, { label: string; value: string }> = {
  default: {
    label: 'Default',
    value: 'default',
  },
  outline: {
    label: 'Outline',
    value: 'outline',
  },
  icon: {
    label: 'Icon',
    value: 'icon',
  },
}

// Common lucide icons for links
export const iconOptions = [
  { label: 'None', value: '' },
  // Navigation
  { label: 'Arrow Right', value: 'ArrowRight' },
  { label: 'Arrow Left', value: 'ArrowLeft' },
  { label: 'ChevronRight', value: 'ChevronRight' },
  { label: 'ChevronLeft', value: 'ChevronLeft' },
  { label: 'External Link', value: 'ExternalLink' },
  // Social Media
  { label: 'Facebook', value: 'Facebook' },
  { label: 'Twitter', value: 'Twitter' },
  { label: 'Linkedin', value: 'Linkedin' },
  { label: 'Instagram', value: 'Instagram' },
  { label: 'Github', value: 'Github' },
  { label: 'Youtube', value: 'Youtube' },
  { label: 'Mail', value: 'Mail' },
  // Common Actions
  { label: 'Download', value: 'Download' },
  { label: 'Check', value: 'Check' },
  { label: 'Home', value: 'Home' },
  { label: 'Phone', value: 'Phone' },
  { label: 'Search', value: 'Search' },
  { label: 'Star', value: 'Star' },
  { label: 'Heart', value: 'Heart' },
  { label: 'Share2', value: 'Share2' },
  { label: 'Eye', value: 'Eye' },
  { label: 'Plus', value: 'Plus' },
  { label: 'X', value: 'X' },
  { label: 'Settings', value: 'Settings' },
  { label: 'Menu', value: 'Menu' },
  { label: 'Bell', value: 'Bell' },
  { label: 'Calendar', value: 'Calendar' },
  { label: 'Clock', value: 'Clock' },
  { label: 'MapPin', value: 'MapPin' },
]

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false
  disableLabel?: boolean
  disableIcon?: boolean
  overrides?: Partial<GroupField>
}) => Field

export const link: LinkType = ({ appearances, disableLabel = false, disableIcon = true, overrides = {} } = {}) => {
  const linkResult: GroupField = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '30%',
            },
            defaultValue: 'custom',
            options: [
              {
                label: 'Internal link',
                value: 'reference',
              },
              {
                label: 'Custom URL',
                value: 'custom',
              },
            ],
          },
          {
            name: 'url',
            type: 'text',
            label: 'Custom URL',
            admin: {
              width: '35%',
            },
          },
          {
            name: 'newTab',
            type: 'checkbox',
            label: 'Open in new tab',
            admin: {
              width: '15%',
              style: {
                alignSelf: 'flex-end',
              },
            },
          },
          {
            name: 'reference',
            type: 'relationship',
            label: 'Internal link',
            relationTo: ['pages', 'posts'],
            admin: {
              width: '20%',
            },
          },
        ],
      },
    ],
  }

  // Add label field if not disabled
  if (!disableLabel) {
    linkResult.fields.push({
      name: 'label',
      type: 'text',
      label: 'Label',
      required: false,
    })
  }

  if (appearances !== false) {
    let appearanceOptionsToUse = [appearanceOptions.default, appearanceOptions.outline, appearanceOptions.icon]

    if (appearances) {
      appearanceOptionsToUse = appearances.map((appearance) => appearanceOptions[appearance])
    }

    linkResult.fields.push({
      name: 'appearance',
      type: 'select',
      admin: {
        description: 'Choose how the link should be rendered.',
      },
      defaultValue: 'default',
      options: appearanceOptionsToUse,
    })
  }

  if (!disableIcon) {
    linkResult.fields.push({
      name: 'icon',
      type: 'select',
      admin: {
        description: 'Select an icon from lucide-react. Type to search for icons. View all available icons at https://lucide.dev',
      },
      options: iconOptions,
      defaultValue: '',
      hasMany: false,
    })
  }

  return deepMerge(linkResult, overrides)
}
