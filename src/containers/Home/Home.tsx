import { FC } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Routes } from '../../constants/routes';
import { useAppSelector } from '../../hooks';
import './index.css';
import styled from 'styled-components';

const Home: FC = () => {
  const token = useAppSelector(({ auth }) => auth.token);

  // If user is logged in, redirect to /tethers route:
  if (token) {
    return <Redirect to={Routes.Tethers} />
  };

  return (
    <div className="App">
      <header className="App-header">
      <Title className="App-logo">Tether</Title>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/containers/Home.tsx</code> and save to reload.
        </p> */}
        <div className="links">
          <Link to={Routes.Login} style={{color: '#FFFFFF', textDecoration: 'none'}}>Log In</Link>
          <Link to={Routes.Register} style={{color: '#FFFFFF', textDecoration: 'none'}}>Register</Link>
        </div>
      </header>
    </div>
  );
};

export default Home;

const Title = styled.div`
  font-family: MumboDisplaySSi;
  font-size: 14vw;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.02em;
`;