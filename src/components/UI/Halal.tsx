import React from 'react';
import halal from '@/assets/img/halal.png';
import Image from 'next/image';

type Props = {};

const Halal = (props: Props) => {
  return (
    <div className='flex justify-start gap-2 items-center'>
      <Image width={50} src={halal} alt='Halal Place to eat logo' />
      <p>Point food & coffee is a Halal place to eat and drink.</p>
    </div>
  );
};

export { Halal };
