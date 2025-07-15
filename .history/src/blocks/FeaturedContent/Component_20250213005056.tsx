
// 'use client';

import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { FeaturedContentBlock as FeaturedContentProps } from 'src/payload-types';

export function FeaturedContentBlock(props: FeaturedContentProps) {

  const {title, description, content, image, imagePosition} = props;

  return (

    <div className={cn('hanken container')}>

      <h2 className='text-[#FDB73E] text-center text-[40px] font-semibold mb-5'>
        {title}
      </h2>

      <p className='text-center text-[20px] mb-8'>
        {description}
      </p>

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

        <div className='w-1/2 bg-[#FDB73E] px-10 py-5 text-[#FFF] text-[20px] font-semibold'>

          <RichText
            className={cn('wysiwyg featured-content')}
            data={content}
            enableGutter={false}
            enableProse={false} />

        </div>

      </div>

    </div>

  );

}
