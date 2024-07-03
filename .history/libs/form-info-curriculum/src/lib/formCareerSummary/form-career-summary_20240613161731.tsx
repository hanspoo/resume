// src/components/SummaryForm.tsx

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

interface Skill {
  skill: string;
  level: string;
}

interface Summary {
  pitch: string;
  highlights: string[];
  competencies: Skill[];
}

const highlightsField = (summary) => {

  return (
  {summary.highlights.map((highlight, index) => (
    <FormControl key={index} isRequired>
      <FormLabel>Highlight {index + 1}</FormLabel>
      <HStack>
        <Textarea
          name="highlight"
          value={highlight}
          onChange={(e) => handleInputChange(e, index, 'highlight')}
          maxLength={150}
          rows={3}
          resize="none"
        />
        {summary.highlights.length > 1 && (
          <IconButton
            aria-label="Remove highlight"
            icon={<DeleteIcon />}
            onClick={() => handleRemoveHighlight(index)}
          />
        )}
      </HStack>
      <Text fontSize="sm" color="gray.500">
        {highlight.length}/150 caracteres
      </Text>
    </FormControl>
  ))}

  <Button onClick={handleAddHighlight} leftIcon={<AddIcon />}>
    Add Highlight
  </Button>
  )
}

export function FormCareerSummary() {
  const [summary, setSummary] = useState<Summary>({
    pitch: '',
    highlights: [''],
    competencies: [{ skill: '', level: 'Basic' }],
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index?: number,
    type?: string
  ) => {
    const { name, value } = e.target;

    setSummary((prevSummary) => {
      if (type === 'highlight' && typeof index === 'number') {
        const highlights = [...prevSummary.highlights];
        highlights[index] = value;
        return { ...prevSummary, highlights };
      }
      if (type === 'competency' && typeof index === 'number') {
        const competencies = [...prevSummary.competencies];
        competencies[index] = { ...competencies[index], [name]: value };
        return { ...prevSummary, competencies };
      }
      return { ...prevSummary, [name]: value };
    });
  };

  const handleAddHighlight = () => {
    setSummary((prevSummary) => ({
      ...prevSummary,
      highlights: [...prevSummary.highlights, ''],
    }));
  };

  const handleRemoveHighlight = (index: number) => {
    setSummary((prevSummary) => ({
      ...prevSummary,
      highlights: prevSummary.highlights.filter((_, i) => i !== index),
    }));
  };

  const handleAddCompetency = () => {
    setSummary((prevSummary) => ({
      ...prevSummary,
      competencies: [
        ...prevSummary.competencies,
        { skill: '', level: 'Basic' },
      ],
    }));
  };

  const handleRemoveCompetency = (index: number) => {
    setSummary((prevSummary) => ({
      ...prevSummary,
      competencies: prevSummary.competencies.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(summary);
  };

  return (
    <Box as="form" p={4} onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        <FormControl id="pitch" isRequired>
          <FormLabel>Pitch</FormLabel>
          <Textarea
            name="pitch"
            value={summary.pitch}
            onChange={handleInputChange}
          />
        </FormControl>

        

        {summary.competencies.map((competency, index) => (
          <Box key={index}>
            <Stack direction="row" spacing={4} align="center">
              <FormControl isRequired>
                <FormLabel>Skill</FormLabel>
                <Input
                  name="skill"
                  value={competency.skill}
                  onChange={(e) => handleInputChange(e, index, 'competency')}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Level</FormLabel>
                <Select
                  name="level"
                  value={competency.level}
                  onChange={(e) => handleInputChange(e, index, 'competency')}
                >
                  <option value="Basic">Basic</option>
                  <option value="Medium">Medium</option>
                  <option value="Advanced">Advanced</option>
                </Select>
              </FormControl>
              {summary.competencies.length > 1 && (
                <IconButton
                  aria-label="Remove competency"
                  icon={<DeleteIcon />}
                  onClick={() => handleRemoveCompetency(index)}
                />
              )}
            </Stack>
          </Box>
        ))}

        <Button onClick={handleAddCompetency} leftIcon={<AddIcon />}>
          Add Competency
        </Button>

        <Button type="submit" colorScheme="teal" size="lg">
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

export default FormCareerSummary;
