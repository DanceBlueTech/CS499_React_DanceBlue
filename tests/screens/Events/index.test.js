import React from 'react';
import renderer from 'react-test-renderer';

import { EventsScreen } from '../../../src/screens/Events/index';

it('renders Events page correctly', () => {
    expect(renderer.create(<EventsScreen/>)).toMatchSnapshot();
});
// to run test: npm run test