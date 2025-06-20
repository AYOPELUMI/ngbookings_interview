"use client"

import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils' // Assuming you have a cn utility for class merging

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

interface LanguageSelectorProps {
    className?: string,
    isAuth?: boolean
}

const LanguageSelector = ({ className, isAuth = false }: LanguageSelectorProps) => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md  dark:hover:bg-gray-800 transition-colors cursor-pointer",
                className
            )}>
                <Image
                    src={selectedLanguage.flag}
                    alt={selectedLanguage.name}
                    width={20}
                    height={15}
                    className="w-5 h-auto rounded-md"
                />
                {isAuth ?
                    <span>{selectedLanguage.code.toUpperCase()} </span> : null
                }
                <ChevronDown className="h-4 w-4 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36">
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
                        <span>{language.code.toUpperCase()} - </span>
                        <span>{language.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LanguageSelector