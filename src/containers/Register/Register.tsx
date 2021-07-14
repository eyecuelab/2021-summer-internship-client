import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants/routes';
import { useAppDispatch } from '../../hooks';
import { register } from '../../store/slices/auth/authSlice';
import './index.css';
import styled from 'styled-components';

const Register: FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  function handleRegister() {
    dispatch(register({ username, email, password }));
  }

  return (
    <div className="Register">
      <header className="Register-header">
        <Title className="Register-logo">Tether</Title>
        <InputContainer>
          <label htmlFor="username">
            Username{' '}
            <input value={username} onChange={(event) => setUsername(event.target.value)} name="username" />
          </label>
          <label htmlFor="email">
            Email{' '}
            <input value={email} onChange={(event) => setEmail(event.target.value)} name="email" type="email" />
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
        <RegisterButton onClick={handleRegister}>Submit</RegisterButton>
        <div className="links">
          <Link to={Routes.Home}>Back Home</Link>
          <Link to={Routes.Login}>Log In</Link>
        </div>
      </header>
    </div>
  );
};

export default Register;

const InputContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: baseline;
  margin-bottom: 3rem;
`;

const Title = styled.div`
  font-family: MumboDisplaySSi;
  font-size: 14vw;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.02em;
`;

const RegisterButton = styled.button`
  background: #EEEEEE;
  backdrop-filter: blur(25px);
  margin-right: 5px;
  margin-left: 5px;
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
  transition: .2s;
  &:hover {
    background: #FFFFFF;
    color: #003E6A;
  }
`;