import React from 'react';
import Game from './Game';

const Template = (args) => <Game {...args} />;

export const Default = Template.bind({});
Default.args = {};

let components = {
  title: 'Game',
  component: Game,
};

export default components;