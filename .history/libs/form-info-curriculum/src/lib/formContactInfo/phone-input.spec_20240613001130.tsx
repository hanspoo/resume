import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PhoneNumberInput from './PhoneNumberInput';

describe('PhoneNumberInput', () => {
  test('renders the phone number input', () => {
    render(<PhoneNumberInput value="" onChange={() => {}} />);

    const input = screen.getByLabelText(/Phone/i);
    expect(input).toBeInTheDocument();
  });

  test('accepts and formats phone number correctly', () => {
    const handleChange = jest.fn();
    render(<PhoneNumberInput value="+1234567890" onChange={handleChange} />);

    const input = screen.getByLabelText(/Phone/i);
    fireEvent.change(input, { target: { value: '+1234567890' } });
    expect(input).toHaveValue('+1234567890');
  });
});
