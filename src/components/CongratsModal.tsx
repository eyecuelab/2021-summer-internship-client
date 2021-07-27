import React, { FC } from 'react';
import styled from 'styled-components';

interface CongratsProps {
  closeModal: () => void
  tetherTitle: string
};

const CongratsModal: FC<CongratsProps> = (props) => {
  const { closeModal, tetherTitle } = props;
  return (
    <CongratsCard>
      <CongratsBody>
        <h1>Congratulations!</h1>
        <p>on completing</p>
        <h2>{tetherTitle}</h2>
      </CongratsBody>
      <CongratsFooter>
        <button onClick={closeModal}>Close</button>
      </CongratsFooter>
    </CongratsCard>
  )
}

export default CongratsModal;

const CongratsCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr .25fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: white;
  height: 283px;
  grid-template-areas:
  'body'
  'footer';
  p {
    margin: 0px;
  }
`;

const CongratsBody = styled.div`
  grid-area: 'body';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  color: #003E6A;
  margin: auto 0;
  padding: 0px 30px;
  h1 {
    background: -webkit-linear-gradient(219deg, rgba(0,178,255,1) 0%, rgba(105,0,187,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 10px;
  }
  h2 {
    margin-top: 7px;
  }
`;

const CongratsFooter = styled.div`
  grid-area: 'footer';
  border-radius: 0px 0px 12px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 67px;
  background: #EEEEEE;
  backdrop-filter: blur(25px);
  button {
    cursor: pointer;
    width: 162px;
    height: 34px;
    background: #003E6A;
    border-radius: 12px;
    border: none;
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
  }
`;