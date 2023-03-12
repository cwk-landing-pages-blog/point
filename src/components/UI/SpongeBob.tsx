import Image, { StaticImageData } from 'next/image';
import React, { useState, useEffect } from 'react';
import spongeBob from '@/assets/img/point-sponge-b0b.png';
import { tType } from 'get-dictionary';
import drink from '@/assets/icons/soft-drink.png';
import beverage from '@/assets/icons/beverage.png';
import cafe from '@/assets/icons/cafe.png';
import crepe from '@/assets/icons/crepe.png';
import crepes from '@/assets/icons/crepes.png';
import fanta from '@/assets/icons/fanta.png';
import fPizza from '@/assets/icons/fulll-pizza.png';
import hamburger from '@/assets/icons/hamburger.png';
import juice from '@/assets/icons/juice.png';
import milkshake from '@/assets/icons/milkshake.png';
import pite from '@/assets/icons/pite.png';
import pizza from '@/assets/icons/pizza.png';
import sCrepes from '@/assets/icons/salty-ccrepes.png';
import shawarma from '@/assets/icons/shawarma.png';
import wrap from '@/assets/icons/wrap.png';

type Props = {
  t: tType;
};

type Icon = {
  key: string;
  src: StaticImageData;
  x: string;
  y: string;
};

const icons: Icon[] = [
  {
    key: 'icon-soft-wrap',
    src: wrap,
    x: '-5%',
    y: '69%',
  },
  {
    key: 'icon-soft-drink',
    src: drink,
    x: '0%',
    y: '77%',
  },
  {
    key: 'icon-soft-beverage',
    src: beverage,
    x: '7%',
    y: '69%',
  },
  {
    key: 'icon-soft-cafe',
    src: cafe,
    x: '14%',
    y: '77%',
  },
  {
    key: 'icon-soft-crepe',
    src: crepe,
    x: '21%',
    y: '69%',
  },
  {
    key: 'icon-soft-crepes',
    src: crepes,
    x: '28%',
    y: '77%',
  },
  {
    key: 'icon-soft-fanta',
    src: fanta,
    x: '35%',
    y: '69%',
  },
  {
    key: 'icon-soft-fPizza',
    src: fPizza,
    x: '42%',
    y: '77%',
  },
  {
    key: 'icon-soft-hamburger',
    src: hamburger,
    x: '49%',
    y: '69%',
  },
  {
    key: 'icon-soft-juice',
    src: juice,
    x: '56%',
    y: '77%',
  },
  {
    key: 'icon-soft-milkshake',
    src: milkshake,
    x: '63%',
    y: '69%',
  },
  {
    key: 'icon-soft-pite',
    src: pite,
    x: '70%',
    y: '77%',
  },
  {
    key: 'icon-soft-pizza',
    src: pizza,
    x: '77%',
    y: '69%',
  },
  {
    key: 'icon-soft-sCrepes',
    src: sCrepes,
    x: '84%',
    y: '77%',
  },
  {
    key: 'icon-soft-shawarma',
    src: shawarma,
    x: '91%',
    y: '69%',
  },
];
const SpongeBob = ({ t }: Props) => {
  return (
    <div className='w-full h-[500px] flex justify-center items-center flex-col z-10'>
      <h1 className='font-sans text-sm sm:text-sm md:text-xl font-semibold mb-8 right-auto z-10'>
        {t['hero'].sloganPointService}
      </h1>

      <Image
        src={spongeBob}
        width={360}
        height={400}
        alt='point food expert worker'
        className='rounded-t-3xl rounded-b-sm '
      />

      {/* render floating icons */}

      {icons.map((icon) => (
        <Image
          key={icon.key}
          src={icon.src}
          width={50}
          height={50}
          alt='fast food icon'
          style={{
            position: 'absolute',
            top: icon.y,
            left: icon.x,
          }}
          className='animate-wiggle'
        />
      ))}
    </div>
  );
};

export default SpongeBob;
