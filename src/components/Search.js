import React, {createRef} from 'react';
import { FaSearch } from 'react-icons/fa';

export const Search = ({search}) => {
    const myRef = createRef();
    const handleChange = e => {
        search(myRef.current.value);
    }
    
    return (
        <div className="input-group mt-5" data-testid='searchcomponent'>
            <div className="input-group-prepend">
                <span className="input-group-text"><FaSearch /></span>
            </div>
            <input type="text"  data-testid="inputsearch__test"
                className="form-control border" 
                ref = {myRef}
                onChange={handleChange}
                 />
        </div>
    )
}
