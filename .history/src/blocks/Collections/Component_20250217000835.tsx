
'use client';

import { cn } from '@/utilities/ui'
import Image from 'next/image'

import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import type { SpecialContentBlock as SpecialContentProps } from 'src/payload-types';

export function SpecialContentBlock(props: SpecialContentProps) {

  const {title, description, slides} = props;
  const _slides = slides ?? [];

  return (

    <div className={cn('hanken container')}>

      <h2 className='text-[#FDB73E] text-center text-[40px] font-semibold mb-5'>
        {title}
      </h2>

      <p className='text-center text-[20px] mb-8'>
        {description}
      </p>

      <Swiper
        className='special-content-slider'
        modules={[Navigation, A11y]}
        navigation
        slidesPerView={4}
        spaceBetween={40}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>

        {_slides?.length >= 1 && _slides.map((slide, index) => (

          <SwiperSlide
            className='flex-wrap'
            key={slide.id}
            virtualIndex={index}>

              {slide.image && typeof slide.image === 'object' && (

                <div className="relative flex items-center flex-wrap">

                  <div className="group">

                    <div className="absolute inset-0 flex items-center justify-center bg-[#FDB73E] opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                      <p className='text-center text-[14px] px-11'>
                        {slide.caption}
                      </p>

                    </div>

                  </div>

                  <Image
                    width={slide.image.sizes?.medium?.width || 500}
                    height={320}
                    src={slide.image?.url || ''}
                    alt={slide.image.alt || ''} />

                </div>

              )}

              <div className='text-center mt-2'>{slide.title}</div>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>

  );

}
