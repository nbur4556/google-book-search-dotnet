import React from 'react';

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Search() {
    return (<div>
        <Navbar className="bg-secondary text-white">Navigation</Navbar>

        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text id="searchLabel">Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl ariaDescribedby="searchLabel" />
        </InputGroup>
    </div>);
}

export default Search;