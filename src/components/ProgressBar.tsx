import React, { FC, useState } from "react";
import styled from "styled-components";
import PlusCircle from "./PlusCircle";
// import { useAppSelector } from "../hooks";



const ProgressBar: FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    < Bar >
      <TetherLink onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {isHovering && <PlusCircle />}
      </TetherLink>
    </Bar >
  )
};

export default ProgressBar;

const Bar = styled.map`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 24px;
  background: #FFFFFF;
  border-radius: 12px;
  margin: 50px 0px;
`;

const TetherLink = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 12px;
  background: #C1ECFF;
  border-radius: 60px;
  border: none;
  margin: 5px;
  cursor: pointer;
`;
