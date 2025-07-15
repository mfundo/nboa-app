
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {

  const footerData: Footer = await getCachedGlobal('footer', 1)();
  const navItems = footerData?.navItems || [];

  return (

    <footer className="mt-auto border-t border-border bg-white dark:bg-card text-black">

      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">

        <div className="flex items-center">

          <h3>Contact Us</h3>

          <p>
            Book Bunk Trust<br />
            P.O Box 532-00522<br />
            Makadara, Nairobi<br />
            +254714258474<br />
            <a href='mailto:hello@bookbunk.org.za'>
              hello@bookbunk.org
            </a>
          </p>

        </div>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">

          <ThemeSelector />

          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>

        </div>

      </div>

    </footer>

  )

}
