import { Loader2 } from 'lucide-react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useEffect } from 'react'
import { useIntersectionObserver } from '~/lib/use-intersection-observer'

export interface InfiniteScrollProps extends ComponentPropsWithoutRef<'div'> {
  disabled?: boolean
  children: ReactNode
  loading: boolean
  onLoadMore: () => void
}

const InfiniteScroll = forwardRef<ElementRef<'div'>, InfiniteScrollProps>(
  ({ children, disabled, loading, onLoadMore, ...props }, refProp) => {
    const { isIntersecting, ref } = useIntersectionObserver({
      threshold: 0.5,
    })

    useEffect(() => {
      if (!onLoadMore || !isIntersecting || loading || disabled) {
        return
      }

      if (isIntersecting) {
        onLoadMore()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isIntersecting])

    return (
      <div ref={refProp} {...props}>
        {children}
        {loading && !disabled ? (
          <div className="flex-auto flex justify-center items-center self-center justify-self-center ">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : null}
        <div ref={ref} />
      </div>
    )
  },
)

InfiniteScroll.displayName = 'InfiniteScroll'

export { InfiniteScroll }
