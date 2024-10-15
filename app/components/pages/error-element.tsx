import { cn } from '~/lib/utils'

export interface ErrorElementProps {
  className?: string
  iconClassName?: string
  text?: string
}

export const ErrorElement: React.FC<ErrorElementProps> = ({
  className,
  iconClassName = 'w-1/5 min-w-32',
  text = "Uh oh! We couldn't load this section",
}) => {
  return (
    <div className={cn('p-6 pr-4 sm:p-8 py-4 flex flex-col mx-auto justify-center items-center', className)}>
      <img src="/assets/img/illustrations/bad-recipe.svg" alt="Server Error" className={iconClassName} />
      <p className="p-4 text-muted-foreground">{text}</p>
    </div>
  )
}
