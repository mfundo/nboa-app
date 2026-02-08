'use client'
import React from 'react'
import type { SpecialContentBlock as SpecialContentProps } from '@/payload-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation } from 'swiper/modules'
import Image from 'next/image'
import { cn } from '@/utilities/ui'
import 'swiper/css'
import 'swiper/css/navigation'

export const SpecialContentBlock: React.FC<SpecialContentProps> = ({
  title,
  description,
  slides,
}) => {
  return (

    <div className={cn('hanken', 'container', 'py-6 md:py-10 px-4 md:px-8')}>

      <h2 className="text-2xl md:text-4xl text-brand mb-3 md:mb-4 text-center font-semibold">
        {title}
      </h2>

      {description &&
        <p className="text-sm md:text-xl text-center mb-6 md:mb-8 px-4 md:px-16">
          {description}
        </p>
      }

      <Swiper
        className='special-content-slider'
         modules={[Navigation, A11y]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        grabCursor>

        {slides?.map((slide, index) => {

          const image = slide.image

          return (

            <SwiperSlide key={index}>

              <div>

                <div className="relative group">

                  {typeof image === 'object' && image !== null && (
                    <Image
                      src={image.url || ''}
                      alt={image.alt || slide.title || ''}
                      width={image.sizes?.medium?.width || 500}
                      height={320}
                    />
                  )}

                  {slide.caption && (
                    <div className="overlay-fade-in">
                      <p className="text-center text-xs md:text-sm px-4 md:px-11 text-white font-semibold">
                        {slide.caption}
                      </p>
                    </div>
                  )}

                </div>

                {slide.title && (
                  <p className="mt-2 md:mt-4 text-center text-sm md:text-lg text-foreground">
                    {slide.title}
                  </p>
                )}

              </div>

            </SwiperSlide>

          )

        })}

      </Swiper>

    </div>

  )

}
