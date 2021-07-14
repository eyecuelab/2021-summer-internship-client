import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import './index.css';
import styled from 'styled-components';
import AvatarCircle from '../../components/AvatarCircle';
import BellOval from '../../components/BellOval';

const Activity: FC = () => {
  const user = useAppSelector((state) => state.oneUser);
  const myParticipatingTethers = useAppSelector((state) => state.myTethers);
  const myCompleteTethers = useAppSelector((state) => state.myCompleteTethers);

  return (
    <ActivityContainer className="Activity">
        <AvatarCircle />
      <Profile>
        <Name>{user?.username}</Name>
        <DataTable>
          <RowHeader>
            <Cell>
              <p>IN-PROGRESS</p>
            </Cell>
            <Cell>
              <p>COMPLETED</p>
            </Cell>
            <Cell>
              <p>XP</p>
            </Cell>
          </RowHeader>
          <RowData>
            <Cell>
              <p>{myParticipatingTethers.length}</p>
            </Cell>
            <Cell>
              <p>{myCompleteTethers.length}</p>
            </Cell>
            <Cell>
              <p>{((myParticipatingTethers.length) * 10) + ((myCompleteTethers.length) * 50)}</p>
            </Cell>
          </RowData>
        </DataTable>
      </Profile>
      <FriendActivity>
          <h1>Friend Activity</h1>
          <ActivityCard>
            <ActivityHeader>
              <p>Date</p>
              <Rings>
                <p>Rings</p>
                <BellOval />
              </Rings>
            </ActivityHeader>
          </ActivityCard>
        </FriendActivity>
    </ActivityContainer>
  );
};

export default Activity;

const ActivityContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Profile =styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 0px;
`

const Name = styled.div`
  margin-left: 40px;
  font-family: Gotham-Black;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  text-transform: uppercase;
`;

const DataTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Cell = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

const RowHeader = styled.div`
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
`

const RowData = styled.div`
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
`

const FriendActivity = styled.div`
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

const ActivityCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  height: 102px;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  border-radius: 12px;
`
const ActivityHeader = styled.div`
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

const Rings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0px 9px;
  }
`;