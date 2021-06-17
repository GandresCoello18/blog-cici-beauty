/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/main.css';
import 'react-multi-carousel/lib/styles.css';
import 'video.js/dist/video-js.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Noticias - Cici beauty place</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Arvo:ital@1&display=swap"
        rel="stylesheet"
      />
      <link
        rel="icon"
        sizes="192x192"
        href="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
      />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <meta name="robots" content="index" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
