import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {

  const { loading: loadingFromProps, priority: priorityFromProps } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (

    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      width={78}
      height={78}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      src="/logo.svg" />

  )

}
