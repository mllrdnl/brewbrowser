import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Header from './components/Header';
import useToken from './components/useToken';
import { MyNavBar } from './components/MyNavBar';

import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import axios from "axios";





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
        <MyNavBar />
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
    
  </div>
  </BrowserRouter>
  );
}

export default App;
