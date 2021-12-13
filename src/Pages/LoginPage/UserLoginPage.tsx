import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import Login from '../../Components/Login/Login';
import './UserLoginPage.scss';

const UserLoginPage = () => {
  return (
    <div className="login-screen">
      <Logo />
      <h1 className="main-title">Welcome to the Learning Management System</h1>
      <p className="subtitle">Please log to continue</p>
      <Login />
    </div>
  );
};

export default UserLoginPage;
