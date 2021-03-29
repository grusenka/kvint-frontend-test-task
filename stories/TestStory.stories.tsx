import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import SwitchComponent from '../src/components/SwitchComponent';

export default {
  title: 'Тестовая стори',
  decorators: [
    withKnobs,
    (storyFn: () => React.ReactNode): React.ReactNode => storyFn(),
  ],
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const TestTaskStory = () => {
  return <SwitchComponent />;
};

TestTaskStory.story = {
  name: 'Тестовая стори',
};
