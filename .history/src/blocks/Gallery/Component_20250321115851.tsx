import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { GalleryBlock as GalleryProps } from 'src/payload-types';

export function GalleryBlock(props: GalleryProps) {

  const { title, images } = props;

  console.log('ima', images)

  return (

    <section className={cn('hanken container')}>

      <h2 className='text-[#FDB73E] text-[32px] font-semibold mb-5'>
        {title}
      </h2>

      <div className={cn('grid grid-cols-4 grid-rows-3 gap-4')}>

        {images && images.map((image, index) => (

          <div key={index} className='relative flex flex-col items-center justify-center'>

            <Image
              className='content-with-media-image'
              width={image.sizes?.medium?.width || 250}
              height={240}
              src={image?.url || ''}
              alt={image.alt || ''} />

            <p className="text-center mt-2">
              {image.caption || 'Caption'}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}
