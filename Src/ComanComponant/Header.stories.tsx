// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import TopHeader from './TopHeader';


export default {
  title: 'components/Header',
  component: TopHeader,
} as ComponentMeta<typeof TopHeader>;

export const Basic: ComponentStory<typeof TopHeader> = args => (
  <TopHeader {...args} />
);

Basic.args = {
  screenName: 'Home',
  color: 'white',
  textColor: 'black',
};
