import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isHovered: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  to,
  icon,
  label,
  isHovered,
}) => (
  <Link
    to={to}
    className="relative rounded-xl bg-amber-500 p-2 text-white shadow-md">
    {icon}
    <span
      className={`absolute top-1/2 left-16 -translate-y-1/2 font-semibold text-white ${
        isHovered ? 'inline' : 'hidden'
      }`}>
      {label}
    </span>
  </Link>
);

export default NavbarLink;
