'use client';

import { cn } from '@/utilities/ui';
import RichText from '@/components/RichText';
import Image from 'next/image';

import type { AudioBitsGridBlock as AudioBitsGridProps } from 'src/payload-types';

export function AudioBitsGridBlock(props: AudioBitsGridProps) {

  const { blocks } = props;

  const handleAudioClick = (audioId: string) => {
    const audioElement = document.getElementById(audioId) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play();
    }
  };

  return (
    <div className={cn('hanken container mx-auto p-4')}>

      {/* Top Block */}
      {blocks?.[0] && (
        <div className="relative w-full bg-[#FDB73E] p-6 rounded-lg mb-6 overflow-hidden">
          {/* Image covering the entire block */}
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={blocks[0].image?.url || '/placeholder.jpg'}
            alt={blocks[0].image?.alt || 'Top Block Image'}
            layout="fill"
          />
          {/* Content overlay */}
          <div className="relative z-10 text-center text-white p-6">
            <h2 className="text-2xl font-bold mb-4">{blocks[0].title}</h2>
            <RichText
              className=""
              data={blocks[0].content}
              enableGutter={false}
            />
          </div>
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      )}

      {/* Four Blocks Underneath */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {blocks?.slice(1).map((block, index) => {
          console.log(`Rendering blocxxxk ${index + 1}`, block); // Debugging
          return (
            <div
              key={index}
              className="relative bg-[#FEE8C3] shadow-md cursor-pointer group overflow-hidden h-[300px]"
            >
              {/* Image covering the entire block */}
              <Image
                className="absolute inset-0 w-full h-full object-cover"
                width={300}
                height={200}
                src={block.image?.url || '/placeholder.jpg'}
                alt={block.image?.alt || 'Block Image'}
              />

              {/* Content hidden by default, shown on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{block.title}</h3>
                <RichText
                  className="text-white text-center"
                  data={block.content}
                  enableGutter={false}
                />
                <button
                  className="mt-4 bg-[#FDB73E] text-white px-4 py-2 rounded-lg"
                  onClick={() => handleAudioClick(`audio-${index + 1}`)}
                >
                  Play Audio
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
