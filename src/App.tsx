import React, { FC, useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from './constants/routes';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Users from './containers/Users';
import Tethers from './containers/Tethers';
import { useAppSelector } from './hooks';

const App: FC = () => {
  const token = useAppSelector(({ auth }) => auth.token);

  const routes = useMemo(() => {
    const jsx = [<Route path={Routes.Home} exact component={Home} />];
    if (!token) {
      jsx.push(
        <Route path={Routes.Login} exact component={Login} />,
        <Route path={Routes.Register} exact component={Register} />,
        <Redirect to={Routes.Home} />,
      );
    } else {
      jsx.push(
        <Route path={Routes.Tethers} exact component={Tethers} />,
        <Redirect to={Routes.Tethers} />,
        // <Route path={Routes.Users} exact component={Users} />,
        // <Redirect to={Routes.Users} />,
      );
    }
    return jsx;
  }, [token]);

  return <Switch>{routes}</Switch>;
};

export default App;
