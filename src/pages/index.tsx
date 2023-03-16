import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import "tachyons";
import { Heading } from "rebass";
import {
  Hero,
  Flex,
  CallToAction,
  ScrollDownIndicator
} from "react-landing-page";

const inter = Inter({ subsets: ['latin'] })

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

        <Hero
          color="white"
          backgroundImage="https://image.freepik.com/free-vector/colorful-memphis-design-background-vector_53876-81744.jpg"
          // backgroundImage="https://image.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg"
          bg="black"
          bgOpacity={0.1}
        >
          <Heading fontSize={150}>North Boutique</Heading>
          <Flex mt={3}>
            <CallToAction bg="grey" mr={3}>
              Start Petition
            </CallToAction>
            <CallToAction>Start Campaign</CallToAction>
          </Flex>
          <ScrollDownIndicator />
        </Hero>

      </main>
    </>
  )
}
