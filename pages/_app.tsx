import type { AppProps } from 'next/app';
import Head from 'next/head';
import "../public/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Marvride</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
