import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className={cn('hanken', 'container my-8 md:my-16')}>
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-6 md:gap-y-8 gap-x-4 md:gap-x-8 lg:gap-x-16">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col

            return (
              <div
                className={cn('col-span-4 scroll-animate', {
                  'lg:col-span-12': size === 'full',
                  'lg:col-span-6': size === 'half',
                  'lg:col-span-4': size === 'oneThird',
                  'lg:col-span-8': size === 'twoThirds',
                  'md:col-span-2': size !== 'full',
                }, `scroll-animate-delay-${(index % 4) * 100}`)}
                key={index}
              >
                {richText && <RichText data={richText} enableGutter={false} />}

                {enableLink && <CMSLink {...link} />}
              </div>
            )
          })}
      </div>
    </div>
  )
}
