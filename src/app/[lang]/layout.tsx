import { i18n } from '../../../i18n-config';
import Footer from './components/Footer';
import Header from './components/Header';
import '@/styles/global.scss';
import 'antd/dist/reset.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <title>Point Food</title>
      </head>
      <body>
        <main className='bg-[#07051a] text-[#dedaa4] max-w-[2600px]'>
          <Header lang={params.lang} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
