import { FC } from 'react'
import { NumericFormat, PatternFormat, PatternFormatProps } from 'react-number-format'
import { cn } from './../../lib/utils'
const FormattedInput: FC<Omit<PatternFormatProps, 'format'> & { format?: string }> = ({ className, format, ...props }) => {
  const Comp = format ? PatternFormat : NumericFormat
  return (
    <Comp
      format={format as never}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}
FormattedInput.displayName = 'FormattedInput'

export { FormattedInput }
