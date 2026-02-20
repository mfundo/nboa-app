import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { AudioBitsCardsBlock } from '@/blocks/AudioBitsCards/Component'
import { AudioBitsGridBlock } from '@/blocks/AudioBitsGrid/Component'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { CodeBlock } from '@/blocks/Code/Component'
import { CollectionsBlock } from '@/blocks/Collections/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { ContentWithImageStackBlock } from '@/blocks/ContentWithImageStack/Component'
import { ContentWithMediaBlock } from '@/blocks/ContentWithMedia/Component'
import { FeaturedContentBlock } from '@/blocks/FeaturedContent/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { GalleryBlock } from '@/blocks/Gallery/Component'
import { Grid6MasonryBlock } from '@/blocks/Grid-6-Masonry/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { MissingBitBlock } from '@/blocks/MissingBit/Component'
import { SectionIntroBlock } from '@/blocks/SectionIntro/Component'
import { ServicesBlock } from '@/blocks/Services/Component'
import { SliderBlock } from '@/blocks/Slider/Component'
import { SpecialContentBlock } from '@/blocks/SpecialContent/Component'

const blockComponents = {
  archive: ArchiveBlock,
  audioBitsCards: AudioBitsCardsBlock,
  audioBitsGrid: AudioBitsGridBlock,
  banner: BannerBlock,
  code: CodeBlock,
  collections: CollectionsBlock,
  content: ContentBlock,
  contentWithImageStack: ContentWithImageStackBlock,
  contentWithMedia: ContentWithMediaBlock,
  cta: CallToActionBlock,
  featuredContent: FeaturedContentBlock,
  formBlock: FormBlock,
  gallery: GalleryBlock,
  grid6Masonry: Grid6MasonryBlock,
  mediaBlock: MediaBlock,
  missingBit: MissingBitBlock,
  sectionIntro: SectionIntroBlock,
  services: ServicesBlock,
  slider: SliderBlock,
  specialContent: SpecialContentBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-8 md:my-12 lg:my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
