import { Box, Flex, Text, Image, Heading } from '@chakra-ui/react';
import styles from './Navbar.module.css';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <Flex
      className={styles.navbarContainer}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px={20}
      py={5}>
      <Box>
        <div className={styles.brandContainer}>
          <Image mr={3} height="35px" src="/NorthBoutiqueIcon.png" />
          <Text fontWeight={600}>North Boutique</Text>
        </div>
      </Box>
      <Box display={{ base: 'block', md: 'none' }} onClick={() => {}}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
        </svg>
      </Box>
      <Box
        style={{ justifyContent: 'flex-end' }}
        width={'45%'}
        display={{ base: 'none', md: 'flex' }}>
        <Flex align="center" justify="center">
          <Box mr={8}>
            <NextLink href="/">
              <Text>Home</Text>
            </NextLink>
          </Box>
          <Box mr={8}>
            <NextLink href="/about">
              <Text>About</Text>
            </NextLink>
          </Box>
          <Box mr={8}>
            <NextLink href="#contactForm">
              <Text>Contact</Text>
            </NextLink>
          </Box>
          <Box>
            <NextLink href="/faq">
              <Text>FAQ</Text>
            </NextLink>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
