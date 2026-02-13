import React from 'react'
import type { SectionIntroBlock as SectionIntroProps } from '@/payload-types'
import RichText from '@/components/RichText'
import Image from 'next/image'
import { cn } from '@/utilities/ui'

export const SectionIntroBlock: React.FC<SectionIntroProps> = ({
  title,
  content,
  imageMain,
  imageTop,
  imageBottom,
}) => {
  return (
    <div className={cn('hanken', 'bg-brand')}>
      <div className={cn('container')} style={{ marginTop: '120px', paddingBottom: '30px' }}>
        <div className="flex flex-col lg:flex-row min-h-screen lg:min-h-auto">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <div className="p-6 md:p-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-black">{title}</h2>
              <div className="text-sm md:text-base text-black space-y-4">
                <RichText data={content} />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 lg:p-6" style={{ marginTop: '-80px', paddingRight: '0' }}>

            {typeof imageMain === 'object' && imageMain !== null && (
              <div className="col-span-1 row-span-2 relative h-full min-h-96 lg:min-h-full scroll-animate">
                <Image
                  src={imageMain.url || ''}
                  alt={imageMain.alt || ''}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {typeof imageTop === 'object' && imageTop !== null && (
              <div className="col-span-1 relative h-48 md:h-56 scroll-animate scroll-animate-delay-100">
                <Image
                  src={imageTop.url || ''}
                  alt={imageTop.alt || ''}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {typeof imageBottom === 'object' && imageBottom !== null && (
              <div className="col-span-1 relative h-48 md:h-56 scroll-animate scroll-animate-delay-200">
                <Image
                  src={imageBottom.url || ''}
                  alt={imageBottom.alt || ''}
                  fill
                  className="object-cover"
                />
              </div>
            )}
        </div>
        </div>
      </div>
    </div>
  )
}
