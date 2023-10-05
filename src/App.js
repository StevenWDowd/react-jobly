import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate } from "react-router-dom";
import Nav from './Nav';
import RoutesList from './RoutesList';
import userContext from './userContext';
import { useState, useEffect, useContext } from 'react';
import JoblyApi from './api';
import jwt_decode from "jwt-decode";


/** Function to render the outer shell of the app.
 *
 */
function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  //Passed to LoginForm as prop
  async function login(formData) {
    const tokenResp = await JoblyApi.getToken(formData);
    setToken(tokenResp);
  }

  //Called when token state is updated
  useEffect(function getUserData() {
    async function fetchUser() {
      if (token) {
        const { username } = jwt_decode(token);
        const newUser = await JoblyApi.getUserData(username);
        setCurrentUser(newUser);
      }
    }
    fetchUser();
  }, [token]);

  //Passed to SignupForm as prop
  async function signup(formData) {
    const token = await JoblyApi.registerUser(formData);
    setToken(token);
    if (token) {
      const { username } = jwt_decode(token);
      const newUser = await JoblyApi.getUserData(username);
      setCurrentUser(newUser);
    }
  }

  async function editProfile(formData) {
    if (token) {
      const { username } = jwt_decode(token);
      const updatedUser = await JoblyApi.updateUser(formData);
      setCurrentUser(updatedUser);
    }
  }

  //placed on logout button on navbar onClick
  function logout() {
    setCurrentUser(null);
    setToken(null);
    return <Navigate to="/" />;
  }

  return (
    <>
      <userContext.Provider value={{ currentUser }}>
        <BrowserRouter>
          <Nav logout={logout} />
          <RoutesList editProfile={editProfile} login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
