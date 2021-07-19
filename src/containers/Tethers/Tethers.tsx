import './index.css';
import dayjs from 'dayjs';
import Modal from 'react-modal';
import { FC, useState } from 'react';
import styled from 'styled-components';
import Form from '../../components/form';
import Chevron from '../../components/chevron';
import DarkBar from '../../components/DarkBar';
import BlankBar from '../../components/BlankBar';
import PlusSign from '../../components/PlusSign';
import BellCircle from '../../components/BellCircle';
import PlusCircle from '../../components/PlusCircle';
import CongratsModal from '../../components/CongratsModal';
import ConfettiEffect from '../../components/ConfettiEffect';
import BellCircleDark from '../../components/BellCircleDark';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createIncrementId } from '../../store/slices/incrementId/incrementIdSlice';
import { createRingTheBell } from '../../store/slices/ringTheBell/ringTheBellSlice';
import { getMyTethers, setMyTethers } from '../../store/slices/myTethers/myTethersSlice';
import { getMyCompleteTethers } from '../../store/slices/myCompleteTethers/myCompleteTethersSlice';
import {
  getAllParticipantLinks,
  selectCanCompleteTether,
} from '../../store/slices/allParticipantLinks/allParticipantLinksSlice';

Modal.setAppElement('#root');

const Tethers: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.oneUser);
  const myTethers = useAppSelector((state) => state.myTethers);
  const myCompleteTethers = useAppSelector((state) => state.myCompleteTethers);
  const tetherParticipants = useAppSelector((state) => state.allParticipantLinks);
  const [show, setShow] = useState('tethers');
  const [isHovering, setIsHovering] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tetherTitle, setTetherTitle] = useState('');
  const [activeStatus, setActiveStatus] = useState('current');
  const [rotateChevron, setRotateChevron] = useState('');
  const [expandedTether, setExpandedTether] = useState('');
  const [confettiVisible, setConfettiVisible] = useState(false);

  const canRingTheBell = useAppSelector(selectCanCompleteTether);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleExpandTether = (tether_id: any) => {
    if (expandedTether === tether_id) {
      setExpandedTether('');
      setRotateChevron('');
    } else {
      setExpandedTether(tether_id);
      setRotateChevron(tether_id);
      setTetherTitle(tether_id?.tether_name);
      dispatch(getAllParticipantLinks(tether_id?.tether_id));
    }
  };

  const onSuccess = () => {
    dispatch(getMyTethers(user.id));
  };

  const onIncrementSuccess = () => {
    dispatch(getMyTethers(user.id));
    setExpandedTether(expandedTether);
  };

  const handleIncrement = (data: { id: string }) => {
    dispatch(createIncrementId({ data, onIncrementSuccess }));
  };

  const handleRingTheBell = (data: { tether_id: string }) => {
    dispatch(createRingTheBell({ data, onSuccess }));
    setConfettiVisible(true);
    setModalIsOpen(true);
  };

  function handleGetTethers() {
    dispatch(getMyTethers(user.id));
    setShow('tethers');
  }

  function handleGetCompletedTethers() {
    dispatch(getMyCompleteTethers(user.id));
    setShow('completed');
  }

  function openModal() {
    setModalIsOpen(true);
    dispatch(setMyTethers(myTethers));
  }

  function closeModal() {
    setModalIsOpen(false);
    setConfettiVisible(false);
    dispatch(setMyTethers(myTethers));
  }

  function handleShowCreateTetherPage() {
    openModal();
    dispatch(setMyTethers(myTethers));
  }

  return (
    <div>
      <CurrentCompleted>
        {confettiVisible && (
          <>
            <ConfettiEffect />
            <Modal
              isOpen={modalIsOpen}
              shouldCloseOnOverlayClick={false}
              style={modalStyles}
              className="CongratsModal"
              overlayClassName="Overlay"
            >
              <CongratsModal closeModal={closeModal} tetherTitle={tetherTitle} />
            </Modal>
          </>
        )}
        <StatusText
          inactive={activeStatus === 'completed'}
          onClick={() => {
            setActiveStatus('current');
            handleGetTethers();
          }}
        >
          Current
        </StatusText>
        <StatusText
          inactive={activeStatus === 'current'}
          onClick={() => {
            setExpandedTether('');
            setActiveStatus('completed');
            handleGetCompletedTethers();
          }}
        >
          Completed
        </StatusText>
      </CurrentCompleted>
      <MainHeader>
        <h1>Your Tethers</h1>
        <AddNewTether onClick={handleShowCreateTetherPage}>
          <PlusSign />
          Add New
        </AddNewTether>
        {!confettiVisible && (
          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            style={modalStyles}
            className="Modal"
            overlayClassName="Overlay"
          >
            <Form closeModal={closeModal} />
          </Modal>
        )}
      </MainHeader>
      <TethersListContainer>
        {show === 'tethers' &&
          myTethers?.map((myTether) => {
            const currentTetherIsExpanded = expandedTether === myTether.tether_id;
            const totalLinksRendered = parseInt(myTether.links_total);
            const completeLinksRendered = parseInt(myTether.links_completed);
            const linksRemainingUntilComplete = totalLinksRendered - completeLinksRendered - 1; // Do -1 to compensate for it rendering a plus link also
            const currentPluses = totalLinksRendered - completeLinksRendered ? 1 : 0; // Don't render plus link if it's done
            const bell = canRingTheBell ? (
              <BellCircleDark
                handleClick={() => {
                  handleRingTheBell(myTether.tether_id.tether_id);
                }}
              />
            ) : (
              <BellCircle />
            );

            // CSS rendering constants
            const showBorder = false; // Changing to true will show a bunch of CSS borders for components
            const dotsAreHidden = true; // change to True to hide the dots that shouldn't be seen, False for CSS debugging purposes
            // ---------------------

            return (
              <CurrentTethersList>
                <Map key={myTether.tether_id}>
                  <TitleAndEdit>
                    {myTether.tether_id.tether_name}
                    <Edit>
                      <p>Edit</p>
                    </Edit>
                  </TitleAndEdit>
                  <Chev
                    expanded={rotateChevron === myTether.tether_id}
                    onClick={() => {
                      handleExpandTether(myTether.tether_id);
                    }}
                  >
                    <Chevron />
                  </Chev>
                </Map>
                {currentTetherIsExpanded && (
                  <Expanded>
                    <NameAndPercent>
                      <p>{myTether.tether_id.tether_name}</p>
                      <p>
                        {Math.round((parseInt(myTether.links_completed) / parseInt(myTether.links_total)) * 100)}%
                        Complete
                      </p>
                    </NameAndPercent>
                    <TetherContainer showBorder={showBorder}>
                      <ProgressBarAndBellContainer showBorder={showBorder}>
                        <ProgressBar>
                          {/* Coming up with showing all users' progress here: */}
                          {/* Pagination or infinite scroll with click on users with > 10 Tethers */}
                          {completeLinksRendered > 0 &&
                            [...Array(completeLinksRendered)]?.map((e, i) => <DarkBar key={i} />)}
                          {currentPluses > 0 &&
                            [...Array(currentPluses)].map(() => (
                              <ProgressButton
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                                onClick={() => handleIncrement(myTether.id)}
                                key={myTether.id}
                              >
                                {isHovering && <PlusCircle />}
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
          })}
        {show === 'completed' &&
          myCompleteTethers?.map((myCompleteTether) => {
            const formattedDate = dayjs(myCompleteTether.tether_completed_on).format('MM/DD/YYYY');
            return (
              <CurrentTethersList>
                <Map key={myCompleteTether.tether_id}>
                  <TitleAndEdit>
                    {/* Right-align the date for readability */}
                    {/* Show the usernames of people who participated */}
                    <p>
                      {myCompleteTether.tether_name} Completed on {formattedDate}
                    </p>
                  </TitleAndEdit>
                </Map>
                <hr />
              </CurrentTethersList>
            );
          })}
      </TethersListContainer>
    </div>
  );
};

export default Tethers;

const CurrentCompleted = styled.div`
  display: flex;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  p {
    cursor: pointer;
    padding-right: 20px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

const StatusText = styled.p<{ inactive: Boolean }>`
  ${(props) => props.inactive && 'opacity: 0.5;'}
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  cursor: default;
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
  }
`;

const AddNewTether = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 49px;
  cursor: pointer;
  width: 200px;
  height: 34px;
  background: #003e6a;
  border: none;
  border-radius: 10px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

const TethersListContainer = styled.div``;

const CurrentTethersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #c1ecff;
  width: 100%;
  p {
    margin: 0;
  }
  hr {
    opacity: 0.25;
    border-radius: 80px;
    width: 100%;
  }
`;

const Map = styled.map`
  cursor: default;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const TitleAndEdit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const Edit = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #71a8d0;
  padding-left: 20px;
  p {
    cursor: pointer;
  }
`;

const Chev = styled.button<{ expanded: Boolean }>`
  cursor: pointer;
  background: none;
  border: none;
  transition-duration: 0.3s;
  ${(props) => props.expanded && 'transform:rotate(180deg);'}
`;

const Expanded = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  p {
    margin: 20px 0px;
    font-size: 24px;
    color: #ffffff;
  }
`;

const NameAndPercent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const TetherContainer = styled.div<{ showBorder: Boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  width: 100%;
  ${(props) => props.showBorder && 'border: 5px solid red;'}
`;

const ProgressBarAndBellContainer = styled.div<{ showBorder: Boolean }>`
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  // Margin on top/bottom is what is shifting the dots and bar up right now!!
  margin: -40px 0px;
  ${(props) => props.showBorder && 'border: 2px solid black;'}
`;

const ProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 24px;
  background: #ffffff;
  border-radius: 12px;
  margin: 50px 0px;
`;

const ProgressButton = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 12px;
  margin-left: 4px;
  margin-right: 4px;
  padding: 5px;
  background: #c1ecff;
  border-radius: 60px;
  cursor: pointer;
`;

const ProgressDotContainer = styled.div<{ showBorder: Boolean }>`
  background: none;
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
  width: 95%;
  ${(props) => props.showBorder && 'border: 2px solid white;'}
  p {
    cursor: pointer;
    margin-right: 20px;
    margin-block-start: 0;
    margin-block-end: 0;
    transform: translate(0px, 40px);
    font-size: 16px;
    text-shadow: 1px 1px black, 1px -1px black, -1px 1px black, -1px -1px black;
  }
  position: relative;
`;

const OnePersonDotContainer = styled.div<{ showBorder: Boolean }>`
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-direction: row;
  width: 100%;
  ${(props) => props.showBorder && 'border: 2px solid gray;'}
  position: absolute;
`;

const ZeroDotContainer = styled.div<{ showBorder: Boolean }>`
  width: 50px;
  max-height: 30px;
  ${(props) => props.showBorder && 'border: 2px solid gold;'}
  margin-left: -50px;
`;

const ZeroDot = styled.div`
  width: 10px;
  height: 30px;
  border-radius: 60px;
  background: black;
  transform: translate(0px, -35px);
`;

const AllDotContainer = styled.div<{ showBorder: Boolean }>`
  width: 50px;
  max-height: 30px;
  background: none;
  display: flex;
  justify-content: right;
  align-items: right;
  ${(props) => props.showBorder && 'border: 2px solid gold;'}
  margin-right: -50px;
`;

const AllDot = styled.div`
  width: 10px;
  height: 30px;
  border-radius: 60px;
  background: gold;
`;

const MainUserDotContainer = styled.div<{ showBorder: Boolean }>`
  ${(props) => props.showBorder && 'border: 2px solid orange;'}
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 30px;
`;

const CurrentDot = styled.div`
  width: 10px;
  height: 30px;
  border-radius: 60px;
  background: maroon;
  font-size: 20px;
  margin-top: -80px;
  transform: translate(0px, 15px);
`;

const CenteringProgressDotContainer = styled.div<{ showBorder: Boolean }>`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${(props) => props.showBorder && 'border: 2px dashed black;'}
`;

const ProgressDot = styled.div<{ imgOpacity: Boolean }>`
  width: 5px;
  height: 12px;
  border-radius: 60px;
  background: #c1ecff;
  ${(props) => props.imgOpacity && 'opacity: 0.0;'}
`;

const IncompleteDot = styled.div<{ imgOpacity: Boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 60px;
  background: #003e6a;
  ${(props) => props.imgOpacity && 'opacity: 0.0;'}
`;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    inset: '50% auto auto 50%',
    border: 'none',
    overflow: 'auto',
    borderRadius: '12px',
    outline: 'none',
    padding: '0px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
