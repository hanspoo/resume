import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, VStack } from '@chakra-ui/react';

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

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={6} align="stretch">
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
