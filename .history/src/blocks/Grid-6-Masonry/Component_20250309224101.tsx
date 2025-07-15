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
          <div className="relative bg-gray-200 flex flex-col items-center justify-center h-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Left Top Image"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
            <p className="text-center mt-2 absolute bottom-0 bg-black bg-opacity-75 w-full p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt finibus diam.
            </p>
          </div>
          <div className="relative bg-gray-200 flex flex-col items-center justify-center h-[280px] mt-4">
            <Image
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Left Bottom Image"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
            <p className="text-center mt-2 absolute bottom-0 bg-black bg-opacity-75 w-full p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt finibus diam.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3">

          <div className="relative bg-gray-300 flex flex-col items-center justify-center h-[345px]">
            <Image
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Middle Tall Image"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
            <p className="text-center mt-2 absolute bottom-0 bg-black bg-opacity-75 w-full p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt finibus diam.
            </p>
          </div>

          <div className="relative bg-gray-300 flex flex-col items-center justify-center h-[345px] mt-4">
            <Image
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Middle Tall Image"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
            <p className="text-center mt-2 absolute bottom-0 bg-black bg-opacity-75 w-full p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt finibus diam.
            </p>
          </div>

        </div>

        <div className="flex flex-col w-1/3">
          <div className="relative bg-gray-200 flex flex-col items-center justify-center h-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Right Top Image"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
            <p className="text-center mt-2 absolute bottom-0 bg-black bg-opacity-75 w-full p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt finibus diam.
            </p>
          </div>
          <div className="relative bg-gray-200 flex flex-col items-center justify-center h-[280px] mt-4">
            <Image
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Right Bottom Image"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
            <p className="text-center mt-2 absolute bottom-0 bg-black bg-opacity-75 w-full p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt finibus diam.
            </p>
          </div>
        </div>

      </div>

    </section>

  );

}
