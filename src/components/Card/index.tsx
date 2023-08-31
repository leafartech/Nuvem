import { ReactNode } from "react"

interface CardProps {
    mainTitle: string
    colorTitle: 'text-green-500' | 'text-my'
    children: ReactNode
    imagePath: string
}

export default function Card({ imagePath, mainTitle, children, colorTitle}: CardProps) {
    return (
        <div className="rounded-[48px] bg-white flex flex-col justify-center items-start gap-2 px-12 h-96 w-96">
            <img src={`./images/${imagePath}.png`} alt={imagePath} className="h-12 mb-4" />
            <div>
                <h3 className={`text-2xl font-extrabold ${colorTitle}`}>{mainTitle}</h3>
                <p className="text-gray-600 md:text-lg">{children}</p>
            </div>
        </div>
    )
}