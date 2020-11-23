import React from 'react';
import renderer from 'react-test-renderer';

import { MoreScreen } from '../../../src/screens/More/index';


it('renders More page correctly', () => {
    expect(renderer.create(<MoreScreen/>)).toMatchSnapshot();
});
// to run test: npm run test