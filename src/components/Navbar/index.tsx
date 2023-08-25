import Link from "next/link";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 flex justify-start items-center gap-8 px-4 py-4">
            <div className="">
                <img src="./images/logo.png" alt="" className="w-16" />
            </div>
            <ul className="flex gap-4 items-center">
                <NavbarLink href="/">Início</NavbarLink>
                <NavbarLink href="/contato">Contato</NavbarLink>
            </ul>
            <Link className="absolute right-4 grad-main py-2 px-4 rounded-md font-medium text-white" href="/conta/criar">Criar conta</Link>
        </nav>
    )
}