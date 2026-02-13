'use client'
import React, { useRef } from 'react'
import type { AudioBitsGridBlock as AudioBitsGridProps } from '@/payload-types'
import Image from 'next/image'
import { cn } from '@/utilities/ui'
import { Play } from 'lucide-react'
import RichText from '@/components/RichText'
import Link from 'next/link'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

interface MediaObject {
  url?: string
  alt?: string
  sizes?: Record<string, unknown>
}

interface LinkObject {
  url?: string
}

interface BlockItem {
  image?: MediaObject | number
  audio?: MediaObject | number
  title?: string
  content?: DefaultTypedEditorState
  link?: LinkObject | string
}

export const AudioBitsGridBlock: React.FC<AudioBitsGridProps> = ({ blocks }) => {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([])
  const [playingIndex, setPlayingIndex] = React.useState<number | null>(null)

  const togglePlayPause = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    const audio = audioRefs.current[index]
    if (!audio) return

    if (playingIndex === index && !audio.paused) {
      audio.pause()
      setPlayingIndex(null)
    } else {
      audioRefs.current.forEach((el, i) => {
        if (i !== index && el) el.pause()
      })
      audio.play()
      setPlayingIndex(index)
    }
  }

  const featuredBlock = blocks?.[0] as BlockItem | undefined
  const smallBlocks = (blocks?.slice(1, 5) as BlockItem[] | undefined)

  const renderCard = (block: BlockItem, index: number, isFeatured = false) => {
    const imageObj = typeof block.image === 'object' && block.image !== null ? block.image : null
    const audioObj = typeof block.audio === 'object' && block.audio !== null ? block.audio : null
    const hasImage = imageObj !== null
    const hasContent = block.content && block.title
    const isContentCard = hasContent && !hasImage

    // Determine link destination
    let href = '#'
    if (typeof block.link === 'object' && block.link && 'url' in block.link) {
      href = block.link.url || '#'
    } else if (typeof block.link === 'string') {
      href = block.link
    }

    const cardContent = (
      <div key={index} className={cn('relative group overflow-hidden rounded-lg cursor-pointer', isFeatured ? 'h-60 md:h-96' : 'h-48 md:h-64')}>
        {/* Image Background */}
        {hasImage && imageObj && (
          <Image
            src={(imageObj as MediaObject).url || ''}
            alt={(imageObj as MediaObject).alt || ''}
            fill
            className="object-cover"
          />
        )}

        {/* Content Card (brand background) */}
        {isContentCard && block.content && (
          <div className="w-full h-full p-6 md:p-8 flex flex-col justify-center" style={{ backgroundColor: 'var(--brand)' }}>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{block.title}</h3>
            <div className="text-white text-sm md:text-base line-clamp-4">
              <RichText data={block.content} />
            </div>
          </div>
        )}

        {/* Play Button - Center on all image cards (always visible on image) */}
        {audioObj && (
          <button
            onClick={(e) => togglePlayPause(index, e)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black transition-all cursor-pointer"
            style={{ width: '48px', height: '48px', maxWidth: 'none' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.width = '48px'
              el.style.height = '48px'
            }}
            aria-label="Play audio">
            <Play className="w-5 h-5 md:w-6 md:h-6 fill-black text-black" />
          </button>
        )}

        {/* Hover Overlay - Image Cards Only */}
        {hasImage && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center" style={{ backgroundColor: 'var(--brand)' }}>
            <div className="w-full max-w-[800px]">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                {block.title}
              </h3>
              {block.content && (
                <div className="text-white text-sm md:text-base line-clamp-3">
                  <RichText data={block.content} />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Audio Element */}
        {audioObj && (
          <audio
            ref={(el) => {
              audioRefs.current[index] = el
            }}
            src={(audioObj as MediaObject).url || ''}
            onEnded={() => setPlayingIndex(null)}
          />
        )}
      </div>
    )

    // Wrap in link if href exists and not just '#'
    if (href !== '#') {
      return (
        <Link key={index} href={href} className="block cursor-pointer hover:opacity-95 transition-opacity">
          {cardContent}
        </Link>
      )
    }

    return cardContent
  }

  return (
    <div className={cn('hanken', 'container')}>
      {/* Featured Block */}
      {featuredBlock && typeof featuredBlock.image === 'object' && featuredBlock.image !== null && (
        <div className="mb-8 md:mb-12">
          {renderCard(featuredBlock, -1, true)}
        </div>
      )}

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {smallBlocks?.map((block, index) => renderCard(block, index, false))}
      </div>
    </div>
  )
}
