import React from 'react'
import SlideShow from './slideShow'
import TestimonialCard from '@/components/cards/testimonialCard'

const testimonies = [
    {
        name: "Ayodele",
        testimony: "I highly recommend this hotel booking website to anyone looking for the best accommodations. ",
        location: "Ibadan"
    },
    {
        name: "Amaka",
        testimony: "This is the 3rd time I am using ngbooking and I can tell you that their services are very reliable.",
        location: "Abuja"
    },
    {
        name: "Francis",
        testimony: "Using this website made my vacation planning a breeze. It has a wide range of hotels at various price ranges, and the user-friendly interface made it easy to compare options.",
        location: "Lagos"
    },
    {
        name: "Ayodele",
        testimony: "I highly recommend this hotel booking website to anyone looking for the best accommodations. ",
        location: "Ibadan"
    },
    {
        name: "Amaka",
        testimony: "This is the 3rd time I am using ngbooking and I can tell you that their services are very reliable.",
        location: "Abuja"
    },
    {
        name: "Francis",
        testimony: "Using this website made my vacation planning a breeze. It has a wide range of hotels at various price ranges, and the user-friendly interface made it easy to compare options.",
        location: "Lagos"
    }
]
const TestimonialSection = () => {
    return (
        <div className="px-10 max-sm:px-5 pt-20 max-md:pt-10 flex flex-col gap-5">
            <div>
                <div className=" font-bold text-3xl max-sm:text-2xl max-sm:text-center  text-primary pb-2 text-center">What are our guest are saying</div>
                <div className=" text-lg max-sm:text-base text-center">Our customers says they had the best experience using Ngbookings.ng</div>
            </div>
            <div className="featured-hotel w-full">
                <SlideShow slideClassName='h-full' items={testimonies} renderItem={(testimony, index) => <TestimonialCard key={`${testimony.name}-${index}`} autor={testimony.name} testimony={testimony.testimony} location={testimony.location} />} />
            </div>
        </div>
    )
}

export default TestimonialSection