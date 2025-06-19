import React from 'react'
import { Button } from '../button'
import Link from 'next/link'

const AuthHeader = ({
    name, link
}: { name: string, link: string }) => {
    return (
        <div className=" mb-3 flex gap-10 max-sm:gap-5 items-center">
            <Button className='rounded-[30px] !h-fit !px-[22px] !py-2.5 flex items-center justify-center'>
                <Link href={link}>
                    {name}
                </Link>
            </Button>
            <Button className='rounded-[30px] !h-fit !px-[22px] !py-2.5 flex items-center justify-center bg-white text-primary border-primary border'>Home</Button>
        </div>
    )
}

export default AuthHeader