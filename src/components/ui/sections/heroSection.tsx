"use client"
import React, { useState } from 'react'
import HeroBackgroundSlides from '@/components/heroBackgroundSlides'
import HeroSectionHeader from '@/components/heroSectionHeader'
import { tabs } from '@/lib/constants'







const HeroSection = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id)
    return (
        <div id="hero-section" className="relative h-full flex flex-col">
            <div className="relative z-30 py-[24dvh] max-md:py-40 flex flex-col h-full justify-center">
                <HeroSectionHeader activeTab={activeTab} setActiveTab={(tab) => setActiveTab(tab)} />
                <div className="px-10 max-sm:px-5 flex flex-col gap-3 max-sm:gap-2">
                    <p className=" text-white text-6xl max-md:text-5xl max-sm:text-4xl font-extrabold">
                        Nigeria&quot;s Best Hotels at
                        <br className=" max-[850px]:hidden" />
                        Your Fingertips
                    </p>
                    <p className="text-white font-roboto font-medium max-md:font-normal text-lg max-md:text-base">
                        Experience Instant Booking Confirmation, Secure Payment & Fraud Protection,
                        <br className=" max-[850px]:hidden" />
                        and 24/7 Customer Support anytime, anywhere!
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
            <HeroBackgroundSlides />
        </div>
    )
}

export default HeroSection