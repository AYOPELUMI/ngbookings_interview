"use client"
import React, { useState } from 'react'
import AnimatedLink from './animatedLink'
import CurrencySelector from './currencySelector'
import HeaderAnimatedLink from './headerAnimatedLink'
import LanguageSelector from './languageSelector'
import { Button } from './ui/button'
import { tabs } from '@/lib/constants'
import { AlignJustify, LucideProps, User } from 'lucide-react'
import HeroSectionMenu from './heroSectionMenu'

const HeroSectionHeader = ({ activeTab, setActiveTab }: {
    activeTab: string; setActiveTab: (id: string) => void
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="absolute top-0 w-full">
            {isOpen && (
                <HeroSectionMenu onClose={() => setIsOpen(false)} />
            )}
            <div className="px-10 max-sm:px-5 py-4 max-sm:py-3 flex justify-between items-center  border-b border-b-[#d9d9d9] shadow  bg-white">
                <div className=" flex max-md:flex-col items-center gap-3">
                    <div className=" h-4 w-full max-w-fit cursor-pointer">
                        <img src="/images/logo.png" alt="Ngbookings Logo" className=" h-full w-full" />
                    </div>
                    <p className=" max-md:hidden">|</p>
                    <AnimatedLink title={'reservations@ngbookings.com'} href={'mailto:reservations@ngbookings.ng'} />
                </div>
                <div className=" flex gap-1 max-sm:gap-0 items-center ">
                    <div className=" max-md:hidden">
                        <LanguageSelector />
                    </div>
                    <div className='max-md:hidden'>
                        <CurrencySelector />
                    </div>
                    <div className=" max-md:hidden">
                        <HeaderAnimatedLink title={'Login'} href={'/login'} />
                    </div>
                    <div className=" max-md:hidden">
                        <HeaderAnimatedLink title={'Sign up'} href={'/sign-up'} />
                    </div>
                    <div className=' max-[900px]:hidden'>
                        <Button className='bg-white border border-primary text-primary  rounded-[30px]'>List your property</Button>
                    </div>
                    <div className=" hidden max-md:block">
                        <div className="relative flex gap-2 items-center">
                            <div className="p-1 h-fit border-2 border-[#1e1e1e] rounded-full">
                                <User className='size-5' />
                            </div>
                            <div className="md:hidden">
                                <Button variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
                                    <AlignJustify />
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="md:hidden">

                <div className="p-3 max-sm:px-1 flex gap-5 max-sm:gap-1 items-center justify-center max-md:justify-evenly bg-primary text-white max-sm:overflow-hidden
                  rounded-t-2xl  w-fit max-md:border-0 max-md:rounded-none max-md:w-full">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 max-sm:gap-1 px-2 text-xs max-sm:px-2 py-2 max-sm:py-1.5 rounded-full cursor-pointer transition-all duration-200
            ${activeTab == tab.id
                                    ? 'bg-white text-primary shadow-md'
                                    : ''
                                }`}
                        >
                            <tab.icon className="h-4 w-4 max-sm:h-3.5 max-sm:w-3.5" />
                            <p className="text-sm max-sm:text-xs font-medium whitespace-nowrap">
                                {tab.title}
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default HeroSectionHeader