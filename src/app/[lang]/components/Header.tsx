'use client';
import React from 'react';
import { CTA } from '@/components/CTA';
import Logo from '@/components/UI/Logo';
import Link from 'next/link';
import '@/styles/custom.scss';
import { pointFood } from '@/constants/pointFood';

type Props = {
  lang: string;
};
const { addressUrl } = pointFood;

const Header = ({ lang }: Props) => (
  <header className='bg-transparent h-[118px] shadow-sm shadow-orange-400/10 w-full px-8'>
    <nav className='flex md:justify-between justify-center items-center px-0 py-4'>
      <Link href={addressUrl} title='view on maps' target='_blank'>
        <Logo />
      </Link>

      {/* TODO menu items with ant and responsive */}
      <ul className='links justify-between items-center gap-4 text-lg font-semibold'>
        <Link href='/'>Fast Food</Link>
        <Link href={`/${lang}/menu`}>Menu</Link>
        <Link href={`/${lang}/events`}>Events</Link>
        <Link href={`/${lang}/talk-to-us`}>Talk To Us</Link>
        <Link href='#services'>More</Link>
      </ul>

      <div className='hidden md:flex'>
        <CTA title='Order Now' link='tel:+355693931019' />
      </div>
    </nav>
  </header>
);

export default Header;
