import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { SectionIntroBlock as SectionIntroProps } from 'src/payload-types';

export function SectionIntroBlock(props: SectionIntroProps) {

  const { title, description, content, image, imagePosition } = props;

  return (

    <section className={cn('hanken container')}>

      <h2 className='text-[#FDB73E] text-center text-[40px] font-semibold mb-5'>
        {title}
      </h2>

      <div className={cn('flex justify-around min-h-[480px]', {
        'flex-row-reverse': imagePosition === 'right',
      })}>

        <div className='w-1/3'>

          {image && typeof image === 'object' && (

            <Image
              className='content-with-media-image'
              width={image.sizes?.medium?.width || 500}
              height={480}
              src={image?.url || ''}
              alt={image.alt || ''} />

          )}

        </div>

        <div className='w-2/3 bg-[#FDB73E] p-10 text-[#FFF] text-[20px] font-semibold'>

          <RichText
            className={cn('wysiwyg')}
            data={content}
            enableGutter={false}
            enableProse={false} />

        </div>

      </div>

    </section>

  );

}
