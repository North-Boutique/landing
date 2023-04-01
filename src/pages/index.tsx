import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import HomePage from './Home/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>North Boutique</title>
        <meta name="description" content="North Boutique" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NorthBoutiqueIcon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap"
          rel="stylesheet"></link>
      </Head>
      <main className={styles.main}>
        <HomePage />
      </main>
    </>
  );
}
