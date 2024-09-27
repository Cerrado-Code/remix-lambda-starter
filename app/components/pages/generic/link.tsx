import { Slot } from '@radix-ui/react-slot'
import { Link as ReLink, LinkProps as ReLinkProps } from '@remix-run/react'
import { cva } from 'class-variance-authority'
import React, { FC } from 'react'
import { cn } from '../../../lib/utils'



export interface LinkProps extends ReLinkProps {
  asChild?: boolean
  variant?: 'default' | 'primary'
  className?: 'default' | 'primary'
}

export const Link: FC<LinkProps> = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, to, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : ReLink
    return <Comp to={to} className={cn(variant, className)} prefetch="intent" ref={ref} {...props} />
  },
)

Link.displayName = 'Link'
