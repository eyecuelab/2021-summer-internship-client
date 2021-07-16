import { FC, useState, useEffect } from 'react';
import './index.css';
import dayjs from 'dayjs';
import Modal from 'react-modal';
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
import { createRingTheBell } from '../../store/slices/ringTheBell/ringTheBellSlice';
import { getMyTethers, setMyTethers } from '../../store/slices/myTethers/myTethersSlice';
import { getMyCompleteTethers } from '../../store/slices/myCompleteTethers/myCompleteTethersSlice';
import { createIncrementId } from '../../store/slices/incrementId/incrementIdSlice';

Modal.setAppElement('#root');

const Tethers: FC = () => {
  const user = useAppSelector((state) => state.oneUser);
  const myTethers = useAppSelector((state) => state.myTethers);
  const myCompleteTethers = useAppSelector((state) => state.myCompleteTethers);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState('tethers');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState('current');
  const [isHovering, setIsHovering] = useState(false);
  const [expandedTether, setExpandedTether] = useState('');
  const [rotateChevron, setRotateChevron] = useState('');
  const [confettiVisible, setConfettiVisible] = useState(false);
  const [tetherTitle, setTetherTitle] = useState('');

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
    }
  };

  const onSuccess = () => {
    dispatch(getMyTethers(user.id));
    setExpandedTether(expandedTether);
    console.warn(expandedTether);
  }

  const handleIncrement = (data:{id: string}) => {
    dispatch(createIncrementId({ data, onSuccess }));
  }

  // useEffect(() => {
  //   if (confettiVisible) {
  //     setConfettiVisible(false);
  //     console.log(confettiVisible)
  //   }
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [confettiVisible])

  const handleRingTheBell = (data:{tether_id: string}) => {
    dispatch(createRingTheBell({ data, onSuccess }));
    setConfettiVisible(true);
    setModalIsOpen(true);
  }

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
        {confettiVisible &&
        <>
          <ConfettiEffect />
          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            style={modalStyles}
            className="CongratsModal"
            overlayClassName="Overlay"
          >
            <CongratsModal
            closeModal={closeModal}
            tetherTitle={tetherTitle}
          />
          </Modal>
        </>
        }
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
        {!confettiVisible &&
        <Modal
          isOpen={modalIsOpen}
          shouldCloseOnOverlayClick={false}
          style={modalStyles}
          className="Modal"
          overlayClassName="Overlay"
        >
          <Form closeModal={closeModal} />
        </Modal>
        }
      </MainHeader>
      <TethersListContainer>
        {
          show === 'tethers' &&
          myTethers?.map((myTether) => {
            const currentTetherIsExpanded = expandedTether === myTether.tether_id;
            const totalLinksRendered = parseInt(myTether.links_total);
            const completeLinksRendered = parseInt(myTether.links_completed);
            const linksRemainingUntilComplete = totalLinksRendered - completeLinksRendered - 1; // Do -1 to compensate for it rendering a plus link also
            const currentPluses = (totalLinksRendered - completeLinksRendered) ? 1 : 0; // Don't render plus link if it's done
            const bell = (currentPluses) ? <BellCircle /> : <BellCircleDark handleClick={() => {handleRingTheBell(myTether.tether_id.tether_id)}}/>
            return (
              <CurrentTethersList>
                <Map key={myTether.tether_id}>
                  <TitleAndEdit>
                    {myTether.tether_id.tether_name}
                    <Edit><p>Edit</p></Edit>
                  </TitleAndEdit>
                  <Chev
                    expanded={ rotateChevron === myTether.tether_id }
                    onClick= {() => {
                      handleExpandTether(myTether.tether_id);
                    }}
                  >
                    <Chevron />
                  </Chev>
                </Map>
                {
                  currentTetherIsExpanded &&
                  <Expanded>
                    <NameAndPercent>
                      <p>{myTether.tether_id.tether_name}</p>
                      <p>{Math.round(parseInt(myTether.links_completed) / parseInt(myTether.links_total) * 100)}% Complete</p>
                    </NameAndPercent>
                    <TetherContainer>
                      <ProgressAndBell>
                        {/* Coming up with showing all users' progress here: */}
                        {/* Pagination or infinite scroll with click on users with > 10 Tethers */}
                        {(completeLinksRendered > 0) &&
                        [...Array(completeLinksRendered)]?.map((e, i) => <DarkBar key={i}/>)}
                        {(currentPluses > 0) &&
                        [...Array(currentPluses)].map(() =>
                            <ProgressButton
                              onMouseOver={handleMouseOver}
                              onMouseOut={handleMouseOut}
                              onClick={() => handleIncrement(myTether.id)}
                              key={myTether.id}
                            >
                            {isHovering && <PlusCircle />}
                            </ProgressButton>
                          )
                        }
                        {(linksRemainingUntilComplete >= 1) &&
                        [...Array(linksRemainingUntilComplete)].map((e, i) => <BlankBar key={i}/>)}
                      </ProgressAndBell>
                      {bell}
                    </TetherContainer>
                  </Expanded>
                }
                <hr />
              </CurrentTethersList>
            );
          })
        }
        {
          show === 'completed' &&
          myCompleteTethers?.map((myCompleteTether) => {
          const formattedDate = dayjs(myCompleteTether.tether_completed_on).format('MM/DD/YYYY');
            return (
              <CurrentTethersList>
                <Map key={myCompleteTether.tether_id}>
                  <TitleAndEdit>
                    {/* Right-align the date for readability */}
                    {/* Show the usernames of people who participated */}
                    <p>{myCompleteTether.tether_name} Completed on {formattedDate}</p>
                  </TitleAndEdit>
                </Map>
                <hr />
              </CurrentTethersList>
            );
          })
        }
      </TethersListContainer>
    </div >
  );
};

export default Tethers;

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
  background: #C1ECFF;
  border-radius: 60px;
  cursor: pointer;
`

const CurrentCompleted = styled.div`
  display: flex;
  font-family: Work Sans;
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
  background: #003E6A;
  border: none;
  border-radius: 10px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
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
  }
};

const StatusText = styled.p<{ inactive: Boolean }>`
  ${(props) => props.inactive && 'opacity: 0.5;'}
`;

const TethersListContainer = styled.div`
`

const CurrentTethersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #C1ECFF;
  width: 100%;
  p {
    margin: 0;
  }
  hr {
    opacity: .25;
    border-radius: 80px;
    width: 100%;
  }
`;

const TitleAndEdit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const Map = styled.map`
  cursor: default;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Edit = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #71A8D0;
  padding-left: 20px;
  p {
    cursor: pointer;
  }
`;

const Chev = styled.button<{ expanded: Boolean }>`
  cursor: pointer;
  background: none;
  border: none;
  transition-duration:0.3s;
  ${(props) => props.expanded && 'transform:rotate(180deg);'}
`;

const Expanded = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  p {
    margin: 20px 0px;
    font-size: 24px;
    color: #FFFFFF;
  }
`

const NameAndPercent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ProgressAndBell = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 24px;
  background: #FFFFFF;
  border-radius: 12px;
  margin: 50px 0px;
`;

const TetherContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;