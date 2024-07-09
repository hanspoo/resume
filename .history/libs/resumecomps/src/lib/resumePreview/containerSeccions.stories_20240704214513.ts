import { ContainerSeccions } from './ContainerSeccions';
import { ChakraProvider } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '@free-resume/redux-store';

type Story = StoryObj<typeof Template>;
export default {
  title: 'Components/DocumentoCurriculum',
  component: ContainerSeccions,
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

const Template = (args: any) => <ContainerSeccions {...args} />;

export const Default = Template.bind({});
