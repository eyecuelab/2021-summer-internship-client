import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUsers } from '../../store/slices/users/usersSlice';
import './index.css';
import SearchIcon from '../../components/SearchIcon';
import 'simplebar/dist/simplebar.min.css';
import AvatarCircle from '../../components/AvatarCircle';
import FriendRequestsList from '../../components/FriendRequestsList'

import { 
    FriendsContainer,
    LeftSide,
    YourFind,
    StatusText,
    MainHeader,
    Search,
    SearchInput,
    FriendAttributesHeader,
    FriendAttributesContainer,
    FriendAttributes,
    FriendsListContainer,
    YourFriendsList,
    FullRowContainer,
    RowUsername,
    RowDataContainer,
    DataTethers,
    DataShared,
    DataXp,
    DataBadges,
    RightSide,
    FriendRequests,
  } from './styles';

const Friends: FC = () => {
  const users = useAppSelector((state) => state.users);
  const allTethersTotal = useAppSelector((state) => state.allUsersTetherCounts);
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
            const countInProgress = allTethersTotal.filter((participant) => (participant?.user_id?.id) === user.id).length;
            const countComplete = allTethersTotal.filter((participant) => (participant?.user_id?.id) === user.id).length;
            return (
              <YourFriendsList>
                <FullRowContainer>
                  <RowUsername>
                    <AvatarCircle />
                    <h1 key={user.id}>{user.username}</h1>
                  </RowUsername>
                  <RowDataContainer>
                    <DataTethers>
                        <p>{countInProgress}</p>
                    </DataTethers>
                    <DataShared>
                        <p>{user.tethers_completed}</p>
                    </DataShared>
                    <DataXp>
                        <p>{(countInProgress * 10) + (countComplete * 50)}</p>
                    </DataXp>
                    <DataBadges>
                        <p>{countComplete}</p>
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
          <FriendRequestsList />
        </FriendRequests>
      </RightSide>
    </FriendsContainer>
  );
};

export default Friends;