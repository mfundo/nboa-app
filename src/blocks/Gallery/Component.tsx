import React from 'react'
import type { GalleryBlock as GalleryProps } from '@/payload-types'
import Image from 'next/image'
import { cn } from '@/utilities/ui'

export const GalleryBlock: React.FC<GalleryProps> = ({ title, images }) => {
  return (
    <div className={cn('hanken', 'container', 'py-6 md:py-10 px-4 md:px-8')}>
      <h2 className="text-2xl md:text-4xl text-center text-brand mb-6 md:mb-8 scroll-animate">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {images?.map((item, index) => {
          const image = item.image
          return (
            <div key={index} className={cn('text-center scroll-animate', `scroll-animate-delay-${(index % 4) * 100}`)}>
              {typeof image === 'object' && image !== null && (
                <>
                  <Image
                    src={image.url || ''}
                    alt={image.alt || ''}
                    width={image.sizes?.medium?.width || 250}
                    height={280}
                    className="w-full h-auto"
                  />
                  {item.caption && <p className="mt-2 text-xs md:text-sm">{item.caption || 'Caption'}</p>}
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
