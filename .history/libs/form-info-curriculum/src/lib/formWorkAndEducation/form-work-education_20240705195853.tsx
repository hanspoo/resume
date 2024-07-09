import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, VStack } from '@chakra-ui/react';
import { Idiom, Experience, Education } from '@free-resume/models-types';
import { IdiomField } from './fields/idiom-field';
import { ExperienceField } from './fields/experience-field';
import { EducationField } from './fields/education-field';
import { useDispatch } from 'react-redux';

export function FormWorkEducation() {
  const [idioms, setIdioms] = useState<Idiom[]>([
    { language: '', level: 'Basic', studies: '' },
  ]);
  const [experiences, setExperiences] = useState<Experience[]>([
    { position: '', company: '', description: '' },
  ]);
  const [educations, setEducations] = useState<Education[]>([
    { location: '', since: '', to: '', career: '', institution: '' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ idioms, experiences, educations });
  };
  const dispach = useDispatch();

  return (
    <Box as="form" onSubmit={handleSubmit} p={8}>
      <VStack spacing={6} align="start">
        <FormControl>
          <FormLabel>Idioms</FormLabel>
          <IdiomField idioms={idioms} setIdioms={setIdioms} />
        </FormControl>
        <FormControl>
          <FormLabel>Experiences</FormLabel>
          <ExperienceField
            experiences={experiences}
            setExperiences={setExperiences}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Educations</FormLabel>
          <EducationField
            educations={educations}
            setEducations={setEducations}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

export default FormWorkEducation;
