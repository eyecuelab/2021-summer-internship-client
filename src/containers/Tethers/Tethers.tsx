import React from 'react';
import './index.css';
import dayjs from 'dayjs';
import Modal from 'react-modal';
import { FC, useState } from 'react';
import Form from '../../components/form';
import PlusSign from '../../components/PlusSign';
import CongratsModal from '../../components/CongratsModal';
import ConfettiEffect from '../../components/ConfettiEffect';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMyTethers, setMyTethers } from '../../store/slices/myTethers/myTethersSlice';
import { getMyCompleteTethers } from '../../store/slices/myCompleteTethers/myCompleteTethersSlice';
import {
  CurrentCompleted,
  StatusText,
  MainHeader,
  AddNewTether,
  TethersListContainer,
  CurrentTethersList,
  Map,
  modalStyles,
  RightAlign,
  CompleteContainer,
  CompleteTitle,
} from './styles';
import MyParticipant from './MyParticipant';

Modal.setAppElement('#root');

const Tethers: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.oneUser);
  const myParticipants = useAppSelector((state) => state.myTethers);
  const myCompleteTethers = useAppSelector((state) => state.myCompleteTethers);
  const tetherTitle = useAppSelector((state) => state.tetherTitle);
  const allTethersTotal = useAppSelector((state) => state.allUsersTetherCounts);
  const [show, setShow] = useState('tethers');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState('current');
  const [expandedTether, setExpandedTether] = useState('');
  const [confettiVisible, setConfettiVisible] = useState(false);
  const [activeModal, setActiveModal] = useState('');

  const handleExpandTether = React.useCallback(
    (my_participant_id: any) => {
      if (expandedTether === my_participant_id) {
        setExpandedTether('');
      } else {
        setExpandedTether(my_participant_id);
      }
    },
    [expandedTether]
  );

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
    dispatch(setMyTethers(myParticipants));
  }

  function closeModal() {
    setModalIsOpen(false);
    setConfettiVisible(false);
    dispatch(setMyTethers(myParticipants));
  }

  function handleShowCreateTetherPage() {
    openModal();
    dispatch(setMyTethers(myParticipants));
    setActiveModal('AddNew')
  }

  return (
    <div>
      <CurrentCompleted>
        {activeModal === 'Confetti' &&
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
        {activeModal === 'AddNew' && (
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
          myParticipants?.map((myParticipant) => (
            <MyParticipant
              key={myParticipant.id}
              myParticipant={myParticipant}
              expanded={expandedTether === myParticipant.id}
              setConfettiVisible={setConfettiVisible}
              setActiveModal={setActiveModal}
              setModalIsOpen={setModalIsOpen}
              handleExpandTether={handleExpandTether}
            />
          ))}
        {show === 'completed' &&
          myCompleteTethers?.map((myCompleteTether) => {
          // allTethersTotal?.filter((participant) => participant?.user_id?.username === user.username).map((participant) => {
            const formattedDate = dayjs(myCompleteTether?.tether_completed_on).format('MM/DD/YYYY');
            return (
              <CurrentTethersList>
                <Map key={myCompleteTether.tether_id}>
                  {/* Show the usernames of people who participated */}
                  <CompleteContainer>
                    <CompleteTitle>{myCompleteTether.tether_name}</CompleteTitle>
                    <RightAlign>Completed on {formattedDate}</RightAlign>
                  </CompleteContainer>
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