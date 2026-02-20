import React from 'react'
import Image from 'next/image'
import { Music, Headphones, ArrowUpRight } from 'lucide-react'
import RichText from '@/components/RichText'
import type { MissingBits as MissingBitsType } from '@/payload-types'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

const getLinkIcon = (type?: string) => {
  switch (type) {
    case 'spotify':
      return <Music className="w-5 h-5" />
    case 'podcast':
      return <Headphones className="w-5 h-5" />
    case 'external':
      return <ArrowUpRight className="w-5 h-5" />
    default:
      return null
  }
}

export default async function MissingBitsPage({ params }: PageProps) {
  const { slug } = await params

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/missingBits?where[slug][equals]=${slug}`,
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      notFound()
    }

    const data = await response.json()
    const missingBit: MissingBitsType = data.docs?.[0]

    if (!missingBit) {
      notFound()
    }

    const imageObj = typeof missingBit.image === 'object' ? missingBit.image : null

    return (
      <div className="hanken">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Featured Image */}
            {imageObj && (
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={(imageObj as any).url || ''}
                  alt={(imageObj as any).alt || missingBit.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Right: Content and Links */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--brand)' }}>
                {missingBit.title}
              </h1>

              {missingBit.content && (
                <div className="prose prose-sm md:prose-base mb-8 text-gray-700">
                  <RichText data={missingBit.content} />
                </div>
              )}

              {/* Links */}
              {missingBit.links && missingBit.links.length > 0 && (
                <div className="flex gap-4">
                  {missingBit.links.map((link: any, idx: number) => (
                    link.url && (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border-2 transition-all hover:scale-110 cursor-pointer"
                        style={{
                          borderColor: 'var(--brand)',
                          color: 'var(--brand)',
                        }}
                      >
                        {getLinkIcon(link.type)}
                      </a>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
