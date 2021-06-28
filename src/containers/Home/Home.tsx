import { FC } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Routes } from '../../constants/routes';
import { useAppSelector } from '../../hooks';
import './index.css';

const Home: FC = () => {
  const token = useAppSelector(({ auth }) => auth.token);

  // If user is logged in, redirect to /users route:
  if (token) {
    return <Redirect to={Routes.Users} />
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        <p>
          Edit <code>src/containers/Home.tsx</code> and save to reload.
        </p>
        <div className="links">
          <Link to={Routes.Login}>Log In</Link>
          <Link to={Routes.Register}>Register</Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
