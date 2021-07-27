import styled from "styled-components";

export const Request = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  height: 102px;
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  border-radius: 12px;
`
export const RequestHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: 0px 15px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
`;

export const RequestXpAndBadges = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  p {
    margin: 0px 9px;
  }
`;

export const AvatarAndInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  /* margin: 0px 15px 0px 9px; */
  margin-left: 20px;
  height: 50px;
  p {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 26px;
  }
  img {
    margin-bottom: 8px;
  }
`;

export const NameAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 274px;
  margin: 0px 9px;
  p {
    margin: 0px 0px 5px 0px;
    width: 240px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 0px 0px 10px 0px;
  height: 20px;
  svg {
    margin-right: 5px;
  }
`;