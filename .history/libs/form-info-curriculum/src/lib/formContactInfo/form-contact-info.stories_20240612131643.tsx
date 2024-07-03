import React from 'react';
import { FormContactInfo, FormContactInfoProps } from './form-contact-info';
import { ChakraProvider } from '@chakra-ui/react';
import type { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { JSX } from 'react/jsx-runtime';
import { Provider } from 'react-redux';
import { store } from '@free-resume/redux-store';

const infoContacto = {
  resume: {
    name: 'John Doe',
    certgree: 'Senior Developer',
    resumeEmail: 'john.doe@example.com',
    address: '123 Main St, City, Country',
    phone: '+1234567890',
    location: 'Los alamos ',
    birthDate: '1990-01-01',
    nationality: 'World Wide',
    linkedin: 'https://www.linkedin.com/in/johndoe',
  },
};

export default {
  title: 'Components/FormInfoPersonal',
  component: FormContactInfo,
  args: infoContacto,
  decorators: [
    (StoryComponent: JSX.IntrinsicAttributes) => (
      <Provider store={store}>
        <ChakraProvider>
          <StoryComponent />
        </ChakraProvider>
      </Provider>
    ),
  ],
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Name/gi)).toBeTruthy();
  },
};
