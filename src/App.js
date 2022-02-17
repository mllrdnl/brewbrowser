import logo from './logo.svg';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
      <div className="App">
        <Container fluid>
          <Row>
            <Navbar className="d-flex" bg="dark" variant="dark">
            
            <Navbar.Brand href="#home">BrewBrowser</Navbar.Brand>
            <Nav className="d-flex justify-content-end">
              <Nav.Link href="#home">Home</Nav.Link>
              
              <Nav.Link href="#">Favorites</Nav.Link>
              <Nav.Link href="#">Wish List</Nav.Link>
              
            </Nav>
        
          </Navbar>
      
      </Row>
    </Container>
  </div>
    
  );
}

export default App;
