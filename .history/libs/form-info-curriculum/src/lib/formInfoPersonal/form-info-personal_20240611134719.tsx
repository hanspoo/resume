import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormInfoPersonalProps {}

export function FormInfoPersonal(props: FormInfoPersonalProps) {
  const [resume, setResume] = useState({
    resumeEmail: '',
    name: '',
    city: '',
    phone: '',
    birthDate: '',
    nationality: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setResume((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(resume);
  };

  return (
    <Box maxW="md" mx="auto" mt={5}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={resume.resumeEmail}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input name="name" value={resume.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input name="city" value={resume.city} onChange={handleChange} />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Phone</FormLabel>
            <Input name="phone" value={resume.phone} onChange={handleChange} />
          </FormControl>
          <FormControl id="birthDate">
            <FormLabel>Birth Date</FormLabel>
            <Input
              name="birthDate"
              type="date"
              value={resume.birthDate}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="nationality">
            <FormLabel>Nationality</FormLabel>
            <Input
              name="nationality"
              value={resume.nationality}
              onChange={handleChange}
            />
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default FormInfoPersonal;
