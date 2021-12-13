import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLoginPage from './Pages/LoginPage/UserLoginPage';
import UserListPage from './Pages/UserListPage/UserListPage';

const App = () => {
  const isLoggedIn = () => {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    return !!token;
  };
  return (
    <BrowserRouter basename="/Projects/test-task">
      <Routes>
        <Route path="/" element={<UserLoginPage />} />
        <Route path="/users" element={isLoggedIn() ? <UserListPage /> : null} />
        <Route path="*" element={<UserLoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
