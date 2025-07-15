import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { Grid6MasonryBlock as Grid6MasonryBlockProps } from 'src/payload-types';

export function Grid6MasonryBlock(props: Grid6MasonryBlockProps) {

  const {
    title,
    content,
  } = props;

  return (

    <section className={cn('hanken container')}>

      <h2 className='text-[#FDB73E] text-center text-[40px] font-semibold mb-5'>
        {title}
      </h2>

      <div className="flex gap-4">

        <div className="flex flex-col w-1/3">

          <div className="h-60 bg-gray-200 flex items-center justify-center">
            <p className="text-center mt-2">
              Caption for Left Top
            </p>
          </div>

          <div className="h-60 bg-gray-200 flex items-center justify-center mt-4">
            <p className="text-center mt-2">
              Caption for Left Bottom
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3">
          <div className="h-[500px] bg-gray-300 flex items-center justify-center">
            <p className="text-center mt-2">
              Caption for Middle Tall
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3">

          <div className="h-60 bg-gray-200 flex items-center justify-center">
            <p className="text-center mt-2">
              Caption for Right Top
            </p>
          </div>

          <div className="h-60 bg-gray-200 flex items-center justify-center mt-4">
            <p className="text-center mt-2">
              Caption for Right Bottom
            </p>
          </div>

        </div>

      </div>

    </section>

  );

}
