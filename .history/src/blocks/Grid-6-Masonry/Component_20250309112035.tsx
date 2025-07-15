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
          <div className="bg-gray-200 flex flex-col items-center justify-center h-70">
            <Image
              src="/path/to/left-top-image.jpg"
              alt="Left Top Image"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="text-center mt-2">
              Caption for Left Top
            </p>
          </div>
          <div className="bg-gray-200 flex flex-col items-center justify-center h-70 mt-4">
            <Image
              src="/path/to/left-bottom-image.jpg"
              alt="Left Bottom Image"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="text-center mt-2">
              Caption for Left Bottom
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3">
          <div className="bg-gray-300 flex flex-col items-center justify-center h-[500px]">
            <Image
              src="/path/to/middle-tall-image.jpg"
              alt="Middle Tall Image"
              width={300}
              height={500}
              className="object-cover"
            />
            <p className="text-center mt-2">
              Caption for Middle Tall
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3">
          <div className="bg-gray-200 flex flex-col items-center justify-center h-70">
            <Image
              src="/path/to/right-top-image.jpg"
              alt="Right Top Image"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="text-center mt-2">
              Caption for Right Top
            </p>
          </div>
          <div className="bg-gray-200 flex flex-col items-center justify-center h-70 mt-4">
            <Image
              src="/path/to/right-bottom-image.jpg"
              alt="Right Bottom Image"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="text-center mt-2">
              Caption for Right Bottom
            </p>
          </div>
        </div>

      </div>

    </section>

  );

}
