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
import { Summary } from '@free-resume/models-types';
import { PitchField } from './fields/pitch-field';
import { HighlightField } from './fields/highlight-field';
import { CompetencyField } from './fields/competency-field';

export interface FormContactInfoProps {
  summaryProps?: Summary;
}

export function FormCareerSummary(summaryProps: Summary) {
  const [summary, setSummary] = useState<Summary>(
    summaryProps || {
      pitch: '',
      highlights: [''],
      competencies: [{ skill: '', level: 'Basic' }],
    }
  );

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
