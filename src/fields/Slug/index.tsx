'use client'

import type { TextFieldClientComponent } from 'payload'
import { useField, TextInput } from '@payloadcms/ui'
import React, { useCallback } from 'react'

// Simple slugify function
const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export const SlugField: TextFieldClientComponent = ({ field, path }) => {
  const { value, setValue } = useField<string>({ path: path || field.name })

  // Get the title field value to auto-generate slug
  const { value: titleValue } = useField<string>({ path: 'title' })

  const handleGenerate = useCallback(() => {
    if (titleValue) {
      const newSlug = slugify(titleValue)
      setValue(newSlug)
    }
  }, [titleValue, setValue])

  // Auto-generate slug when title changes (only if slug is empty)
  React.useEffect(() => {
    if (titleValue && !value) {
      handleGenerate()
    }
  }, [titleValue, value, handleGenerate])

  const label = typeof field.label === 'string' ? field.label : field.name

  return (
    <div className="field-type text">
      <label className="field-label" htmlFor={path || field.name}>
        {label}
        {field.required && <span className="required">*</span>}
      </label>
      <TextInput
        path={path || field.name}
        value={value || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
      <button
        type="button"
        onClick={handleGenerate}
        className="btn btn--style-secondary btn--size-small"
        style={{
          marginTop: '0.5rem',
        }}
      >
        Generate from title
      </button>
    </div>
  )
}
