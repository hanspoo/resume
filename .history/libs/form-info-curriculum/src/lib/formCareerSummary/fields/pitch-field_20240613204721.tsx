import { ChangeEvent } from 'react';
import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { Summary } from '@free-resume/models-types';

export interface PitchFieldProps {
  value: string;
  setSummary: React.Dispatch<React.SetStateAction<Summary>>;
}

export const PitchField = ({ value, setSummary }: PitchFieldProps) => {
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
