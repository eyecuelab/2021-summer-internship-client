import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from './constants/routes';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Users from './containers/Users';
import Tethers from './containers/Tethers';
import Activity from './containers/Activity';
import { useAppSelector } from './hooks';
import Header from './components/Header'

const App: FC = () => {
  const token = useAppSelector(({ auth }) => auth.token);

  const routes = useMemo(() => {
    const jsx = [<Route path={Routes.Home} exact component={Home} />];
    if (!token) {
      jsx.push(
        <Route path={Routes.Login} exact component={Login} />,
        <Route path={Routes.Register} exact component={Register} />,
        <Redirect to={Routes.Home} />
      );
    } if (token) {
      jsx.push(
      <Route path={Routes.Users} exact component={Users} />,
      <Route path={Routes.Tethers} exact component={Tethers} />,
      <Route path={Routes.Activity} exact component={Activity} />,
      <Redirect to={Routes.Tethers} />
      );
    }
    return jsx;
  }, [token]);

  return (
    <AppContainer>
      <HeaderContainer><Header /></HeaderContainer>
      <ContentContainer>
        <Switch>{routes}</Switch>
      </ContentContainer>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    'header'
    'content';
`;
const HeaderContainer = styled.div`
  grid-area: 'header';
`;
const ContentContainer = styled.div`
  grid-area: 'content';
  margin-top: 69px;
  margin-left: 77px;
  margin-right: 77px;
  color: #FFFFFF;
`;
