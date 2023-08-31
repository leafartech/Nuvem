'use client'

import Link from "next/link"
import { ElementType } from "react"
import { usePathname } from 'next/navigation'

interface MyLinkProps {
    href: string
    text: string
    Icon: ElementType
}

export default function MyLink({ Icon, href, text }: MyLinkProps) {
    const router = usePathname()

    return (
        <li className={`rounded-md p-2 ${router === href ? 'text-blue-700 bg-blue-100 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}>
            <Link href={href} className={`flex items-center gap-2`}>
                <Icon className="h-5 w-5" />
                <span>{text}</span>
            </Link>
        </li>
    )
}