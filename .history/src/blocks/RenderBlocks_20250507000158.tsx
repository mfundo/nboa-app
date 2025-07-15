
import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { SliderBlock } from '@/blocks/Slider/Component'
import { ContentWithMediaBlock } from '@/blocks/ContentWithMedia/Component'
import { FeaturedContentBlock } from '@/blocks/FeaturedContent/Component'
import { SpecialContentBlock } from '@/blocks/SpecialContent/Component'
import { CollectionsBlock } from '@/blocks/Collections/Component'
import { Grid6MasonryBlock } from '@/blocks/Grid-6-Masonry/Component'
import { SectionIntroBlock } from '@/blocks/SectionIntro/Component'
import { GalleryBlock } from '@/blocks/Gallery/Component'
import { ServicesBlock } from '@/blocks/Services/Component'
import { AudioBitsCardsBlock } from '@/blocks/AudioBitsCards/Component'
import { AudioBitsGridBlock } from '@/blocks/AudioBitsGrid/Component'
import { MissingBitBlock } from '@/blocks/MissingBit/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  slider: SliderBlock,
  contentWithMedia: ContentWithMediaBlock,
  featuredContent: FeaturedContentBlock,
  specialContent: SpecialContentBlock,
  collections: CollectionsBlock,
  grid6Masonry: Grid6MasonryBlock,
  sectionIntro: SectionIntroBlock,
  gallery: GalleryBlock,
  services: ServicesBlock,
  audioBitsCards: AudioBitsCardsBlock,
  audioBitsGrid: AudioBitsGridBlock,
  missingBit: MissingBitBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {

  const { blocks } = props;
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {

    return (

      <>

        {blocks.map((block, index) => {

          const { blockType } = block

          if (blockType && blockType in blockComponents) {

            const Block = blockComponents[blockType];

            if (Block) {

              return (

                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>

              )

            }

          }

          return null

        })}

      </>

    )

  }

  return null

}
