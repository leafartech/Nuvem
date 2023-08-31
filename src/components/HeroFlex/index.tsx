import { ReactNode } from "react"

interface HeroFlexProps {
    reverse: boolean
    children: ReactNode
    imgPath: string
    mainTitle: string
}

export default function HeroFlex({ children, imgPath, reverse, mainTitle}: HeroFlexProps) {

    return (
        <div className="flex flex-col sm:grid sm:grid-cols-2 items-center">
            <div>
                <h3 className="font-semibold text-4xl mb-6">{mainTitle}</h3>
                <div className="mt-3">
                    {children}
                </div>
            </div>
            <div className={`${reverse && 'sm:order-first'} flex items-center justify-center`}>
                <img src={`./images/${imgPath}.png`} alt={imgPath} className="max-w-[440px]" />
            </div>
        </div>
    )
}