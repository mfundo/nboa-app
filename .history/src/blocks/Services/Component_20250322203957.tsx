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

      <RichText
        className={cn('wysiwyg__small text-center')}
        data={title}
        enableGutter={false}
        enableProse={false} />

      <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4')}>

        {cards && cards.map((card, index) => (

          <div key={index}
            className="bg-[#FEE8C3] shadow-md rounded-lg overflow-hidden p-3">

            <Image
              className="grid-card-image"
              width={card?.image?.sizes?.medium?.width || 250}
              height={240}
              src={card.image?.url || ''}
              alt={card.image?.alt || ''} />

            <div className="p-4">

              <h3 className="text-xl font-semibold mb-2 text-[#000]">
                {card.title}
              </h3>

              <RichText
                className="text-[#000]"
                data={card.content}
                enableGutter={false} />

              <CMSLink
                className="mt-5 bg-[#FDB73E] font-semibold rounded-lg text-[15px]"
                {...card.link} />

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}
