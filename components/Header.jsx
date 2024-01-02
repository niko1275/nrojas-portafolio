'use client';
import React, { useState, useEffect } from 'react';

// components

import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    console.log(header)
    // remove event
    return () => window.removeEventListener('scroll', scrollYPos);
  },[]);

  return (
    <header
      className={`${
        header
        ? 'py-4 bg-gray-100 shadow-lg dark:bg-accent'
        : 'py-6 dark:bg-transparent'
    } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#332291]'}`}
  >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            <p className='rounded-full bg-black p-3 font-bold text-white'>NR</p>
          <div className='flex items-center gap-x-6'>
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            {/* mobile nav */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
