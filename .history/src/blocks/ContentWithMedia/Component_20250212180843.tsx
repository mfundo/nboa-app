
// 'use client';

import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media';
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';

import type { ContentWithMediaBlock as ContentWithMediaBlockProps } from 'src/payload-types';

export function ContentWithMediaBlock(props: ContentWithMediaBlockProps) {

  console.log(props);

  const {content, image, imagePosition, links} = props;

  return (

    <div className={cn('hanken container')}>

      <div className="flex items-center justify-around">

        <div className=''>

          <h2>Left</h2>


        </div>

        <div className=''>

          <RichText
            className={cn('swiper-content mixed-colors ')}
            data={content}
            enableGutter={false}
            enableProse={false} />

        </div>

      {/* <RichText
        className={cn('swiper-content mixed-colors ')}
        data={slide.content}
        enableGutter={false}
        enableProse={false} />

        {slide.enableLink && <CMSLink {...slide.link} />}

        {slide.image && typeof slide.image === 'object' && (

          <div className="min-h-[45vh] select-none">

            <Media
              fill
              imgClassName="-z-10 object-cover"
              priority
              resource={slide.image} />

          </div>

        )} */}

      </div>

    </div>

  );

}
