import { Component } from 'react';
import { FormCareerSummary } from './form-career-summary';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '@free-resume/redux-store';

//const args = {
const summary = {
  pitch: 'This is a sample pitch.',
  highlights: ['Highlight 1', 'Highlight 2', 'Highlight 3'],
  competencies: [
    { skill: 'JavaScript', level: 'Advance' },
    { skill: 'React', level: 'Medium' },
    { skill: 'Node.js', level: 'Basic' },
  ],
};
//};

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
export const formCompletos = { args: summary };
export const formCarrer = {};
