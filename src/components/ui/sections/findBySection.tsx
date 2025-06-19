import DisplayCard from '@/components/cards/displayCard'
import React from 'react'
const hotels = [
    {
        name: "Hotels",
        quantity: 49,
        image: "/images/lagos.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000
    },
    {
        name: "Apartments",
        quantity: 5,
        image: "/images/abuja.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000

    }, {
        name: "Resorts",
        quantity: 5,
        image: "/images/rivers.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000

    }, {
        name: "Rentals",
        quantity: 6,
        image: "/images/lekki.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000

    }
]
const FindBySection = () => {
    return (
        <div className="px-10 max-sm:px-5 pt-12 max-sm:pt-8 flex flex-col gap-5">
            <div className=" font-bold text-3xl max-sm:text-2xl max-sm:text-center  text-primary">Find by Categories</div>
            <div className=" flex flex-wrap items-center justify-center gap-x-5 gap-y-10">
                {hotels.map((hotel) => <DisplayCard image={hotel.image} title={hotel.name} />)}
            </div>
        </div>
    )
}

export default FindBySection