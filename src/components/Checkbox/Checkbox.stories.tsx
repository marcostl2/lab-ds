import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

export const WithLabel: StoryObj<CheckboxProps> = {
  decorators: [
    (Story) => (
      <div className="flex item-center gap-2">
        {Story()}
        <Text size="sm">
          I read and agree to the Terms of Service and Privacy Policy
        </Text>
      </div>
    ),
  ],
};
