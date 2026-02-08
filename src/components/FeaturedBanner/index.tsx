import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

interface FeaturedBannerProps {
  title?: string
  description?: string
  richText?: DefaultTypedEditorState | null
  className?: string
}

export const FeaturedBanner: React.FC<FeaturedBannerProps> = ({
  title,
  description,
  richText,
  className,
}) => {
  return (
    <section className={cn('bg-brand py-12 md:py-16', className)}>
      <div className="container">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-foreground mb-4">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-brand-foreground/80 max-w-3xl leading-relaxed">{description}</p>
        )}
        {richText && (
          <RichText
            className="text-brand-foreground [&_p]:text-brand-foreground/80"
            data={richText}
            enableGutter={false}
          />
        )}
      </div>
    </section>
  )
}
