import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import './index.css';
import styled from 'styled-components';

const Activity: FC = () => {
  const user = useAppSelector((state) => state.oneUser);
  // const myParticipatingTethers = useAppSelector((state) => state.participatingTethers);
  // const myCompleteTethers = useAppSelector((state) => state.completedTethers);

  return (
    <div className="Activity">
      <Name>{user?.username}</Name>
      <DataTable>
        <RowHeader>
          <Cell>
            <p>IN-PROGRESS</p>
          </Cell>
          <Cell>
            <p>COMPLETED</p>
          </Cell>
          <Cell>
            <p>XP</p>
          </Cell>
        </RowHeader>
        <RowData>
          <Cell>
            {/* <p>{myParticipatingTethers}</p> */}
          </Cell>
          <Cell>
            {/* <p>{myCompleteTethers.length}</p> */}
          </Cell>
          <Cell>
            <p>DATA</p>
          </Cell>
        </RowData>
      </DataTable>
    </div>
  );
};

export default Activity;

const Name = styled.div`
  font-family: Gotham-Black;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  text-transform: uppercase;
`;

const DataTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 2px solid red;
  width: 50%;
`

const RowHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 2px solid orange;
`

const RowData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 2px solid lightgreen;
  `

const Cell = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 2px solid white;
  width: 100%;
`
