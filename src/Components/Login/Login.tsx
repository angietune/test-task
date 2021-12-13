import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [active, setActive] = useState('disabled');
  let navigate = useNavigate();

  useEffect(() => {
    const loginData = localStorage.getItem('token');
    if (loginData) setUsername('username');
    const passwordData = localStorage.getItem('token');
    if (passwordData) setPassword('password');
  }, []);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (username === 'username' && password === 'password') {
      if (remember) {
        localStorage.setItem('token', 'user');
        navigate('/users');
      } else {
        sessionStorage.setItem('token', 'user');
        navigate('/users');
      }
      navigate('/users');
    } else {
      setActive('error');
    }
  };
  const handleChange = () => {
    setRemember(!remember);
  };

  return (
    <>
      <p className={`${active}`}>enter correct username and password please</p>
      <form>
        <label className="username">
          <input
            value={username}
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
              setActive('disabled');
            }}
            required
          />
        </label>
        <label className="password">
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
              setActive('disabled');
            }}
            required
          />
        </label>
        <div className="remember">
          <input type="checkbox" onChange={handleChange} />
          <span>Remember me</span>
        </div>
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Log in
        </button>
      </form>
    </>
  );
};

export default Login;
