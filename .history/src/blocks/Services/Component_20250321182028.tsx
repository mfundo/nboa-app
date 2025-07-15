// 'use client';

import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { ServicesBlock as ServicesBlockProps } from 'src/payload-types';

export function ServicesBlock(props: ServicesBlockProps) {

  const { } = props;

  // const _links = links ?? [];

  return (

    <div className={cn('hanken container')}>

      <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4')}>

        {Array(4).fill(null).map((_, index) => (

          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">

            <div className="relative h-48">

              <Image
                className="object-cover"
                src="https://via.placeholder.com/300"
                alt={`Card Image ${index + 1}`}
                layout="fill" />

            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Card Title {index + 1}</h3>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

          </div>

        ))}

      </div>

      <div className="flex justify-center mt-8">
        <CMSLink
          className="wysiwyg-button"
          href="#"
        >
          View More
        </CMSLink>
      </div>

    </div>

  );

}
