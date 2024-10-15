import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import { ChevronDown } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '~/components/ui/dropdown-menu'
import { Input } from '~/components/ui/input'
import { DataTableFacetedFilter } from './data-table-faceted-filter'
import { DataTableViewOptions } from './data-table-view-options'

export type FilterType = {
  name: string
  label: string
  content: {
    label?: string
    value?: string
    icon?: React.ComponentType<{ className?: string }>
  }[]
}

export type BulkAction = {
  label: string
  action: () => void
}

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  placeholder?: string
  searchByColumn: string
  filters?: FilterType[]
  bulkActions?: BulkAction[]
  hideViewButton?: boolean
}

export function DataTableToolbar<TData>({
  table,
  placeholder,
  searchByColumn,
  filters,
  bulkActions,
  hideViewButton,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {table.getSelectedRowModel().rows.length > 0 && bulkActions ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm">
                Bulk Actions
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {bulkActions.map((action) => (
                <DropdownMenuLabel key={action.label} onClick={action.action}>
                  {action.label}
                </DropdownMenuLabel>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : null}
        <Input
          placeholder={placeholder ?? 'Search'}
          value={(table.getColumn(searchByColumn)?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn(searchByColumn)?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {filters?.map((filter) => (
          <DataTableFacetedFilter
            key={`filter-${filter.name}`}
            column={table.getColumn(filter.name)}
            title={filter.label}
            options={filter.content}
          />
        ))}
        {isFiltered ? (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        ) : null}
      </div>
      <DataTableViewOptions table={table} hideViewButton={hideViewButton} />
    </div>
  )
}
