import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContactInfo } from '@free-resume/redux-store';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

import PhoneNumberInput from './phone-input';
import { ContactInfo } from '@free-resume/models-types';

export interface FormContactInfoProps {
  contactInfo?: ContactInfo;
}

export function FormContactInfo({ contactInfo }: FormContactInfoProps) {
  const dispatch = useDispatch();
  const [resume, setResume] = useState<ContactInfo>(
    contactInfo || {
      resumeEmail: '',
      name: '',
      certgree: '',
      location: '',
      linkedin: '',
      phone: '',
      birthDate: '',
      nationality: '',
    }
  );

  const [errors, setErrors] = useState({
    linkedin: '',
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setResume((prev) => ({ ...prev, [name]: value }));

    if (name === 'linkedin') {
      const linkedinPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/;
      if (!linkedinPattern.test(value)) {
        setErrors((prev) => ({ ...prev, linkedin: 'Invalid LinkedIn URL' }));
      } else {
        setErrors((prev) => ({ ...prev, linkedin: '' }));
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(resume);
    dispatch(updateContactInfo(resume));
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
          <FormControl id="certgree">
            <FormLabel>Advanced degree or certification</FormLabel>
            <Input
              name="certgree"
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

          <FormControl id="linkedin" isInvalid={!!errors.linkedin}>
            <FormLabel>LinkedIn</FormLabel>
            <Input
              name="linkedin"
              value={resume.linkedin}
              onChange={handleChange}
            />
            {errors.linkedin && (
              <FormErrorMessage>{errors.linkedin}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input
              name="city"
              value={resume.location}
              onChange={handleChange}
            />
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
