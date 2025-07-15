
// 'use client';

import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media';
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import type { ContentWithMedia as ContentWithMediaProps } from 'src/payload-types';

export function ContentWithMediaBlock(props: ContentWithMediaProps) {

  console.log(props);

  return (

    <div className={cn('hanken')}>

      <div className="container">

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
