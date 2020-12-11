import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
    return (
        <Navbar className="bg-secondary text-white">
            <h2 className="mx-3">My Book List</h2>
            <Nav.Link as={Link} className="text-white" to="/">Saved Books</Nav.Link>
            <Nav.Link as={Link} className="text-white" to="/search">Search</Nav.Link>
        </Navbar>
    )
}

export default NavigationBar;