'use client'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { HTMLAttributes } from 'react'
import { DateRange, SelectRangeEventHandler } from 'react-day-picker'
import { cn } from './../../lib/utils'import { Button } from './button'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export type DateRangeProps = {
  className?: HTMLAttributes<HTMLDivElement>
  dateRange?: DateRange
  setDateRange?: SelectRangeEventHandler
}

export function DateRangePicker({ className, dateRange, setDateRange }: DateRangeProps) {
  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn('w-[300px] justify-start text-left font-normal', !dateRange ? 'text-muted-foreground' : '')}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange
              ? `${dateRange.from ? format(dateRange.from, 'LLL dd, y') : ''}${dateRange.to ? ` - ${format(dateRange.to, 'LLL dd, y')}` : ''}`
              : 'Pick a date'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
