import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Add this import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module

const images = [
    "/images/swiperone.webp",
    "/images/swipertwo.webp",
    "/images/swiperthree.webp",
    "/images/swiperfour.webp",
    "/images/swiperfive.webp",
    "/images/swipersix.webp",
    "/images/swiperseven.webp",
    "/images/swipereight.webp"
]

const ImageSlide = () => {
    return (
        <div className=" w-[40%] h-auto max-[730px]:hidden">
            <div className=" mt-5">
                <Swiper
                    observer={true}
                    spaceBetween={0}
                    className=""
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500, // 2.5 seconds delay between slides
                        disableOnInteraction: false, // continue autoplay after user interaction
                    }}
                    loop={true}
                    modules={[Autoplay]} // Add Autoplay to modules
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} >
                            <img
                                src={image}
                                alt="Icon"
                                className="object-cover w-full h-full"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ImageSlide