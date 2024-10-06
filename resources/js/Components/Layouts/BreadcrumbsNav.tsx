import { Link, usePage } from "@inertiajs/react";
import { Breadcrumbs } from "@mui/material";

export default function BreadcrumbsNav() {

    const { url } = usePage()

    const pathnames = url.split('/')
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                {pathnames.map((name, index) => {
                    const path = pathnames.slice(0, index + 1).join('/')
                    return (
                        <Link href={path}>{name}</Link>
                    )
                })}
            </Breadcrumbs>
        </div>
    )
}