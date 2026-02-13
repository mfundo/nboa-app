'use client'

import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import RichText from '@/components/RichText'
import type { TermsOfUse as TermsOfUseType } from '@/payload-types'

interface TermsOfUseModalProps {
  isOpen: boolean
  onClose: () => void
  data: TermsOfUseType | null
}

export function TermsOfUseModal({ isOpen, onClose, data }: TermsOfUseModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen || !data) return null

  return (
    <>
      {/* Opaque black background */}
      <div
        className="fixed inset-0 bg-black/80 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* White modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-lg shadow-lg max-w-[1200px] w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with close button */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 md:px-8 py-6 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--brand)' }}>
              {data.heading}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors shrink-0 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 md:px-8 py-6 text-gray-900">
            {data.content && (
              <RichText data={data.content} />
            )}
          </div>

          {/* Close button footer */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 md:px-8 py-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg text-white transition-opacity hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: 'var(--brand)' }}
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
