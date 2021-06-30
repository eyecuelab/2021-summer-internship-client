import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import { getUsers, setUsers } from '../../store/slices/users/usersSlice';
import { getTethers, setTethers } from '../../store/slices/tethers/tethersSlice';
import './index.css';
import Form from '../../components/form';
import styled from 'styled-components';
import Modal from 'react-modal';
import { getOneUsersTethers } from '../../store/slices/myTethers/myTethersSlice';
import { getOneUser } from '../../store/slices/oneUser/oneUserSlice';

const CurrentCompleted = styled.div`
  display: flex;
  cursor: pointer;
  p {
    padding-right:20px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
`

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    text-transform: uppercase;
    margin-right: 15px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`
const AddNewTether = styled.button`
  cursor: pointer;
  width: 200px;
  height: 34px;
  background: #003E6A;
  border: none;
  border-radius: 10px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    inset: '50% auto auto 50%',
    border: 'none',
    overflow: 'auto',
    borderRadius: '12px',
    outline: 'none',
    padding: '0px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

Modal.setAppElement('#root');

const Tethers: FC = () => {
  const users = useAppSelector((state) => state.users);
  const user = useAppSelector((state) => state.oneUser);
  const tethers = useAppSelector((state) => state.tethers);
  const myTethers = useAppSelector((state) => state.myTethers);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState('');
  const [activeLink, setActiveLink] = useState('current');
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    dispatch(getOneUser());
    dispatch(getOneUsersTethers(user.id));
    setShow('tethers');
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleShowCreateTetherPage() {
    openModal();
    // setShow('form');
  }

  return (
    <div className="Tethers">
      <CurrentCompleted>
        <p id='current' onClick={handleGetTethers}>Current</p>
        <p id='completed'>Completed</p>
      </CurrentCompleted>
      <MainHeader>
        <h1>Your Tethers</h1>
        <AddNewTether onClick={handleShowCreateTetherPage}>
          Add New
        </AddNewTether>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <Form closeModal={closeModal} />
        </Modal>
      </MainHeader>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleGetUsers}>
        Get Users
      </button>
      <button style={{ margin: '1rem', height: '25px' }} onClick={handleGetTethers}>
        Get Tethers
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
        myTethers?.map((myTether) => {
          return (
            <p key={myTether.tether_id}>{myTether.tether_name} created by {myTether.tether_created_by_plain}</p>
          );
        })
      }
    </div>
  );
};

export default Tethers;