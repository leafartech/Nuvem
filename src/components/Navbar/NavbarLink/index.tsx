'use client'

import { ReactNode } from "react"
import { useRouter } from 'next/navigation'
import Link from "next/link"

interface NavbarLinkProps {
    children: ReactNode
    href: string
}

export default function NavbarLink({ children, href }: NavbarLinkProps) {
    const router = useRouter()

    return (
        <li>
            <Link href={href} className={`text-medium text-base `}>{children}</Link>
        </li>
    )
}