import React from 'react';

// Bootstrap Components
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// Components
import BookItem from './BookItem.js';

function BookResults(props) {
    return (
        <Card className={props.margin}>
            <Card.Header>{props.header}</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                </ListGroup >
            </Card.Body>
        </Card>
    )
}

export default BookResults;