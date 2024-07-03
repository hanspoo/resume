import { FormWorkEducation } from './form-work-education';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '@free-resume/redux-store';

export default {
  title: 'components/formWorkEducation',
  component: FormWorkEducation,
  decorators: [
    (StoryComponent: any) => {
      <Provider store={store}>
        <ChakraProvider>
          <StoryComponent />
        </ChakraProvider>
      </Provider>;
    },
  ],
};
export const formCompletos = {};
