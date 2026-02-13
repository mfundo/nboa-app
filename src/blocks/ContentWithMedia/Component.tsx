import React from 'react'
import type { ContentWithMediaBlock as ContentWithMediaProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import Image from 'next/image'
import { cn } from '@/utilities/ui'
import * as LucideIcons from 'lucide-react'

export function ContentWithMediaBlock(props: ContentWithMediaProps) {

  const {content, image, imagePosition, links} = props;

  const _links = links ?? [];

  const getIcon = (iconName: string | undefined | null) => {
    if (!iconName || iconName === '') return null
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>
    return Icon ? <Icon className="w-6 h-6" /> : null
  }

  return (

    <div className={cn('hanken container content-with-media')}>

      <div className={cn('flex flex-col lg:flex-row justify-around lg:min-h-120 gap-6 lg:gap-0 scroll-animate', {
        'lg:flex-row-reverse': imagePosition === 'right',
      })}>

        <div className='w-full lg:w-1/2 scroll-animate-delay-100'>

          {image && typeof image === 'object' && (

            <Image
              className='content-with-media-image w-full h-auto transition-transform duration-500 hover:scale-105'
              width={image.sizes?.medium?.width || 500}
              height={480}
              src={image?.url || ''}
              alt={image.alt || ''} />

          )}

        </div>

        <div className='w-full lg:w-1/2 px-4 md:px-8 lg:px-10 flex flex-col justify-center scroll-animate-delay-200'>

          <RichText
            className={cn('wysiwyg')}
            data={content}
            enableGutter={false}
            enableProse={false} />

          {_links?.length >= 1 && (
            <div className="flex flex-row gap-3 md:gap-4 flex-wrap">
              {_links.map((link, index) => {
                const icon = getIcon(link.link?.icon)
                const isIconOnly = (link.link?.appearance as string) === 'icon'

                return (
                  <CMSLink
                    className={cn('w-auto transition-all hover:shadow-lg flex items-center gap-2', {
                      'btn-gradient-primary text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold': !isIconOnly,
                      'flex items-center justify-center w-10 h-10 rounded-full text-brand': isIconOnly,
                    })}
                    key={index}
                    {...(link.link as any)}>
                    {icon && isIconOnly ? icon : icon ? <span>{icon}</span> : null}
                  </CMSLink>
                )
              })}
            </div>
          )}

        </div>

      </div>

    </div>

  );

}
