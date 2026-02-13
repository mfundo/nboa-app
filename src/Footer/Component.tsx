import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { TermsOfUseLink } from '@/TermsOfUse/TermsOfUseLink'

export async function Footer() {

  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const contactInfo = footerData?.contactInfo
  const socialLinks = footerData?.socialLinks || []

  return (

    <footer className="mt-auto bg-black text-white dark:bg-black dark:text-white light:bg-gray-50 light:text-gray-900">

      <div className="container hanken py-8 md:py-12">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">
              Contact Us
            </h3>
            <div className="space-y-2 text-sm text-white/70 dark:text-white/70 light:text-gray-600">
              {contactInfo?.address && (
                <p className="whitespace-pre-line">{contactInfo.address}</p>
              )}
              {contactInfo?.phone && (
                <p>
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-white dark:hover:text-white light:hover:text-brand transition-colors">
                    {contactInfo.phone}
                  </a>
                </p>
              )}
              {contactInfo?.email && (
                <p>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-white dark:hover:text-white light:hover:text-brand transition-colors">
                    {contactInfo.email}
                  </a>
                </p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {navItems.map(({ link }, i) => {
                return (
                  <CMSLink
                    className="text-white/70 dark:text-brand light:text-brand hover:text-white dark:hover:text-white light:hover:opacity-80 transition-colors text-sm"
                    key={i}
                    {...link}
                  />
                )
              })}
            </nav>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">
              Follow Us
            </h3>
            <div className="flex flex-row gap-4">
              {socialLinks.map((social, i) => {
                const platformColors: Record<string, string> = {
                  facebook: 'bg-blue-600 hover:bg-blue-700',
                  twitter: 'bg-sky-500 hover:bg-sky-600',
                  instagram: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-90',
                  linkedin: 'bg-blue-700 hover:bg-blue-800',
                  youtube: 'bg-red-600 hover:bg-red-700',
                }
                const iconMap: Record<string, React.ReactNode> = {
                  facebook: <Facebook className="w-5 h-5" />,
                  twitter: <Twitter className="w-5 h-5" />,
                  instagram: <Instagram className="w-5 h-5" />,
                  linkedin: <Linkedin className="w-5 h-5" />,
                  youtube: <Youtube className="w-5 h-5" />,
                }
                const platformLabels: Record<string, string> = {
                  facebook: 'Facebook',
                  twitter: 'Twitter / X',
                  instagram: 'Instagram',
                  linkedin: 'LinkedIn',
                  youtube: 'YouTube',
                }
                const bgColor = platformColors[social.platform] || 'bg-gray-600'
                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={platformLabels[social.platform] || social.platform}
                    className={`${bgColor} text-white w-10 h-10 rounded-full flex items-center justify-center transition-all`}
                  >
                    {iconMap[social.platform] || null}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-white/10 dark:border-white/10 light:border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-xs text-white/50 dark:text-white/50 light:text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} NBOA. All rights reserved.
          </p>
          <TermsOfUseLink />
        </div>
      </div>
    </footer>
  )
}
