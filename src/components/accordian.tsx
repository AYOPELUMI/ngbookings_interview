"use client"
import Link from 'next/link';
import { useState } from 'react';

interface AccordionItem {
    title: string;
    links: { link: string, name: string }[];
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    return (
        <div className="w-full max-w-md mx-auto">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title} links={item.links} />
            ))}
        </div>
    );
}

function AccordionItem({ title, links }: AccordionItem) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-3 border-t border-gray-600">
            <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-lg">{title}</span>
                <span className="ml-2 transform transition-transform duration-200 text-sm">
                    {isOpen ? (
                        <span className="text-gray-600 text-lg">−</span> // Minus sign
                    ) : (
                        <span className="text-gray-600 text-lg">+</span> // Plus sign
                    )}
                </span>
            </button>
            <ul
                className={`overflow-hidden transition-all duration-300 ease-in-out mt-2 space-y-1 ${isOpen ? 'max-h-fit' : 'max-h-0'
                    }`}
            >
                {links.map(content => (
                    <li key={content.name}>
                        <Link href={content.link} className='hover:underline'>{content.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}