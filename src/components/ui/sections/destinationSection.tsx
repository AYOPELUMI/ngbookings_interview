import DestinationDisplayyCard from '@/components/cards/destinationDisplayyCard'
import React from 'react'
import SlideShow from './slideShow'

const hotels = [
    {
        name: "Lagos",
        quantity: 49,
        image: "/images/lagos.webp"
    },
    {
        name: "Abuja",
        quantity: 5,
        image: "/images/abuja.webp"
    }, {
        name: "Rivers",
        quantity: 5,
        image: "/images/rivers.webp"
    }, {
        name: "Lekki",
        quantity: 6,
        image: "/images/lekki.webp"
    }, {
        name: "Victoria Island",
        quantity: 4,
        image: "/images/victoria island.webp"
    }, {
        name: "Ikoyi",
        quantity: 1,
        image: "/images/ikoyi.webp"
    }, {
        name: "Edo",
        quantity: 5,
        image: "/images/edo.webp"
    }, {
        name: "Ibadan",
        quantity: 49,
        image: "/images/ibadan.webp"
    },
    {
        name: "Ikeja",
        quantity: 13,
        image: "/images/ikeja.webp"
    },
]

const DestinationSection = () => {
    return (
        <div className="px-10 max-sm:px-5 pt-20 max-md:pt-40 flex flex-col gap-5">
            <div>
                <div className=" font-bold text-3xl max-sm:text-2xl max-sm:text-center  text-primaryerosectio pb-2">Top Destinations</div>
                <div className=" text-lg max-sm:text-base  max-sm:text-center">Amazing places to explore in Nigeria</div>
            </div>
            <div className="">
                <div className="hidden lg:flex gap-5 flex-wrap justify-center">
                    {hotels.map((hotel) => (
                        <DestinationDisplayyCard key={hotel.name} location={hotel.name} quantity={hotel.quantity} image={hotel.image} />
                    ))}
                </div>

                <div className="lg:hidden">
                    <SlideShow items={hotels} renderItem={(hotel) => <DestinationDisplayyCard key={hotel.name} location={hotel.name} quantity={hotel.quantity} image={hotel.image} isHotel={false} />} />
                </div>

            </div>
        </div>
    )
}

export default DestinationSection