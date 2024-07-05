import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Education } from '@free-resume/models-types';

interface EducationFieldProps {
  educations: Education[];
  setEducations: Dispatch<SetStateAction<Education[]>>;
}

export function EducationField({
  educations,
  setEducations,
}: EducationFieldProps) {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setEducations((prevEducations) => {
      const newEducations = [...prevEducations];
      newEducations[index] = { ...newEducations[index], [name]: value };
      return newEducations;
    });
  };

  const handleAddEducation = () => {
    setEducations((prevEducations) => [
      ...prevEducations,
      { location: '', since: '', to: '', career: '', institution: '' },
    ]);
  };

  const handleRemoveEducation = (index: number) => {
    setEducations((prevEducations) =>
      prevEducations.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      {educations.map((education, index) => (
        <Box key={index}>
          <Stack direction="row" spacing={4} align="center">
            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input
                name="location"
                value={education.location}
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Since</FormLabel>
              <Input
                name="since"
                value={education.since}
                type="date"
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>To</FormLabel>
              <Input
                name="to"
                value={education.to}
                type="date"
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Career</FormLabel>
              <Input
                name="career"
                value={education.career}
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Institution</FormLabel>
              <Input
                name="institution"
                value={education.institution}
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
            <IconButton
              aria-label="Remove education"
              icon={<DeleteIcon />}
              onClick={() => handleRemoveEducation(index)}
            />
          </Stack>
        </Box>
      ))}
      <Button onClick={handleAddEducation} leftIcon={<AddIcon />}>
        Add Education
      </Button>
    </>
  );
}

export default EducationField;
