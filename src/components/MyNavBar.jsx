import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; 


export const MyNavBar = () => {

  return(
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
              <NavDropdown title="Settings" id="collasible-nav-dropdown">
              <NavDropdown.Item href="">My Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Col>
          </Navbar>
      
      </Row>
      
    </Container>
  )
}

      