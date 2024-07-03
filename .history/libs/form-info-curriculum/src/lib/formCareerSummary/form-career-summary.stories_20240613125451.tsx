import { Component } from 'react';
import { FormCareerSummary } from './form-career-summary';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '@free-resume/redux-store';

export default {
  title: 'Components/formCarrerSummary',
  component: FormCareerSummary,
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
export const formCarrer = {};
