import { pointFood } from '@/constants/pointFood';
import React from 'react';
import ExternalLink from './UI/ExternalLink';
import Image from 'next/image';
import { tType } from 'get-dictionary';
import contact from '@/assets/img/contact-world.png';

type Props = {
  t: tType;
};
const { socials, address } = pointFood;

const Contact = ({ t }: Props) => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col sm:flex-col md:flex-row w-full sm:items-start md:items-center p-8'>
      <div className='flex flex-col  justify-start w-full gap-8 items-start'>
        <ExternalLink href={socials.maps.link}>
          <div className='flex gap-4 items-center'>
            <Image
              src={socials.maps.icon}
              alt={address.street}
              width={50}
              height={50}
            />
            <h2>
              {address.street}, {address.city}, {address.country}{' '}
            </h2>
          </div>
        </ExternalLink>
        <ExternalLink
          href={`
        mailto:${socials.email.link}
        ?subject=${t['contact'].emailSubject}
        &body=${t['contact'].emailBody}
        `}
        >
          <div className='flex gap-4 items-center'>
            <Image
              src={socials.email.icon}
              alt={'email point food delivery service'}
              width={50}
              height={50}
            />
            <h2>Email: {socials.email.link}</h2>
          </div>
        </ExternalLink>

        <ExternalLink href={socials.tel.link}>
          <div className='flex gap-4 items-center'>
            <Image
              src={socials.tel.icon}
              alt={'call point food delivery service'}
              width={50}
              height={50}
            />
            <h2>Call us: {socials.tel.name}</h2>
          </div>
        </ExternalLink>
      </div>

      <div className='relative'>
        <Image
          src={contact}
          width={360}
          height={300}
          alt='contact Point food'
        />
        <div className='css-blurry-gradient-contact' />
      </div>
    </div>
  );
};

export default Contact;
