import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  children: JSX.Element;
};

const ExternalLink = ({ href, children }: Props) => (
  <Link
    href={href}
    target='_blank'
    rel='noopener'
    className='hover:shadow-orange-200 hover:shadow-sm border-transparent border-1 px-4 py-2 rounded-md'
  >
    {children}
  </Link>
);

export default ExternalLink;
