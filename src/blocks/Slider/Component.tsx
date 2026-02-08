'use client'

import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { SliderBlock as SliderBlockProps } from 'src/payload-types'

import { Navigation, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/a11y'

export function SliderBlock(props: SliderBlockProps) {

  const slides = props?.slide || [];

  return (
    <section className={cn('hanken')}>

      <div className="container">

        <Swiper
          modules={[Navigation, A11y]}
          navigation
          grabCursor={true}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>

          {slides?.length >= 1 &&

            slides.map((slide, index) => (

              <SwiperSlide
                className="relative min-h-125"
                key={slide.id}
                virtualIndex={index}>

                {slide.image && (

                  <div className="absolute inset-0 min-h-[45vh] select-none bg-gray-200">

                    {typeof slide.image === 'object' ? (

                      <Media
                        fill
                        pictureClassName="absolute inset-0"
                        imgClassName="object-cover"
                        priority
                        resource={slide.image}
                      />

                    ) : (

                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        Image ID: {slide.image} (not populated)
                      </div>

                    )}

                  </div>

                )}

                {slide.content && (

                  <div className="absolute left-28">
                    <RichText
                      className={cn('swiper-content wysiwyg')}
                      data={slide.content}
                      enableGutter={false}
                      enableProse={false} />
                  </div>

                )}

              </SwiperSlide>

            ))

          }

        </Swiper>

      </div>

    </section>

  )

}
