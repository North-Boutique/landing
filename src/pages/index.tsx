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
      </Head>
      <main className={styles.main}>
        <HomePage />
      </main>
    </>
  );
}
