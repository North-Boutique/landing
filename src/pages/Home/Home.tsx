import { Heading, Image } from '@chakra-ui/react';
import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.baseContainer}>
      <div className={styles.homeContent}>
        <div className={styles.brandContainer}>
          <Image src="/north-boutique-logo.png" />
          <Heading size={'lg'}>North Boutique</Heading>
        </div>
        Welcome to North Boutique, your premier IT and business consulting
        company that is dedicated to providing top-notch services to help your
        business grow and thrive. Our team of experts specializes in helping
        small and medium-sized businesses develop and implement cutting-edge
        technology solutions that will enhance their operations, improve their
        bottom line, and position them for long-term success. At North Boutique,
        we understand that every business is unique, and that's why we take a
        personalized approach to every project we undertake. Whether you need
        assistance with IT infrastructure, software development, or business
        strategy and planning, our team of experienced consultants will work
        closely with you to develop customized solutions that meet your specific
        needs and goals. With years of experience in the industry, we have
        helped numerous businesses across a wide range of industries achieve
        their objectives and stay ahead of the competition. Our commitment to
        quality, attention to detail, and customer satisfaction is unmatched,
        and we are confident that we can help take your business to the next
        level. So if you're looking for a reliable, professional, and innovative
        IT and business consulting company, look no further than North Boutique.
        Contact us today to learn more about how we can help you achieve your
        business goals and grow your bottom line.
      </div>
    </div>
  );
}

export default Home;
