import React from 'react';

// Bootstrap Components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function Search() {
    const margin = 'my-4';

    const searchBook = () => {
        console.log("Search Book");
    }

    return (<section>
        <InputGroup className={margin}>
            <InputGroup.Prepend>
                <InputGroup.Text>Book Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
            <Button className="bg-secondary border-secondary text-light mx-2" onClick={searchBook}>Search</Button>
        </InputGroup>

        <Card className={margin}>
            <Card.Header>Results</Card.Header>
            <Card.Body>
                Results Here
            </Card.Body>
        </Card>
    </section>);
}

export default Search;