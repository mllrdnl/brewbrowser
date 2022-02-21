import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Header from './components/Header';
import useToken from './components/useToken';

import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import axios from "axios";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; 


function App() {

  const { token, removeToken, setToken } = useToken();

  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

  return (
    <BrowserRouter>
      <div className="App">
        <Header token={removeToken}/>
        {!token && token!=="" &&token!== undefined?  
        <Login setToken={setToken} />
        :(
          <>
            <Routes>
              <Route exact path="/profile" element={<Profile token={token} setToken={setToken}/>}></Route>
            </Routes>
          </>
        )}
        {/* <Container fluid>
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
      
    </Container> */}
  </div>
  </BrowserRouter>
  );
}

export default App;
