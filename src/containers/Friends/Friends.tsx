import { FC, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUsers } from '../../store/slices/users/usersSlice';
import './index.css';
import SearchIcon from '../../components/SearchIcon';
import 'simplebar/dist/simplebar.min.css';
import AvatarCircle from '../../components/AvatarCircle';

const Friends: FC = () => {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState('users');
  const [activeStatus, setActiveStatus] = useState('your');
  const loggedInUser = useAppSelector((state) => state.oneUser);
  const [searchTerm, setSearchTerm] = useState('');

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
            <SearchInput type='text' placeholder='Search Your Friends' onChange={event => {setSearchTerm(event.target.value)}}/>
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
          users?.filter(user => user.id !== loggedInUser.id && (user.username.toLowerCase().includes(searchTerm.toLowerCase()))).map((user) => {
            return (
              <YourFriendsList>
                <FullRowContainer>
                  <RowUsername>
                    <AvatarCircle />
                    <h1 key={user.id}>{user.username}</h1>
                  </RowUsername>
                  <RowDataContainer>
                    <DataTethers>
                        {/* Tethers Completed */}
                        <p>{user.tethers_completed}</p>
                    </DataTethers>
                    <DataShared>
                        {/* Shared... use Tethers Ongoing? */}
                        <p>{user.tethers_completed}</p>
                    </DataShared>
                    <DataXp>
                        {/* XP */}
                        <p>{user.xp}</p>
                    </DataXp>
                    <DataBadges>
                        {/* Badges (IN PROGRESS) */}
                        <p>{(user.xp) * 5}</p>
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
  margin-bottom: 40px;
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
`;

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
  justify-content: space-between;
  width: 100%;
  h1 {
    font-size: 22px;
    margin-left: 10px;
  }
  p {
    font-size: 15px;
  }
`;

const RowUsername = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  align-items: center;
`;

const RowDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  width: 55.5%;
  margin-right: .3%;
`;

const DataTethers = styled.div`
  margin-right: 3%;
`;

const DataShared = styled.div`
`;

const DataXp = styled.div`
`;

const DataBadges = styled.div`
`;
