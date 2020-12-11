import React from 'react';

// Bootstrap Components
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Search() {
    return (<section>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text id="searchLabel">Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl ariaDescribedby="searchLabel" />
        </InputGroup>

        <Card>
            <Card.Header>Results</Card.Header>
            <Card.Body>
                Results Here
            </Card.Body>
        </Card>
    </section>);
}

export default Search;