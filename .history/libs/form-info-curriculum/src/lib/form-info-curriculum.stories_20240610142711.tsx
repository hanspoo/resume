import React from 'react';
import { FormInfoCurriculum } from './form-info-curriculum';
import { ChakraProvider } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

type Story = StoryObj<typeof Template>;

export default {
  title: 'Components/FormInfoCurriculum',
  component: FormInfoCurriculum,
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
};

const Template = (args) => <FormInfoCurriculum {...args} />;

export const Default = Template.bind({});

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Name/gi)).toBeTruthy();
  },
};
