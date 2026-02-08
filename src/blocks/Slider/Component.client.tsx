'use client'

import React from 'react'
import { Carousel } from '@/components/Carousel'

interface CarouselClientProps {
  children: React.ReactNode[]
}

export const CarouselClient: React.FC<CarouselClientProps> = ({ children }) => {
  return (
    <Carousel
      slidesPerView={1}
      spaceBetween={16}
      navigation
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
      }}
    >
      {children}
    </Carousel>
  )
}
