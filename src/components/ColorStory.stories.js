import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorStory from './ColorStory'

storiesOf('Theme', module).add('UI theme', () => <ColorStory />);