import { render, fireEvent } from 'react-native-testing-library';

import React from 'react';
import Commit from '../src/components/Commit/Commit';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const data = {
        author: {
            avatar_url: 'https://asd.com/asd.jpg',
            login: 'blah'
        },
        commit:{
            committer: {
                name: 'ali',
            },
            message: 'blah blah blah \n'
        }};
    const tree = renderer.create(<Commit data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
});
