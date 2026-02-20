'use client'

import React from 'react'
import type { ContentWithImageStackBlock as ContentWithImageStackProps } from '@/payload-types'
import Image from 'next/image'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'

interface MediaObject {
  url?: string
  alt?: string
  sizes?: Record<string, unknown>
}

interface StackImage {
  image?: MediaObject | number
}

export const ContentWithImageStackBlock: React.FC<ContentWithImageStackProps> = ({
  title,
  image,
  content,
  images,
  imageGridColumns = '1',
}) => {
  const imageObj = typeof image === 'object' && image !== null ? (image as MediaObject) : null
  const stackImages = (images as StackImage[] | undefined) || []

  const gridColsClass = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-2',
    '3': 'grid-cols-3',
  }[String(imageGridColumns)] || 'grid-cols-1'

  return (
    <div className={cn('hanken', 'container', 'py-12 md:py-16 px-4 md:px-8')}>
      {/* Title at top */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12" style={{ color: 'var(--brand)' }}>
        {title}
      </h2>

      {/* Featured Image and Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left: Featured Image */}
        {imageObj && (
          <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={imageObj.url || ''}
              alt={imageObj.alt || title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Right: Content and Image Stack */}
        <div className="flex flex-col gap-8">
          {/* Content */}
          {content && (
            <div className="prose prose-sm md:prose-base text-gray-700">
              <RichText data={content} />
            </div>
          )}

          {/* Image Grid */}
          {stackImages.length > 0 && (
            <div className={cn('grid gap-4', `${gridColsClass}`)}>
              {stackImages.map((item, idx) => {
                const stackImageObj =
                  typeof item.image === 'object' && item.image !== null
                    ? (item.image as MediaObject)
                    : null

                if (!stackImageObj) return null

                return (
                  <div
                    key={idx}
                    className="relative w-full h-32 md:h-40 rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={stackImageObj.url || ''}
                      alt={stackImageObj.alt || `Image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
