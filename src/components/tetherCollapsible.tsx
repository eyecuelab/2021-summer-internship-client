import { useState } from "react";
import Chevron from './chevron';
import styled from "styled-components";

const TetherCollapsible = (props: { myTether: any; }) => {
  const { myTether } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Chev onClick={() => setExpanded(!expanded)}>
        <Chevron />
      </Chev>
      <Expanded>
        {expanded && <p>{myTether}</p>}
      </Expanded>
    </>
  );
};

const Expanded = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  p {
    font-size: 24px;
  }
`

const Chev = styled.button`
  cursor: pointer;
  background: none;
  border: none;

`;

export default TetherCollapsible;