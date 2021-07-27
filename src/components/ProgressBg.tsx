import styled from "styled-components";

const ProgressBg = () => {
  return (
    < Bar />
  )
};

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

export default ProgressBg;