import React from 'react';
import renderer from 'react-test-renderer';

import { HomeScreen } from '../../../src/screens/Home/index';


it('renders Home page correctly', () => {
    expect(renderer.create(<HomeScreen/>)).toMatchSnapshot();
});
// to run test: npm run test