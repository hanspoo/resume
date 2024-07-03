import { ChangeEvent } from 'react';
import { Box, FormControl, FormLabel, Stack, Textarea } from '@chakra-ui/react';
import { Summary } from '@free-resume/models-types';

export interface PitchFieldProps {
  value: string;
  setSummary: React.Dispatch<React.SetStateAction<Summary>>;
}

export const PitchField = ({ value, setSummary }: PitchFieldProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSummary((prevSummary) => ({ ...prevSummary, [name]: value }));
  };

  return (
    <Box>
      <Stack direction="row" spacing={6} align="center">
        <FormControl id="pitch" isRequired>
          <FormLabel>Pitch</FormLabel>
          <Textarea
            name="pitch"
            value={value}
            onChange={handleInputChange}
            size="md" // Set the desired size here
            height="150px" // Example for setting height
            width="100%" // Example for setting width
          />
        </FormControl>
      </Stack>
    </Box>
  );
};
