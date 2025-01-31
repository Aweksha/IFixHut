import { Link } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    clickValue?:() => void;
}

    export default function NavLink({ to, children, className, clickValue }: NavLinkProps) {
    return (
        <Link
        to={to}
        className={`hover:bg-slate-700 px-3 py-2 rounded-md transition-colors duration-200 ${className}`}
        onClick={() => `${clickValue}`}
        >
        {children}
        </Link>
    );
}