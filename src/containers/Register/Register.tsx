import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants/routes';
import { useAppDispatch } from '../../hooks';
import { register } from '../../store/slices/auth/authSlice';
import './index.css';
import styled from 'styled-components';

// Added
// import { useEffect } from 'react';
// Added

const Register: FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Added
  // const [validLength, setValidLength] = useState(false);
  // const [hasNumber, setHasNumber] = useState(false);
  // const [upperCase, setUpperCase] = useState(false);
  // const [lowerCase, setLowerCase] = useState(false);
  // const [specialChar, setSpecialChar] = useState(false);
  // const [requiredLength] = useState(8);

  // useEffect(() => {
  //   setValidLength(password.length >= requiredLength ? true : false);
  //   setUpperCase(password.toString().toLowerCase() !== password);
  //   setLowerCase(password.toString().toUpperCase() !== password);
  //   setHasNumber(/\d/.test(password));
  //   setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password));

  // }, [password, requiredLength]);
  // Added

  const dispatch = useAppDispatch();

  function handleRegister() {
    dispatch(register({ username, email, password }));
  }

  return (
    <div className="Register">
      <header className="Register-header">
        <Title className="Register-logo">Tether</Title>
        {/* <img src={logo} className="Register-logo" alt="logo" />
        <p>
          Edit <code>src/containers/Register.tsx</code> and save to reload.
        </p> */}
        <div className="input-container">
          <label htmlFor="username">
            Username
            <input value={username} onChange={(event) => setUsername(event.target.value)} name="username" />
          </label>
          <label htmlFor="email">
            Email
            <input value={email} onChange={(event) => setEmail(event.target.value)} name="email" type="email" />
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
          {/* Added */}
          {/* <ul>
            <li>
              Valid Length: {validLength ? <span>✓</span> : <span>✗</span>}
            </li>
            <li>
              Has a Number: {hasNumber ? <span>✓</span> : <span>✗</span>}
            </li>
            <li>
              UpperCase: {upperCase ? <span>✓</span> : <span>✗</span>}
            </li>
            <li>
              LowerCase: {lowerCase ? <span>✓</span> : <span>✗</span>}
            </li>
            <li>
              Special Character: {specialChar ? <span>✓</span> : <span>✗</span>}
            </li>
          </ul> */}
          {/* Added */}
        </div>
        <div className="button">
          <button onClick={handleRegister}>Submit</button>
        </div>
        <div className="links">
          <Link to={Routes.Home} style={{color: '#FFFFFF', textDecoration: 'none'}}>Back Home</Link>
          <Link to={Routes.Login} style={{color: '#FFFFFF', textDecoration: 'none'}}>Log In</Link>
        </div>
      </header>
    </div>
  );
};

export default Register;

const Title = styled.div`
  font-family: MumboDisplaySSi;
  font-size: 14vw;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.02em;
`;