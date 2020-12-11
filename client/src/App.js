import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
        <BrowserRouter>
          <Route exact path="/"><Saved /></Route>
          <Route exact path="/search"><Search /></Route>
        </BrowserRouter>
      </Container>
    </article>
  );
}

export default App;
