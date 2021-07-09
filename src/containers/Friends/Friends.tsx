import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUsers, setUsers } from '../../store/slices/users/usersSlice';
import { setTethers } from '../../store/slices/tethers/tethersSlice';
import './index.css';
import Form from '../../components/form';
import searchIcon from '../../assets/search-icon.png';
import 'simplebar/dist/simplebar.min.css';

Modal.setAppElement('#root');

const Tethers: FC = () => {
  const users = useAppSelector((state) => state.users);
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

  function handleGetUsers() {
    dispatch(getUsers());
    setShow('users');
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
    <FriendsContainer>
      <LeftSide>
        <YourFind>
          <StatusText
            inactive={activeStatus === 'find'}
            onClick={() => {
              setActiveStatus('your');
              handleGetUsers();
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
        {
          show === 'users' &&
          <FriendAttributesHeader>
            <FriendAttributes>
              <p>TETHERS</p>
              <p>SHARED</p>
              <p>XP</p>
              <p>BADGES</p>
            </FriendAttributes>
            <hr />
          </FriendAttributesHeader>
        }
        <FriendsListContainer>
            {
              show === 'users' &&
              users?.map((user) => {
                return (
                  <YourFriendsList>
                    <p key={user.id}>{user.username}</p>
                    <hr />
                  </YourFriendsList>
                );
              })
            }
        </FriendsListContainer>
      </LeftSide>
      <RightSide>
        <FriendRequests>
          <h1>Friend Requests</h1>
          <Request>
            <RequestHeader>
              <p>Date</p>
              <RequestXpAndBadges>
                <p>XP</p>
                <p>Badges</p>
              </RequestXpAndBadges>
            </RequestHeader>
          </Request>
        </FriendRequests>
      </RightSide>
    </FriendsContainer>
  );
};

export default Tethers;

const FriendsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 4vw;
  grid-row-gap: 0px;
  grid-template-areas:
  'left'
  'right';
`;

const LeftSide = styled.div`
  grid-area: left;
`;

const RightSide = styled.div`
  grid-area: right;
  grid-row-start: 1;
  grid-column-start: 2;
`;

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

const StatusText = styled.p<{ inactive: Boolean }>`
  ${(props) => props.inactive && 'opacity: 0.5;'}
`;

const FriendAttributesHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #FFFFFF;
  p {
    margin: 0;
  }
  hr {
    opacity: .25;
    border-radius: 80px;
    width: 100%;
  }
`;

const FriendAttributes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #FFFFFF;
  width: 100%;
  p {
    margin: 10px 33px;
  }
  hr {
    opacity: .25;
    border-radius: 80px;
    width: 100%;
  }
`;

const FriendsListContainer = styled.div`
  height: 52vh;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const YourFriendsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 26px;
  color: #FFFFFF;
  p {
    margin: 15px 13px;
  }
  hr {
    opacity: .25;
    border-radius: 80px;
    width: 100%;
  }
`;

const FriendRequests = styled.div`
  h1 {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin-bottom: 0;
  }
`;

const Request = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  height: 102px;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  border-radius: 12px;
`
const RequestHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: 0px 15px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
`;

const RequestXpAndBadges = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    margin: 0px 9px;
  }
`;