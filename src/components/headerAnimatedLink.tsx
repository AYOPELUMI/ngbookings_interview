import Link from 'next/link'
import React from 'react'

const HeaderAnimatedLink = ({ title, href }: { title: string, href: string }) => {
    return (
        <Link
            href={href}
            className="relative inline-block cursor-pointer whitespace-nowrap text-sm group hover:bg-primary/9 px-2 py-1.5 font-medium"
        >
            {title}
            <span className="absolute left-1/2 right-1/2 bottom-0 h-[1px] bg-primary transition-all duration-300 ease-out group-hover:left-0 group-hover:right-0" />
        </Link>
    )
}

export default HeaderAnimatedLink