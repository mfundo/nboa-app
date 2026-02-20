import React from 'react'
import type { CollectionsBlock as CollectionsProps } from '@/payload-types'
import Image from 'next/image'
import { cn } from '@/utilities/ui'

export const CollectionsBlock: React.FC<CollectionsProps> = ({ title, description, collection }) => {

  // Masonry layout configuration - alternates item sizes
  const masonryConfig = [
    { cols: 'md:col-span-2', height: 'h-64 md:h-80' }, // Large
    { cols: 'md:col-span-1', height: 'h-64 md:h-80' }, // Medium
    { cols: 'md:col-span-1', height: 'h-64 md:h-80' }, // Medium
    { cols: 'md:col-span-1', height: 'h-64 md:h-80' }, // Medium
    { cols: 'md:col-span-1', height: 'h-64 md:h-80' }, // Medium
    { cols: 'md:col-span-2', height: 'h-64 md:h-80' }, // Large
  ]

  return (

    <div className={cn('hanken', 'container')}>

      <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4 text-center scroll-animate">
        {title}
      </h2>

      {description &&
        <p className="mb-8 md:mb-12 text-center text-sm md:text-base scroll-animate scroll-animate-delay-100">
          {description}
        </p>
      }

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">

        {collection?.map((item, index) => {

          const config = masonryConfig[index] || masonryConfig[index % masonryConfig.length]
          const itemImage = typeof item.image === 'object' && item.image !== null ? item.image : null

          return (
            <a
              key={index}
              href={item.link || '#'}
              className={cn(
                config.cols,
                config.height,
                'relative overflow-hidden group rounded-lg block',
                'scroll-animate',
                `scroll-animate-delay-${(index % 4) * 100}`
              )}>

              {itemImage && (
                <Image
                  src={itemImage.url || ''}
                  alt={item.caption || `Collection ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg md:text-xl font-bold text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </h3>
              </div>

            </a>

          )

        })}

      </div>

    </div>

  )

}
