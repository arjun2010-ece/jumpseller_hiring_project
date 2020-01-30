import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

import {posts} from '../fixtures';

beforeEach(cleanup);

describe('App components', () => {
    test('renders Search subcomponent in App component', () => {
        const { getByTestId } = render(<App />);
        const postElement = getByTestId('searchcomponent');
        expect(postElement).toBeInTheDocument();
      });
    
      test('renders loading functionality in App component', () => {
        const { getByTestId } = render(<App loading={false} posts={posts} />);
        const loadingElement = getByTestId('loading__test');
        expect(loadingElement).toBeInTheDocument();
      });
})


