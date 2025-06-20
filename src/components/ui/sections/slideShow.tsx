'use client'
import React, { useRef, useState, ReactNode } from 'react';
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SlideShowProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
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
    speed?: number;
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
    speed = 300,
}: SlideShowProps<T>) {
    const swiperRef = useRef<SwiperRef>(null);
    const [progress, setProgress] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    // Throttle navigation to prevent rapid clicks
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSlideChange = (swiper: SwiperClass) => {
        const totalSlides = swiper.slides.length;
        const visibleSlides = swiper.params.slidesPerView;
        const activeIndex = swiper.activeIndex;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
        setProgress(Math.min(100, ((activeIndex + (visibleSlides as number)) / totalSlides) * 100));
        setIsAnimating(false);
    };
    const handleNavigation = (direction: 'prev' | 'next') => {
        if (!swiperRef.current || isAnimating) return;

        setIsAnimating(true);
        const swiper = swiperRef.current.swiper;

        if (direction === 'prev') {
            swiper.slidePrev();
        } else {
            swiper.slideNext();
        }
    };

    return (
        <div className={`w-full ${className}`}>
            {/* Main Slider */}
            <Swiper
                ref={swiperRef}
                modules={[Navigation, FreeMode]}
                spaceBetween={spaceBetween}
                speed={speed}
                freeMode={{
                    enabled: true,
                    momentum: false, // Disable momentum to prevent jumpy behavior
                }}
                onSlideChange={handleSlideChange}
                onInit={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSwiper={(swiper) => {
                    const visibleSlides = swiper.params.slidesPerView || 1;
                    setProgress(((visibleSlides as number) / items.length) * 100);
                }}
                className="relative"
                breakpoints={breakpoints}
                slidesPerView={1.2}

                resistance={false} // Disable elastic pull
                threshold={10} // Minimum distance to trigger slide
                followFinger={true}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} className={slideClassName}>
                        {renderItem(item, index)}
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
                                className="bg-primary h-full transition-all duration-200"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    {showNavigation && (
                        <div className="flex gap-3 shrink-0">
                            <button
                                onClick={() => handleNavigation('prev')}
                                disabled={isBeginning || isAnimating}
                                className={`border-2 border-[#1E1E1E] bg-white rounded-full transition-colors p-1.5 text-[#1E1E1E] ${isBeginning || isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                                    }`}
                                aria-label="Previous slide"
                            >
                                <ArrowLeft />
                            </button>
                            <button
                                onClick={() => handleNavigation('next')}
                                disabled={isEnd || isAnimating}
                                className={`border-2 border-[#1E1E1E] bg-white rounded-full transition-colors p-1.5 text-[#1E1E1E] ${isEnd || isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                                    }`}
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