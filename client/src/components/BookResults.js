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
                    <BookItem bookDetails={{
                        imageSrc: props.books[0].volumeInfo.imageLinks.smallThumbnail,
                        title: props.books[0].volumeInfo.title,
                        description: props.books[0].volumeInfo.description
                    }} options={(<a href=".">Save</a>)} />
                </ListGroup >
            </Card.Body>
        </Card>
    )
}

export default BookResults;