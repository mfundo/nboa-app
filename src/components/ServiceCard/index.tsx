import { cn } from '@/utilities/ui'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  linkLabel?: string
  linkUrl?: string
  className?: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  linkLabel,
  linkUrl,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col bg-card border border-border rounded-lg overflow-hidden h-full',
        className,
      )}
    >
      <div className="h-1.5 bg-brand w-full" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
        {linkLabel && linkUrl && (
          <div className="mt-6">
            <Button variant="brand" asChild>
              <Link href={linkUrl}>{linkLabel}</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
