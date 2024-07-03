import React from 'react';
import { FormContainer, resultForm } from './form-container';
import { ChakraProvider } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Provider } from 'react-redux';
import { store } from '@free-resume/redux-store';

type Story = StoryObj<typeof Template>;

export default {
  title: 'Components/FormContainer',
  component: resultForm,
  decorators: [
    (Story: any) => (
      <Provider store={store}>
        <ChakraProvider>
          <Story />
        </ChakraProvider>
      </Provider>
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
