import { Slot } from '@radix-ui/react-slot'
import { Link as ReLink, LinkProps as ReLinkProps } from '@remix-run/react'
import { cva } from 'class-variance-authority'
import React, { FC } from 'react'
import { cn } from './../../lib/utils'
const linkVariants = cva('', {
  variants: {
    variant: {
      default: 'text-current hover:text-primary',
      primary: 'text-primary hover:text-primary/80',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface LinkProps extends ReLinkProps {
  asChild?: boolean
  variant?: 'default' | 'primary'
}

export const Link: FC<LinkProps> = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, to, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : ReLink
    return <Comp to={to} className={cn(linkVariants({ variant }), className)} prefetch="intent" ref={ref} {...props} />
  },
)

Link.displayName = 'Link'
