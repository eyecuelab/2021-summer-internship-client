import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TetherHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 127px;
  left: 0px;
  top: 0px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.35);
`
const Title = styled.div`
  position: absolute;
  width: 132px;
  height: 48px;
  left: 80px;
  top: 61px;

  font-family: MumboDisplaySSi;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height */

  letter-spacing: -0.08em;

  color: #FFFFFF;
`


function Header() {
  return (
    <TetherHeader>
      <Title>Tether</Title>
    </TetherHeader>
  );
};

export default Header;