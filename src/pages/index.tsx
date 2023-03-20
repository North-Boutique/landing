import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import 'tachyons';
import { Heading, Image } from 'rebass';
import {
  Hero,
  Flex,
  CallToAction,
  ScrollDownIndicator,
} from 'react-landing-page';

export default function Home() {
  return (
    <>
      <Head>
        <title>North Boutique</title>
        <meta name="description" content="North Boutique" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NorthBoutiqueIcon.png" />
        <link
          href="//db.onlinewebfonts.com/c/c534c6eac801ed576ab62ed4a347dfa5?family=TinseltownNFW01-Regular"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <main className={styles.main}>
        <Hero
          color="white"
          backgroundImage="https://image.freepik.com/free-vector/colorful-memphis-design-background-vector_53876-81744.jpg"
          bg="black"
          bgOpacity={0.1}>
          <Image src="/north-boutique-logo.png" />
          <Heading
            fontFamily={'TinseltownNFW01-Regular'}
            fontSize={150}
            color={'#EEF4FB'}>
            North Boutique
          </Heading>
          <Flex mt={3}>
            <div>
              Welcome to North Boutique, your premier IT and business consulting
              company that is dedicated to providing top-notch services to help
              your business grow and thrive. Our team of experts specializes in
              helping small and medium-sized businesses develop and implement
              cutting-edge technology solutions that will enhance their
              operations, improve their bottom line, and position them for
              long-term success. At North Boutique, we understand that every
              business is unique, and that's why we take a personalized approach
              to every project we undertake. Whether you need assistance with IT
              infrastructure, software development, or business strategy and
              planning, our team of experienced consultants will work closely
              with you to develop customized solutions that meet your specific
              needs and goals. With years of experience in the industry, we have
              helped numerous businesses across a wide range of industries
              achieve their objectives and stay ahead of the competition. Our
              commitment to quality, attention to detail, and customer
              satisfaction is unmatched, and we are confident that we can help
              take your business to the next level. So if you're looking for a
              reliable, professional, and innovative IT and business consulting
              company, look no further than North Boutique. Contact us today to
              learn more about how we can help you achieve your business goals
              and grow your bottom line.
            </div>
            <CallToAction bg="grey" mr={3}>
              Enter The Mailing List
            </CallToAction>
          </Flex>
          <ScrollDownIndicator />
        </Hero>
      </main>
    </>
  );
}
