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
                    {
                        (props.err === null)
                            ? props.books.map((book, key) => {
                                return (
                                    <BookItem key={key} bookDetails={{
                                        imageSrc: book.image || "https://via.placeholder.com/150",
                                        title: book.title,
                                        description: book.description
                                    }} options={(<a href=".">Save</a>)} />
                                );
                            })
                            : <div>No books found.</div>
                    }
                </ListGroup >
            </Card.Body>
        </Card>
    )
}

export default BookResults;