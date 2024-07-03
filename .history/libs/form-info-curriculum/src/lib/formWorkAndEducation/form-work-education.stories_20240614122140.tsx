import { FormWorkEducation } from './form-work-education';
import { ChakraProvider } from '@chakra-ui/react';


export default {
  title: 'components/formWorkEducation',
  component: FormWorkEducation,
  decorators: [
    (StoryComponent: any) => {
      <ChakraProvider>
      <StoryComponent />;
      <ChakraProvider/>
    },
  ],
};
export const formCompletos = {};
