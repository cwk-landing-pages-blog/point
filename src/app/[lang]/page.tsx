import Hero from '@/components/Hero';
import { getDictionary } from '../../../get-dictionary';
import { Locale } from '../../../i18n-config';
import LocaleSwitcher from './components/locale-switcher';
import type { Metadata } from 'next';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Menu from '@/components/Menu';
import Events from '@/components/Events';
import TalkToUs from '@/components/TalkToUs.component';
import { Location } from '@/components/Location';
import Contact from '@/components/Contact';

export const metaData: Metadata = {
  title: 'Point Food & Coffee',
  description:
    'Point Food & Coffee fast food restaurant for gyro, kebap, burgers, crepes, pizza and drinks',
  keywords: [
    'food',
    'fast',
    'halal',
    'pizza',
    'gyro',
    'sufllaqe',
    'pica',
    'krepa',
    'gjiro',
    'kebap',
    'kafe',
  ],
  authors: [
    { name: 'Evander Paja', url: 'https://www.facebook.com/vand.paja' },
    { name: 'Sokol Paja', url: 'https://codewithkoli.com/' },
  ],
};

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getDictionary(lang);

  return (
    <div className='flex justify-center items-start flex-col'>
      <Hero t={t} />

      {/* <Menu /> */}
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Contact t={t} />
      {/* <Events /> */}
      {/* <TalkToUs /> */}
      <Location t={t} />
    </div>
  );
}
