import { Dispatch, SetStateAction, ChangeEvent } from 'react';
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
import { languages } from '../../../dataSelect';

interface idiomFieldProps {
  idioms: Idiom[];
  setIdioms: Dispatch<SetStateAction<Idiom[]>>;
}

export function IdiomField({ idioms, setIdioms }: idiomFieldProps) {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
              <Select
                name="language"
                value={idiom.language}
                onChange={(e) => handleInputChange(e, index)}
                key={`idiom${index}`}
              >
                <option value="" key={`leng-1`}></option>
                {languages.map((leng, indexOpt) => {
                  return (
                    <option value={leng} key={`leng${indexOpt}`}>
                      {leng}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Level</FormLabel>
              <Select
                name="level"
                value={idiom.level}
                onChange={(e) => handleInputChange(e, index)}
                key={`level${index}`}
              >
                <option value="Basic" key={`basic${index}`}>
                  Basic
                </option>
                <option value="Medium" key={`medium${index}`}>
                  Medium
                </option>
                <option value="Advance" key={`advance${index}`}>
                  Advance
                </option>
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