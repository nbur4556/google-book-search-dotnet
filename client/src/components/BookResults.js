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
                    <BookItem bookDetails={
                        {
                            imageSrc: "https://via.placeholder.com/150",
                            title: "Title 1",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                    } options={(<a href=".">Save</a>)} />
                    <BookItem bookDetails={
                        {
                            imageSrc: "https://via.placeholder.com/150",
                            title: "Title 2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                    } options={(<a href=".">Save</a>)} />
                    <BookItem bookDetails={
                        {
                            imageSrc: "https://via.placeholder.com/150",
                            title: "Title 3",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                    } options={(<a href=".">Save</a>)} />
                </ListGroup >
            </Card.Body>
        </Card>
    )
}

export default BookResults;