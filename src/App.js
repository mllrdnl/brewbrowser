import logo from './logo.svg';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; 

function App() {
  return (
      <div className="App">
        <Container fluid>
          <Row>
            <Navbar className="d-flex" bg="dark" variant="dark">
            <Col xs={2}>
            <Navbar.Brand href="#home" className="justify-content-start ms-0">BrewBrowser</Navbar.Brand>
            </Col>
            <Col>
            <Nav className="justify-content-end">
              <Nav.Link href="#" >Favorites</Nav.Link>
              <Nav.Link href="#">Wish List</Nav.Link>
              <Nav.Link href="#"><FontAwesomeIcon icon={solid('user')} /></Nav.Link>
            </Nav>
            </Col>
          </Navbar>
      
      </Row>
    </Container>
  </div>
    
  );
}

export default App;
