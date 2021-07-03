import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import './index.css';
import styled from 'styled-components';

const Activity: FC = () => {
  const users = useAppSelector((state) => state.users);
  const tethers = useAppSelector((state) => state.tethers);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState('');

  function handleLogout() {
    dispatch(setToken({ token: '' }));
  }

  function handleShowCreateTetherPage() {
    setShow('form');
  }

  return (
    <div className="Activity">
      <Name>James Apples</Name>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleShowCreateTetherPage}>
        Create Tether
      </button>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleLogout}>
        Logout
      </button>
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
`
