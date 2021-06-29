import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
// eslint-disable-next-line
import { getUsers, setUsers } from '../../store/slices/users/usersSlice';
// eslint-disable-next-line
import { getTethers, setTethers } from '../../store/slices/tethers/tethersSlice';
import './index.css';
import Form from '../../components/form';
// eslint-disable-next-line
import { getOneUser, getOneUsersTethers, setOneUser } from '../../store/slices/oneUser/oneUserSlice';
import { useCallback } from 'react';
import { makeRequest } from '../../store/utils/makeRequest';

const Users: FC = () => {
  const users = useAppSelector((state) => state.users);
  const user = useAppSelector((state) => state.oneUser);
  const tethers = useAppSelector((state) => state.tethers);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState('');

  useEffect(() => {
    return () => {
      dispatch(setUsers([]));
      dispatch(setTethers([]));
      dispatch(setOneUser([]));
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

  function handleMyUsername() {
    dispatch(getOneUser());
    setShow('username');
  }

  function handleGetMyTethers() {
    dispatch(getOneUsersTethers(user.id));
    setShow('userId');
  }

  const fetchMyTethers = useCallback(async () => {
    const url = `http://localhost:8000/users/${user.id}/tethers`;
    console.log(url);
    const { success, data, error } = await makeRequest(url, 'GET');
    if (success) {
      setTethers(data);
    }
    else {
      console.log(error);
    }
  }, [user.id]);

  // const fetchAPOTD = useCallback(async () => {
  //   const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  //   const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${formattedDate}`;
  //   console.log(url);
  //   const { success, data, error } = await makeRequest(url, 'GET');
  //   if (success) {
  //     setApod(data);
  //   } else {
  //     console.log(error);
  //   }
  // }, [date]);

  function handleShowCreateTetherPage() {
    setShow('form');
  }

  return (
    <div className="Users">
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleGetUsers}>
        Get Users
      </button>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleGetTethers}>
        Get Tethers
      </button>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleShowCreateTetherPage}>
        Create Tether
      </button>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleMyUsername}>
        Get My Username
      </button>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleGetMyTethers}>
        Get My Tethers
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
      {show === 'username' &&
        <>
          <p>{user?.username}</p>
        </>
      }
      {show === 'userId' &&
        <>
          <p>{user?.id}</p>
        </>
      }
    </div>
  );
};

export default Users;
