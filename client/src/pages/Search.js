import React from 'react';

// Bootstrap Components
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Search() {
    return (<section>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text id="searchLabel">Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl ariaDescribedby="searchLabel" />
        </InputGroup>
    </section>);
}

export default Search;