import React from 'react'
import DestinationDisplayyCard from './cards/destinationDisplayyCard'

const hotels = [
    {
        name: "Msquare",
        quantity: 5,
        image: "/images/lagos.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000
    },
    {
        name: "Aotel",
        quantity: 3,
        image: "/images/abuja.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000

    }, {
        name: "Ivy",
        quantity: 3,
        image: "/images/rivers.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000

    }
]
const FindyByBrands = () => {
    return (
        <div className="px-10 max-sm:px-5 pt-20 max-sm:pt-10 flex flex-col gap-5 top-destination-slider">
            <div className=" font-bold text-3xl max-sm:text-2xl max-sm:text-center text-primary pb-2 text-start">Find by Brand</div>
            <div className="flex gap-5 flex-wrap justify-center">
                {hotels.map((hotel) => (
                    <DestinationDisplayyCard location={hotel.name} quantity={hotel.amount} image={hotel.image} isHotel={false} />
                ))}
            </div>
        </div>
    )
}

export default FindyByBrands