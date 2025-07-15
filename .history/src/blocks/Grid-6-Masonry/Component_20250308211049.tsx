
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

      <div className="grid grid-cols-3 gap-4">

        <div className="col-span-1 row-span-1">
          <div className="h-48 bg-gray-200">Left Top</div>
        </div>

        <div className="col-span-1 row-span-2">
          <div className="h-96 bg-gray-300">Middle Tall</div>
        </div>

        <div className="col-span-1 row-span-1">
          <div className="h-48 bg-gray-200">Right Top</div>
        </div>

        <div className="col-span-1 row-span-1">
          <div className="h-48 bg-gray-200">Left Bottom</div>
        </div>

        <div className="col-span-1 row-span-1">
          <div className="h-48 bg-gray-200">Right Bottom</div>
        </div>

      </div>

    </section>

  );

}
