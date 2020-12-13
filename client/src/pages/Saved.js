import React from 'react';

// Components
import PageHeader from '../components/PageHeader.js';
import BookResults from '../components/BookResults.js';

function Saved() {
    return (
        <section>
            <PageHeader pageName="Saved Books" />
            <BookResults header="Results" margin="my-4" books={null} err="ERROR" />
        </section>
    )
}

export default Saved;