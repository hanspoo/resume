import React from 'react';
import { FormWorkEducation } from './form-work-education';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '@free-resume/redux-store';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/FormWorkEducation',
  component: FormWorkEducation,
  decorators: [
    (StoryComponent: any) => (
      <Provider store={store}>
        <ChakraProvider>
          <StoryComponent />
        </ChakraProvider>
      </Provider>
    ),
  ],
};

export const formCompletos = {};

export const checkLoading = {
  args: {},
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Idioms/gi)).toBeTruthy();
  },
};
