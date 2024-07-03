import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import ResumeForm from './form-contact-info';
import { store } from '@free-resume/redux-store';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <ChakraProvider>
        <ResumeForm />
      </ChakraProvider>
    </Provider>
  );

describe('ResumeForm', () => {
  test('renders the form', () => {
    renderComponent();

    expect(screen.getByLabelText(/Name/i)).toBeTruthy();
    expect(screen.getByLabelText(/Grade/i)).toBeTruthy();
    expect(screen.getByLabelText(/Email/i)).toBeTruthy();
    expect(screen.getByLabelText(/Address/i)).toBeTruthy();
    expect(screen.getByLabelText(/Birth Date/i)).toBeTruthy();
    expect(screen.getByLabelText(/Nationality/i)).toBeTruthy();
    expect(screen.getByLabelText(/LinkedIn/i)).toBeTruthy();
    expect(screen.getByLabelText(/Objective/i)).toBeTruthy();
  });

  test('validates LinkedIn URL', () => {
    renderComponent();

    const linkedinInput = screen.getByLabelText(/LinkedIn/i);

    fireEvent.change(linkedinInput, { target: { value: 'invalid-url' } });
    fireEvent.blur(linkedinInput);

    expect(screen.getByText(/Invalid LinkedIn URL/i)).toBeTruthy();

    fireEvent.change(linkedinInput, {
      target: { value: 'https://www.linkedin.com/in/johndoe' },
    });
    fireEvent.blur(linkedinInput);

    expect(screen.queryByText(/Invalid LinkedIn URL/i)).not.toBeTruthy();
  });
});
