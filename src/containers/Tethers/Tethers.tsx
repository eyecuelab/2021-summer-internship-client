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
import plus from '../../assets/Vector.png';
import Chevron from '../../components/chevron';
import ProgressBar from '../../components/ProgressBar';
import { getParticipantLink } from '../../store/slices/createParticipantLink/createParticipantLinkSlice';

Modal.setAppElement('#root');

const Tethers: FC = () => {
  const users = useAppSelector((state) => state.users);
  const user = useAppSelector((state) => state.oneUser);
  const tethers = useAppSelector((state) => state.tethers);
  const myTethers = useAppSelector((state) => state.myTethers);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState('current');
  const [expandedTether, setExpandedTether] = useState('');

  useEffect(() => {
    return () => {
      dispatch(setUsers([]));
      dispatch(setTethers([]));
    }
  }, [dispatch])

  const handleExpandTether = (tether_id: string) => {
    if (expandedTether === tether_id) {
      setExpandedTether('');
    } else {
      setExpandedTether(tether_id);
    }
  };

  function handleGetUsers() {
    dispatch(getUsers());
    setShow('users');
  }

  // function handleCreateParticipantLink() {
  //   dispatch(getParticipantLink(tether_id, user_id));
  // }

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
  }

  return (
    <div>
      <CurrentCompleted>
        <StatusText
          inactive={activeStatus === 'completed'}
          onClick={() => {
            setActiveStatus('current');
            handleGetTethers();
          }}
        >
          Current
        </StatusText>
        <StatusText
          inactive={activeStatus === 'current'}
          onClick={() => setActiveStatus('completed')}
        >
          Completed
        </StatusText>
      </CurrentCompleted>
      <MainHeader>
        <h1>Your Tethers</h1>
        <AddNewTether onClick={handleShowCreateTetherPage}>
          <img src={plus} alt="plus-sign" />
          Add New
        </AddNewTether>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <Form closeModal={closeModal} />
        </Modal>
      </MainHeader>
      {
        show === 'tethers' &&
        myTethers?.map((myTether) => {
          const currentTetherIsExpanded = expandedTether === myTether.tether_id;
          return (
            <CurrentTethersList>
              <Map key={myTether.tether_id}>
                <TitleAndEdit>
                  {myTether.tether_name}
                  <Edit><p>Edit</p></Edit>
                </TitleAndEdit>
                <Chev onClick={() => handleExpandTether(myTether.tether_id)}>
                  <Chevron />
                </Chev>
              </Map>
              {
                currentTetherIsExpanded &&
                <Expanded>
                  <NameAndPercent>
                    <p>{myTether.tether_name}</p>
                    <p>{Math.floor(parseInt(myTether.links_completed) / parseInt(myTether.links_total)) * 100}% Complete</p>
                  </NameAndPercent>
                  <ProgressBar />
                </Expanded>
              }
              <hr />
            </CurrentTethersList>
          );
        })
      }
    </div >
  );
};

export default Tethers;

const CurrentCompleted = styled.div`
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  p {
    cursor: pointer;
    padding-right:20px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  cursor: default;
  h1 {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    text-transform: uppercase;
    margin-right: 21px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

const AddNewTether = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 49px;
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
`;

const modalStyles = {
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

const StatusText = styled.p<{ inactive: Boolean }>`
  ${(props) => props.inactive && 'opacity: 0.5;'}
`;

const CurrentTethersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #C1ECFF;
  p {
    margin: 0;
  }
  hr {
    opacity: .25;
    border-radius: 80px;
    width: 1238px;
  }
`;

const TitleAndEdit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const Map = styled.map`
  cursor: default;
  width: 1238px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Edit = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #71A8D0;
  padding-left: 20px;
  p {
    cursor: pointer;
  }
`;

const Chev = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

const Expanded = styled.div`
  display: flex;
  flex-direction: column;
  width: 1238px;
  p {
    margin: 20px 0px;
    font-size: 24px;
    color: #FFFFFF;
  }
`

const NameAndPercent = styled.div`
  display: flex;
  justify-content: space-between;
`
