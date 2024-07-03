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

const HighlightField = ({
  highlights,
  setSummary,
}: {
  highlights: string[];
  setSummary: React.Dispatch<React.SetStateAction<Summary>>;
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const { value } = e.target;
    setSummary((prevSummary) => {
      const newHighlights = [...prevSummary.highlights];
      newHighlights[index] = value;
      return { ...prevSummary, highlights: newHighlights };
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

  return (
    <>
      {highlights.map((highlight, index) => (
        <FormControl key={index} isRequired>
          <FormLabel>Highlight {index + 1}</FormLabel>
          <HStack>
            <Textarea
              name="highlight"
              value={highlight}
              onChange={(e) => handleInputChange(e, index)}
              maxLength={150} // Limitar el número de caracteres
              rows={3} // Aproximadamente 3 líneas
              resize="none"
            />
            {highlights.length > 1 && (
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
    </>
  );
};

const CompetencyField = ({
  competencies,
  setSummary,
}: {
  competencies: Skill[];
  setSummary: React.Dispatch<React.SetStateAction<Summary>>;
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setSummary((prevSummary) => {
      const newCompetencies = [...prevSummary.competencies];
      newCompetencies[index] = { ...newCompetencies[index], [name]: value };
      return { ...prevSummary, competencies: newCompetencies };
    });
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

  return (
    <>
      {competencies.map((competency, index) => (
        <Box key={index}>
          <Stack direction="row" spacing={4} align="center">
            <FormControl isRequired>
              <FormLabel>Skill</FormLabel>
              <Input
                name="skill"
                value={competency.skill}
                onChange={(e) => handleInputChange(e, index)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Level</FormLabel>
              <Select
                name="level"
                value={competency.level}
                onChange={(e) => handleInputChange(e, index)}
              >
                <option value="Basic">Basic</option>
                <option value="Medium">Medium</option>
                <option value="Advance">Advance</option>
              </Select>
            </FormControl>
            {competencies.length > 1 && (
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
    </>
  );
};

export function FormCareerSummary() {
  const [summary, setSummary] = useState<Summary>({
    pitch: '',
    highlights: [''],
    competencies: [{ skill: '', level: 'Basic' }],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(summary);
  };

  return (
    <Box as="form" p={4} onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        <PitchField value={summary.pitch} setSummary={setSummary} />
        <HighlightField
          highlights={summary.highlights}
          setSummary={setSummary}
        />
        <CompetencyField
          competencies={summary.competencies}
          setSummary={setSummary}
        />
        <Button type="submit" colorScheme="teal" size="lg">
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

export default FormCareerSummary;
