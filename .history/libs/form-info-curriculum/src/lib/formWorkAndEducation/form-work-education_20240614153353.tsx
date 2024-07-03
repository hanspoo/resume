import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  HStack,
  Stack,
  IconButton,
  Select,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

interface Idiom {
  language: string;
  level: string;
  studies: string;
}

interface Experience {
  location?: string;
  since?: string;
  to?: string;
  position: string;
  company: string;
  description: string;
  projects?: Project[];
  tools?: string[];
}

interface Project {
  name: string;
  description: string;
  tools: string[];
}

interface Education {
  location: string;
  since: string;
  to: string;
  career: string;
  institution: string;
}

const IdiomField = ({
  idioms,
  setIdioms,
}: {
  idioms: Idiom[];
  setIdioms: React.Dispatch<React.SetStateAction<Idiom[]>>;
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setIdioms((prevIdioms) => {
      const newIdioms = [...prevIdioms];
      newIdioms[index] = { ...newIdioms[index], [name]: value };
      return newIdioms;
    });
  };

  const handleAddIdiom = () => {
    setIdioms((prevIdioms) => [
      ...prevIdioms,
      { language: '', level: 'Basic', studies: '' },
    ]);
  };

  const handleRemoveIdiom = (index: number) => {
    setIdioms((prevIdioms) => prevIdioms.filter((_, i) => i !== index));
  };

  return (
    <>
      {idioms.map((idiom, index) => (
        <Box key={index}>
          <Stack direction="row" spacing={4} align="center">
            <FormControl isRequired>
              <FormLabel>Language</FormLabel>
              <Input
                name="language"
                value={idiom.language}
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Level</FormLabel>
              <Select
                name="level"
                value={idiom.level}
                onChange={(e) => handleInputChange(e, index)}
              >
                <option value="Basic">Basic</option>
                <option value="Medium">Medium</option>
                <option value="Advance">Advance</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Studies</FormLabel>
              <Input
                name="studies"
                value={idiom.studies}
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
            <IconButton
              aria-label="Remove idiom"
              icon={<DeleteIcon />}
              onClick={() => handleRemoveIdiom(index)}
            />
          </Stack>
        </Box>
      ))}
      <Button onClick={handleAddIdiom} leftIcon={<AddIcon />}>
        Add Idiom
      </Button>
    </>
  );
};

const ExperienceField = ({
  experiences,
  setExperiences,
}: {
  experiences: Experience[];
  setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setExperiences((prevExperiences) => {
      const newExperiences = [...prevExperiences];
      newExperiences[index] = { ...newExperiences[index], [name]: value };
      return newExperiences;
    });
  };

  const handleAddExperience = () => {
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        position: '',
        company: '',
        description: '',
        since: new Date(),
        to: new Date(),
      },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      {experiences.map((experience, index) => (
        <Box key={index} mb={4}>
          <Stack direction="row" spacing={4} align="center">
            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input
                name="location"
                value={experience.location || ''}
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Since</FormLabel>
              <Input
                name="experienceSince"
                type="date"
                value={experience.since}
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>To</FormLabel>
              <Input
                name="experienceTo"
                type="date"
                value={experience.since}
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
          </Stack>
          <Stack direction="row" spacing={4} align="center" mt={4}>
            <FormControl isRequired>
              <FormLabel>Position</FormLabel>
              <Input
                name="position"
                value={experience.position}
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Company</FormLabel>
              <Input
                name="company"
                value={experience.company}
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
          </Stack>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={experience.description}
              onChange={(e) => handleInputChange(e, index)}
            />
          </FormControl>
          <IconButton
            aria-label="Remove experience"
            icon={<DeleteIcon />}
            onClick={() => handleRemoveExperience(index)}
            mt={4}
          />
        </Box>
      ))}
      <Button onClick={handleAddExperience} leftIcon={<AddIcon />}>
        Add Experience
      </Button>
    </>
  );
};

const EducationField = ({
  educations,
  setEducations,
}: {
  educations: Education[];
  setEducations: React.Dispatch<React.SetStateAction<Education[]>>;
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
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
            <FormControl isRequired>
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
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>To</FormLabel>
              <Input
                name="to"
                value={education.to}
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
};

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
