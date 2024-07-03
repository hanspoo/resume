import {
  Button,
  FormControl,
  FormLabel,
  Textarea,
  HStack,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Summary } from '@free-resume/models-types';

export const HighlightField = ({
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
