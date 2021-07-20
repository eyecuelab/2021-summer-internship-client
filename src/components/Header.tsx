import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setToken } from '../store/slices/auth/authSlice';
import { setUsers } from '../store/slices/users/usersSlice';
import { setTethers } from '../store/slices/tethers/tethersSlice';
import { setOneUser } from '../store/slices/oneUser/oneUserSlice';
import { setMyTethers } from '../store/slices/myTethers/myTethersSlice';
import { setMyCompleteTethers } from '../store/slices/myCompleteTethers/myCompleteTethersSlice';
import { setUser } from '../store/slices/user/userSlice';
import { setAllParticipantLinks } from '../store/slices/allParticipantLinks/allParticipantLinksSlice';
import { setImpendingParticipantLink } from '../store/slices/impendingParticipantLink/fetchImpendingParticipantLinkSlice';

function Header() {
  const token = useAppSelector(({ auth }) => auth.token);
  const dispatch = useAppDispatch();
  const location = useLocation();

  function handleLogout() {
    dispatch(setToken({ token: '' }));
    dispatch(setUser([]));
    dispatch(setUsers([]));
    dispatch(setTethers([]));
    dispatch(setOneUser([]));
    dispatch(setMyTethers([]));
    dispatch(setMyCompleteTethers([]));
    dispatch(setAllParticipantLinks([]));
    dispatch(setImpendingParticipantLink(''));
  }

  return (
    <Navbar sticky='top'>
      <Nav>
        <Title>Tether</Title>
        {
          token &&
          <LinksContainer>
            <HeaderLink to='/tethers'
              active={location.pathname.includes('tethers')}
            >
              Tethers
            </HeaderLink>
            <HeaderLink to='/activity'
              active={location.pathname.includes('activity')}
              >
              Activity
            </HeaderLink>
            <HeaderLink to='/friends'
              active={location.pathname.includes('friends')}
              >
              Friends
            </HeaderLink>
            {token &&
              <Logout onClick={handleLogout}>Logout</Logout>
            }
          </LinksContainer>
        }
      </Nav>
    </Navbar>
  );
};

export default Header;

const Title = styled.div`
  font-family: MumboDisplaySSi;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
`;

const Nav = styled.div`
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  height: 100px;
  left: 0px;
  top: 0px;
  background: linear-gradient(145deg, rgba(31,75,112,1) 0%, rgba(47,131,192,1) 55%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  ${Title} {
    margin-left: 80px;
    margin-top: 35px;
    cursor: default;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  margin-right: 8vw;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 16px;
  text-transform: uppercase;
  a {
    padding-bottom: 26px;
    margin-right: 2vw;
    text-decoration: none;
    color: white;
    &:hover {
      opacity: .9;
    }
  }
  img {
    height: 35px;
  }
`;

const HeaderLink = styled(Link) <{ active: Boolean }>`
  ${(props) => props.active &&
    'border-bottom: 3px solid white'}
`;

const Logout = styled.div`
  cursor: pointer;
`;
