import React from 'react'
import { Button } from '../button'
import { ArrowRight } from 'lucide-react'

const ListPropertySection = () => {
    return (
        <div className="h-[400px] mt-20 max-sm:mt-10 p-10 max-sm:p-5 flex flex-col gap-8 items-center justify-center list-ppt text-white bg-cover bg-center bg-no-repeat " style={{
            backgroundImage: "url('/images/list-ppt.webp')",
        }}>
            <p className=" font-semibold text-3xl max-sm:text-2xl text-center w-[70%] max-md:w-full">Maximize your property&quot;s earning</p>
            <p className=" text-lg text-center max-sm:text-base w-[70%] max-md:w-full">
                Reach a global audience and fill your vacancies effortlessly with our extensive network. We handle all the details, so you can enjoy stress-free income.
            </p>
            <Button className=' rounded-[30px] px-[22px] py-2 bg-[#FDAF02] flex gap-2 items-center'>
                List your property <ArrowRight />
            </Button>
        </div>
    )
}

export default ListPropertySection