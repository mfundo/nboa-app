
// 'use client';

import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { FeaturedContentBlock as FeaturedContentProps } from 'src/payload-types';

export function FeaturedContentBlock(props: FeaturedContentProps) {

  const {content, image, imagePosition} = props;

  return (

    <div className={cn('hanken container')}>

      <div className={cn('flex justify-around min-h-[480px]', {
        'flex-row-reverse': imagePosition === 'right',
      })}>

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

        </div>

      </div>

    </div>

  );

}
