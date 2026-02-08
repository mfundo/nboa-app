import React from 'react'
import type { MissingBitBlock as MissingBitProps } from '@/payload-types'
import RichText from '@/components/RichText'
import Image from 'next/image'
import { cn } from '@/utilities/ui'

export const MissingBitBlock: React.FC<MissingBitProps> = ({
  title,
  content,
  image,
  imagePosition,
  android,
  ios,
}) => {
  return (
    <div className={cn('hanken', 'py-6 md:py-10 px-4 md:px-8')}>
      <div
        className={cn(
          'flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12',
          imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row',
        )}
      >
        <div className="w-full lg:w-1/2">
          {typeof image === 'object' && image !== null && (
            <Image
              src={image.url || ''}
              alt={image.alt || ''}
              width={image.sizes?.medium?.width || 500}
              height={400}
              className="w-full h-auto"
            />
          )}
        </div>
        <div className="w-full lg:w-1/2 min-h-50 md:min-h-75 lg:min-h-110 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl text-brand mb-3 md:mb-4">{title}</h2>
          {content && <RichText data={content} />}
          <div className="flex gap-2 md:gap-4 mt-4 md:mt-6 flex-wrap">
            {android && (
              <a href={android} target="_blank" rel="noopener noreferrer" className="bg-brand text-white px-3 md:px-4 py-2 rounded text-sm md:text-base hover:opacity-90 transition-opacity w-auto inline-flex">
                Android
              </a>
            )}
            {ios && (
              <a href={ios} target="_blank" rel="noopener noreferrer" className="bg-brand text-white px-3 md:px-4 py-2 rounded text-sm md:text-base hover:opacity-90 transition-opacity w-auto inline-flex">
                iOS
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
