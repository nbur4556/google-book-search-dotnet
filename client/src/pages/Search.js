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

    // State
    const [searchState, setSearchState] = useState({
        searchTitle: '',
        searchResults: [],
        searchError: null
    });

    // Update Book Search Text and State
    const handleBookSearchInput = e => {
        setSearchState({ ...searchState, searchTitle: e.target.value });
    }

    // Searches API for Books
    const handleBookSearch = () => {
        api.searchBooksByName(searchState.searchTitle, (data, err) => {
            (!err)
                ? setSearchState({ ...searchState, searchResults: data, searchError: null })
                : setSearchState({ ...searchState, searchResults: [], searchError: err });
        });
    }

    return (
        <section>
            <PageHeader pageName="Search Books" />

            <InputGroup className="my-4">
                <InputGroup.Prepend>
                    <InputGroup.Text>Book Search</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={handleBookSearchInput} />
                <Button className="bg-secondary border-secondary text-light mx-2" onClick={handleBookSearch}>Search</Button>
            </InputGroup>

            {/* Contains API Results for Found Books */}
            <BookResults header="Results" margin="my-4" books={searchState.searchResults} err={searchState.searchError} />
        </section>
    );
}

export default Search;