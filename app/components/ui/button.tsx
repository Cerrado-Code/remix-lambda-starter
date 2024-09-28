import { Slot } from '@radix-ui/react-slot'
import { Link } from '@remix-run/react'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from './../../lib/utils'
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        rounded: 'bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-full',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow hover:bg-primary hover:text-white hover:border-primary transition-all duration-300',
        roundedOutline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-primary rounded-full',
        secondary: 'bg-secondary text-secondary-foreground shadow hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-primary',
        link: 'text-muted-foreground underline-offset-4 hover:text-primary',
        linkPrimary: 'text-primary underline-offset-4 hover:text-primary/90',
        lightPrimary: 'bg-primary/10 text-primary shadow-sm hover:bg-primary/5',
        roundedLightPrimary: 'bg-primary/10 text-primary shadow-sm hover:bg-primary/5 rounded-full',
      },
      size: {
        default: 'h-9 px-4 py-2',
        xs: 'h-6 rounded-full px-2 py-1 text-2xs',
        sm: 'h-8 [&:not(.rounded-full)]rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
        'small-icon': 'h-7 w-7',
        'tiny-icon': 'h-4 w-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  to?: string
  prefech?: 'none' | 'intent' | 'render' | 'viewport'
  target?: string
  preventScrollReset?: boolean
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = (asChild ? Slot : props.to ? Link : 'button') as React.ElementType
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
