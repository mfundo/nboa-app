'use client'

import React from 'react'
import type { Grid6MasonryBlock as Grid6MasonryBlockProps } from '@/payload-types'
import Image from 'next/image'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'

interface GridItem {
  image?: { url?: string; alt?: string; width?: number; height?: number; sizes?: any } | number
  caption?: string
}

export const Grid6MasonryBlock: React.FC<Grid6MasonryBlockProps> = ({ title, grid, content }) => {
  const gridItems = (grid as GridItem[] | undefined) || []
  const images = gridItems.slice(0, 6)

  return (
    <div className={cn('hanken')}>
      <div className="px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl text-center text-brand mb-6 md:mb-8">{title}</h2>

        {/* Content Section */}
        {content && (
          <div className="max-w-295 mx-auto px-4 md:px-8 text-gray-700 mb-8 md:mb-12">
            <RichText data={content} />
          </div>
        )}
      </div>

      {/* Masonry Grid */}
      <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-6 px-4 md:px-8">
        {/* Column 1 - Images 0, 1 */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3 md:gap-4">
          {images.slice(0, 2).map((item, idx) => {
            const imageObj = typeof item.image === 'object' && item.image !== null ? item.image : null
            const imageUrl = imageObj ? (imageObj as any).url : ''
            return (
              <div key={idx}>
                <div className="relative w-full h-40 md:h-64 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
                  {imageUrl ? (
                    <>
                      <Image
                        src={imageUrl}
                        alt={(imageObj as any)?.alt || item.caption || ''}
                        fill
                        className="object-cover"
                      />
                      {item.caption && (
                        <div className="absolute bottom-0 left-0 right-0 flex items-end">
                          <p className="w-full px-3 py-2 text-xs md:text-sm text-white bg-black/50 text-center">{item.caption}</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-400 text-sm">No image</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Column 2 - Images 2, 3 */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3 md:gap-4">
          {images.slice(2, 4).map((item, idx) => {
            const imageObj = typeof item.image === 'object' && item.image !== null ? item.image : null
            const imageUrl = imageObj ? (imageObj as any).url : ''
            return (
              <div key={idx}>
                <div className="relative w-full h-48 md:h-80 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
                  {imageUrl ? (
                    <>
                      <Image
                        src={imageUrl}
                        alt={(imageObj as any)?.alt || item.caption || ''}
                        fill
                        className="object-cover"
                      />
                      {item.caption && (
                        <div className="absolute bottom-0 left-0 right-0 flex items-end">
                          <p className="w-full px-3 py-2 text-xs md:text-sm text-white bg-black/50 text-center">{item.caption}</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-400 text-sm">No image</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Column 3 - Images 4, 5 */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3 md:gap-4">
          {images.slice(4, 6).map((item, idx) => {
            const imageObj = typeof item.image === 'object' && item.image !== null ? item.image : null
            const imageUrl = imageObj ? (imageObj as any).url : ''
            return (
              <div key={idx}>
                <div className="relative w-full h-40 md:h-64 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
                  {imageUrl ? (
                    <>
                      <Image
                        src={imageUrl}
                        alt={(imageObj as any)?.alt || item.caption || ''}
                        fill
                        className="object-cover"
                      />
                      {item.caption && (
                        <div className="absolute bottom-0 left-0 right-0 flex items-end">
                          <p className="w-full px-3 py-2 text-xs md:text-sm text-white bg-black/50 text-center">{item.caption}</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-400 text-sm">No image</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
