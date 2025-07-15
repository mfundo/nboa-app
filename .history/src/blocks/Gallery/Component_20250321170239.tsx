import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { GalleryBlock as GalleryProps } from 'src/payload-types';

export function GalleryBlock(props: GalleryProps) {

  const { title, images } = props;

  return (

    <section className={cn('hanken container')}>

      <h2 className='text-[#FDB73E] text-center text-[32px] font-semibold mb-5'>
        {title}
      </h2>

      <div className={cn('grid grid-cols-4 grid-rows-3 gap-4')}>

        {images && images.map((imageObj, index) => (

          <div key={index} className='relative flex flex-col items-center justify-center mb-8'>

            <div className="gallery-image-continer">

              <Image
                className='gallery-image'
                width={imageObj.image.sizes?.medium?.width || 250}
                height={280}
                src={imageObj.image?.url || ''}
                alt={imageObj.image.alt || ''} />

            </div>

            <p className="text-center mt-2 text-[14px]">
              {imageObj.caption || 'Caption'}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}
