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

const handleInputChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
  index: number | undefined,
  type: string | undefined,
  setSummary: React.Dispatch<React.SetStateAction<Summary>>
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

const handleAddHighlight = (
  setSummary: React.Dispatch<React.SetStateAction<Summary>>
) => {
  setSummary((prevSummary) => ({
    ...prevSummary,
    highlights: [...prevSummary.highlights, ''],
  }));
};

const handleRemoveHighlight = (
  index: number,
  setSummary: React.Dispatch<React.SetStateAction<Summary>>
) => {
  setSummary((prevSummary) => ({
    ...prevSummary,
    highlights: prevSummary.highlights.filter((_, i) => i !== index),
  }));
};

const PitchField = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => (
  <FormControl id="pitch" isRequired>
    <FormLabel>Pitch</FormLabel>
    <Textarea name="pitch" value={value} onChange={onChange} />
  </FormControl>
);

const HighlightField = ({
  highlight,
  index,
  onChange,
  onRemove,
  showRemoveButton,
}: {
  highlight: string;
  index: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => void;
  onRemove: (index: number) => void;
  showRemoveButton: boolean;
}) => (
  <FormControl isRequired>
    <FormLabel>Highlight {index + 1}</FormLabel>
    <HStack>
      <Textarea
        name="highlight"
        value={highlight}
        onChange={(e) => onChange(e, index)}
        maxLength={150} // Limitar el número de caracteres
        rows={3} // Aproximadamente 3 líneas
        resize="none"
      />
      {showRemoveButton && (
        <IconButton
          aria-label="Remove highlight"
          icon={<DeleteIcon />}
          onClick={() => onRemove(index)}
        />
      )}
    </HStack>
    <Text fontSize="sm" color="gray.500">
      {highlight.length}/150 caracteres
    </Text>
  </FormControl>
);

const CompetencyField = ({
  competency,
  index,
  summary,
  setSummary,
  showRemoveButton,
}: {
  competency: Skill;
  index: number;
  summary: Summary;
  setSummary: React.Dispatch<React.SetStateAction<Summary>>;
  showRemoveButton: boolean;
}) => {
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    setSummary((prevSummary) => {
      const competencies = [...prevSummary.competencies];
      competencies[index] = { ...competencies[index], [name]: value };
      return { ...prevSummary, competencies };
    });
  };

  return (
    <Box>
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
        {showRemoveButton && (
          <IconButton
            aria-label="Remove competency"
            icon={<DeleteIcon />}
            onClick={() => handleRemoveCompetency(index)}
          />
        )}
      </Stack>
      <Button onClick={handleAddCompetency} leftIcon={<AddIcon />}>
        Add Competency
      </Button>
    </Box>
  );
};

export function FormCareerSummary() {
  const [summary, setSummary] = useState<Summary>({
    pitch: '',
    highlights: [''],
    competencies: [{ skill: '', level: 'Basic' }],
  });

  const pitchField = (
    <PitchField
      value={summary.pitch}
      onChange={(e) => handleInputChange(e, undefined, undefined, setSummary)}
    />
  );

  const highlightFields = summary.highlights.map((highlight, index) => (
    <HighlightField
      key={index}
      highlight={highlight}
      index={index}
      onChange={(e, i) => handleInputChange(e, i, 'highlight', setSummary)}
      onRemove={(i) => handleRemoveHighlight(i, setSummary)}
      showRemoveButton={summary.highlights.length > 1}
    />
  ));

  const competencyFields = summary.competencies.map((competency, index) => (
    <CompetencyField
      key={index}
      competency={competency}
      index={index}
      summary={summary}
      setSummary={setSummary}
      showRemoveButton={summary.competencies.length > 1}
    />
  ));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(summary);
  };

  return (
    <Box as="form" p={4} onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        {pitchField}

        {highlightFields}

        <Button
          onClick={() => handleAddHighlight(setSummary)}
          leftIcon={<AddIcon />}
        >
          Add Highlight
        </Button>

        {competencyFields}

        <Button type="submit" colorScheme="teal" size="lg">
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

export default FormCareerSummary;
