import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Fragment } from 'react/jsx-runtime';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <Fragment>
            <Head title="Welcome" />
            
            <main className='text-black'>
                <nav className="flex w-fit text-2xl gap-4 m-auto mt-32">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="text-black"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="text-black"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </main>
        </ Fragment>
    );
}
