'use client'
import React, { useRef, useState, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SlideShowProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
    className?: string;
    slideClassName?: string;
    spaceBetween?: number;
    breakpoints?: {
        [key: number]: {
            slidesPerView: number;
            spaceBetween?: number;
        };
    };
    showProgress?: boolean;
    showNavigation?: boolean;
}

const defaultBreakpoints = {
    0: { slidesPerView: 1.2, spaceBetween: 5 },
    640: { slidesPerView: 2.3, spaceBetween: 5 },
    768: { slidesPerView: 3.3, spaceBetween: 5 },
    1024: { slidesPerView: 3.3, spaceBetween: 5 },
    1280: { slidesPerView: 4.3, spaceBetween: 5 }
};

function SlideShow<T>({
    items,
    renderItem,
    className = '',
    slideClassName = 'pb-8 p-2',
    spaceBetween = 5,
    breakpoints = defaultBreakpoints,
    showProgress = true,
    showNavigation = true,
}: SlideShowProps<T>) {
    const swiperRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const handleSlideChange = (swiper: any) => {
        const totalSlides = swiper.slides.length;
        const visibleSlides = swiper.params.slidesPerView;
        const activeIndex = swiper.activeIndex;

        // Calculate progress accounting for partial slides
        setProgress(Math.min(100, ((activeIndex + visibleSlides) / totalSlides) * 100));
    };

    return (
        <div className={`w-full ${className}`}>
            {/* Main Slider */}
            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={spaceBetween}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => {
                    const visibleSlides = swiper.params.slidesPerView || 1;
                    setProgress(((visibleSlides as number) / items.length) * 100);
                }} className="relative"
                breakpoints={breakpoints}
                slidesPerView={1.2} // Default with partial slide visible
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} className={slideClassName}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Controls Container */}
            {(showProgress || showNavigation) && (
                <div className="flex items-center justify-between gap-4 mt-4">
                    {/* Progress Bar */}
                    {showProgress && (
                        <div className="flex-1 bg-gray-200 h-1 rounded-full overflow-hidden">
                            <div
                                className="bg-primary h-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    {showNavigation && (
                        <div className="flex gap-3 shrink-0">
                            <button
                                onClick={() => swiperRef.current?.swiper.slidePrev()}
                                className="border-2 border-[#1E1E1E] bg-white rounded-full hover:bg-gray-100 transition-colors p-1.5 text-[#1E1E1E]"
                                aria-label="Previous slide"
                            >
                                <ArrowLeft />
                            </button>
                            <button
                                onClick={() => swiperRef.current?.swiper?.slideNext()} className="border-2 border-[#1E1E1E] bg-white rounded-full hover:bg-gray-100 transition-colors p-1.5 text-[#1E1E1E]"
                                aria-label="Next slide"
                            >
                                <ArrowRight />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SlideShow;