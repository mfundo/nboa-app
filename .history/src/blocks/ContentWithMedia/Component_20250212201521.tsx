
// 'use client';

import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media';
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { ContentWithMediaBlock as ContentWithMediaBlockProps } from 'src/payload-types';

export function ContentWithMediaBlock(props: ContentWithMediaBlockProps) {

  const {content, image, imagePosition, links} = props;

  return (

    <div className={cn('hanken container')}>

      <div className="flex items-center justify-around">

        <div className='w-1/2'>

          {image && typeof image === 'object' && (

              <Image
                width={image.sizes?.medium?.width || 500}
                height={image.sizes?.medium?.height || 500}
                src={image?.url || ''}
                alt={image.alt || ''} />

          )}

        </div>

        <div className='w-1/2'>

          <RichText
            className={cn('wysiwyg px-10')}
            data={content}
            enableGutter={false}
            enableProse={false} />

          {/* {links?.length >= 1 && links.map((slide, index) => ()} */}

        </div>

      </div>

    </div>

  );

}
