import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import { getUsers } from '../../store/slices/users/usersSlice';
import './index.css';

const Ratings: FC = () => {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(setToken({ token: '' }));
  }

  function handleGetUsers() {
    dispatch(getUsers());
  }

  return (
    <div className="Ratings">
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

export default Ratings;
