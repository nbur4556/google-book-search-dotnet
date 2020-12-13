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

                    {props.books.map((book, key) => {
                        return (
                            <BookItem key={key} bookDetails={{
                                imageSrc: book.volumeInfo.imageLinks.smallThumbnail,
                                title: book.volumeInfo.title,
                                description: book.volumeInfo.description
                            }} options={(<a href=".">Save</a>)} />
                        );
                    })}

                </ListGroup >
            </Card.Body>
        </Card>
    )
}

export default BookResults;