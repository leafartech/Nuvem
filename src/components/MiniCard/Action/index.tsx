import Link from "next/link";
import { ElementType } from "react";

interface ActionCardProps {
    href: string
    Icon: ElementType
    text: string
}

export default function ActionCard({ Icon, href, text}: ActionCardProps) {
    return (
        <Link href={href} className="flex gap-2 items-center py-2 px-4 transition hover:-translate-y-1 text-gray-600 border border-gray-200 shadow rounded-md">
            <Icon className="h-5 w-5" />
            <span>{text}</span>
        </Link>     
    )
}