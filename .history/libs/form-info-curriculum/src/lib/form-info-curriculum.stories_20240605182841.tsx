import { FormInfoCurriculum } from './form-info-curriculum';
import { ChakraProvider } from '@chakra-ui/react';

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
Default.args = {};
