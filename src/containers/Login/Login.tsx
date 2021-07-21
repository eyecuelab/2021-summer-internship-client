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
        <InputContainer>
          <label htmlFor="username">
            Username{' '}
            <input spellCheck='false' value={username} onChange={(event) => setUsername(event.target.value)} name="username" />
          </label>
          <label htmlFor="password">
            Password{' '}
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              name="password"
              type="password"
            />
          </label>
        </InputContainer>
        <LoginButton onClick={handleLogin}>Submit</LoginButton>
        <div className="links">
          <Link to={Routes.Home}>Back Home</Link>
          <Link to={Routes.Register}>Register</Link>
        </div>
      </header>
    </div>
  );
};

export default Login;

const InputContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
  align-items: baseline;
  margin-bottom: 3rem;
  input {
    height: 20px;
    width: 120px;
    padding-left: 10px;
    border-radius: 4px;
    border: none;
    color: #003E6A;
  }
`;

const Title = styled.div`
  font-family: MumboDisplaySSi;
  font-size: 14vw;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.02em;
`;

const LoginButton = styled.button`
  background: #EEEEEE;
  backdrop-filter: blur(25px);
  margin-bottom: 2rem;
  cursor: pointer;
  width: 162px;
  height: 34px;
  background: #003E6A;
  border-radius: 12px;
  border: none;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  transition: .1s;
  &:hover {
    background: #FFFFFF;
    color: #003E6A;
  }
`;