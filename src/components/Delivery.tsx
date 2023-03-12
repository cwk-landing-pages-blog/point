import React from 'react';
import delivery from '@/assets/img/delivery-destination.png';
import Image from 'next/image';
import call from '@/assets/icons/call-us.png';
import { pointFood } from '@/constants/pointFood';
import Link from 'next/link';

type Props = {};

const { tel } = pointFood;

const Delivery = (props: Props) => {
  return (
    <div className='flex flex-col relative justify-center items-center gap-4 max-w-[360px] z-20'>
      <Image alt='delivery guy' src={delivery} width={300} height={270} />

      <Link href={`tel:${tel}`} className='absolute top-[10px]'>
        <div className='flex justify-center items-center gap-4 z-20'>
          <Image
            src={call}
            width={50}
            height={50}
            alt='call now to deliver icon'
            className='animate-bounce'
          />

          <h5 className='uppercase p-2 hover:cursor-pointer'>Call Now!</h5>
        </div>
      </Link>

      <span
        className='absolute rounded-lg text-lg font-semibold bottom-[20px] right-0 bg-orange-500 text-slate-300 px-2 py-1'
        color='#EA580C'
      >
        Free Delivery
      </span>
    </div>
  );
};

export default Delivery;
