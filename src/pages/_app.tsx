import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/rental-ride-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
