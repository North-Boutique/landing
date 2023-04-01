import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { FaTools } from 'react-icons/fa';

const UnderConstruction = () => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="#f8f8f8">
      <Box textAlign="center">
        <Icon as={FaTools} w={12} h={12} color="#2b4141" />
        <Heading as="h1" size="xl" mt={8} mb={4} color="#2b4141">
          Under Construction
        </Heading>
        <Text fontSize="lg" color="#2b4141" mb={8}>
          We're working hard to bring you something awesome.
        </Text>
        <Text fontSize="md" color="#6c757d">
          Check back soon!
        </Text>
      </Box>
    </Flex>
  );
};

export default UnderConstruction;
