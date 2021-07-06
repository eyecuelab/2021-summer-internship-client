import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

const Title = styled.div`
  font-family: MumboDisplaySSi;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 48px;
  letter-spacing: -0.08em;
`
const Nav = styled.div`
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  position: absolute;
  align-items: baseline;
  width: 100%;
  height: 100px;
  left: 0px;
  top: 0px;
  background: linear-gradient(90deg, rgba(32,79,119,1) 0%, rgba(46,129,188,1) 70%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  ${Title} {
    margin-left: 80px;
    margin-top: 40px;
  }
`
const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin-right: 6vw;
  margin-left: 55%;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 23px;
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: white;
    &:hover {
      opacity: .8;
    }
  }
`

function Header() {
  return (
    <Navbar sticky='top'>
      <Nav>
        <Title>Tether</Title>
        <LinksContainer data-testid="nav-bar-links">
          <Link to='/tethers'>Tethers</Link>
          <Link to='/activity'>Activity</Link>
          <Link to='/friends'>Friends</Link>
          <Link to='/activity'>AV</Link>
        </LinksContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;