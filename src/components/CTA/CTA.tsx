import Link from 'next/link';
import React from 'react';

type Props = {
  title?: string;
  link?: string;
};

const CTA = ({ title, link = 'tel:+355693931019' }: Props) => {
  return (
    <>
      <Link
        href={link}
        className='rounded-md ring-2 ring-green-600 shadow-md shadow-green-300 bg-gradient-to-r from-pink-500 to-yellow-500 px-4 py-2 text-xl font-bold text-slate-100'
      >
        {title}
      </Link>
    </>
  );
};

export { CTA };
