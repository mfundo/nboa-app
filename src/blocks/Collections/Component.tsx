import React from 'react'
import type { CollectionsBlock as CollectionsProps } from '@/payload-types'
import Image from 'next/image'
import { cn } from '@/utilities/ui'

export const CollectionsBlock: React.FC<CollectionsProps> = ({ title, description }) => {
  const categories = [
    { name: 'Category 1', image: 'https://via.placeholder.com/500x400', link: '/category-1', span: 'col-span-1' },
    { name: 'Category 2', image: 'https://via.placeholder.com/500x400', link: '/category-2', span: 'col-span-1' },
    { name: 'Category 3', image: 'https://via.placeholder.com/500x400', link: '/category-3', span: 'col-span-1' },
  ]

  return (
    <div className={cn('hanken', 'container', 'py-6 md:py-10 px-4 md:px-8')}>
      <h2 className="text-2xl md:text-4xl text-brand mb-3 md:mb-4 text-center scroll-animate">{title}</h2>
      {description && <p className="mb-6 md:mb-8 text-center text-sm md:text-base scroll-animate scroll-animate-delay-100">{description}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link}
            className={cn(
              category.span,
              'relative overflow-hidden group h-50 md:h-75 lg:h-100 block rounded-none',
              'scroll-animate',
              `scroll-animate-delay-${(index + 2) * 100}`
            )}
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="overlay-slide-up">
              <h3 className="text-white text-base md:text-xl lg:text-2xl text-center font-semibold">{category.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
