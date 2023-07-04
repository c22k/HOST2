import React from 'react';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import RequestResetPage from './pages/RequestResetPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
const App = () => {
  return (

   
     <div>
      <RegisterPage/>
      <LoginPage/>
      <RequestResetPage/>
      <ResetPasswordPage/>

      
     </div>
      
  );
};

export default App;
