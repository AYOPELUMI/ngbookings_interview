import React from 'react'

const TestimonialCard = ({ autor, testimony, location }: { autor: string, testimony: string, location: string }) => {
    return (
        <div className=" p-4 border border-gray-600 h-64 flex flex-col">
            <img src="/images/quote.webp" alt="Quotes image" className=" h-10 self-start" />
            <div className="flex flex-col gap-2">
                <p className=" text-base font-semibold">{autor}</p>
                <p className=" text-xs">
                    {testimony}
                </p>
            </div>
            <div className=" self-end mt-auto h-fit"><p className="  text-sm font-semibold">{location}</p></div>
        </div>
    )
}
export default TestimonialCard