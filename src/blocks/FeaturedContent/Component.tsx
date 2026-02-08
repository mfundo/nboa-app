import React from 'react'
import type { FeaturedContentBlock as FeaturedContentProps } from '@/payload-types'
import RichText from '@/components/RichText'
import Image from 'next/image'
import { cn } from '@/utilities/ui'

export const FeaturedContentBlock: React.FC<FeaturedContentProps> = ({
  title,
  description,
  content,
  image,
  imagePosition,
}) => {
  return (
    <div className={cn('hanken container')}>

      <h2 className="text-brand text-center text-2xl md:text-4xl font-semibold mb-4 md:mb-5 scroll-animate">
        {title}
      </h2>

      {description &&
        <p className="text-sm md:text-xl text-center mb-6 md:mb-8 px-4 md:px-16 scroll-animate scroll-animate-delay-100">
          {description}
        </p>
      }

      <div className={cn(
        'flex flex-col lg:flex-row',
        imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row',
        'scroll-animate scroll-animate-delay-200 rounded-none overflow-hidden'
      )}>

        <div className="w-full lg:w-1/2">

          {typeof image === 'object' && image !== null && (
            <Image
              className={cn('object-cover h-full transition-transform duration-500 hover:scale-105')}
              src={image.url || ''}
              alt={image.alt || ''}
              width={image.sizes?.medium?.width || 500}
              height={image.sizes?.medium?.height || 400} />
          )}

        </div>

        <div className="w-full lg:w-1/2 min-h-75 lg:min-h-120 bg-gradient-brand p-8 lg:p-10 text-white text-[20px] font-semibold">

          <RichText
            className={cn('max-w-none wysiwyg')}
            data={content}
            enableGutter={false}
            enableProse={false} />

        </div>

      </div>

    </div>

  )

}
