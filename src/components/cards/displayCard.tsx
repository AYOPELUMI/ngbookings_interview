import React from 'react'

const DisplayCard = ({ image, title }: { image: string, title: string }) => {
    return (
        <div className=" cursor-pointer w-[200px] h-[180px] max-[450px]:w-full hover:scale-105 transition-all duration-300">
            <img src={image} alt="Hotels" className=" w-full h-full object-cover rounded-lg" />
            <p className=" font-medium text-lg">{title}</p>
        </div>
    )
}

export default DisplayCard