'use client';

import React from 'react';
import '@/styles/components/hero.scss';
import { tType } from 'get-dictionary';
import Delivery from './Delivery';
import SpongeBob from './UI/SpongeBob';

type Props = {
  t: tType;
};

const Hero = ({ t }: Props) => {
  return (
    <div className='h-screen w-full relative z-10 p-8 flex flex-col sm:flex-col md:flex-row items-start'>
      <div className='heroLeft flex flex-col gap-2 sm:w-full md:w-1/2'>
        <h1 className='mb-2 pacifico text-3xl'>{t['hero'].slogan}</h1>

        <p className='my-4 text-lg width-[360px]'>
          {t['hero'].experience} <span className='typed text-orange-500' />
          <br />
          {t['hero'].inElbasan}{' '}
        </p>

        <h2 className='font-semibold m-2 italic'>{t['hero'].isOrder}</h2>

        <Delivery />
      </div>

      <div className='heroRight relative w-full  sm:w-full md:w-1/2 flex justify-center items-center'>
        <SpongeBob t={t} />
        <div className='css-blurry-gradient-bob' />
      </div>

      {/* blured backgrounds */}

      <div className='css-blurry-gradient' />
      <div className='css-blurry-gradient-orange' />
    </div>
  );
};

export default Hero;
