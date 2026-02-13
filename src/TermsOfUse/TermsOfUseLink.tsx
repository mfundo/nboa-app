'use client'

import React from 'react'
import { useTermsOfUse } from './TermsOfUseProvider'

export function TermsOfUseLink() {
  const { openModal } = useTermsOfUse()

  return (
    <button
      onClick={openModal}
      className="text-xs text-white/50 dark:text-white/50 light:text-gray-500 hover:text-white dark:hover:text-white light:hover:text-brand transition-colors cursor-pointer"
    >
      Terms of Use
    </button>
  )
}
