import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import styles from './ContactForm.module.css';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Send contact form data to backend or API
      // For now, we'll just log the data to the console
      console.log(formData);

      // Show success toast message
      toast({
        title: 'Message sent',
        description: "We'll get back to you as soon as possible.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Reset form data
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      // Show error toast message
      toast({
        title: 'An error occurred',
        description: 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }

    setIsLoading(false);
  };

  return (
    <Box
      maxW="600px"
      mx="auto"
      mt={16}
      p={6}
      boxShadow="xl"
      className={styles.contactFormBox}>
      <Heading as="h2" size="lg" mb={8}>
        Contact us
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="message" mb={4} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button
          className={styles.contactFormSubmitButton}
          type="submit"
          isLoading={isLoading}>
          Send message
        </Button>
      </form>
      <Text mt={4} fontSize="sm" color="gray.500">
        We'll get back to you as soon as possible.
      </Text>
    </Box>
  );
};

export default ContactForm;
