import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

import PhoneNumberInput from './phone-input';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormContactInfoProps {}

export function FormContactInfo(props: FormContactInfoProps) {
  const [resume, setResume] = useState({
    resumeEmail: '',
    name: '',
    certgree: '',
    city: '',
    linkedin: '',
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
  const handlePhoneChange = (phone: string) => {
    setResume((prev) => ({ ...prev, phone }));
  };

  return (
    <Box maxW="md" mx="auto" mt={5}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input name="name" value={resume.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="grade">
            <FormLabel>Advanced degree or certification</FormLabel>
            <Input
              name="grade"
              value={resume.certgree}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="resumeEmail">
            <FormLabel>Resume email</FormLabel>
            <Input
              name="resumeEmail"
              type="resumeEmail"
              value={resume.resumeEmail}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="linkedin">
            <FormLabel>LinkedIn</FormLabel>
            <Input
              name="linkedin"
              value={resume.linkedin}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input name="city" value={resume.city} onChange={handleChange} />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Phone</FormLabel>
            <Input name="phone" value={resume.phone} onChange={handleChange} />
          </FormControl>
          <PhoneNumberInput value={resume.phone} onChange={handlePhoneChange} />

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

export default FormContactInfo;
