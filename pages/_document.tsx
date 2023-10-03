import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta name="application-name" content="Pizzeria del parco" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pizzeria del parco" />
        <meta name="description" content="Best Pizzas in Schaerbeek" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />

        {/* < <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/images/apple-touch-icon.png"
        /> */}

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/images/logoSwannOpti.svg"
          color="#15803d"
        />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://pizzerialocale.vercel.app" />
        <meta name="twitter:title" content="Pizzeria del parco" />
        <meta
          name="twitter:description"
          content="Best Pizzeria in Schaerbeek"
        />
        <meta
          name="twitter:image"
          content="https://pizzerialocale.vercel.app/icon-192x192.png"
        />
        <meta name="twitter:creator" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pizzeria del parco" />
        <meta property="og:description" content="Best Pizzeria in Schaerbeek" />
        <meta property="og:site_name" content="Pizzeria del parco" />
        <meta property="og:url" content="https://pizzerialocale.vercel.app" />
        <meta
          property="og:image"
          content="https://pizzerialocale.vercel.app/images/logo.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
