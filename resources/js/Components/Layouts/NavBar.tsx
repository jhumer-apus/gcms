import NavLink from "../NavLink";

export default function NavBar() {

    const navLinks = [
        {
            id: "dashboard",
            href: "/dashboard",
            label: "Dashboard"
        },
        {
            id: "profiling",
            href: "/profiling",
            label: "Profiling"
        },
        {
            id: "counseling-services",
            href: "/counseling-services",
            label: "Counseling Services"
        },
        {
            id: "visit-logs",
            href: "/visit-logs",
            label: "Visit Logs"
        },
        {
            id: "documents",
            href: "/documents",
            label: "Documents"
        },
        {
            id: "reports",
            href: "/reports",
            label: "Reports"
        },
    ]

    console.log(route().current())
    return (
        <aside>
            <nav>
                <ul>
                    {navLinks.map(link => (
                        <li>
                            <NavLink href={link.href} active={route().current(link.id)}>{link.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}