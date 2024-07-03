import React from 'react';
import { FormContactInfo, FormContactInfoProps } from './form-contact-info';
import { ChakraProvider } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { JSX } from 'react/jsx-runtime';
import { Provider } from 'react-redux';
import { store } from '@free-resume/redux-store';

type Story = StoryObj<typeof Template>;

export default {
  title: 'Components/FormInfoPersonal',
  component: FormContactInfo,
  decorators: [
    (Story: Story) => (
      <Provider store={store}>
        <ChakraProvider>
          <Story />
        </ChakraProvider>
      </Provider>
    ),
  ],
};

const Template: Story = (
  args: JSX.IntrinsicAttributes & FormContactInfoProps
) => <FormContactInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  resume: {
    name: 'John Doe',
    certgree: 'Senior Developer',
    email: 'john.doe@example.com',
    address: '123 Main St, City, Country',
    phone: '+1234567890',
    birthDate: '1990-01-01',
    nationality: 'American',
    linkedin: 'https://www.linkedin.com/in/johndoe',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Name/gi)).toBeTruthy();
  },
};
