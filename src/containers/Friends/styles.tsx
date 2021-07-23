import styled from "styled-components";

export const FriendsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 4vw;
  grid-row-gap: 0px;
  grid-template-areas:
  'left'
  'right';
`;

export const LeftSide = styled.div`
  grid-area: left;
`;

export const RightSide = styled.div`
  grid-area: right;
  grid-row-start: 1;
  grid-column-start: 2;
  margin-left: 8%;
`;

export const YourFind = styled.div`
  display: flex;
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

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  h1 {
    cursor: default;
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

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 19px;
  width: 240px;
  height: 38px;
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

export const SearchInput = styled.input`
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

export const StatusText = styled.p<{ inactive: Boolean }>`
  ${(props) => props.inactive && 'opacity: 0.5;'}
`;

export const FriendAttributesHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: right;
  align-items: right;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #FFFFFF;
  p {
    margin-bottom: 7px;
  }
  /* border: 1px solid white; */
  border-bottom: 2px solid #aaaaaa3f;
  margin-bottom: 15px;
  /* hr {
    opacity: .25;
    border-radius: 80px;
    width: 100%;
  } */
`;

export const FriendAttributesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: right;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #FFFFFF;
  width: 55%;
`;

// export const FriendAttributes = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   align-items: baseline;
//   font-family: Work Sans;
//   font-style: normal;
//   font-weight: 800;
//   font-size: 12px;
//   line-height: 14px;
//   text-transform: uppercase;
//   color: #FFFFFF;
//   width: 55.5%;
//   p {
//     /* margin-left: auto; */
//   }
//   border: 2px dashed black;
// `;

export const FriendsListContainer = styled.div`
  /* height: 52vh; */
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const YourFriendsList = styled.div`
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

export const FriendRequests = styled.div`
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

export const Request = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  height: 102px;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  border-radius: 12px;
`
export const RequestHeader = styled.div`
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

export const RequestXpAndBadges = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    margin: 0px 9px;
  }
`;

export const FullRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  h1 {
    font-size: 22px;
    margin-left: 10px;
  }
  p {
    font-size: 21px;
  }
`;

export const RowUsername = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  align-items: center;
`;

export const RowDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  width: 55.5%;
  margin-right: .3%;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25%;
`;