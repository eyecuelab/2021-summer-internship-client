import React from 'react';
import styled from 'styled-components';
import UserIcon from './UserIcon';

const AvatarCircle = () => {
  return (
    <Circle>
      <Icon>
        <UserIcon />
      </Icon>
    </Circle>
  );
};

export default AvatarCircle;

const Circle = styled.div`
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
`;

const Icon = styled.div`
  border-radius: 50%;
  height: 25px;
  width: 25px;
  overflow: hidden;
  text-align: center;
  padding-top: 3px;
  opacity: .5;
`;