'use client'

import React, { useState } from 'react'
import type { GalleryBlock as GalleryProps } from '@/payload-types'
import Image from 'next/image'
import { cn } from '@/utilities/ui'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export const GalleryBlock: React.FC<GalleryProps> = ({ title, images }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const lightboxSlides = images
    ?.filter((item) => typeof item.image === 'object' && item.image !== null)
    .map((item) => ({
      src: (item.image as any).url || '',
      alt: (item.image as any).alt || '',
      title: item.caption || '',
    })) || []

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
                  <button
                    onClick={() => setLightboxIndex(index)}
                    className="w-full border-2 border-gray-300 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-brand hover:shadow-lg group"
                    aria-label={`Open ${image.alt || 'image'} in lightbox`}
                  >
                    <div className="overflow-hidden">
                      <Image
                        src={image.url || ''}
                        alt={image.alt || ''}
                        width={image.sizes?.medium?.width || 250}
                        height={280}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </button>
                  {item.caption && <p className="mt-2 text-xs md:text-sm">{item.caption || 'Caption'}</p>}
                </>
              )}
            </div>
          )
        })}
      </div>

      {/* Lightbox */}
      <Lightbox
        slides={lightboxSlides}
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        on={{
          view: ({ index }) => setLightboxIndex(index),
        }}
      />
    </div>
  )
}
