import React from 'react'

const InformationSection = () => {
    return (
        <div className=" pt-20 max-sm:pt-14 flex flex-col gap-5">
            <div className="px-10 max-sm:px-5">
                <div className=" font-bold text-3xl max-sm:text-2xl max-sm:text-center  text-primary text-center">Why Ngbookings.com?</div>
            </div>
            <div className=" bg-primary px-10 max-sm:px-5 py-5 flex max-md:flex-col gap-5 items-center justify-between">
                <div className=" text-white flex flex-col gap-8 max-md:gap-5 w-full">
                    <p className=" text-3xl max-md:text-2xl font-medium  max-md:text-center">Competitive Pricing</p>
                    <p className=" text-lg max-md:text-center">
                        "With 500+ suppliers and the purchasing power of 300 million members, Ghbookings.ng can save you more!"
                    </p>
                </div>
                <div className=" md:w-full">
                    <img src="/images/island.webp" alt="Beach image" className=" object-cover max-md:h-48 rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default InformationSection