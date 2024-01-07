import type { AppProps } from 'next/app';
import Head from 'next/head';
import "../public/globals.css";
import './Training.css'
import '../components/MainNav.css'
import './Contact.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Mavride</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
