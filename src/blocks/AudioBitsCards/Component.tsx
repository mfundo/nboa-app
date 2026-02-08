'use client'
import React from 'react'
import type { AudioBitsCardsBlock as AudioBitsCardsProps } from '@/payload-types'
import RichText from '@/components/RichText'
import Image from 'next/image'
import { cn } from '@/utilities/ui'

export const AudioBitsCardsBlock: React.FC<AudioBitsCardsProps> = ({ cards }) => {
  return (
    <div className={cn('hanken', 'container', 'py-6 md:py-10 px-4 md:px-8')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {cards?.map((card, index) => {
          const image = card.image
          return (
            <div key={index} className="flex flex-col gap-3 md:gap-4">
              {typeof image === 'object' && image !== null && (
                <Image
                  src={image.url || ''}
                  alt={image.alt || ''}
                  width={image.width || 500}
                  height={300}
                  className="w-full h-auto"
                />
              )}
              <h3 className="text-base md:text-xl font-semibold">{card.title}</h3>
              {card.content && <RichText data={card.content} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
