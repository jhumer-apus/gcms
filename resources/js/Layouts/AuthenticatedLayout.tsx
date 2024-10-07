import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import BreadcrumbsNav from '@/Components/Layouts/BreadcrumbsNav';
import Header from '@/Components/Layouts/Header';
import NavBar from '@/Components/Layouts/NavBar';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <NavBar />
            <div className='w-full'>
                <Header />
                <main className='p-8'>
                    <BreadcrumbsNav />
                    <br></br>
                    {children}
                </main>
            </div>
        </div>
    );
}
