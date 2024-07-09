import React from 'react';
import { ChakraProvider, Box, Select } from '@chakra-ui/react';
import { skills, SkillsList } from '@free-resume/models-types';


const selectValues = Object.keys(skills).map(tipo => {
    const listaSkill = skills[tipo];
    const list = listSkillsOption(listaSkill);

    return (<optgroup label={tipo}>
        {list}
    </optgroup>
  )};

const listSkillsOption = (listaSkill:string[]) =>{

    return listaSkill.map((skill) => {
        <option value={skill}>skill</option>
    })
}
  
const GroupedSelect = () => {
  

    return (
    <ChakraProvider>
      <Box width="300px" p={4}>
        <Select placeholder="Select option">            
          {selectValues}
        </Select>
      </Box>
    </ChakraProvider>
  );
};

export default GroupedSelect;