import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { RecipesCardView } from '~/components/page/cook-dashboard/tables/recipes-card-view'
import { RecipeCardItem } from '~/components/page/recipe-card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../table'
import { DataTablePagination } from './data-table-pagination'
import { BulkAction, DataTableToolbar, FilterType } from './data-table-toolbar'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data?: TData[]
  searchBy: string
  searchPlaceholder: string
  emptyState: ReactNode
  pagination: {
    pageIndex: number
    pageSize: number
  }
  setPagination: Dispatch<SetStateAction<PaginationState>>
  rowCount: number
  perSizeOptions?: number[]
  filters?: FilterType[]
  initialColumnVisibility: VisibilityState
  bulkActions?: BulkAction[]
  cardView: boolean
  manualFiltering: boolean
}

// data table component for cooks dashboard and my favorite recipes page
export function DataTableWithRecipeCards<TData, TValue>({
  columns,
  data = [],
  searchBy,
  searchPlaceholder,
  emptyState,
  perSizeOptions,
  filters,
  initialColumnVisibility,
  bulkActions,
  pagination,
  setPagination,
  rowCount,
  cardView,
  manualFiltering,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(initialColumnVisibility)
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    enableRowSelection: true,
    manualPagination: true,
    onPaginationChange: setPagination,
    rowCount: rowCount,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualFiltering: manualFiltering,
  })

  return (
    <>
      <div className="space-y-4">
        {manualFiltering ? null : (
          <DataTableToolbar
            table={table}
            searchByColumn={searchBy}
            placeholder={searchPlaceholder}
            filters={filters}
            bulkActions={bulkActions}
            hideViewButton={cardView}
          />
        )}
        {cardView ? (
          <RecipesCardView recipes={table.getRowModel().rows.map((row) => row.original) as RecipeCardItem[]} />
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} data-state={row.getIsSelected() ? 'selected' : null}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      {emptyState}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
        <DataTablePagination table={table} perPage={perSizeOptions} />
      </div>
    </>
  )
}
