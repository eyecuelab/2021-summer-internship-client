import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUsers, setUsers } from '../../store/slices/users/usersSlice';
import { setTethers } from '../../store/slices/tethers/tethersSlice';
import './index.css';
import SearchIcon from '../../components/SearchIcon';
import 'simplebar/dist/simplebar.min.css';

const Friends: FC = () => {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState('');
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
          <Search>
            <SearchIcon />
            <SearchInput type='text' placeholder='Search Your Friends' />
          </Search>
        </MainHeader>
        {
          show === 'users' &&
          <FriendAttributesHeader>
            <FriendAttributesContainer>
              <FriendAttributes>
                <p>TETHERS</p>
                <p>SHARED</p>
                <p>XP</p>
                <p>BADGES</p>
              </FriendAttributes>
            </FriendAttributesContainer>
            <hr />
          </FriendAttributesHeader>
        }
        <FriendsListContainer>
            {
              show === 'users' &&
              users?.map((user) => {
                return (
                  <YourFriendsList>
                    <FullRowContainer>
                      <RowUsername>
                        <p key={user.id}>{user.username}</p>
                      </RowUsername>
                      <RowDataContainer>
                        <DataTethers>
                          <FriendAttributes>
                            <p>{user.tethers_completed}</p>
                          </FriendAttributes>
                        </DataTethers>
                        <DataShared>
                          <FriendAttributes>
                            {/* temporary values */}
                            <p>{user.tethers_completed}</p>
                          </FriendAttributes>
                        </DataShared>
                        <DataXp>
                          <FriendAttributes>
                            <p>{user.xp}</p>
                          </FriendAttributes>
                        </DataXp>
                        <DataBadges>
                          <FriendAttributes>
                            <p>{(user.xp) * 5}</p>
                          </FriendAttributes>
                        </DataBadges>
                      </RowDataContainer>
                    </FullRowContainer>
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

export default Friends;

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
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  p {
    padding-right:20px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
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

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 19px;
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
  border-radius: 12px;
  color: #FFFFFF;
  &::placeholder {
    color: #FFFFFF;
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: #003E6A;
    }
  }
`;

const SearchInput = styled.input`
  width: 185px;
  height: 20px;
  background: #003E6A;
  border:none;
  color: #FFFFFF;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 21px;
  padding-left: 5px;
  margin-right: 0px;
  margin-left: 13px;
  &::placeholder {
    color: #FFFFFF;
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: #003E6A;
    }
  }
`

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

const FriendAttributesContainer = styled.div`
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
  width: 95%;
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
  width: 59%;
  p {
    margin-left: auto;
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
  margin-left: 2vw;
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

const FullRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const RowUsername = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`
const RowDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  width: 95%;
  justify-content: flex-end;
  margin-right: 5%;
`

const DataTethers = styled.div`
  margin-right: 6vw;
`

const DataShared = styled.div`
  margin-right: 4.5vw;
`

const DataXp = styled.div`
  margin-right: 4.2vw;
`

const DataBadges = styled.div`
  /* margin-right: -10px; */
`
