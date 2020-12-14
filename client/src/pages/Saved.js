import React, { useState, useEffect } from 'react';

// Components
import PageHeader from '../components/PageHeader.js';
import BookResults from '../components/BookResults.js';

// Assets 
import Api from '../util/api.js';

function Saved() {
    const api = new Api();

    const [savedState, setSavedState] = useState({
        savedResults: []
    });

    useEffect(() => {
        api.getSavedBooks(results => {
            setSavedState({ ...savedState, savedResults: results });
        });
    }, []);

    return (
        <section>
            <PageHeader pageName="Saved Books" />
            <BookResults header="Results" margin="my-4" books={savedState.savedResults} err={null} />
        </section>
    )
}

export default Saved;