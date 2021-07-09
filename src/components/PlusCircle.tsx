import React from 'react';
import styled from 'styled-components';

const PlusCircle = () => {
  return (
    <Add>
      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11.2234" cy="11" r="11" fill="#003E6A" />
        <path d="M9.52114 12.841H6.26789V9.607H9.52114V6.296H12.8706V9.607H16.1239V12.841H12.8706V16.152H9.52114V12.841Z" fill="white" />
      </svg>
    </Add>
  );
};

const Add = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`

export default PlusCircle;