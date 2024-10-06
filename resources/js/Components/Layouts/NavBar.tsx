import { adminNavLinks } from "@/Data/NavLinkData";
import NavLink from "../NavLink";
import ResponsiveNavLink from "../ResponsiveNavLink";

export default function NavBar() {

    return (
        <aside className="bg-indigo-600">
            <header className="border-b-2 border-white h-20">
                <h1 className="text-3xl text-white text-center">GCMS</h1>
            </header>
            <nav className="mt-4">
                <ul>
                    {adminNavLinks.map((link:any) => (
                        <li>
                            <ResponsiveNavLink href={link.href} active={route().current(link.id)}>{link.label}</ResponsiveNavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}