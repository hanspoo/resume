import React from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { FormControl, FormLabel, Box } from '@chakra-ui/react';

const PhoneNumberInput = ({ value, onChange }) => {
  return (
    <FormControl id="phone">
      <FormLabel>Phone</FormLabel>
      <Box>
        <PhoneInput
          country={'us'}
          value={value}
          onChange={onChange}
          containerStyle={{ width: '100%' }}
          inputStyle={{ width: '100%' }}
        />
      </Box>
    </FormControl>
  );
};

export default PhoneNumberInput;
