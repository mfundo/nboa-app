'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import { CMSLink, type CMSLinkType } from './index'

export const ActiveLink: React.FC<CMSLinkType> = (props) => {
  const pathname = usePathname()

  const href =
    props.type === 'reference' && typeof props.reference?.value === 'object' && props.reference.value.slug
      ? `${props.reference?.relationTo !== 'pages' ? `/${props.reference?.relationTo}` : ''}/${props.reference.value.slug}`
      : props.url

  // Check if current pathname matches the link
  const isActive = href && pathname === href

  return (
    <CMSLink
      {...props}
      className={`${props.className || ''} ${
        isActive ? 'text-brand' : ''
      }`.trim()}
    />
  )
}
