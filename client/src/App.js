import React from 'react';

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// Components
import Saved from './pages/Saved.js';
import Search from './pages/Search.js';

function App() {
  return (
    <article>
      <Navbar className="bg-secondary text-white">Navigation</Navbar>

      <Container>
        <Saved />
        {/* <Search /> */}
      </Container>
    </article>
  );
}

export default App;
