import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import './index.css';
import styled from 'styled-components';

const Activity: FC = () => {
  const user = useAppSelector((state) => state.oneUser);

  return (
    <div className="Activity">
      <Name>{user?.username}</Name>
    </div>
  );
};

export default Activity;

const Name = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  text-transform: uppercase;
`;
