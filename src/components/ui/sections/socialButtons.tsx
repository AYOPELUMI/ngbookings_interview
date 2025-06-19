import React from 'react'
import { Button } from '../button'
import { cn } from '@/lib/utils'

const SocialButtons = () => {
    return (
        <div className=" w-full max-[730px]:w-[90%] max-sm:w-full lg:w-[80%]">
            <div className=" flex justify-center items-center gap-4">
                <Button className={cn("rounded-full !w-fit !h-fit !p-2 bg-[#E0E0E0] cursor-pointer flex items-center justify-center")}>
                    <img src="/images/google.webp" alt="Google Logo" className="w-6 h-6"></img>
                </Button>
                <Button type="button" className={cn("rounded-full !w-fit !h-fit !p-2 bg-[#E0E0E0] cursor-pointer flex items-center justify-center")}>
                    <img src="/images/fbook.webp" alt="Fcebook Logo" className="w-6 h-6 object-contain"></img>

                </Button>
                <Button className={cn("rounded-full !w-fit !p-2 bg-[#E0E0E0] cursor-pointer flex items-center justify-center")}>
                    <img src="images/twitter.webp" alt="Google Logo" className="w-6 h-6"></img>
                </Button>

            </div>
            <div className="flex items-center my-5">
                <hr className="flex-1 border-none h-[1px] bg-[#fdaf02]" />
                <span className="or-text mx-2.5 text-[#7e0140]">or</span>
                <hr className="flex-1 border-none h-[1px] bg-[#fdaf02]" />


            </div>
        </div>
    )
}

export default SocialButtons