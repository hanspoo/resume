import React from 'react';
import { skills as defaultSkills, SkillsList } from '@free-resume/models-types';

interface GroupedSelectProps {
  skills: SkillsList;
}

export const GroupedSelect = ({ skills }: GroupedSelectProps) => {
  return (
    <Box width="300px" p={4}>
      <Select placeholder="Select skill">
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
