import React from 'react';
import Game from './Game';

let component = {
  title: 'Game',
  component: Game,
};

const Template = (args) => <Game {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: [{ squares: [] }],
  stepNumber: 0,
  status: '次のプレイヤー: X',
  handleClick: () => {
    console.log('handleClick');
  },
  jumpTo: () => {
    console.log('jumpTo');
  },
};

export const WinnerX = Template.bind({});
WinnerX.args = {
  history: [
    { squares: ['X', null, null, null, null, null, null, null, null] },
    { squares: ['X', 'O', null, null, null, null, null, null, null] },
    { squares: ['X', 'O', 'X', null, null, null, null, null, null] },
    { squares: ['X', 'O', 'X', 'O', null, null, null, null, null] },
    { squares: ['X', 'O', 'X', 'O', 'X', null, null, null, null] },
    { squares: ['X', 'O', 'X', 'O', 'X', 'O', null, null, null] },
    { squares: ['X', 'O', 'X', 'O', 'X', 'O', 'X', null, null] },
  ],
  stepNumber: 7,
  status: 'Winner: X',
  handleClick: () => {
    console.log('handleClick');
  },
  jumpTo: () => {
    console.log('jumpTo');
  },
};

export const Draw = Template.bind({});
Draw.args = {
  history: [
    { squares: [null, null, null, null, null, null, null, null, null] },
    { squares: ['X', null, null, null, null, null, null, null, null] },
    { squares: ['X', null, null, null, 'O', null, null, null, null] },
    { squares: ['X', null, null, null, 'O', null, null, null, 'X'] },
    { squares: ['X', 'O', null, null, 'O', null, null, null, 'X'] },
    { squares: ['X', 'O', null, null, 'O', null, null, 'X', 'X'] },
    { squares: ['X', 'O', null, null, 'O', null, 'O', 'X', 'X'] },
    { squares: ['X', 'O', 'X', null, 'O', null, 'O', 'X', 'X'] },
    { squares: ['X', 'O', 'X', null, 'O', 'O', 'O', 'X', 'X'] },
    { squares: ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'] },
  ],
  stepNumber: 9,
  status: 'Draw!',
  handleClick: () => {
    console.log('handleClick');
  },
  jumpTo: () => {
    console.log('jumpTo');
  },
};

export default component;