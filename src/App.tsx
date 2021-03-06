import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Routes } from './constants/routes';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Tethers from './containers/Tethers';
import Activity from './containers/Activity';
import Friends from './containers/Friends';
import { useAppSelector } from './hooks';
import Header from './components/Header';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

const App: FC = () => {
  const token = useAppSelector(({ auth }) => auth.token);
  const location =useLocation();

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
        <Route path={Routes.Tethers} exact component={Tethers} />,
        <Route path={Routes.Activity} exact component={Activity} />,
        <Route path={Routes.Friends} exact component={Friends} />,
        <Redirect to={Routes.Tethers} />
      );
    }
    return jsx;
  }, [token]);

  return (
    <AppContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="tethers"
          timeout={300}
        >
          <ContentContainer>
            <Switch>{routes}</Switch>
          </ContentContainer>
        </CSSTransition>
      </TransitionGroup>
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
  margin-top: 9vh;
  margin-left: 7vw;
  margin-right: 7vw;
  color: #FFFFFF;
`;
