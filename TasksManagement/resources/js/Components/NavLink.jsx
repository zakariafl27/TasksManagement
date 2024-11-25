import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none' +
                (active
                    ? 'border-indigo-400 text-white font-semibold focus:border-red-950'
                    : 'border-transparent text-white hover:border-red-950 hover:text-gray-700 focus:border-red-950 focus:text-gray-700') +
                className
            }
        >
            {children}
        </Link>
    );
}
