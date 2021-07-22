import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import './index.css';
import styled from 'styled-components';
import ProfileAvatar from '../../components/ProfileAvatar';
import BellOval from '../../components/BellOval';
import dayjs from 'dayjs';
import Badge01 from '../../components/Badges/Badge01';
import Badge02 from '../../components/Badges/Badge02';
import Badge12 from '../../components/Badges/Badge12';
import Badge11 from '../../components/Badges/Badge11';
import Badge03 from '../../components/Badges/Badge03';
import Badge04 from '../../components/Badges/Badge04';
import Badge14 from '../../components/Badges/Badge14';
import Badge09 from '../../components/Badges/Badge09';

const Activity: FC = () => {
  const user = useAppSelector((state) => state.oneUser);
  const myParticipatingTethers = useAppSelector((state) => state.myTethers);
  const myCompleteTethers = useAppSelector((state) => state.myCompleteTethers);
  const recentTethers = useAppSelector((state) => state.recentTethers);
  const countArt = myCompleteTethers.filter((tether) => (tether.tether_category) === 'Art').length;
  const countExercise = myCompleteTethers.filter((tether) => (tether.tether_category) === 'Exercise').length;
  const countMusic = myCompleteTethers.filter((tether) => (tether.tether_category) === 'Music').length;
  const countNature = myCompleteTethers.filter((tether) => (tether.tether_category) === 'Nature').length;
  const countSocial = myCompleteTethers.filter((tether) => (tether.tether_category) === 'Social').length;
  const countWellness = myCompleteTethers.filter((tether) => (tether.tether_category) === 'Wellness').length;
  const countTotal = countArt + countExercise + countMusic + countNature + countSocial + countWellness;
  const showFive = (countTotal >= 5) ? true : false;
  const showTwentyFive = (countTotal >= 25) ? true : false;

  return (
    <ActivityContainer>
      <ProfileAvatar />
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
              <p>{countTotal}</p>
            </Cell>
            <Cell>
              <p>{((myParticipatingTethers.length) * 10) + ((myCompleteTethers.length) * 50)}</p>
            </Cell>
          </RowData>
        </DataTable>
        <Badges>
          <h1>{`Badges (${countTotal})`}</h1>
          <BadgeGrid>
            {countArt > 0 &&
              <BadgeCard>
                {
                  <BadgeIcon>
                    <Badge12 />
                  </BadgeIcon>
                } <p>x{countArt}</p>
              </BadgeCard>
            }
            {countExercise > 0 &&
              <BadgeCard>
                {
                  <BadgeIcon>
                    <Badge11 />
                  </BadgeIcon>
                } <p>x{countExercise}</p>
              </BadgeCard>
            }
            {countMusic > 0 &&
              <BadgeCard>
                {
                  <BadgeIcon>
                    <Badge04 />
                  </BadgeIcon>
                } <p>x{countMusic}</p>
              </BadgeCard>
            }
            {countNature > 0 &&
              <BadgeCard>
                {
                  <BadgeIcon>
                    <Badge14 />
                  </BadgeIcon>
                } <p>x{countNature}</p>
              </BadgeCard>
            }
            {countSocial > 0 &&
              <BadgeCard>
                {
                  <BadgeIcon>
                    <Badge09 />
                  </BadgeIcon>
                } <p>x{countSocial}</p>
              </BadgeCard>
            }
            {countWellness > 0 &&
              <BadgeCard>
                {
                  <BadgeIcon>
                    <Badge03 />
                  </BadgeIcon>
                } <p>x{countWellness}</p>
              </BadgeCard>
            }
            {showFive &&
              <BadgeCard>
                {
                  <BadgeIcon>
                    <Badge02 />
                  </BadgeIcon>
                } x5 Tethers <p>{showFive}</p>
              </BadgeCard>
            }
            {showTwentyFive &&
              <BadgeCard>
                {
                  <BadgeIcon>
                    <Badge01 />
                  </BadgeIcon>
                } x25 Tethers
              </BadgeCard>
            }
          </BadgeGrid>
        </Badges>
      </Profile>
      <FriendActivity>
        <h1>Friend Activity</h1>
        <CardContainer>
          {recentTethers?.filter(recentTether => recentTether.tether_created_by_plain !== user.username).map((recentTether) => {
            const formattedDate = dayjs(recentTether.tether_completed_on).format('MM/DD/YYYY');
            return(
              <FriendActivityCard>
                <FriendActivityHeader>
                <p>{formattedDate}</p>
                  <Rings>
                    <p>Say Congrats!</p>
                    <BellOval />
                  </Rings>
                </FriendActivityHeader>
                  <FriendActivityBody>
                    <BadgeBackground>
                      {
                        recentTether.tether_category === 'Art' &&
                        <Badge12 />
                      }
                      {
                        recentTether.tether_category === 'Exercise' &&
                        <Badge11 />
                      }
                      {
                        recentTether.tether_category === 'Music' &&
                        <Badge04 />
                      }
                      {
                        recentTether.tether_category === 'Nature' &&
                        <Badge14 />
                      }
                      {
                        recentTether.tether_category === 'Social' &&
                        <Badge09 />
                      }
                      {
                        recentTether.tether_category === 'Wellness' &&
                        <Badge03 />
                      }
                    </BadgeBackground>
                    <TitleAndUsername>
                      <h2>{recentTether.tether_name}</h2>
                      <p>{recentTether.tether_created_by_plain}</p>
                    </TitleAndUsername>
                  </FriendActivityBody>
              </FriendActivityCard>
            )
          })}
        </CardContainer>
      </FriendActivity>
    </ActivityContainer>
  );
};

export default Activity;

const Badges = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 40vh;
  margin: 0px 40px;
  font-family: Gotham-Black;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  h1 {
    font-family: Gotham-Black;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
  }
`;

const BadgeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 50%;
  flex-direction: row;
  p {
    margin: 25px 0px 0px -22px;
  }
  margin-top: 17px;
`

const BadgeIcon = styled.div`
  padding-right: 20px;
`

const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: 33% auto 33%;
  p {
    font-family: Gotham-Black;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }
`

const ActivityContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Profile =styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 0px;
`;

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
`;

const Cell = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

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
`;

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
`;

const FriendActivity = styled.div`
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

const CardContainer = styled.div`
  height: 64vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const FriendActivityCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  height: 102px;
  margin-top: 17px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  border-radius: 12px;
`;

const FriendActivityHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: 0px 15px 0px 15px;
  height: 40px;
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

const FriendActivityBody = styled.div`
  margin: 0px 15px;
  font-family: Work Sans;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 345px;
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

const TitleAndUsername = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0px 5px;
`;

const BadgeBackground = styled.div`
  background: rgb(80, 152, 201);
  width: fit-content;
  height: fit-content;
  z-index: 2;
  border-top-right-radius: 50%;
`;
