import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import './index.css';
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

import
  { ActivityContainer,
    Profile,
    Name,
    DataTable,
    RowHeader,
    Cell,
    RowData,
    Badges,
    BadgeGrid,
    BadgeCard,
    BadgeIcon,
    FriendActivity,
    CardContainer,
    FriendActivityCard,
    FriendActivityHeader,
    Rings,
    FriendActivityBody,
    TitleAndUsername,
    BadgeBackground,
  } from './styles';

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
