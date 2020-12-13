import React, { useState } from 'react';

// Bootstrap Components
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

// Components
import BookResults from '../components/BookResults.js';
import PageHeader from '../components/PageHeader.js';

// Assets
import Api from '../util/api.js';

function Search() {
    const api = new Api();
    const margin = 'my-4';

    // State
    const [searchState, setSearchState] = useState({
        searchTitle: ''
    });

    // Update Book Search Text and State
    const updateBookSearch = e => {
        setSearchState({ ...searchState, searchTitle: e.target.value });
    }

    // Searches API for Books
    const searchBook = () => {
        api.searchBooksByName(searchState.searchTitle);
    }

    return (
        <section>
            <PageHeader pageName="Search Books" />

            <InputGroup className={margin}>
                <InputGroup.Prepend>
                    <InputGroup.Text>Book Search</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={updateBookSearch} />
                <Button className="bg-secondary border-secondary text-light mx-2" onClick={searchBook}>Search</Button>
            </InputGroup>

            {/* Contains API Results for Found Books */}
            <BookResults header="Results" margin={margin} />
        </section>
    );
}

export default Search;