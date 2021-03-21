import React from 'react';
import Board from './Board';

export default {
  component: Board,
  title: 'Board',
  argTypes: { onClick: { action: 'onClick' } },
};

const Template = (args) => <Board {...args} />;

export const allCircle = Template.bind({});
allCircle.args = {
  squares: ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
};

export const allCross = Template.bind({});
allCross.args = {
  squares: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
};

export const allTriangle = Template.bind({});
allTriangle.args = {
  squares: ['△', '△', '△', '△', '△', '△', '△', '△', '△'],
};