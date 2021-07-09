import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import { getOneUser } from '../../store/slices/oneUser/oneUserSlice';
import './index.css';
import styled from 'styled-components';

const Activity: FC = () => {
  const users = useAppSelector((state) => state.users);
  const user = useAppSelector((state) => state.oneUser);
  const tethers = useAppSelector((state) => state.tethers);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState('');

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
