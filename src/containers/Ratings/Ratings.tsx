import { FC, useCallback, useState, useEffect, useMemo } from 'react';
import { useAppDispatch } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import { makeRequest } from '../../store/utils/makeRequest';
import './index.css';

interface User {
  media_type: string;
  id: string;
  username: string;
  email: string;
  password: string;
  tethers_ongoing: string;
  tethers_completed: string;
  created_on: string;
  updated_on: string;
  xp: number;
}

const Ratings: FC = () => {
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<User[] | null>(null);

  // let userArray: string = 'test';

  const fetchUsers = useCallback(async () => {
    const url = `/users`;
    const { success, data, error } = await makeRequest(url, 'GET');
    if (success) {
      setUsers(data);
      console.log(`data array is:`);
      console.log(data);
      console.log(`testing`);
    } else {
      console.log(`Error Received at Fetch User function`);
      console.log(error);
    }
  }, [setUsers]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  function handleLogout() {
    dispatch(setToken({ token: '' }));
  }

  function handleClick() {
    fetchUsers();
    console.log(`clicked!`);
  }

  const media = useMemo(() => {
    const { media_type = '', id = '', username = '', email = '', password = '', tethers_ongoing = '', tethers_completed = '', created_on = '', updated_on = '', xp = '' } = users ?? {};

    if (!users) {
      return (
        <button style={{ margin: '1rem', height: '25px' }} onClick={handleClick}>
          Next
        </button>
      )
    }
  }, []);

  return (
    <div className="Ratings">
      <header className="Ratings-header">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button style={{ margin: '1rem', height: '25px' }} onClick={handleClick}>
            Get Users
          </button>
        </div>

        <div className="button">
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </header>
    </div>
  );
};

export default Ratings;
