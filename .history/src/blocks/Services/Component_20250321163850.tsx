
// 'use client';

import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { ServicesBlock as ServicesBlockProps } from 'src/payload-types';

export function ServicesBlock(props: ServicesBlockProps) {

  const {content, image, imagePosition, links} = props;

  const _links = links ?? [];

  return (

    <div className={cn('hanken container')}>

      <div className={cn('flex justify-around min-h-[480px]')}>

        <div className='w-1/2'>

          {image && typeof image === 'object' && (

            <Image
              className='content-with-media-image'
              width={image.sizes?.medium?.width || 500}
              height={480}
              src={image?.url || ''}
              alt={image.alt || ''} />

          )}

        </div>

        <div className='w-1/2 px-10'>

          <RichText
            className={cn('wysiwyg')}
            data={content}
            enableGutter={false}
            enableProse={false} />

          {_links?.length >= 1 && _links.map((link, index) => (

            <CMSLink
              className="wysiwyg-button"
              key={index}
              {...link.link} />

          ))}

        </div>

      </div>

    </div>

  );

}
