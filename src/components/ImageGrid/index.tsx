import { cn } from '@/utilities/ui'
import React from 'react'

import type { Media as MediaType } from '@/payload-types'
import { Media } from '@/components/Media'

interface ImageGridProps {
  images: (MediaType | string | number)[]
  layout?: 'newspaper' | 'gallery' | 'equal'
  className?: string
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images, layout = 'newspaper', className }) => {
  if (!images || images.length === 0) return null

  if (layout === 'gallery') {
    return (
      <div className={cn('grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2', className)}>
        {images.map((image, i) => (
          <div key={i} className="relative aspect-square overflow-hidden rounded">
            <Media
              resource={image}
              imgClassName="object-cover w-full h-full"
              fill
            />
          </div>
        ))}
      </div>
    )
  }

  if (layout === 'equal') {
    return (
      <div className={cn('grid grid-cols-2 md:grid-cols-3 gap-4', className)}>
        {images.map((image, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden rounded">
            <Media
              resource={image}
              imgClassName="object-cover w-full h-full"
              fill
            />
          </div>
        ))}
      </div>
    )
  }

  // newspaper layout: 2 large top + 4 smaller bottom
  const topImages = images.slice(0, 2)
  const bottomImages = images.slice(2, 6)

  return (
    <div className={cn('grid gap-2', className)}>
      {/* Top row: 2 large images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {topImages.map((image, i) => (
          <div key={i} className="relative aspect-[16/10] overflow-hidden rounded">
            <Media
              resource={image}
              imgClassName="object-cover w-full h-full"
              fill
            />
          </div>
        ))}
      </div>
      {/* Bottom row: up to 4 smaller images */}
      {bottomImages.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {bottomImages.map((image, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded">
              <Media
                resource={image}
                imgClassName="object-cover w-full h-full"
                fill
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
