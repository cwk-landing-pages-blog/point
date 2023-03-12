import Hero from '@/components/Hero';
import { getDictionary } from '../../../get-dictionary';
import { Locale } from '../../../i18n-config';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Menu from '@/components/Menu';
import Events from '@/components/Events';
import TalkToUs from '@/components/TalkToUs.component';
import { Location } from '@/components/Location';
import Contact from '@/components/Contact';

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
