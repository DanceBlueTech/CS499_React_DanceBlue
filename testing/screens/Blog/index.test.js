import React from 'react';
import renderer from 'react-test-renderer';

import { BlogScreen } from '../../../src/screens/Blog/index';

it('renders Blog page correctly', () => {
    expect(renderer.create(<BlogScreen/>)).toMatchSnapshot();
});
// to run test: npm run test