import React from 'react';
import Square from './Square';
import { Story, Meta } from '@storybook/react';

export default {
  component: Square,
  title: 'Square',
} as Meta;

const Template: Story<any> = (args) => <Square {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  value: 'O',
};

export const Cross = Template.bind({});
Cross.args = {
  value: 'X',
};

export const Triangle = Template.bind({});
Triangle.args = {
  value: '△',
};