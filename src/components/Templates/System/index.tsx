import { ReactNode } from "react"

interface SystemTemplateProps {
    children: ReactNode
}

export default function SystemTemplate({ children }: SystemTemplateProps) {
    return (
        <div className="grid grid-cols-my">
            {children}
        </div>
    )
}