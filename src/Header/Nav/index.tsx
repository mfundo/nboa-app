'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { ActiveLink } from '@/components/Link/ActiveLink'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-2 md:gap-6 items-center">
      {navItems.map(({ link }, i) => {
        return (
          <ActiveLink
            key={i}
            {...link}
            appearance="link"
            className="text-foreground no-underline uppercase text-xs md:text-sm font-medium tracking-wide hover:text-brand transition-colors nav-link-underline"
          />
        )
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-4 md:w-5 text-foreground hover:text-brand transition-colors" />
      </Link>
    </nav>
  )
}
