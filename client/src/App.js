import React from 'react';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// Components
import Search from './pages/Search.js';

function App() {
  return (
    <article>
      <Navbar className="bg-secondary text-white">Navigation</Navbar>
      <Container>
        <Search />
      </Container>
    </article>
  );
}

export default App;
