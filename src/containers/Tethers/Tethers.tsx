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
import { getAllParticipantLinks } from '../../store/slices/allParticipantLinks/allParticipantLinksSlice';

import {
  CurrentCompleted,
  StatusText,
  MainHeader,
  AddNewTether,
  TethersListContainer,
  CurrentTethersList,
  Map,
  TitleAndEdit,
  modalStyles,
} from './styles';
import MyParticipant from './MyParticipant';

Modal.setAppElement('#root');

const Tethers: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.oneUser);
  const myParticipants = useAppSelector((state) => state.myTethers);
  const myCompleteTethers = useAppSelector((state) => state.myCompleteTethers);
  const [show, setShow] = useState('tethers');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tetherTitle, setTetherTitle] = useState('');
  const [activeStatus, setActiveStatus] = useState('current');
  const [expandedTether, setExpandedTether] = useState('');
  const [confettiVisible, setConfettiVisible] = useState(false);

  const handleExpandTether = React.useCallback(
    (my_participant_id: any) => {
      if (expandedTether === my_participant_id) {
        setExpandedTether('');
      } else {
        setExpandedTether(my_participant_id);
        setTetherTitle(my_participant_id?.tether_name);
        dispatch(getAllParticipantLinks(my_participant_id?.tether_id));
      }
    },
    [dispatch, expandedTether]
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
  }

  console.log({ expandedTether });

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
          myParticipants?.map((myParticipant) => (
            <MyParticipant
              key={myParticipant.id}
              myParticipant={myParticipant}
              expanded={expandedTether === myParticipant.id}
              setConfettiVisible={setConfettiVisible}
              setModalIsOpen={setModalIsOpen}
              handleExpandTether={handleExpandTether}
            />
          ))}
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
