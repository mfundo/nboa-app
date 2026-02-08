import { cn } from '@/utilities/ui'
import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import type { Media as MediaType } from '@/payload-types'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

interface ContentWithImageProps {
  media: MediaType | string | number
  richText?: DefaultTypedEditorState | null
  imagePosition?: 'left' | 'right'
  className?: string
}

export const ContentWithImage: React.FC<ContentWithImageProps> = ({
  media,
  richText,
  imagePosition = 'left',
  className,
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center',
        className,
      )}
    >
      <div className={cn('relative aspect-[4/3] overflow-hidden rounded-lg', imagePosition === 'right' && 'md:order-2')}>
        <Media
          resource={media}
          imgClassName="object-cover w-full h-full"
          fill
        />
      </div>
      <div className={cn(imagePosition === 'right' && 'md:order-1')}>
        {richText && <RichText data={richText} enableGutter={false} />}
      </div>
    </div>
  )
}
