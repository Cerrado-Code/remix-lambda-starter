import { forwardRef } from 'react'
import { cn } from './../../lib/utils'
export interface CircularProgressProps extends React.SVGProps<HTMLOrSVGElement> {
  value: number
}

export const CircularProgress = forwardRef<SVGSVGElement, CircularProgressProps>(({ className, value, ...props }, ref) => (
  <svg className={cn('text-primary -rotate-90', className)} viewBox="0 0 100 100" {...props} ref={ref}>
    <circle className="stroke-current opacity-10" strokeWidth="14" cx="50" cy="50" r="40" fill="transparent" />
    <circle
      className="stroke-current"
      strokeWidth="14"
      strokeLinecap="round"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
      strokeDasharray="251.2"
      strokeDashoffset={`calc(251.2px - (251.2px * ${value}) / 100)`}
    />
    <text
      className="font-sans [font-size:inherit] font-semibold stroke-none fill-current origin-center rotate-90"
      x="50"
      y="50"
      textAnchor="middle"
      alignmentBaseline="middle"
    >
      {value}%
    </text>
  </svg>
))
