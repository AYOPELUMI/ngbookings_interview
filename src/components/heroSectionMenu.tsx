import { X } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const HeroSectionMenu = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed w-full h-screen origin-top-right rounded-md bg-white shadow-lg z-50 md:hidden">
            <div className=" w-full flex justify-end px-8 py-5">
                <Button variant={"ghost"} onClick={() => onClose()}>
                    <X className='size-6' />
                </Button>
            </div>
            <div className="flex flex-col gap-2 pt-2 pb-8 px-8">
                <h3 className="font-bold text-lg px-2 py-1">More</h3>

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-100 rounded">
                        <img src="data:image/png;base64,..." alt="More icon" className="w-5 h-5" />
                        <p>Loyalty Program</p>
                    </div>
                    <div className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-100 rounded">
                        <img src="data:image/png;base64,..." alt="More icon" className="w-5 h-5" />
                        <p>List Properties</p>
                    </div>
                    <div className="w-full h-px bg-gray-200 my-1"></div>
                </div>

                <div className="flex flex-col gap-1">
                    <h4 className="font-semibold px-2 py-1">Help and support</h4>
                    <div className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-100 rounded">
                        <img src="data:image/png;base64,..." alt="More icon" className="w-5 h-5" />
                        <p>Contact Customer Service</p>
                    </div>
                    <div className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-100 rounded">
                        <img src="data:image/png;base64,..." alt="More icon" className="w-5 h-5" />
                        <p>Partner Dispute</p>
                    </div>
                    <div className="w-full h-px bg-gray-200 my-1"></div>
                </div>

                <div className="flex flex-col gap-1">
                    <h4 className="font-semibold px-2 py-1">Settings</h4>
                    <div className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-100 rounded">
                        <img src="data:image/png;base64,..." alt="More icon" className="w-5 h-5" />
                        <p>About Ngbookings.com</p>
                    </div>
                    <div className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-100 rounded">
                        <img src="data:image/png;base64,..." alt="More icon" className="w-5 h-5" />
                        <p>Privacy & Cookies</p>
                    </div>
                    <div className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-100 rounded">
                        <img src="data:image/png;base64,..." alt="More icon" className="w-5 h-5" />
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-100 rounded">
                        <img src="data:image/png;base64,..." alt="More icon" className="w-5 h-5" />
                        <p>Legal</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionMenu