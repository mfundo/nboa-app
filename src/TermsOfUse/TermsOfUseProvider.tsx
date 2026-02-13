'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import type { TermsOfUse as TermsOfUseType } from '@/payload-types'
import { TermsOfUseModal } from './TermsOfUseModal'

interface TermsOfUseContextType {
  openModal: () => void
  closeModal: () => void
}

const TermsOfUseContext = createContext<TermsOfUseContextType | undefined>(undefined)

export function useTermsOfUse() {
  const context = useContext(TermsOfUseContext)
  if (!context) {
    throw new Error('useTermsOfUse must be used within TermsOfUseProvider')
  }
  return context
}

export function TermsOfUseClientProvider({
  children,
  data
}: {
  children: React.ReactNode
  data: TermsOfUseType | null
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasChecked, setHasChecked] = useState(false)

  const STORAGE_KEY = 'termsOfUseAccepted'

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem(STORAGE_KEY)

    // Show modal only on first visit (no localStorage flag)
    if (!hasAccepted && data) {
      setIsOpen(true)
    }

    setHasChecked(true)
  }, [data])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem(STORAGE_KEY, 'true')
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <TermsOfUseContext.Provider value={{ openModal: handleOpen, closeModal: handleClose }}>
      {children}
      {hasChecked && <TermsOfUseModal isOpen={isOpen} onClose={handleClose} data={data} />}
    </TermsOfUseContext.Provider>
  )
}
