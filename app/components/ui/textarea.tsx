import * as React from 'react'
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize'

import { cn } from './../../lib/utils'
export interface TextareaProps extends TextareaAutosizeProps {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, minRows = 3, maxRows = 5, ...props }, ref) => {
  return (
    <TextareaAutosize
      className={cn(
        'flex min-h-[10px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      minRows={minRows}
      maxRows={maxRows}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
