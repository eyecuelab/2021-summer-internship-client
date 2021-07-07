import styled from "styled-components";
// import { useAppSelector } from "../hooks";

const ProgressBar = () => {
  return (
    < Bar >
      <Link></Link>
    </Bar >
  )
};

const Bar = styled.map`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1160px;
  height: 24px;
  background: #FFFFFF;
  border-radius: 12px;
  margin: 50px 0px;
`

const Link = styled.div`
  width: 62px;
  height: 12px;
  background: #C1ECFF;
  border-radius: 60px;
  margin: 5px;
`

export default ProgressBar;

// const myTethers = useAppSelector((state) => state.myTethers);
// myTethers?.map((myTether) => {
//   return (
//     <Bar key={myTether.tether_id}>
//       <Link>{myTether.links_total}</Link>
//     </Bar>
//   );
// });