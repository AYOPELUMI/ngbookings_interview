import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Add this import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module

const images = [
    { image: "/images/swiper1.webp" },
    { image: "/images/swiper2.webp" },
    { image: "/images/swiper3.webp" },
    { image: "/images/swiper4.webp" },
    { image: "/images/swiper5.webp" },
    { image: "/images/swiper6.webp" },
    { image: "/images/swiper7.webp" },
    { image: "/images/swiper8.webp" }
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
                                src={image.image}
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