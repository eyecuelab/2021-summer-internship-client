import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants/routes';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/slices/auth/authSlice';
import './index.css';
import styled from 'styled-components';


const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  function handleLogin() {
    dispatch(login({ username, password }));
  }

  return (
    <div className="Login">
      <header className="Login-header">
        <Title className="Login-logo">Tether</Title>
        {/* <img src={logo} className="Login-logo" alt="logo" />
        <p>
          Edit <code>src/containers/Login.tsx</code> and save to reload.
        </p> */}
        <div className="input-container">
          <label htmlFor="username">
            Username
            <input value={username} onChange={(event) => setUsername(event.target.value)} name="username" />
          </label>
          <label htmlFor="password">
            Password
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              name="password"
              type="password"
            />
          </label>
        </div>
        <div className="button">
          <LoginButton onClick={handleLogin}>Submit</LoginButton>
        </div>
        <div className="links">
          <Link to={Routes.Home} style={{color: '#FFFFFF', textDecoration: 'none'}}>Back Home</Link>
          <Link to={Routes.Register} style={{color: '#FFFFFF', textDecoration: 'none'}}>Register</Link>
        </div>
      </header>
    </div>
  );
};

export default Login;

const Title = styled.div`
  font-family: MumboDisplaySSi;
  font-size: 14vw;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.02em;
`;

const LoginButton = styled.button`

`