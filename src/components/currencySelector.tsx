import React from 'react'
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

const CurrencySelector = () => {
    return (
        <DropdownMenu>

            <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                NGN
                <ChevronDown className="h-4 w-4 opacity-50" /> {/* Added dropdown icon */}
            </DropdownMenuTrigger>

        </DropdownMenu>
    )
}

export default CurrencySelector