import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

function PageHeader(props) {
    return (
        <Jumbotron className="my-3">
            <h1 className="text-dark">{props.pageName}</h1>
        </Jumbotron>
    )
}

export default PageHeader;