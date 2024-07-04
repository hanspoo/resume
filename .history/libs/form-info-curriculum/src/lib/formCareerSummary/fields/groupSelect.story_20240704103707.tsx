import React from 'react';
import { GroupedSelect } from './groupSelect';
import { ChakraProvider } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

type Story = StoryObj<typeof Template>;

export default {
  title: 'Components/FormContainer',
  component: GroupedSelect,
  decorators: [
    (Story: any) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
};

const Template = (args) => <FormContainer {...args} />;

export const Default = Template.bind({});

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Name/gi)).toBeTruthy();
  },
};
