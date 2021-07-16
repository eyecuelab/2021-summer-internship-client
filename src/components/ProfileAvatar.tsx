import React from 'react';
import styled from 'styled-components';

const ProfileAvatar = () => {
  return (
    <Circle>
      <img src="http://placekitten.com/200/300" alt="kitten" />
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
  img {
    width: 122px;
  height: 122px;
  border-radius: 50%;
  }
`;