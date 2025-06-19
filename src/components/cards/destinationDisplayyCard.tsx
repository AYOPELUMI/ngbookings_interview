import React from 'react'

const DestinationDisplayyCard = ({ location, quantity, image, isHotel = true }: { location: string, quantity: number, image: string, isHotel?: boolean }) => {
    return (
        <div className=" flex flex-col gap-2">
            <div className="w-[200px] h-[180px] object-cover rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out  hover:shadow-xl max-md:w-full hover:scale-105">
                <div className="w-full h-full">
                    <img src={image} alt="Lagos image" loading="lazy" className="w-full h-full"></img>
                </div>
            </div>
            <div className=" flex flex-col">
                <span className=" font-medium">{location}</span>
                <span className=" text-gray-800 text-sm">
                    {quantity} {isHotel ? "Hotels" : "properties available"}
                </span>
            </div>
        </div>
    )
}
export default DestinationDisplayyCard