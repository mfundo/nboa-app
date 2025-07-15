
import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image';

import type { MissingBitBlock as MissingBitBlockProps } from 'src/payload-types';

export function MissingBitBlock(props: MissingBitBlockProps) {

  const {title, content, image, imagePosition, android, ios} = props;

  return (

    <div className={cn('hanken container missing-bit')}>

      <div className={cn('flex justify-around min-h-[440px]', {
        'flex-row-reverse': imagePosition === 'right',
      })}>

        <div className='w-1/2'>

          {image && typeof image === 'object' && (

            <Image
              width={image.sizes?.medium?.width || 500}
              height={425}
              src={image?.url || ''}
              alt={image.alt || ''} />

          )}

        </div>

        <div className='w-1/2 px-10'>

          <h1 className='text-[50px] text-[#FDB73E] font-normal mb-5'>
            {title}
          </h1>

          <RichText
            className={cn('wysiwyg text-[20px]')}
            data={content}
            enableGutter={false}
            enableProse={false} />

          <div className='flex justify-between w-28'>

          {android && (

            <a
              href={android}
              target="_blank"
              rel="noopener noreferrer">

              <Image
                src="/android-podcast.svg"
                width={47}
                height={47}
                alt="Android Podcast"/>

            </a>

          )}

          {ios && (

            <a
              href={ios}
              target="_blank"
              rel="noopener noreferrer">

              <Image
                src="/ios-podcast.svg"
                width={47}
                height={47}
                alt="IOS Podcast"/>

            </a>

          )}

          </div>

        </div>

      </div>

    </div>

  );

}
