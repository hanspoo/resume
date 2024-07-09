import React, { ChangeEventHandler } from 'react';
import { Box, Select } from '@chakra-ui/react';
import { SkillsList } from '@free-resume/models-types';
import { skills as defaultSkills } from './skills';

interface GroupedSelectProps {
  skills: SkillsList;
  name: string;
  value?: string | readonly string[] | number | undefined;
  onChange?: ChangeEventHandler<T> | undefined;
}

export const GroupedSelect = ({ skills }: GroupedSelectProps) => {
  return (
    <Box width="300px" p={4}>
      <Select
        placeholder="Select value"
        name="skill"
        value={value}
        onChange={(e) => handleInputChange(e, index)}
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
GroupedSelect.defaultProps = {
  skills: defaultSkills,
};
export default GroupedSelect;
