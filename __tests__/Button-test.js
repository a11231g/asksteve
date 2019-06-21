import React from 'react';
import Button from '../src/components/Button/Button';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
});
