import Link from 'next/link'
import React from 'react'

const AnimatedLink = ({ title, href }: { title: string, href: string }) => {
    return (
        <span className="relative cursor-pointer whitespace-nowrap text-[20px] before:content-[''] before:absolute before:-z-10 before:left-1/2 before:right-1/2 
    before:bottom-0 before:h-0.5 before:bg-primary
    before:transition-[left,right] before:duration-300 before:ease-out
    hover:[&>a]:text-[var(--font-hover)]
    hover:before:left-0 hover:before:right-0 hover:before:bg-black">
            <Link href={href}>F{title}</Link>
        </span>
    )
}

export default AnimatedLink