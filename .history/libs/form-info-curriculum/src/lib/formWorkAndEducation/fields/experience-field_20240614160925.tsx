import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  IconButton,
  Textarea,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Experience } from '@free-resume/models-types';

export function ExperienceField({
  experiences,
  setExperiences,
}: {
  experiences: Experience[];
  setExperiences: Dispatch<SetStateAction<Experience[]>>;
}) {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      { position: '', company: '', description: '', since: '', to: '' },
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
}

export default ExperienceField;
