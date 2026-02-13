'use client'
import React, { useRef } from 'react'
import type { AudioBitsCardsBlock as AudioBitsCardsProps } from '@/payload-types'
import RichText from '@/components/RichText'
import Image from 'next/image'
import { cn } from '@/utilities/ui'
import { Play, Pause } from 'lucide-react'

export const AudioBitsCardsBlock: React.FC<AudioBitsCardsProps> = ({ cards }) => {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([])
  const [playingIndex, setPlayingIndex] = React.useState<number | null>(null)
  const [progress, setProgress] = React.useState<{ [key: number]: number }>({})
  const [animationTime, setAnimationTime] = React.useState(0)

  React.useEffect(() => {
    if (playingIndex === null) return

    const interval = setInterval(() => {
      setAnimationTime(prev => (prev + 3) % 360)
    }, 12)

    return () => clearInterval(interval)
  }, [playingIndex])

  const handleTimeUpdate = (index: number) => {
    const audio = audioRefs.current[index]
    if (audio && audio.duration) {
      const currentProgress = (audio.currentTime / audio.duration) * 100
      setProgress(prev => ({ ...prev, [index]: currentProgress }))
    }
  }

  const togglePlayPause = (index: number) => {
    const audio = audioRefs.current[index]
    if (!audio) return

    if (playingIndex === index && !audio.paused) {
      audio.pause()
      setPlayingIndex(null)
    } else {
      // Pause any other playing audio
      audioRefs.current.forEach((el, i) => {
        if (i !== index && el) el.pause()
      })
      audio.play()
      setPlayingIndex(index)
    }
  }

  return (
    <div className={cn('hanken', 'container')}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {cards?.map((card, index) => {
          const image = card.image
          const audio = typeof card.audio === 'object' ? card.audio : null

          return (
            <div key={index} className="flex flex-col gap-3 md:gap-4">
              {typeof image === 'object' && image !== null && (
                <Image
                  src={image.url || ''}
                  alt={image.alt || ''}
                  width={image.width || 500}
                  height={300}
                  className="w-full h-auto"
                />
              )}
              <h3 className="text-base md:text-xl font-semibold">{card.title}</h3>
              {card.content && <RichText data={card.content} />}

              {audio && (
                <button
                  onClick={() => togglePlayPause(index)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium mt-4 w-full transition-colors cursor-pointer"
                  style={{
                    backgroundColor: 'var(--brand)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  aria-label={playingIndex === index ? 'Pause audio' : 'Play audio'}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white shrink-0">
                    {playingIndex === index ? (
                      <Pause className="w-5 h-5 fill-white" style={{ color: 'white' }} />
                    ) : (
                      <Play className="w-5 h-5 fill-white ml-0.5" style={{ color: 'white' }} />
                    )}
                  </div>
                  <div className="flex items-center gap-1 flex-1 h-8">
                    {[15, 25, 35, 45, 55, 65, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30].map((baseHeight, barIndex) => {
                      const barPosition = ((barIndex + 1) / 16) * 100
                      const currentProgress = progress[index] || 0
                      const isPlayed = currentProgress >= barPosition
                      const isPlaying = playingIndex === index

                      // Create a dynamic wave effect
                      const distanceFromProgress = Math.abs(barPosition - currentProgress)
                      const waveEffect = isPlaying ? Math.max(0, 1 - (distanceFromProgress / 20)) : 0

                      // Add continuous pulsing animation
                      const pulse = isPlaying ? Math.abs(Math.sin((animationTime + barIndex * 8) * Math.PI / 180)) : 0
                      const pulseAmplitude = pulse * 25

                      // Combine wave effect + pulse for dynamic animation
                      const totalHeightIncrease = (waveEffect * 50) + pulseAmplitude
                      const finalHeight = isPlaying ? baseHeight + totalHeightIncrease : 20

                      return (
                        <div
                          key={barIndex}
                          className="w-0.5 rounded"
                          style={{
                            height: `${Math.min(finalHeight, 95)}%`,
                            backgroundColor: isPlayed ? '#000000' : 'white',
                            maxHeight: '32px',
                          }}
                        />
                      )
                    })}
                  </div>
                  <audio
                    ref={(el) => {
                      audioRefs.current[index] = el
                    }}
                    src={audio.url || ''}
                    onEnded={() => setPlayingIndex(null)}
                    onTimeUpdate={() => handleTimeUpdate(index)}
                  />
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
