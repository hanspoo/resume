import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  IconButton,
  Select,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Idiom } from '@free-resume/models-types';

export function IdiomField({
  idioms,
  setIdioms,
}: {
  idioms: Idiom[];
  setIdioms: React.Dispatch<React.SetStateAction<Idiom[]>>;
}) {
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
}

export default IdiomField;
