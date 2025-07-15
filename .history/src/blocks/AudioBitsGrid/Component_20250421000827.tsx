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
        <div className="w-full bg-[#FDB73E] p-6 rounded-lg mb-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <Image
              className="rounded-md"
              width={500}
              height={300}
              src={blocks[0].image?.url || '/placeholder.jpg'}
              alt={blocks[0].image?.alt || 'Top Block Image'}
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white mb-4">{blocks[0].title}</h2>
            <RichText
              className="text-white"
              data={blocks[0].content}
              enableGutter={false}
            />
          </div>
        </div>
      )}

      {/* Four Blocks Underneath */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {blocks?.slice(1).map((block, index) => (
          <div key={index} className="bg-[#FEE8C3] p-4 rounded-lg shadow-md">
            <Image
              className="rounded-md"
              width={300}
              height={200}
              src={block.image?.url || '/placeholder.jpg'}
              alt={block.image?.alt || 'Block Image'}
            />
            <h3 className="text-lg font-semibold mt-4">{block.title}</h3>
            <RichText
              className="text-gray-700 mt-2"
              data={block.content}
              enableGutter={false}
            />
            <button
              className="mt-4 bg-[#FDB73E] text-white px-4 py-2 rounded-lg"
              onClick={() => handleAudioClick(`audio-${index + 1}`)}
            >
              Play Audio
            </button>
            <audio id={`audio-${index + 1}`} src={block.audioUrl || ''} preload="auto"></audio>
          </div>
        ))}
      </div>

    </div>
  );
}
