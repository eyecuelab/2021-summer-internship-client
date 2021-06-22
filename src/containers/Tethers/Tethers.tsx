import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import { getTethers, setTethers } from '../../store/slices/tethers/tethersSlice';
import './index.css';

const Tethers: FC = () => {
  const tethers = useAppSelector((state) => state.tethers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(setTethers([]));
    }
  }, [dispatch])

  function handleLogout() {
    dispatch(setToken({ token: '' }));
  }

  function handleGetTethers() {
    dispatch(getTethers());
  }

  return (
    <div className="Tethers">
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleGetTethers}>
        Get Tethers
      </button>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleLogout}>
        Logout
      </button>
      {tethers?.map((tether) => {
        return (
          <p key={tether.id}>{tether.name}</p>
        );
      })}
    </div>
  );
};

export default Tethers;
