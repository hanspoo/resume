import React from 'react';
import { FormContactInfo, FormContactInfoProps } from './form-contact-info';
import { ChakraProvider } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { JSX } from 'react/jsx-runtime';

type Story = StoryObj<typeof Template>;

export default {
  title: 'Components/FormInfoPersonal',
  component: FormContactInfo,
  decorators: [
    (Story: Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
};

const Template = (args: JSX.IntrinsicAttributes & FormContactInfoProps) => (
  <FormInfoPersonal {...args} />
);

export const Default = Template.bind({});

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Name/gi)).toBeTruthy();
  },
};
