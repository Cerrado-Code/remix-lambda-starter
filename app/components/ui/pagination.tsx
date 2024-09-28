/* eslint-disable jsx-a11y/anchor-has-content */
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Link } from '@remix-run/react'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import * as React from 'react'

import { ButtonProps, buttonVariants } from '~/components/ui/button'
import { cn } from './../../lib/utils'
const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav role="navigation" aria-label="pagination" className={cn('mx-auto flex w-full justify-center', className)} {...props} />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
  to: string
  className?: string
  classNameInactive?: string
  children?: React.ReactNode
} & Pick<ButtonProps, 'size'>

const PaginationLink = ({
  className,
  isActive,
  classNameInactive = 'text-muted-foreground',
  size = 'icon',
  to,
  ...props
}: PaginationLinkProps) => (
  <Link
    aria-current={isActive ? 'page' : undefined}
    preventScrollReset
    className={cn(
      buttonVariants({
        variant: 'ghost',
        size,
      }),
      className,
      isActive ? 'border-b border-blue-500' : classNameInactive,
    )}
    to={to}
    prefetch="intent"
    {...props}
  />
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn('gap-1 pl-2.5', className)} {...props}>
    <ArrowLeftIcon className="h-5 w-5" />
    <span className="hidden sm:inline">Prev</span>
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn('gap-1 pr-2.5', className)} {...props}>
    <span className="hidden sm:inline">Next</span>
    <ArrowRightIcon className="h-5 w-5" />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span aria-hidden className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}>
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }
