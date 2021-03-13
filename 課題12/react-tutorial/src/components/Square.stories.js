import React from 'react';
import Square from './Square';

export default {
  component: Square,
  title: 'Square',
  argTypes: { onClick: { action: 'onClick' } },
};

const Template = (args) => <Square {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  value: 'O',
};

export const Cross = Template.bind({});
Cross.args = {
  value: 'X',
};
