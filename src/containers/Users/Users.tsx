import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import { getUsers, setUsers } from '../../store/slices/users/usersSlice';
import { getTethers, setTethers } from '../../store/slices/tethers/tethersSlice';
import './index.css';

const Users: FC = () => {
  const users = useAppSelector((state) => state.users);
  const tethers = useAppSelector((state) => state.tethers);
  const dispatch = useAppDispatch();

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
    dispatch(setTethers([]));
  }

  function handleGetTethers() {
    dispatch(getTethers());
    dispatch(setUsers([]));
  }

  return (
    <div className="Users">
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleGetUsers}>
        Get Users
      </button>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleGetTethers}>
        Get Tethers
      </button>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleLogout}>
        Logout
      </button>
      {users?.map((user) => {
        return (
          <p key={user.id}>{user.email}</p>
        );
      })}
      {tethers?.map((tether) => {
        return (
          <p key={tether.id}>{tether.name}</p>
        );
      })}
    </div>
  );
};

export default Users;
