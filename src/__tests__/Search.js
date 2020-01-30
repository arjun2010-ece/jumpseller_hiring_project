import React from 'react';
import { render, cleanup,fireEvent } from '@testing-library/react';
import {Search} from '../components/Search';


beforeEach(cleanup);

describe('Search components', () => {
    test('checking for the existence of Search component', () => {
        const { getByTestId } = render(<Search />);
        const searchElement = getByTestId('searchcomponent');
        expect(searchElement).toBeInTheDocument();
        expect(getByTestId('inputsearch__test')).toBeInTheDocument();
      });

      test('checking for the existence of input element that accepts an onChange event ', () => {
        const { getByTestId, debug } = render(<Search />);
        expect(getByTestId('inputsearch__test')).toBeInTheDocument();
      });
    
      
      
})


