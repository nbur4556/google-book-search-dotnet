import React from 'react';

// Bootstrap Components
import Card from 'react-bootstrap/Card';

function BookResults(props) {
    return (
        <Card className={props.margin}>
            <Card.Header>{props.header}</Card.Header>
            <Card.Body>
                Results Here
            </Card.Body>
        </Card>
    )
}

export default BookResults;