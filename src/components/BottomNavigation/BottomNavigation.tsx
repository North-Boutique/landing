import { Box, Flex, Icon, Image, Link, Text } from '@chakra-ui/react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaCanadianMapleLeaf, FaHeart } from 'react-icons/fa';
import styles from './BottomNavigation.module.css';

const BottomNavigation = () => {
  return (
    <Box className={styles.bottomNavigation} py={4} px={6}>
      <hr />
      <Flex mt={'1rem'} alignItems="center" justifyContent="space-between">
        <Box display={'flex'}>
          <Link href="/">
            <Image
              src="/NorthBoutiqueIcon.png"
              alt="Logo"
              w="30px"
              h="30px"
              mr={2}
            />
          </Link>
          <Text alignSelf={'center'} fontSize={'sm'} m={0} p={0}>
            Made With <Icon as={FaHeart} ml={1} mr={1} /> in{' '}
            <Icon as={FaCanadianMapleLeaf} ml={1} />
          </Text>
        </Box>
        <Flex alignItems="center">
          <Box>
            <Link
              href="mailto:northboutiquedesign@gmail.com"
              textDecoration="none">
              <Flex alignItems="center">
                <Icon as={FiMail} mr={2} />
                <Text fontSize="sm">northboutiquedesign@gmail.com</Text>
              </Flex>
            </Link>
          </Box>
        </Flex>
      </Flex>
      <Box mt={4} pt={4}>
        <Text fontSize="sm">© 2023 North Boutique. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default BottomNavigation;
