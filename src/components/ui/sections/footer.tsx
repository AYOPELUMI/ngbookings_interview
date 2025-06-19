import { footerLinks, socials } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
    return (
        <div style={{
            backgroundImage: "url('/images/FooterBG.webp')",
        }} className=" footer-bg px-10 max-sm:px-5 py-10 max-sm:py-5 bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="flex max-md:flex-col md:justify-between lg:gap-5 pb-5">
                <div className="flex flex-col gap-6 items-start pb-5 w-fit min-w-48 lg:min-w-56">
                    <img src="/images/logo.png" alt="Ngbookings.com" className=" w-48 object-cover cursor-pointer" />
                    <div className=" flex gap-5 items-center">
                        {socials.map((social, index) => (
                            <Link href={social.link} key={social.link} target="_blank" rel="noopener noreferrer" className=" cursor-pointer">
                                <img src={social.image} alt="Facebook icon" className={`${index == 0 ? "w-3" : " w-5"}`} />
                            </Link>
                        ))}
                    </div>
                    <div className="text-lg font-semibold mb-2">
                        <h3>Get Mobile App</h3>
                        <div className=" flex max-md:flex-row flex-col gap-5 pt-3">
                            <img src="/images/GooglePlay.webp" alt="Google play store image" className=" w-32" />
                            <img src="/images/AppleStore.webp" alt="Apple play store image" className=" w-32" />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex justify-between w-full gap-5">
                    {footerLinks.map((category) => (
                        <div key={category.title}>

                            <h2 className="text-lg font-semibold mb-2">{category.title}</h2>
                            <ul className="space-y-1">
                                {
                                    category.links.map((link) => (

                                        <li key={link.name}>
                                            <Link href={link.link} className='hover:underline'>{link.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" text-gray-800 text-center text-sm">
                "Copyrights. All rights reserved "
                "2025"
                " Ngbookings.com Limited"
            </div>
        </div>
    )
}

export default Footer