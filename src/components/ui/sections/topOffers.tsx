"use client"

import React from 'react'
import SlideShow from './slideShow'
import HotelCard from '@/components/cards/hotelCard'


const hotels = [
    {
        name: "Lagos",
        quantity: 49,
        image: "/images/lagos.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000
    },
    {
        name: "Abuja",
        quantity: 5,
        image: "/images/abuja.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000

    }, {
        name: "Rivers",
        quantity: 5,
        image: "/images/rivers.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000

    }, {
        name: "Lekki",
        quantity: 6,
        image: "/images/lekki.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000

    }, {
        name: "Victoria Island",
        quantity: 4,
        image: "/images/victoria island.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000

    }, {
        name: "Ikoyi",
        quantity: 1,
        image: "/images/ikoyi.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000

    }, {
        name: "Edo",
        quantity: 5,
        image: "/images/edo.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000

    }, {
        name: "Ibadan",
        quantity: 49,
        image: "/images/ibadan.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000

    },
    {
        name: "Ikeja",
        quantity: 13,
        image: "/images/ikeja.webp",
        features: ["Free Wifi", "Laundry Service", "Room Service", "Movie Room", "Concierge"],
        location: "Lagos",
        ratings: 3.5,
        amount: 15000
    },
]
const TopOffers = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <div className="px-10 max-sm:px-5 pt-20 max-md:pt-10 flex flex-col gap-5">
            <div>
                <div className=" font-bold text-3xl max-sm:text-2xl max-sm:text-center  text-primary pb-2 text-center">{title}</div>
                <div className=" text-lg max-sm:text-base text-center">{subtitle}</div>
            </div>
            <div className="featured-hotel w-full">
                <SlideShow items={hotels} renderItem={(hotel) => <HotelCard key={hotel.name} image={hotel.image} location={hotel.location} ratings={hotel.ratings} name={hotel.name} features={hotel.features} amount={hotel.amount} />} />
            </div>
        </div>

    )
}

export default TopOffers