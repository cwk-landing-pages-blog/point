import React from 'react';
import { Halal } from '@/components/UI/Halal';
import Copyright from '@/components/UI/Copyright';

const fullYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center w-full p-8 gap-8 items-center'>
      <Halal />
      <Copyright />
      <p className='text-lg'>&copy; {fullYear}</p>
    </footer>
  );
};

export default Footer;
