import React from 'react';
import { FormInfoCurriculum } from './form-info-curriculum';
import { ChakraProvider } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

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
Default.args = {};
