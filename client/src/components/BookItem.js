import React from 'react';

// Bootstrap Component
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

function BookItem() {
    return (
        <ListGroup.Item>

            <ListGroup variant="horizontal flush">
                <ListGroup.Item className="border-0">
                    <Image src="https://via.placeholder.com/150" />
                </ListGroup.Item>
                <ListGroup.Item className="border-0">Book Name</ListGroup.Item>
                <ListGroup.Item className="border-0">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </ListGroup.Item>
                <ListGroup.Item className="border-0">Book Options</ListGroup.Item>
            </ListGroup>

        </ListGroup.Item>
    );
}

export default BookItem;