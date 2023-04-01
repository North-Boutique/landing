import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';
import ContactForm from '@/components/forms/ContactForm';
import Navbar from '@/components/navbar/Navbar';
import { Heading, Button, Link } from '@chakra-ui/react';
import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.baseContainer}>
      <div className={styles.homeContent}>
        <Navbar />
        <div className={styles.headerContainer}>
          <div className={styles.headerContainerInnerCTA}>
            <Heading size="lg">
              Exceptional UI/UX Design for the Modern Digital Landscape
            </Heading>
            <Button
              className={styles.contactUsButtonHome}
              as={Link}
              href="#contactForm"
              style={{
                justifySelf: 'center',
                textDecoration: 'none',
              }}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.homeDetailsContainer}>
        <div className={styles.homeDetailsContainerContent}>
          <Heading size="md">
            Craft exceptional user experiences with our boutique dev studio! We
            specialize in stunning UI design with seamless UX, proudly built in
            Canada. Contact us to discuss your project requirements and create
            something truly exceptional!
          </Heading>
        </div>
      </div>
      <div className={styles.contactContainer} id="contactForm">
        <ContactForm />
      </div>
      <div className={styles.bottomNavigationContainer}>
        <BottomNavigation />
      </div>
    </div>
  );
}

export default Home;

// Our team of experts specializes in helping
//           small and medium-sized businesses develop and implement cutting-edge
//           technology solutions that will enhance their operations, improve their
//           bottom line, and position them for long-term success. At North
//           Boutique, we understand that every business is unique, and that's why
//           we take a personalized approach to every project we undertake. Whether
//           you need assistance with IT infrastructure, software development, or
//           business strategy and planning, our team of experienced consultants
//           will work closely with you to develop customized solutions that meet
//           your specific needs and goals. With years of experience in the
//           industry, we have helped numerous businesses across a wide range of
//           industries achieve their objectives and stay ahead of the competition.
//           Our commitment to quality, attention to detail, and customer
//           satisfaction is unmatched, and we are confident that we can help take
//           your business to the next level. So if you're looking for a reliable,
//           professional, and innovative IT and business consulting company, look
//           no further than North Boutique. Contact us today to learn more about
//           how we can help you achieve your business goals and grow your bottom
//           line.

// {/* Looking for a development partner that can bring your vision to life
//             with stunning design and seamless user experience? Look no further
//             than our boutique dev studio! We specialize in crafting beautiful
//             and eye-catching UIs that engage and delight users, and we are proud
//             to be based in Canada. As a company, we bring a level of
//             professionalism and attention to detail that is unmatched. So why
//             settle for a run-of-the-mill development team when you can partner
//             with us to create something truly exceptional? Contact us today to
//             get started! */}
