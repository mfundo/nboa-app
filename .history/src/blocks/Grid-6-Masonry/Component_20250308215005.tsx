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
          <div className="h-48 bg-gray-200 flex items-center justify-center">Left Top</div>
          <p className="text-center mt-2">Caption for Left Top</p>
        </div>

        <div className="col-span-1 row-span-2">
          <div className="h-[calc(48px*2+50px)] bg-gray-300 flex items-center justify-center">Middle Tall 1</div>
          <p className="text-center mt-2">Caption for Middle Tall 1</p>
        </div>

        <div className="col-span-1 row-span-1">
          <div className="h-48 bg-gray-200 flex items-center justify-center">Right Top</div>
          <p className="text-center mt-2">Caption for Right Top</p>
        </div>

        <div className="col-span-1 row-span-1">
          <div className="h-48 bg-gray-200 flex items-center justify-center">Left Bottom</div>
          <p className="text-center mt-2">Caption for Left Bottom</p>
        </div>

        <div className="col-span-1 row-span-2">
          <div className="h-[calc(48px*2+50px)] bg-gray-300 flex items-center justify-center">Middle Tall 2</div>
          <p className="text-center mt-2">Caption for Middle Tall 2</p>
        </div>

        <div className="col-span-1 row-span-1">
          <div className="h-48 bg-gray-200 flex items-center justify-center">Right Bottom</div>
          <p className="text-center mt-2">Caption for Right Bottom</p>
        </div>

      </div>

    </section>

  );

}
