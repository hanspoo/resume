import React, { ChangeEvent, EventHandler } from 'react';
import { Box, Select } from '@chakra-ui/react';
import { SkillsList } from '@free-resume/models-types';

interface GroupedSelectProps {
  skills: SkillsList;
  name: string;
  value?: string | readonly string[] | number | undefined;
  funcOnChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => void;
}

export const GroupedSelect = ({
  skills,
  name,
  value,
  funcOnChange,
}: GroupedSelectProps) => {
  return (
    <Box width="300px" p={4}>
      <Select
        placeholder="Select value"
        name={name}
        value={value}
        onChange={(e) => funcOnChange(e, 1)}
      >
        {Object.entries(skills).map(([category, skills]) => (
          <optgroup label={category} key={category}>
            {skills.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </optgroup>
        ))}
      </Select>
    </Box>
  );
};
export default GroupedSelect;
