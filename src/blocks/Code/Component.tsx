import React from 'react'

import { Code } from './Component.client'
import { cn } from '@/utilities/ui'

export type CodeBlockProps = {
  code: string
  language?: string
  blockType: 'code'
}

type Props = CodeBlockProps & {
  className?: string
}

export const CodeBlock: React.FC<Props> = ({ className, code, language }) => {
  return (
    <div className={cn('hanken', 'container', 'py-10 px-8', 'not-prose', className)}>
      <Code code={code} language={language} />
    </div>
  )
}
