import React from 'react';

// Bootstrap Components
import Card from 'react-bootstrap/Card';

// Components
import BookItem from './BookItem.js';

function BookResults(props) {
    return (
        <Card className={props.margin}>
            <Card.Header>{props.header}</Card.Header>
            <Card.Body>
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
            </Card.Body>
        </Card>
    )
}

export default BookResults;