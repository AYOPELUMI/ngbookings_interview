import AnimatedLink from '@/components/animatedLink'
import React from 'react'
import { Button } from '../button'

const HeroSection = () => {
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
                                <AnimatedLink title={'Login'} href={'/login'} />
                            </div>
                            <div className=" max-md:hidden">
                                <AnimatedLink title={'Sign up'} href={'/sign-up'} />
                            </div>
                            <div className=' max-[900px]:hidden'>
                                <Button className='bg-white border border-primary text-primary  rounded-[30px]'>List your property</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection