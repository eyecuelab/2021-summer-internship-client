import { FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import { getUsers, setUsers } from '../../store/slices/users/usersSlice';
import { getTethers, setTethers } from '../../store/slices/tethers/tethersSlice';
import './index.css';
import Form from '../../components/form';
import { getOneUsersTethers } from '../../store/slices/myTethers/myTethersSlice';
import { getOneUser } from '../../store/slices/oneUser/oneUserSlice';
import searchIcon from '../../assets/search-icon.png';

Modal.setAppElement('#root');

const Tethers: FC = () => {
  const users = useAppSelector((state) => state.users);
  const user = useAppSelector((state) => state.oneUser);
  const tethers = useAppSelector((state) => state.tethers);
  const myTethers = useAppSelector((state) => state.myTethers);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState('your');

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
      <YourFind>
        <StatusText
          inactive={activeStatus === 'find'}
          onClick={() => {
            setActiveStatus('your');
            handleGetTethers();
          }}
        >
          Your
        </StatusText>
        <StatusText
          inactive={activeStatus === 'your'}
          onClick={() => setActiveStatus('find')}
        >
          Find
        </StatusText>
      </YourFind>
      <MainHeader>
        <h1>Friends</h1>
        <Search onClick={handleShowCreateTetherPage}>
          <img src={searchIcon} alt="search-icon" />
          Search Your Friends
        </Search>
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
      <button
        style={{ margin: '1rem', height: '25px' }}
        onClick={handleLogout}
      >
        Logout
      </button>
      {
        show === 'users' &&
        users?.map((user) => {
          return (
            <p key={user.id}>{user.email}</p>
            );
          })
        }
      {
        show === 'tethers' &&
        myTethers?.map((myTether) => {
          const formattedDate = dayjs(myTether.tether_opened_on).format('MM/DD/YYYY');
          return (
            <p key={myTether.tether_id}>
              {myTether.tether_name} created by {myTether.tether_created_by_plain} and created on {formattedDate}
            </p>
          );
        })
      }
    </div >
  );
};

export default Tethers;

const YourFind = styled.div`
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
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-family: Gotham-Black;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    text-transform: uppercase;
    margin-right: 21px;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-top: 8px;
  }
`;

const Search = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 19px;
  cursor: pointer;
  width: 240px;
  height: 34px;
  background: #003E6A;
  border: none;
  border-radius: 10px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #FFFFFF;
`;

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

const StatusText = styled.p<{inactive: Boolean}>`
  ${(props) => props.inactive && 'opacity: 0.5;'}
`;