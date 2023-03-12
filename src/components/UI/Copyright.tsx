import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cwk from '@/assets/img/src-code-cwk.png';

const Copyright = () => (
  <p className='flex items-center gap-2'>
    <span>All Rights Reserved </span>
    <Link
      href='https://codewithkoli.com/'
      target='_blank'
      className='flex items-center'
    >
      <Image width={30} height={30} src={cwk} alt='code with Koli logo' />
      <span> CWK </span>
    </Link>
  </p>
);

export default Copyright;
