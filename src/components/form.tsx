import { FC, useState } from 'react';
import styled from 'styled-components';
import { createTether } from '../store/slices/tethers/tethersSlice';
import { useAppDispatch } from '../hooks';

const TetherForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    margin: 10px;
  }
  select {
    margin: 10px;
    option {
      padding: 5px;
    }
  }
`


const Form: FC = () => {
  const [tether_action, setAction] = useState('');
  const [tether_quantity, setQuantity] = useState(0);
  const [tether_noun, setNoun] = useState('');
  const [tether_duration, setDuration] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(createTether({ tether_action, tether_quantity, tether_noun, tether_duration }));
    // alert(`
    // ${event.target.action.value}
    // ${event.target.quantity.value}
    // ${event.target.noun.value}
    // ${event.target.duration.value}
    // `);
  }

  return (
    <form id="form" onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}>
      <TetherForm>
        <p>CREATE TETHER FORM</p>
        <input
          type="text"
          value={tether_action}
          onChange={(event) => setAction(event.target.value)}
          name="action"
          placeholder="Action"
        />
        <input
          type="number"
          value={tether_quantity}
          onChange={(event) => setQuantity(parseInt(event.target.value))}
          name="quantity"
          placeholder="Quantity"
          min="1"
        />
        <input
          type="text"
          value={tether_noun}
          onChange={(event) => setNoun(event.target.value)}
          name="noun"
          placeholder="noun"
        />
        <label htmlFor="duration">Set Duration:</label>
        <select name="duration" id="duration" onChange={(event) => setDuration(event.target.value)} defaultValue={"DEFAULT"}>
          <option disabled value="DEFAULT"> -- Select a Duration --</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <button type="submit" value="Submit">SUBMIT</button>
      </TetherForm >
    </form >
  );
}

export default Form;