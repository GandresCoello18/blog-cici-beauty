import React from 'react';

import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" key="charSet" />
          <link
            rel="icon"
            sizes="192x192"
            href="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
