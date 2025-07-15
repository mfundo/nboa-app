
import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image';

import type { MissingBitBlock as MissingBitBlockProps } from 'src/payload-types';

export function MissingBitBlock(props: MissingBitBlockProps) {

  const {content, image, imagePosition, android, ios} = props;


  return (

    <div className={cn('hanken container')}>

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

        <div className='w-1/2 px-10'>

          <RichText
            className={cn('wysiwyg text-[20px]')}
            data={content}
            enableGutter={false}
            enableProse={false} />

          {android && (

            <a
              href={android}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline mt-4 block flex items-center gap-2">

              <Image
                src="/android-podcast.svg"
                width={24}
                height={24}
                alt="Android Podcast"
                className="w-6 h-6"/>

            </a>

          )}

          {ios && (

          <a
            href={ios}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline mt-4 block flex items-center gap-2">

            <Image
              src="/ios-podcast.svg"
              width={24}
              height={24}
              alt="IOS Podcast"
              className="w-6 h-6"/>

          </a>

        )}

        </div>

      </div>

    </div>

  );

}
