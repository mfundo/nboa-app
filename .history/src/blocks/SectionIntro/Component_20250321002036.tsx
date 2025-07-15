import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { SectionIntroBlock as SectionIntroProps } from 'src/payload-types';

export function SectionIntroBlock(props: SectionIntroProps) {

  const { title, content, imageMain, imageTop, imageBottom } = props;

  console.log('xxxx', props)

  return (

    <section className={cn('hanken container')}>

      <h2 className='text-[#FDB73E] text-[32px] font-semibold mb-5'>
        {title}
      </h2>

      <div className={cn('flex justify-around min-h-[480px] bg-[#FDB73E] p-10')}>

        <div className='w-1/3 text-[20px] text-[#000] font-semibold'>

          <RichText
            className={cn('wysiwyg')}
            data={content}
            enableGutter={false}
            enableProse={false} />

        </div>

        <div className='w-2/3 flex'>

          <div className='w-2/3 flex flex-col items-center justify-center space-y-4'>

            {imageMain && typeof imageMain === 'object' && (

              <Image
                className='content-with-media-image'
                width={imageMain.sizes?.medium?.width || 250}
                height={240}
                src={imageMain?.url || ''}
                alt={imageMain.alt || ''} />

            )}

          </div>

          <div className='w-1/3 flex flex-col items-center justify-center space-y-2.5'>

            {imageTop && typeof imageTop === 'object' && (

              <Image
                className='content-with-media-image'
                width={imageTop.sizes?.medium?.width || 250}
                height={240}
                src={imageTop?.url || ''}
                alt={imageTop.alt || ''} />

            )}

            {imageBottom && typeof imageBottom === 'object' && (

              <Image
                className='content-with-media-image'
                width={imageBottom.sizes?.medium?.width || 250}
                height={240}
                src={imageBottom?.url || ''}
                alt={imageBottom.alt || ''} />

            )}

          </div>

        </div>

      </div>

    </section>

  );

}
