import { i18n } from '../../../i18n-config';
import Footer from './components/Footer';
import Header from './components/Header';
import '@/styles/global.scss';
import 'antd/dist/reset.css';
import { pointFood } from '@/constants/pointFood';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const {
  keywords,
  tel,
  title,
  addressUrl,
  website,
  copyright,
  description,
  imageUrl,
} = pointFood;

const metaDatas: any = {
  generator: 'NextJS',
  robots: 'all',
  ogType: 'website',
  twitterCard: 'summary',
  siteName: 'Point Food',
};
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
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
        {/* <link rel='canonical' href={website} /> */}
        <link rel='author' href='humans.txt' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='author' content='CWK Team' />
        <meta name='keyword' content={keywords.join(', ')} />
        <meta name='copyright' content={copyright} />
        <meta name='locale' content={params.lang} />
        <meta name='generator' content={metaDatas.generator} />
        {/* <meta name='base_url' content={process.env.websiteUrl} /> */}
        <meta name='robots' content={metaDatas.robots} />
        <meta name='language' content={params.lang} />
        <meta name='twitter:widgets:csp' content='on' />
        <meta name='twitter:card' content={metaDatas.twitterCard} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={imageUrl} />
        {/* <meta name='twitter:url' content={website} /> */}
        <meta property='og:type' content={metaDatas.ogType} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={imageUrl} />
        {/* <meta property='og:url' content={website} /> */}
        <meta property='og:site_name' content={metaDatas.siteName} />
        <meta property='og:locale' content={params.lang} />

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
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
