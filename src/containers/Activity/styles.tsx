import styled from 'styled-components';

export const Badges = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 20vh;
  margin: 0px 0px 0px 40px;
  padding-top: 40px;
  font-family: Gotham-Black;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  h1 {
    font-family: Gotham-Black;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 21px;
    text-transform: uppercase;
  }
  /* border: 2px solid red; */
  transform: translateY(20px);
`;

export const BadgeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 95%;
  height: 60px;
  flex-direction: row;
  margin-top: 17px;
  /* border: 2px solid orange; */
`

export const BadgeIcon = styled.div`
  padding-right: 20px;
`

export const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: 33% auto 33%;
  p {
    font-family: Gotham-Black;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }
`

export const ActivityContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Profile =styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 0px;
`;

export const Name = styled.div`
  margin-left: 40px;
  margin-bottom: 20px;
  font-family: Gotham-Black;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  text-transform: uppercase;
`;

export const DataTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Cell = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const RowHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  ${Cell} {
    font-family: Gotham-Black;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
  }
`;

export const RowData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  ${Cell} {
    font-family: Gotham-Black;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 55px;
    text-transform: uppercase;
    p {
      margin: 0px;
    }
  }
`;

export const FriendActivity = styled.div`
  margin-left: 2vw;
  cursor: default;
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

export const CardContainer = styled.div`
  height: 64vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const FriendActivityCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  height: 102px;
  margin-top: 17px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  border-radius: 12px;
`;

export const FriendActivityHeader = styled.div`
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

export const Rings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0px 9px;
  }
`;

export const FriendActivityBody = styled.div`
  margin: 0px 15px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  font-family: Work Sans;
  overflow: hidden;
  position: relative;
  h2 {
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 23px;
    margin: auto 0;
    position: absolute;
    white-space: nowrap;
    transform: translateX(0);
    transition: 3.3s;
    &:hover {
      transform: translateX(calc(200px - 100%));
    }
  }
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    padding-top: 15px;
  }
`;

export const TitleAndUsername = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0px 5px;
`;

export const BadgeBackground = styled.div`
  background: rgb(80, 152, 201);
  backdrop-filter: blur(25px);
  width: 49px;
  height: 49px;
  z-index: 2;
  border-radius: 50%;
`;