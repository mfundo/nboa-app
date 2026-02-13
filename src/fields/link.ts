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
              width: '50%',
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
            name: 'newTab',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              width: '50%',
            },
            label: 'Open in new tab',
          },
        ],
      },
    ],
  }

  const linkTypes: Field[] = [
    {
      name: 'reference',
      type: 'relationship',
      label: 'Document to link to',
      relationTo: ['pages', 'posts'],
      required: false,
    },
    {
      name: 'url',
      type: 'text',
      label: 'Custom URL',
      required: false,
    },
  ]

  if (!disableLabel) {
    const linkTypesWithWidth = linkTypes.map((linkType) => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: '50%',
      },
    }))

    linkResult.fields.push({
      type: 'row',
      fields: [
        ...(linkTypesWithWidth as any),
        {
          name: 'label',
          type: 'text',
          admin: {
            width: '50%',
          },
          label: 'Label',
          required: false,
        },
      ],
    } as any)
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes]
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
