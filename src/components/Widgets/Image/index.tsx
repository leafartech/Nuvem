import { ReactNode } from "react"

type ImageType = {
    imagePath: string
    children: ReactNode
}

export function Image({ imagePath, children }: ImageType) {
    return (
        <div className="relative flex items-center justify-center">
            <img src={`./images/illustrations/${imagePath}.png`} alt="Ilustração" className="h-56 z-10" />
            {children}
        </div>
    )
}