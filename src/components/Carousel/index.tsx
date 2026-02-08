'use client'

import { cn } from '@/utilities/ui'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface CarouselProps {
  children: React.ReactNode[]
  slidesPerView?: number
  spaceBetween?: number
  navigation?: boolean
  pagination?: boolean
  breakpoints?: Record<number, { slidesPerView: number; spaceBetween?: number }>
  className?: string
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  slidesPerView = 1,
  spaceBetween = 16,
  navigation: showNavigation = true,
  pagination: showPagination = false,
  breakpoints,
  className,
}) => {
  const modules = [A11y]
  if (showNavigation) modules.push(Navigation)
  if (showPagination) modules.push(Pagination)

  const defaultBreakpoints = breakpoints || {
    640: { slidesPerView: 2, spaceBetween: 16 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
    1280: { slidesPerView: 4, spaceBetween: 24 },
  }

  return (
    <Swiper
      modules={modules}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      navigation={showNavigation}
      pagination={showPagination ? { clickable: true } : false}
      breakpoints={defaultBreakpoints}
      className={cn('nboa-carousel', className)}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}
