import type { Meta, StoryObj } from '@storybook/react';
import { FormInfoCurriculum } from './form-info-curriculum';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FormInfoCurriculum> = {
  component: FormInfoCurriculum,
  title: 'FormInfoCurriculum',
};
export default meta;
type Story = StoryObj<typeof FormInfoCurriculum>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FormInfoCurriculum!/gi)).toBeTruthy();
  },
};
