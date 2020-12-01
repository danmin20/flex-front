import React from "react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <body>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
