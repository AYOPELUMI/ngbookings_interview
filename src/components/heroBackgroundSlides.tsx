import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
    { id: 1, image: "/images/slide1.webp" },
    { id: 2, image: "/images/slide2.webp" },
    { id: 3, image: "/images/slide3.webp" },
    { id: 4, image: "/images/slide4.webp" },
    { id: 5, image: "/images/slide5.webp" },
    { id: 6, image: "/images/slide6.webp" },
];
const HeroBackgroundSlides = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                loop={true}
                speed={1000}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className='relative'>

                        <img src={slide.image} alt={slide.image} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000  z-0"></img>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroBackgroundSlides