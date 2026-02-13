import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { TermsOfUse as TermsOfUseType } from '@/payload-types'
import { TermsOfUseClientProvider } from './TermsOfUseProvider'

export async function TermsOfUseProvider({ children }: { children: React.ReactNode }) {
  let data: TermsOfUseType | null = null

  try {
    data = (await getCachedGlobal('termsOfUse', 1)()) as TermsOfUseType
  } catch (error) {
    console.error('Failed to fetch Terms of Use:', error)
  }

  return (
    <TermsOfUseClientProvider data={data}>
      {children}
    </TermsOfUseClientProvider>
  )
}
