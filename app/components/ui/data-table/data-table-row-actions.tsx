import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Button } from '~/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '~/components/ui/dropdown-menu'

export type ActionMenuOption = {
  label: string
  action?: () => void
}

interface DataTableRowActionsProps {
  menuOptions: ActionMenuOption[]
}

export function DataTableRowActions({ menuOptions }: DataTableRowActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {menuOptions.map((option, index) => (
          <DropdownMenuItem key={`${option.label} - ${index}`} onClick={option.action}>
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
