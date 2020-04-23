import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../src/components/App';

it('renders App correctly', () => {
    expect(renderer.create(<App />)).toMatchSnapshot();
});
// to run test: npm run test