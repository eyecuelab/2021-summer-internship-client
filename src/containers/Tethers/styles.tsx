import styled from 'styled-components';
import { Add } from '../../components/PlusCircle';

export const CurrentCompleted = styled.div`
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

export const StatusText = styled.p<{ inactive: Boolean }>`
  ${(props) => props.inactive && 'opacity: 0.5;'}
`;

export const MainHeader = styled.div`
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

export const AddNewTether = styled.button`
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

export const TethersListContainer = styled.div``;

export const CurrentTethersList = styled.div`
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

export const Map = styled.map`
  cursor: default;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const TitleAndEdit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const Edit = styled.div`
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

export const Chev = styled.button<{ expanded: Boolean }>`
  cursor: pointer;
  background: none;
  border: none;
  transition-duration: 0.3s;
  ${(props) => props.expanded && 'transform:rotate(180deg);'}
`;

export const Expanded = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  p {
    margin: 20px 0px;
    font-size: 24px;
    color: #ffffff;
  }
`;

export const NameAndPercent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TetherContainer = styled.div<{ showBorder: Boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  width: 100%;
  ${(props) => props.showBorder && 'border: 5px solid red;'}
`;

export const ProgressBarAndBellContainer = styled.div<{ showBorder: Boolean }>`
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

export const ProgressBar = styled.div`
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

export const ProgressButton = styled.button`
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
  :hover {
    ${Add} {
      opacity: 1;
    }
  }
`;

export const ProgressDotContainer = styled.div<{ showBorder: Boolean }>`
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

export const OnePersonDotContainer = styled.div<{ showBorder: Boolean }>`
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-direction: row;
  width: 100%;
  ${(props) => props.showBorder && 'border: 2px solid gray;'}
  position: absolute;
`;

export const ZeroDotContainer = styled.div<{ showBorder: Boolean }>`
  width: 50px;
  max-height: 30px;
  ${(props) => props.showBorder && 'border: 2px solid gold;'}
  margin-left: -50px;
`;

export const ZeroDot = styled.div`
  width: 10px;
  height: 30px;
  border-radius: 60px;
  background: black;
  transform: translate(0px, -35px);
  p {
    opacity: 0;
    cursor: default;
    transition: .1s;
  }
  &:hover {
    p {
      opacity: 1;
    }
  }
`;

export const AllDotContainer = styled.div<{ showBorder: Boolean }>`
  width: 50px;
  max-height: 30px;
  background: none;
  display: flex;
  justify-content: right;
  align-items: right;
  ${(props) => props.showBorder && 'border: 2px solid gold;'}
  margin-right: -50px;
`;

export const AllDot = styled.div`
  width: 10px;
  height: 30px;
  border-radius: 60px;
  background: gold;
  p {
    opacity: 0;
    cursor: default;
    transition: .1s;
  }
  &:hover {
    p {
      opacity: 1;
    }
  }
`;

export const MainUserDotContainer = styled.div<{ showBorder: Boolean }>`
  ${(props) => props.showBorder && 'border: 2px solid orange;'}
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 30px;
`;

export const CurrentDot = styled.div`
  width: 10px;
  height: 30px;
  border-radius: 60px;
  background: maroon;
  font-size: 20px;
  margin-top: -80px;
  transform: translate(0px, 15px);
  p {
    opacity: 0;
    cursor: default;
    transition: .1s;
  }
  &:hover {
    p {
      opacity: 1;
    }
  }
`;

export const CenteringProgressDotContainer = styled.div<{ showBorder: Boolean }>`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${(props) => props.showBorder && 'border: 2px dashed black;'}
`;

export const ProgressDot = styled.div<{ imgOpacity: Boolean }>`
  width: 5px;
  height: 12px;
  border-radius: 60px;
  background: #c1ecff;
  ${(props) => props.imgOpacity && 'opacity: 0.0;'}
`;

export const IncompleteDot = styled.div<{ imgOpacity: Boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 60px;
  background: #003e6a;
  ${(props) => props.imgOpacity && 'opacity: 0.0;'}
`;

export const modalStyles = {
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

export const RightAlign = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #71a8d0;
  padding-left: 20px;
  p {
    cursor: pointer;
  }
  `

export const CompleteTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

export const CompleteContainer = styled.div`
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: right;
  flex-direction: row;
  align-items: baseline;
  margin-left: auto;
  width: 100%;
`