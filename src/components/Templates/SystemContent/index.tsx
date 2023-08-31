import { ReactNode } from "react"
import { Cog6ToothIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

interface SystemContentProps {
    children: ReactNode
    pageTitle: string
}

export default function SystemContent({ children, pageTitle }: SystemContentProps) {
    return (
        <div className="grid grid-rows-my">
            <div className="flex justify-between items-center px-4 border-b border-b-gray-200">
                <h2 className="font-medium">{pageTitle}</h2>
                <div className="flex gap-3">
                    <button><QuestionMarkCircleIcon className="h-6 w-6 text-gray-600 hover:text-blue-700" /></button>
                    <button><Cog6ToothIcon className="h-6 w-6 text-gray-600 hover:text-blue-700" /></button>
                </div>
            </div>

            <div className="grid grid-cols-my2">
                {children}
            </div>
        </div>
    )
}