'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { ThemeToggle } from './ThemeToggle'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container py-2 md:py-3 flex items-center gap-4 md:gap-6">
        <Link href="/" className="flex items-center shrink-0">
          <Logo loading="eager" priority="high" />
        </Link>
        <div className="flex items-center gap-4 flex-1 justify-end">
          <HeaderNav data={data} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
