"use client"
import AnimatedLink from '@/components/animatedLink'
import React, { useState } from 'react'
import { Button } from '../button'
import LanguageSelector from '@/components/languageSelector'
import HeaderAnimatedLink from '@/components/headerAnimatedLink'
import CurrencySelector from '@/components/currencySelector'
import { Bed, Building2, CarTaxiFront, PlaneTakeoff } from 'lucide-react'

const tabs = [
    {
        id: 'hotels',
        title: "Hotels",
        icon: Bed,
    },
    {
        id: 'apartments',
        title: "Apartments",
        icon: Building2,
    },
    {
        id: 'flights',
        title: "Flights",
        icon: PlaneTakeoff,
    },
    {
        id: 'rides',
        title: "Rides",
        icon: CarTaxiFront,
    }
]
const HeroSection = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id)
    return (
        <div id="hero-section" className="relative h-full flex flex-col">
            <div className="relative z-30 py-[24dvh] max-md:py-40 flex flex-col h-full justify-center">
                <div className="absolute top-0 w-full">
                    <div className="px-10 max-sm:px-5 py-4 max-sm:py-3 flex justify-between items-center bg-white border-b border-b-[#d9d9d9] shadow  bg-white">
                        <div className=" flex max-md:flex-col items-center gap-3">
                            <div className=" h-4 w-full max-w-fit cursor-pointer">
                                <img src="/images/logo.png" alt="Ngbookings Logo" className=" h-full w-full"></img>
                            </div>
                            <p className=" max-md:hidden">|</p>
                            <AnimatedLink title={'reservations@ngbookings.com'} href={'mailto:reservations@ngbookings.ng'} />
                        </div>
                        <div className=" flex gap-1 max-sm:gap-0 items-center ">
                            <div className=" max-md:hidden">
                                <LanguageSelector />
                            </div>
                            <div>
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
                        </div>
                    </div>
                </div>
                <div className="px-10 max-sm:px-5 flex flex-col gap-3 max-sm:gap-2">
                    <p className=" text-white text-6xl max-md:text-5xl max-sm:text-4xl font-extrabold">
                        "Nigeria’s Best Hotels at"
                        <br className=" max-[850px]:hidden" />
                        " Your Fingertips"
                    </p>
                    <p className="text-white font-roboto font-medium max-md:font-normal text-lg max-md:text-base">
                        "Experience Instant Booking Confirmation, Secure Payment & Fraud Protection, "
                        <br className=" max-[850px]:hidden" />
                        " and 24/7 Customer Support anytime, anywhere!"
                    </p>
                </div>
                <div className=" w-full max-md:w-[80%] max-sm:w-full absolute -bottom-10 max-md:-bottom-32 px-10 max-sm:px-5 max-md:pt-5 self-center flex flex-col items-center">
                    <div className=" max-md:hidden">
                        <div className="p-3 max-sm:px-2 flex gap-5 max-sm:gap-1 items-center justify-center max-md:justify-evenly bg-primary text-white max-sm:overflow-hidden
      rounded-t-2xl border-2 border-[#FDAF02] w-fit max-md:border-0 max-md:rounded-none max-md:w-full">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 max-sm:gap-1 px-4 max-sm:px-3 py-2 max-sm:py-1.5 rounded-full cursor-pointer transition-all duration-200
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
                    <div className="bg-white md:rounded-full rounded-lg py-5 px-8 max-md:p-3 w-full
                        shadow-2xl max-md:border-2 max-md:border-purple">
                            
                        </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection