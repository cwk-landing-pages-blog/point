'use client';
import { tType } from 'get-dictionary';
import React, { useEffect } from 'react';
import destination from '@/assets/icons/destination.png';
import map from '@/assets/icons/map.png';
import Image from 'next/image';

type Props = {
  t: tType;
};

const Location = ({ t }: Props) => {
  return (
    <section className='w-full flex flex-col gap-4 p-8 max-w-7xl mx-auto '>
      <header className='flex justify-center items-center gap-8'>
        <Image src={destination} width={50} height={50} alt='destination' />
        <h3 className='text-center  text-lg font-semibold'>
          {t['location'].findUs}
        </h3>
        <Image src={map} width={50} height={50} alt='destination' />
      </header>
      <div className='flex justify-center items-center w-full'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796.22298053522!2d20.078867288627798!3d41.10968739020612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135042531d38fab7%3A0x5680a441ba81a59b!2sFood%20Point!5e0!3m2!1sen!2s!4v1678625374781!5m2!1sen!2s'
          width={'100%'}
          style={{ border: 'none' }}
          height='370'
          className='border-0 rounded-md'
        ></iframe>
      </div>
    </section>
  );
};

export { Location };
