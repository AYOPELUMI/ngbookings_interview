import React from 'react'
import DestinationDisplayyCard from './cards/destinationDisplayyCard'
import SlideShow from './ui/sections/slideShow'

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
        <div className="px-10 max-sm:px-5 pt-20 max-sm:pt-10 flex flex-col gap-5 top-destination-slider overflow-hidden">
            <div className=" font-bold text-3xl max-sm:text-2xl max-sm:text-center text-primary pb-2 text-start">Find by Brand</div>
            <div className="lg:flex gap-5 flex-wrap justify-center hidden ">
                {hotels.map((hotel) => (
                    <DestinationDisplayyCard key={hotel.name} location={hotel.name} quantity={hotel.amount} image={hotel.image} isHotel={false} />
                ))}
            </div>
            <div className="lg:hidden">
                <SlideShow items={hotels} renderItem={(hotel) => <DestinationDisplayyCard key={hotel.name} location={hotel.name} quantity={hotel.amount} image={hotel.image} isHotel={false} />} />
            </div>
        </div>
    )
}

export default FindyByBrands