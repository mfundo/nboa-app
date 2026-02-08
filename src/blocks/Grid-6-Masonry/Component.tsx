import React from 'react'
import type { Grid6MasonryBlock as Grid6MasonryBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'

export const Grid6MasonryBlock: React.FC<Grid6MasonryBlockProps> = ({ title }) => {
  return (
    <div className={cn('hanken', 'py-6 md:py-10 px-4 md:px-8')}>
      <h2 className="text-2xl md:text-4xl text-center text-brand mb-6 md:mb-8">{title}</h2>
      <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-6">
        <div className="w-full lg:w-1/3 flex flex-col gap-3 md:gap-4">
          <div className="relative h-40 md:h-70 bg-gray-200">Image 1</div>
          <div className="relative h-40 md:h-70 bg-gray-200">Image 2</div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-3 md:gap-4">
          <div className="relative h-48 md:h-86.25 bg-gray-200">Image 3</div>
          <div className="relative h-48 md:h-86.25 bg-gray-200">Image 4</div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-3 md:gap-4">
          <div className="relative h-40 md:h-70 bg-gray-200">Image 5</div>
          <div className="relative h-40 md:h-70 bg-gray-200">Image 6</div>
        </div>
      </div>
    </div>
  )
}
