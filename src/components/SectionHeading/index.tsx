import { cn } from '@/utilities/ui'
import React from 'react'

interface SectionHeadingProps {
  title: string
  accentText?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  accentText,
  align = 'left',
  as: Tag = 'h2',
  className,
}) => {
  return (
    <Tag
      className={cn(
        'text-2xl md:text-3xl font-semibold',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {title}
      {accentText && <span className="text-brand italic"> {accentText}</span>}
    </Tag>
  )
}
