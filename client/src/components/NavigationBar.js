import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
    return (
        <Navbar className="bg-secondary text-white">
            <Nav.Link as={Link} className="text-white" to="/">Saved Books</Nav.Link>
            <Nav.Link as={Link} className="text-white" to="/search">Search</Nav.Link>
        </Navbar>
    )
}

export default NavigationBar;