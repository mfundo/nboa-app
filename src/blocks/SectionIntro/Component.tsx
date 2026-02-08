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
    <div className={cn('hanken', 'bg-brand py-6 md:py-10 px-4 md:px-8')}>
      <h2 className="text-2xl md:text-4xl mb-6 md:mb-8">{title}</h2>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 text-sm md:text-xl">
          <RichText data={content} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-3 md:gap-4 lg:-mt-27.5">
          <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
            {typeof imageMain === 'object' && imageMain !== null && (
              <div className="w-full lg:w-2/3">
                <Image
                  src={imageMain.url || ''}
                  alt={imageMain.alt || ''}
                  width={imageMain.sizes?.medium?.width || 250}
                  height={240}
                  className="w-full h-auto"
                />
              </div>
            )}
            {typeof imageTop === 'object' && imageTop !== null && (
              <div className="w-full lg:w-1/3">
                <Image
                  src={imageTop.url || ''}
                  alt={imageTop.alt || ''}
                  width={imageTop.sizes?.medium?.width || 250}
                  height={240}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
          {typeof imageBottom === 'object' && imageBottom !== null && (
            <div className="w-full lg:w-1/3 lg:ml-auto">
              <Image
                src={imageBottom.url || ''}
                alt={imageBottom.alt || ''}
                width={imageBottom.sizes?.medium?.width || 250}
                height={240}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
