
// 'use client';

import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media';
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { ContentWithMediaBlock as ContentWithMediaBlockProps } from 'src/payload-types';

export function ContentWithMediaBlock(props: ContentWithMediaBlockProps) {

  const {content, image, imagePosition, links} = props;

  console.log(image);


  return (

    <div className={cn('hanken container')}>

      <div className="flex items-center justify-around">

        <div className=''>

          {image && typeof image === 'object' && (

            <div className="min-h-[45vh] select-none">

              <Image
                width={image.width || 500}
                height={image.height || 500}
                src={image?.url || ''}
                alt={image.alt || ''} />

            </div>

          )}

        </div>

        <div className=''>

          <RichText
            className={cn('swiper-content mixed-colors ')}
            data={content}
            enableGutter={false}
            enableProse={false} />

          {/* {links?.length >= 1 && links.map((slide, index) => ()} */}

        </div>

      </div>

    </div>

  );

}
