import React from 'react';

// Bootstrap Components
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// Components
import BookItem from './BookItem.js';

function BookResults(props) {
    return (
        <Card className="my-4">
            <Card.Header>{props.header}</Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    {(props.err === null)
                        ? props.books.map((book) => {
                            return (
                                <BookItem key={book._id} bookDetails={{
                                    imageSrc: book.image || "https://via.placeholder.com/150",
                                    title: book.title,
                                    description: book.description
                                }} options={
                                    (<a href="#0" databookid={book._id} onClick={props.handleClick}>{props.clickText}</a>)
                                } />
                            );
                        })
                        : <div>No books found.</div>}
                </ListGroup >
            </Card.Body>
        </Card>
    )
}

export default BookResults;