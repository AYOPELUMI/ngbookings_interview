import { LocateFixed, MapPin } from 'lucide-react'
import React from 'react'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaLocationDot } from "react-icons/fa6";
import { numberFormat } from '@/lib/numberFormat';

interface HotelCardProps {
    image: string
    location: string
    ratings: number
    name: string
    features: string[]
    amount: string | number
}

const HotelCard = ({ image, location, ratings, name, features, amount }: HotelCardProps) => {
    return (
        <div className="border-[0.5px] border-gray-400 rounded-xl w-full max-w-96 max-sm:max-w-full h-[350px] flex flex-col card cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300">
            <img src={image} alt="Room image" className="rounded-t-xl object-cover h-48 w-full" loading="lazy" />
            <div className="rounded-b-xl p-3 flex flex-col flex-grow">
                <div>
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 max-w-[70%] overflow-hidden">
                            <FaLocationDot className='text-primary' />
                            <p className="text-sm text-gray-800 truncate">{location}</p>
                        </div>
                        <Rating
                            value={ratings}
                            readOnly
                            style={{ maxWidth: 120 }}
                            itemStyles={{
                                itemShapes: <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />,
                                activeFillColor: '#f59e0b',
                                inactiveFillColor: '#ffedd5'
                            }}
                        />
                    </div>
                    <div className="mt-3">
                        <p className="font-bold text-xl truncate">{name}</p>
                    </div>
                    <div className="flex gap-1 truncate mt-1">
                        {features.map((feature, index) => (
                            <p key={index}>
                                <span className="font-medium text-sm">
                                    {feature} |
                                </span>
                            </p>
                        ))}
                    </div>
                </div>
                <div className="mt-auto self-end">
                    <span className="font-medium text-sm">
                        From{' '}
                        <span className="text-primary text-lg font-semibold">
                            ₦
                            {numberFormat(amount)}
                        </span>
                        /night
                    </span>
                </div>
            </div>
        </div>
    )
}; export default HotelCard