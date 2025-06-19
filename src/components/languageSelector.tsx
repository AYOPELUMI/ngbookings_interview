"use client"

import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import { ChevronDown } from 'lucide-react' // Import the icon

type Language = {
    code: string
    name: string
    flag: string
}

const languages: Language[] = [
    { code: 'en', name: 'English', flag: '/svgs/british.svg' },
    { code: 'fr', name: 'French', flag: '/svgs/france.svg' },
    { code: 'ar', name: 'العربية', flag: '/svgs/saudi.svg' },
    { code: 'ZH', name: '中文', flag: '/svgs/china.svg' },
]

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Image
                    src={selectedLanguage.flag}
                    alt={selectedLanguage.name}
                    width={20}
                    height={15}
                    className="w-5 h-auto rounded-md"
                />
                <ChevronDown className="h-4 w-4 opacity-50" /> {/* Added dropdown icon */}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36"> {/* Slightly wider */}
                {languages.map((language) => (
                    <DropdownMenuItem
                        key={language.code}
                        onClick={() => setSelectedLanguage(language)}
                        className="flex items-center gap-2 text-sm"
                    >
                        <Image
                            src={language.flag}
                            alt={language.name}
                            width={20}
                            height={15}
                            className="w-5 h-auto"
                        />

                        <span className="">{language.code.toUpperCase()} - </span>
                        <span className="">{language.name}</span>

                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LanguageSelector