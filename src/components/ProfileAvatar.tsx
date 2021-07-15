import React from 'react';
import styled from 'styled-components';

const ProfileAvatar = () => {
  return (
    <Circle>
      <Icon>

      </Icon>
    </Circle>
  );
};

export default ProfileAvatar;

const Circle = styled.div`
  width: 132px;
  height: 132px;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`

`;