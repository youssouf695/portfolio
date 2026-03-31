import Header from '../components/Header';
import Footer from '../components/Footer';
import JsonLd from '@/components/JsonLd';
import Head from 'next/head';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio de Njupuen Youssoufa - Développeur Full-Stack & UI/UX Designer freelance. React, Next.js, Flutter, Figma. Basé à Ngaoundéré, Cameroun." />
        <meta name="keywords" content="Njupuen Youssoufa, Youssoufa Njupuen, développeur web Ngaoundéré, freelance React Cameroun, UI/UX designer, Next.js développeur" />
        <meta name="author" content="Njupuen Youssoufa" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://njupuen.vercel.app/" />
        <meta property="og:title" content="Njupuen Youssoufa | Développeur Full-Stack & UI/UX Designer" />
        <meta property="og:description" content="Portfolio de Njupuen Youssoufa - Création de sites web, applications mobiles et designs modernes." />
        <meta property="og:image" content="https://njupuen.vercel.app/images/avatar_profil.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Njupuen Youssoufa | Développeur Full-Stack & UI/UX Designer" />
        <meta name="twitter:description" content="Portfolio de Njupuen Youssoufa - Développeur freelance" />
        
        <title>Njupuen Youssoufa | Développeur Full-Stack & UI/UX Designer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://njupuen.vercel.app/" />
        <JsonLd />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;