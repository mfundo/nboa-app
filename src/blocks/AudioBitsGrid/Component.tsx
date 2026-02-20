'use client'
import React from 'react'
import type { AudioBitsGridBlock as AudioBitsGridProps } from '@/payload-types'
import Image from 'next/image'
import { cn } from '@/utilities/ui'
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
  missingBit?: any
  title?: string
  content?: DefaultTypedEditorState
  link?: LinkObject | string
}

export const AudioBitsGridBlock: React.FC<AudioBitsGridProps> = ({ blocks }) => {
  const featuredBlock = blocks?.[0] as BlockItem | undefined
  const smallBlocks = (blocks?.slice(1, 5) as BlockItem[] | undefined)

  const renderCard = (block: BlockItem, index: number, isFeatured = false) => {
    const imageObj = typeof block.image === 'object' && block.image !== null ? block.image : null
    const hasImage = imageObj !== null
    const hasContent = block.content && block.title
    const isContentCard = hasContent && !hasImage

    // Determine link destination - can be from missingBit or direct link
    let href = '#'
    if (block.missingBit) {
      // If missingBit exists, link to it
      const missingBitSlug = typeof block.missingBit === 'object' ? block.missingBit.slug : block.missingBit
      href = `/missing-bits/${missingBitSlug}` || '#'
    } else if (typeof block.link === 'object' && block.link && 'url' in block.link) {
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
