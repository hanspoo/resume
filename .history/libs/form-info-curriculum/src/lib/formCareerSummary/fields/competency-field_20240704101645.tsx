import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Box,
  Stack,
  Input,
  Select,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Summary, Skill } from '@free-resume/models-types';
import { useEffect } from 'react';
import GroupedSelect from './groupSelect';
import { skills as defaultSkills } from '@free-resume/models-types';

export const CompetencyField = ({
  competencies,
  setSummary,
}: {
  competencies: Skill[];
  setSummary: React.Dispatch<React.SetStateAction<Summary>>;
}) => {
  useEffect(() => {
    if (competencies.length === 0) {
      setSummary((prevSummary) => ({
        ...prevSummary,
        competencies: [{ skill: '', level: 'Basic' }],
      }));
    }
  }, [competencies, setSummary]);

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
              <GroupedSelect skills={defaultSkills} />
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
                <option value="Advance">advanced</option>
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
