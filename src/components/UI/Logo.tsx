import React from 'react';
import point from '@/assets/img/point.png';
import Image from 'next/image';
import '@/styles/components/logo.scss';

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className='relative flex gap-2 items-center '>
      <Image alt='Point Food Logo' width={70} height={70} src={point} />
      <div className='flex flex-col gap-2 justify-start'>
        <span className='capitalize title'>Point Food</span>
        <span className='capitalize slogan'>
          Halal fast food, made just for you
        </span>
      </div>

      <div className='css-blurry-gradient-logo' />
    </div>
  );
};

export default Logo;
