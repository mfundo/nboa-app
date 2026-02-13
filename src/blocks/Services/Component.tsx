'use client'
import React from 'react'
import type { ServicesBlock as ServicesBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import Image from 'next/image'
import { cn } from '@/utilities/ui'

export const ServicesBlock: React.FC<ServicesBlockProps> = ({ title, cards }) => {
  return (

    <div className={cn('hanken', 'container')}>

      {title && (
        <div className="text-center mb-8 md:mb-12 scroll-animate">
          <RichText className="wysiwyg__small" data={title} enableGutter={false} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

        {cards?.map((card, index) => (

          <div
            key={index}
            className={cn(
              'rounded-none overflow-hidden bg-card dark:bg-white group',
              'hover:shadow-sm hover:scale-105 dark:hover:shadow-lg transition-all duration-300',
              'flex flex-col h-full',
              'scroll-animate',
              `scroll-animate-delay-${(index % 4) * 100}`
            )}>

            {typeof card.image === 'object' && card.image !== null && (

              <div className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden bg-gray-100 dark:bg-white shrink-0 p-2.5 transition-all duration-300">
                <Image
                  src={card.image.url || ''}
                  alt={card.image.alt || ''}
                  width={card.image.sizes?.medium?.width || 400}
                  height={card.image.sizes?.medium?.height || 300}
                  className="w-full h-full object-cover"
                />
              </div>

            )}

            <div className="p-4 md:p-6 flex flex-col flex-1">

              <h2 className="text-base md:text-lg font-bold mb-2 md:mb-3 [color:var(--brand)]">
                {card.title}
              </h2>

              {card.content && (

                <div className="text-sm md:text-base text-muted-foreground dark:text-black mb-4 md:mb-6 grow [&_h2]:dark:text-white">
                  <RichText
                    className="wysiwyg__small dark:text-black dark:prose-invert [&_h2]:dark:text-white"
                    data={card.content}
                    enableGutter={false} />
                </div>

              )}

              {card.link && (
                <div className="mt-auto">
                  <CMSLink
                    {...card.link}
                    appearance="default"
                    className="btn-gradient-primary text-white px-3 md:px-4 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold w-auto inline-block"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

  )

}
