import { ReactNode } from "react"

interface TitleProps {
    children: ReactNode
}

export default function Title({ children }: TitleProps) {
    return (
        <div>
            <h3 className="font-medium text-xl">{children}</h3>
        </div>
    )
}