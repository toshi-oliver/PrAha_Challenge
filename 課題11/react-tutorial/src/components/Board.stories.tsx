import React from 'react';
import Board from "./Board"
// import BoardPropsInterface  from './Board';
import { Story, Meta } from '@storybook/react';

export default {
  component: Board,
  title: 'Board',
} as Meta
// const Template: Story<BoardPropsInterface> = (args) => <Board {...args} />;
const Template: Story<any> = (args) => <Board {...args} />;

export const Triangle = Template.bind({});
Triangle.args = {
  squares: Array(9).fill("△"),
  xIsNext: true,
  winner: ""
};