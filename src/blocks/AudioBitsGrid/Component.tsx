'use client'
import React from 'react'
import type { AudioBitsGridBlock as AudioBitsGridProps } from '@/payload-types'
import Image from 'next/image'
import { cn } from '@/utilities/ui'

export const AudioBitsGridBlock: React.FC<AudioBitsGridProps> = ({ blocks }) => {
  const featuredBlock = blocks?.[0]
  const smallBlocks = blocks?.slice(1, 5)

  return (
    <div className={cn('hanken', 'container', 'py-6 md:py-10 px-4 md:px-8')}>
      {featuredBlock && (
        <div className="relative mb-3 md:mb-4 h-50 md:h-75 lg:h-100 group">
          {typeof featuredBlock.image === 'object' && featuredBlock.image !== null && (
            <Image
              src={featuredBlock.image.url || ''}
              alt={featuredBlock.image.alt || ''}
              fill
              className="object-cover"
            />
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {smallBlocks?.map((block, index) => (
          <div key={index} className="relative h-40 md:h-75 group">
            {typeof block.image === 'object' && block.image !== null && (
              <Image
                src={block.image.url || ''}
                alt={block.image.alt || ''}
                fill
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
