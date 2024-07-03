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
  Text,
  Select,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Summary } from '@free-resume/models-types';

const PitchField = ({
  value,
  setSummary,
}: {
  value: string;
  setSummary: React.Dispatch<React.SetStateAction<Summary>>;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSummary((prevSummary) => ({ ...prevSummary, [name]: value }));
  };

  return (
    <FormControl id="pitch" isRequired>
      <FormLabel>Pitch</FormLabel>
      <Textarea name="pitch" value={value} onChange={handleInputChange} />
    </FormControl>
  );
};
