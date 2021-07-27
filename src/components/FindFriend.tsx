import { FC } from "react";
import styled from 'styled-components';
import SearchIcon from '../components/SearchIcon';

const FindFriend: FC = () => {
  return (
    <FriendSearch>
      <SearchIcon />
      <SearchInput type='text'placeholder='Find Friend' />
    </FriendSearch>
  );
};

const FriendSearch = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 153px;
  height: 30px;
  margin-left: 33px;
  background: #003E6A;
  border:none;
  border-radius: 12px;
  color: #FFFFFF;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  &::placeholder {
    color: #FFFFFF;
  }
`;

const SearchInput = styled.input`
  width: 90px;
  height: 20px;
  background: #003E6A;
  border:none;
  color: #FFFFFF;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  padding-left: 5px;
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

export default FindFriend;