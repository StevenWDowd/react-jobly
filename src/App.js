import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Nav from './Nav';
import RoutesList from './RoutesList';
import userContext from './userContext';
import { useState, useEffect, useContext } from 'react';
import JoblyApi from './api';


/** Function to render the outer shell of the app.
 *
 */
function App() {

  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);


  //TODO: login, signup, logout, editprofile? functions
  //TODO: wrap BrowserRouter in userContext component
  //TODO: add State to App to keep track of token, currUser



  //Passed to LoginForm as prop
  async function login(formData) {
    const tokenResp = await JoblyApi.getToken(formData);

    console.log("token resp is: ", tokenResp);
    setToken(tokenResp);
    setCurrentUser({username: formData.username});
  }

  //Called when token state is updated
  useEffect(function getUserData() {
    async function fetchUser() {
      if (currentUser) {
        const newUser = await JoblyApi.getUserData(currentUser.username);
        setCurrentUser(newUser);

      }
    }
    fetchUser();
  }, [token]);

  //Passed to SignupForm as prop
  async function signup(formData) {
    const token = await JoblyApi.registerUser(formData);
    setToken(token);
    setCurrentUser(u => ({
      ...u,
      username: formData.username,
    }));
  }

  //placed on logout button on navbar onClick
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <>
      <userContext.Provider value={{ currentUser }}>
        <BrowserRouter>
          <Nav logout={logout} />
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
