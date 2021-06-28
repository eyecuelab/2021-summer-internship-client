import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import { getUsers, setUsers } from '../../store/slices/users/usersSlice';
import { getTethers, setTethers } from '../../store/slices/tethers/tethersSlice';
import './index.css';
import Form from '../../components/form';
import styled from 'styled-components';

const CurrentCompleted = styled.div`
  display: flex;
  p {
    padding-right:20px;
  }
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
`

const MainHeader = styled.div`
h1 {
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  text-transform: uppercase;
}
`

const Tethers: FC = () => {
  const users = useAppSelector((state) => state.users);
  const tethers = useAppSelector((state) => state.tethers);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState('');

  useEffect(() => {
    return () => {
      dispatch(setUsers([]));
      dispatch(setTethers([]));
    }
  }, [dispatch])

  function handleLogout() {
    dispatch(setToken({ token: '' }));
  }

  function handleGetUsers() {
    dispatch(getUsers());
    setShow('users');
  }

  function handleGetTethers() {
    dispatch(getTethers());
    setShow('tethers');
  }

  function handleShowCreateTetherPage() {
    setShow('form');
  }

  return (
    <div className="Tethers">
      <CurrentCompleted>
        <p>Current</p>
        <p>Completed</p>
      </CurrentCompleted>
      <MainHeader>
        <h1>Your Tethers</h1>
      </MainHeader>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleGetUsers}>
        Get Users
      </button>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleGetTethers}>
        Get Tethers
      </button>
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

export default Tethers;