import type { GroupField } from 'payload'

export const contentWithMediaLink = (): GroupField => {
  return {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        name: 'type',
        type: 'radio',
        admin: {
          layout: 'horizontal',
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
        type: 'row',
        fields: [
          {
            name: 'reference',
            type: 'relationship',
            relationTo: ['pages', 'posts'],
            admin: {
              condition: (_, siblingData) => siblingData?.type === 'reference',
              width: '50%',
            },
          },
          {
            name: 'url',
            type: 'text',
            admin: {
              condition: (_, siblingData) => siblingData?.type === 'custom',
              width: '50%',
            },
          },
          {
            name: 'label',
            type: 'text',
            label: 'Label',
            admin: {
              width: '50%',
            },
          },
        ],
      },
      {
        type: 'row',
        fields: [
          {
            name: 'newTab',
            type: 'checkbox',
            label: 'Open in new tab',
            admin: {
              width: '50%',
            },
          },
          {
            name: 'appearance',
            type: 'select',
            options: [
              {
                label: 'Default',
                value: 'default',
              },
              {
                label: 'Outline',
                value: 'outline',
              },
            ],
            defaultValue: 'default',
            admin: {
              width: '50%',
              description: 'Choose how the link should be rendered.',
            },
          },
        ],
      },
    ],
  }
}
