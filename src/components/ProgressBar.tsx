import styled from "styled-components";
import PlusCircle from "./PlusCircle";
// import { useAppSelector } from "../hooks";

const ProgressBar = () => {
  return (
    < Bar >
      <Link><PlusCircle /></Link>
    </Bar >
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

const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 12px;
  background: #C1ECFF;
  border-radius: 60px;
  margin: 5px;
`;

export default ProgressBar;

// const myTethers = useAppSelector((state) => state.myTethers);
// myTethers?.map((myTether) => {
//   return (
//     <Bar key={myTether.tether_id}>
//       <Link>{myTether.links_total}</Link>
//     </Bar>
//   );
// });