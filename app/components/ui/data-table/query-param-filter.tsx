import { CheckIcon, PlusCircledIcon } from '@radix-ui/react-icons'
import { useSearchParams } from '@remix-run/react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { Separator } from '~/components/ui/separator'
import { cn } from './../../lib/utils'import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '../command'

type Option = { label: string; value: string; id: number }

interface QueryParamFilterProps {
  title: string
  options: Option[]
  urlValue: string
  selectedValues: string[]
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>
}

/*
  if we are handling query params in the URL, use this component + manualFiltering = true
  flag in the data table
*/
export function QueryParamFilter({ title, options, urlValue, selectedValues, setSelectedValues }: QueryParamFilterProps) {
  const [_searchParams, setSearchParams] = useSearchParams()

  const deselectOption = (prev: URLSearchParams, optionId: number) => {
    // Get the existing parameter value
    const existingParamValue = prev.get(urlValue)

    if (existingParamValue) {
      // Check if the existing parameter value is a list
      const valuesArray = existingParamValue.split(',')
      const filteredArray = valuesArray.filter((id) => id !== `${optionId}`)

      if (filteredArray.length > 0) {
        prev.set(urlValue, filteredArray.join(','))
      } else {
        prev.delete(urlValue)
      }
    }

    return prev
  }

  const addSelectedOption = (prev: URLSearchParams, optionId: number) => {
    // Get the existing parameter value
    const existingParamValue = prev.get(urlValue)

    if (existingParamValue) {
      const valuesArray = existingParamValue.split(',')
      if (!valuesArray.includes(`${optionId}`)) {
        valuesArray.push(`${optionId}`)
      }
      prev.set(urlValue, valuesArray.join(','))
    } else {
      // If no existing parameter, set it to the new option id
      prev.set(urlValue, `${optionId}`)
    }

    return prev
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed hidden lg:flex">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          {title}{' '}
          {selectedValues?.length > 0 ? (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge variant="secondary" className="rounded-sm px-1 font-normal lg:hidden">
                {selectedValues.length}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.length > 2 ? (
                  <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                    {selectedValues.length} selected
                  </Badge>
                ) : (
                  options
                    .filter((option: Option) => {
                      return selectedValues.includes(`${option.id}` ?? '')
                    })
                    .map((option: Option) => (
                      <Badge variant="secondary" key={option.id} className="rounded-sm px-1 font-normal">
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          ) : null}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option: Option) => {
                const isSelected = selectedValues.includes(`${option.id}` ?? '')
                return (
                  <CommandItem
                    key={option.id}
                    onSelect={() => {
                      if (isSelected) {
                        setSelectedValues((prev: string[]) => prev.filter((filter) => filter !== `${option.id}`))
                        setSearchParams((prev) => deselectOption(prev, option.id), { preventScrollReset: true })
                      } else {
                        setSelectedValues((prev: string[]) => [...prev, `${option.id}`])
                        setSearchParams((prev) => addSelectedOption(prev, option.id), { preventScrollReset: true })
                      }
                    }}
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                        isSelected ? 'bg-primary text-primary-foreground' : 'opacity-50 [&_svg]:invisible',
                      )}
                    >
                      <CheckIcon className={cn('h-4 w-4')} />
                    </div>
                    <span>{option.label}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {selectedValues.length > 0 ? (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => {
                      setSearchParams(
                        (prev) => {
                          prev.delete(urlValue)
                          return prev
                        },
                        { preventScrollReset: true },
                      )
                      setSelectedValues([])
                    }}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            ) : null}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
