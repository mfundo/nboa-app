import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps === 'high'

  return (
    <Image
      alt="NBOA Logo"
      width={64}
      height={64}
      loading={priority ? undefined : loading}
      priority={priority}
      className={clsx('w-16 h-16 md:w-20 md:h-20', className)}
      src="/nboa-logo.svg"
    />
  )
}
