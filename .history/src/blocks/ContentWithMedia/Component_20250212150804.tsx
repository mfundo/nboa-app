
'use client';

import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media';
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import type { SliderBlock as SliderBlockProps } from 'src/payload-types';

import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export function SliderBlock(props: SliderBlockProps) {

  const slides = props?.slide || [];

  return (

    <div className={cn('hanken')}>

      <div className="container">

        <Swiper
          modules={[Navigation, A11y]}
          navigation
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>

          {slides?.length >= 1 && slides.map((slide, index) => (

            <SwiperSlide
              key={slide.id}
              virtualIndex={index}>

              <RichText
                className={cn('swiper-content mixed-colors ')}
                data={slide.content}
                enableGutter={false}
                enableProse={false} />

                {slide.enableLink && <CMSLink {...slide.link} />}

                {slide.image && typeof slide.image === 'object' && (

                  <div className="min-h-[45vh] select-none">

                    <Media
                      fill
                      imgClassName="-z-10 object-cover"
                      priority
                      resource={slide.image} />

                  </div>

                )}

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </div>

  );

}
