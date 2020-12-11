import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'

function NavigationBar() {
    return (
        <Navbar className="bg-secondary text-white">
            <Link to="/">Saved Books</Link>
            <Link to="/search">Search</Link>
        </Navbar>
    )
}

export default NavigationBar;