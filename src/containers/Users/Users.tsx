import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import { getUsers, setUsers } from '../../store/slices/users/usersSlice';
import './index.css';

const Users: FC = () => {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(setUsers([]));
    }
  }, [dispatch])

  function handleLogout() {
    dispatch(setToken({ token: '' }));
  }

  function handleGetUsers() {
    dispatch(getUsers());
  }

  return (
    <div className="Users">
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleGetUsers}>
        Get Users
      </button>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleLogout}>
        Logout
      </button>
      {users?.map((user) => {
        return (
          <p key={user.id}>{user.email}</p>
        );
      })}
    </div>
  );
};

export default Users;
