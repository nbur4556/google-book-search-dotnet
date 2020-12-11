import React from 'react';

// Bootstrap Component
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

function BookItem(props) {
    return (
        <ListGroup.Item>

            <ListGroup variant="horizontal flush">
                <ListGroup.Item className="border-0">
                    <Image src={props.bookDetails.imageSrc} />
                </ListGroup.Item>
                <ListGroup.Item className="border-0">{props.bookDetails.title}</ListGroup.Item>
                <ListGroup.Item className="border-0">{props.bookDetails.description}</ListGroup.Item>
                <ListGroup.Item className="border-0">{props.options}</ListGroup.Item>
            </ListGroup>

        </ListGroup.Item>
    );
}

export default BookItem;