import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
          rel="stylesheet"
          type="text/css"
        ></link>
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
