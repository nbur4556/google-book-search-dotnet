import React from 'react';

// Bootstrap Components
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

// Components
import BookResults from '../components/BookResults.js';

function Search() {
    const margin = 'my-4';

    // Searches API for Books
    const searchBook = () => {
        console.log("Search Book");
    }

    return (
        <section>
            <InputGroup className={margin}>
                <InputGroup.Prepend>
                    <InputGroup.Text>Book Search</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl />
                <Button className="bg-secondary border-secondary text-light mx-2" onClick={searchBook}>Search</Button>
            </InputGroup>

            {/* Contains API Results for Found Books */}
            <BookResults header="Results" margin={margin} />
        </section>
    );
}

export default Search;