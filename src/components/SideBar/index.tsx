import MyLink from "./MyLink";
import { HomeIcon, CircleStackIcon, IdentificationIcon } from '@heroicons/react/24/outline'

export default function SideBar() {
    return (
        <nav className="bg-gray-50 h-screen border-r border-gray-200">
            <div className="flex gap-2 items-center justify-start py-4 border-b border-gray-200 px-2">
                <img src="./images/logo.png" alt="Logo da nuvem" className="h-6" />
                <h1 className="text-xl font-extrabold">Nuvem</h1>
            </div>
            <ul className="px-2 py-4 flex flex-col">
                <MyLink 
                    Icon={HomeIcon}
                    href="/inicio"
                    text="Início"
                />
                <MyLink 
                    Icon={CircleStackIcon}
                    href="/exportacoes"
                    text="Exportações"
                />
                <MyLink 
                    Icon={IdentificationIcon}
                    href="/contas"
                    text="Contas"
                />
            </ul>
        </nav>
    )
}