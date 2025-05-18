import { useState, useEffect } from 'react';
import NavbarLink from './NavbarLink.tsx';
import icons from '../../../assets/icons/navbar.tsx';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isDesktop) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setIsHovered(false);
    }
  };

  return (
    <section
      className={`flex items-center transition-all duration-300 ${
        isHovered ? 'w-48 bg-neutral-600' : ''
      }`}
      onMouseLeave={handleMouseLeave}>
      <nav
        className="relative flex w-full items-center justify-evenly rounded-t-2xl bg-amber-300 p-3 md:h-96 md:w-auto md:flex-col md:rounded-e-4xl md:rounded-tl-none"
        onMouseEnter={handleMouseEnter}>
        {/* Triángulos decorativos */}
        <div className="absolute -top-[7.5px] -left-1.5 hidden h-6 w-[54px] rotate-[21deg] bg-amber-300 md:block"></div>
        <div className="absolute -bottom-[7.5px] -left-1.5 hidden h-6 w-[54px] -rotate-[21deg] bg-amber-300 md:block"></div>
        <NavbarLink
          to="/app"
          icon={icons.home}
          label="Inicio"
          isHovered={isHovered}
        />
        <NavbarLink
          to="/food"
          icon={icons.food}
          label="Comidas"
          isHovered={isHovered}
        />
        <NavbarLink
          to="/drink"
          icon={icons.drink}
          label="Bebidas"
          isHovered={isHovered}
        />
        <NavbarLink
          to="/combo"
          icon={icons.combo}
          label="Combos"
          isHovered={isHovered}
        />
      </nav>
    </section>
  );
};

export default Navbar;
