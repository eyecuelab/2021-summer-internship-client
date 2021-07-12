import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import { getUsers, setUsers } from '../../store/slices/users/usersSlice';
import { getTethers, setTethers } from '../../store/slices/tethers/tethersSlice';
import './index.css';
import { getOneUser, setOneUser } from '../../store/slices/oneUser/oneUserSlice';
import { getOneUsersTethers, setOneUsersTethers } from '../../store/slices/myTethers/myTethersSlice';
import { setUser } from '../../store/slices/user/userSlice';
import { setMyCompleteTethers } from '../../store/slices/myCompleteTethers/myCompleteTethersSlice';
import { setallParticipantLinks } from '../../store/slices/allParticipantLinks/allParticipantLinksSlice';
import { setImpendingParticipantLink } from '../../store/slices/impendingParticipantLink/fetchImpendingParticipantLinkSlice';

const Users: FC = () => {
  const users = useAppSelector((state) => state.users);
  const user = useAppSelector((state) => state.oneUser);
  const tethers = useAppSelector((state) => state.tethers);
  const myTethers = useAppSelector((state) => state.myTethers);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState('');

  useEffect(() => {
    return () => {
      dispatch(setUsers([]));
      dispatch(setTethers([]));
      dispatch(setOneUsersTethers([]));
    }
  }, [dispatch])

  function handleLogout() {
    dispatch(setToken({ token: '' }));
    dispatch(setUser([]));
    dispatch(setUsers([]));
    dispatch(setTethers([]));
    dispatch(setOneUser([]));
    dispatch(setOneUsersTethers([]));
    dispatch(setMyCompleteTethers([]));
    dispatch(setallParticipantLinks([]));
    dispatch(setImpendingParticipantLink([]));
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
    setShow('myTethers');
  }
  
  function handleGetParticipatingTethers() {
    // dispatch(setParticipatingTethers([]));
    // dispatch(getParticipatingTethers(user.id));
    setShow('participatingTethers');
  }

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
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleGetParticipatingTethers}>
        Get # of Participating Tethers
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
            <p key={tether.tether_id}>{tether.tether_name} created by {tether.tether_created_by_plain} at {tether.tether_opened_on}</p>
          );
        })
      }
      {show === 'form' &&
        <>
          {/* <Form /> */}
        </>
      }
      {show === 'username' &&
        <>
          <p>{user?.username}</p>
        </>
      }
      {show === 'myTethers' && (myTethers) &&
        myTethers?.map((myTether) => {
          return (
            <p key={myTether.id}>{myTether.tether_id.tether_name} created by {myTether.tether_id.tether_created_by_plain}</p>
          );
        })
      }
    </div>
  );
};

export default Users;
