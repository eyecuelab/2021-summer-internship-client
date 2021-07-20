import React from 'react';
import Chevron from '../../components/chevron';
import DarkBar from '../../components/DarkBar';
import BlankBar from '../../components/BlankBar';
import BellCircle from '../../components/BellCircle';
import PlusCircle from '../../components/PlusCircle';

import BellCircleDark from '../../components/BellCircleDark';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createRingTheBell } from '../../store/slices/ringTheBell/ringTheBellSlice';
import { getMyTethers } from '../../store/slices/myTethers/myTethersSlice';
import { getAllParticipantLinks, selectCanCompleteTether } from '../../store/slices/allParticipantLinks/allParticipantLinksSlice';
import {
  CurrentTethersList,
  Map,
  TitleAndEdit,
  Edit,
  Chev,
  Expanded,
  NameAndPercent,
  TetherContainer,
  ProgressBar,
  ProgressBarAndBellContainer,
  ProgressButton,
  ProgressDot,
  ProgressDotContainer,
  OnePersonDotContainer,
  CenteringProgressDotContainer,
  MainUserDotContainer,
  ZeroDotContainer,
  CurrentDot,
  IncompleteDot,
  AllDot,
  AllDotContainer,
  ZeroDot,
} from './styles';
import { createIncrementId } from '../../store/slices/incrementId/incrementIdSlice';
import { setTetherTitle } from '../../store/slices/setTetherTitle/setTetherTitleSlice';

interface MyParticipantProps {
  myParticipant: any;
  expanded: boolean;
  setConfettiVisible: (bool: boolean) => void;
  setModalIsOpen: (bool: boolean) => void;
  handleExpandTether: (id: string) => void;
}

const MyParticipant: React.FC<MyParticipantProps> = ({
  myParticipant,
  expanded,
  setModalIsOpen,
  setConfettiVisible,
  handleExpandTether,
}: MyParticipantProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.oneUser);
  const tetherParticipants = useAppSelector((state) => state.allParticipantLinks);
  const totalLinksRendered = parseInt(myParticipant.links_total);
  const completeLinksRendered = parseInt(myParticipant.links_completed);
  const canRingTheBell = useAppSelector(selectCanCompleteTether);
  const linksRemainingUntilComplete = totalLinksRendered - completeLinksRendered - 1; // Do -1 to compensate for it rendering a plus link also
  const currentPluses = totalLinksRendered - completeLinksRendered ? 1 : 0; // Don't render plus link if it's done

  const handleRingTheBell = (data: { tether_id: string }) => {
    const onSuccess = () => {
      dispatch(getMyTethers(user.id));
    };
    dispatch(createRingTheBell({ data, onSuccess }));
    setConfettiVisible(true);
    setModalIsOpen(true);
  };

  const handleIncrement = (data: { id: string }) => {
    const onIncrementSuccess = () => {
      dispatch(getMyTethers(user.id));
    };
    dispatch(createIncrementId({ data, onIncrementSuccess }));
  };

  const bell = canRingTheBell ? (
    <BellCircleDark
      handleClick={() => {
        dispatch(setTetherTitle(myParticipant.tether_id.tether_name));
        handleRingTheBell(myParticipant.tether_id.tether_id);
      }}
    />
  ) : (
    <BellCircle />
  );

  // CSS rendering constants
  const showBorder = false; // Changing to true will show a bunch of CSS borders for components
  const dotsAreHidden = true; // change to True to hide the dots that shouldn't be seen, False for CSS debugging purposes

  return (
    <CurrentTethersList>
      <Map key={myParticipant.id}>
        <TitleAndEdit>
          {myParticipant.tether_id.tether_name}
          <Edit>
            <p>Edit</p>
          </Edit>
        </TitleAndEdit>
        <Chev
          expanded={expanded}
          onClick={() => {
            handleExpandTether(myParticipant.id);
            dispatch(getAllParticipantLinks(myParticipant.tether_id.tether_id));
          }}
        >
          <Chevron />
        </Chev>
      </Map>
      {expanded && (
        <Expanded>
          <NameAndPercent>
            <p>{myParticipant.tether_id.tether_name}</p>
            <p>
              {Math.round((parseInt(myParticipant.links_completed) / parseInt(myParticipant.links_total)) * 100)}%
              Complete
            </p>
          </NameAndPercent>
          <TetherContainer showBorder={showBorder}>
            <ProgressBarAndBellContainer showBorder={showBorder}>
              <ProgressBar>
                {/* Coming up with showing all users' progress here: */}
                {/* Pagination or infinite scroll with click on users with > 10 Tethers */}
                {completeLinksRendered > 0 && [...Array(completeLinksRendered)]?.map((e, i) => <DarkBar key={i} />)}
                {currentPluses > 0 &&
                  [...Array(currentPluses)].map(() => (
                    <ProgressButton onClick={() => handleIncrement(myParticipant.id)} key={myParticipant.id}>
                      <PlusCircle />
                    </ProgressButton>
                  ))}
                {linksRemainingUntilComplete >= 1 &&
                  [...Array(linksRemainingUntilComplete)].map((e, i) => <BlankBar key={i} />)}
              </ProgressBar>
              {bell}
            </ProgressBarAndBellContainer>
            <ProgressDotContainer showBorder={showBorder}>
              {tetherParticipants
                ?.filter((participant) => participant.user_id.username !== user.username)
                .map((participant) => {
                  const completeLinks = participant.links_completed;
                  const incompleteLinks = participant.links_total - participant.links_completed;
                  const noLinks = participant.links_completed === 0;
                  const allLinks = participant.links_completed === participant.links_total;
                  return (
                    <OnePersonDotContainer showBorder={showBorder}>
                      {/* This one should only render if a user has made 0 progress */}
                      <ZeroDotContainer showBorder={showBorder}>
                        {noLinks &&
                          [...Array(1)].map((e, i) => (
                            <ZeroDot key={i}>
                              <p>{participant.user_id.username}</p>
                            </ZeroDot>
                          ))}
                      </ZeroDotContainer>
                      {/* Keeps track of other users' progression by dynamically rendering */}
                      {/* Dots for incomplete links */}
                      {/* Dot for current position */}
                      {/* Dots for completed links */}
                      {/* So, any track will have guaranteed 2 positions filled, one for 0 and one for the end */}
                      {/* It will then fill in an invisible amount of dots for the user's increments */}
                      {/* The user's position will then influence how many dots are rendered on the previous and next tracks */}
                      <MainUserDotContainer showBorder={showBorder}>
                        {completeLinks >= 1 &&
                          [...Array(completeLinks - 1)].map((e, i) => (
                            <CenteringProgressDotContainer showBorder={showBorder}>
                              <ProgressDot imgOpacity={dotsAreHidden} key={i} />
                            </CenteringProgressDotContainer>
                          ))}
                        {!noLinks &&
                          !allLinks &&
                          [...Array(1)].map((e, i) => (
                            <>
                              <CenteringProgressDotContainer showBorder={showBorder}>
                                <CurrentDot key={i}>
                                  <p>{participant.user_id.username}</p>
                                </CurrentDot>
                              </CenteringProgressDotContainer>
                            </>
                          ))}
                        {incompleteLinks >= 1 &&
                          [...Array(incompleteLinks)].map((e, i) => (
                            <CenteringProgressDotContainer showBorder={showBorder}>
                              <IncompleteDot imgOpacity={dotsAreHidden} key={i} />
                            </CenteringProgressDotContainer>
                          ))}
                      </MainUserDotContainer>
                      {/* This one should only render at 100% completion */}
                      <AllDotContainer showBorder={showBorder}>
                        {allLinks &&
                          [...Array(1)].map((e, i) => (
                            <AllDot key={i}>
                              <p>{participant.user_id.username}</p>
                            </AllDot>
                          ))}
                      </AllDotContainer>
                    </OnePersonDotContainer>
                  );
                })}
            </ProgressDotContainer>
          </TetherContainer>
        </Expanded>
      )}
      <hr />
    </CurrentTethersList>
  );
};

export default MyParticipant;
