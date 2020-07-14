import React from 'react';
import './App.css';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import FormPage from './components/SignUpForm';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage /> 
        </Route>
        <Route path="/users/:userId" component={ProfilePage}/>
        <Route path="/form" component={FormPage}/>
      </Switch>
    </>
  );
}

export default App;
