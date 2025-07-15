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

      {/* Main Block */}
      {blocks?.[0] && (
        <div
          className="relative shadow-md cursor-pointer group overflow-hidden h-[400px] mb-6"
        >
          {/* Image covering the entire block */}
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={blocks[0].image?.url || '/placeholder.jpg'}
            alt={blocks[0].image?.alt || 'Top Block Image'}
            layout="fill"
          />

          {/* Play Icon */}
          <button
            className="absolute inset-0 flex items-center justify-center z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
            onClick={() => handleAudioClick('audio-main')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-6.586-4.394A1 1 0 007 7.618v8.764a1 1 0 001.166.982l6.586-1.97a1 1 0 00.752-.982v-3.764a1 1 0 00-.752-.982z"
              />
            </svg>
          </button>

          {/* Content hidden by default, shown on hover */}
          <div className="absolute inset-0 bg-black group-hover:bg-[#FDB73E] bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">{blocks[0].title}</h2>
            <RichText
              className="text-white text-center"
              data={blocks[0].content}
              enableGutter={false}
            />
          </div>
        </div>
      )}

      {/* Four Blocks Underneath */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {blocks?.slice(1).map((block, index) => (
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

            {/* Play Icon */}
            <button
              className="absolute inset-0 flex items-center justify-center z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              onClick={() => handleAudioClick(`audio-${index + 1}`)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-6.586-4.394A1 1 0 007 7.618v8.764a1 1 0 001.166.982l6.586-1.97a1 1 0 00.752-.982v-3.764a1 1 0 00-.752-.982z"
                />
              </svg>
            </button>

            {/* Content hidden by default, shown on hover */}
            <div className="absolute inset-0 bg-[#FDB73E] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold text-white mb-2">{block.title}</h3>
              <RichText
                className="text-white text-center"
                data={block.content}
                enableGutter={false}
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
