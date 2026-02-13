import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { TermsOfUseProvider } from '@/TermsOfUse/TermsOfUseProvider.server'

export async function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <TermsOfUseProvider>{children}</TermsOfUseProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
