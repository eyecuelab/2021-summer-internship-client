import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import './index.css';
import Form from '../../components/form';
import styled from 'styled-components';

const Tethers = styled.div`
  display: flex;
  p {
    padding-right:20px;
  }
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
`

const Name = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  text-transform: uppercase;
`

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
      <Tethers>
        <p>Current</p>
        <p>Completed</p>
      </Tethers>
      <Name>James Apples</Name>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleShowCreateTetherPage}>
        Create Tether
      </button>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleLogout}>
        Logout
      </button>
      {show === 'users' &&
        users?.map((user) => {
          return (
            <p key={user.id}>{user.email}</p>
          );
        })}
      {show === 'tethers' &&
        tethers?.map((tether) => {
          return (
            <p key={tether.tether_id}>{tether.tether_name}</p>
          );
        })
      }
      {show === 'form' &&
        <>
          <Form />
        </>
      }
    </div>
  );
};

export default Activity;