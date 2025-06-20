import LanguageSelector from '@/components/languageSelector'
import React from 'react'

const Header = () => {
    return (
        <div className="sticky top-0 z-30 w-full bg-primary flex items-center justify-between px-10 max-md:px-8 py-3 max-sm:py-2">
            <div className=" flex items-center gap-5 max-lg:gap-2 max-sm:gap-0 cursor-pointer">
                <div className=" h-6 w-full max-sm:hidden">
                    <img src="/svgs/logo.svg" alt="Ngbookings Logo" className=" h-full w-full" />
                </div>
                <div className=" h-6 w-full sm:hidden">
                    <img src="/svgs/Logo2.svg" alt="Ngbookings Logo" className=" h-full w-full" />
                </div>
            </div>
            <LanguageSelector isAuth={true} className='border-2 border-white text-white rounded-[24px] px-3 py-1 !hover:bg-primary/70' />
        </div>
    )
}

export default Header

