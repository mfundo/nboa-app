// 'use client';

import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { ServicesBlock as ServicesBlockProps } from 'src/payload-types';

export function ServicesBlock(props: ServicesBlockProps) {

  const {
    title,
    cards
  } = props;

  return (

    <div className={cn('hanken container')}>

      <h2 className='text-[#FDB73E] text-center text-[32px] font-semibold mb-5'>
        <RichText data={title} enableGutter={false} />
      </h2>

      <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4')}>

        {cards.map((card, index) => (

          <div key={index}
            className="bg-[#FEE8C3] shadow-md rounded-lg overflow-hidden">

            <div className="relative h-48">

              <Image
                className="object-cover"
                width={card.image.sizes?.medium?.width || 250}
                height={280}
                src={card.image?.url || ''}
                alt={card.image.alt || ''} />

            </div>

            <div className="p-4">

              <h3 className="text-lg font-semibold mb-2">
                <RichText data={card.title} enableGutter={false} />
              </h3>

              <p className="text-gray-700 mb-4">
                <RichText data={card.content} enableGutter={false} />
              </p>

              <CMSLink {...card.link} />

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}
