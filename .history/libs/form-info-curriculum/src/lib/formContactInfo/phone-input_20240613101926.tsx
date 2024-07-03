import React from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { FormControl, FormLabel, Box } from '@chakra-ui/react';

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneNumberInput = ({ value, onChange }: PhoneNumberInputProps) => {
  return (
    <FormControl id="phone">
      <FormLabel>Phone</FormLabel>
      <Box>
        <PhoneInput
          country={'cl'}
          value={value}
          onChange={onChange}
          containerStyle={{ width: '100%' }}
          inputStyle={{ width: '100%' }}
          inputProps={{ name: 'phone' }}
        />
      </Box>
    </FormControl>
  );
};

export default PhoneNumberInput;
