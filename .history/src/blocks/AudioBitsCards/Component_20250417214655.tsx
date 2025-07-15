'use client';

import { cn } from '@/utilities/ui';
import RichText from '@/components/RichText';
import Image from 'next/image';

import type { AudioBitsCardsBlock as AudioBitsCardsProps } from 'src/payload-types';

export function AudioBitsCardsBlock(props: AudioBitsCardsProps) {

  const { cards } = props;

  const handleAudioClick = (audioId: string) => {

    const audioElement = document.getElementById(audioId) as HTMLAudioElement;

    if (audioElement) {
      audioElement.play();
    }

  };

  return (

    <div className={cn('hanken container')}>

      <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-8')}>

        {cards && cards.map((card, index) => (

          <div key={index}
            className="p-3 text-white">

            <Image
              className="grid-card-image"
              width={card?.image?.sizes?.medium?.width || 250}
              height={240}
              src={card.image?.url || ''}
              alt={card.image?.alt || ''} />

            <div className="p-4">

              <h3 className="text-xl font-semibold mb-2">
                {card.title}
              </h3>

              <RichText
                className=""
                data={card.content}
                enableGutter={false} />

              <Image
                className='a'
                onClick={() => handleAudioClick(`audio-${index}`)}
                width={150}
                height={45}
                alt='audio'
                src='/audio.svg' />

              <audio
                id={`audio-${index}`}
                src="your_audio.mp3"
                preload="auto">
              </audio>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}
