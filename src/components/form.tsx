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
  const [name, setName] = useState('');
  const [created_by, setCreatedBy] = useState('');
  const [action, setAction] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [noun, setNoun] = useState('');
  const [duration, setDuration] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    dispatch(createTether({ name, created_by, action, quantity, noun, duration }));
    alert(`
    ${event.target.action.value}
    ${event.target.quantity.value}
    ${event.target.noun.value}
    ${event.target.duration.value}
    `);
  }

  return (
    <form id="form" onSubmit={(event) => {
      event.preventDefault();
      handleSubmit(event);
    }}>
      <TetherForm>
        <p>CREATE TETHER FORM</p>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          value={created_by}
          onChange={(event) => setCreatedBy(event.target.value)}
          name="created_by"
          placeholder="Created By"
        />
        <input
          type="text"
          value={action}
          onChange={(event) => setAction(event.target.value)}
          name="action"
          placeholder="Action"
        />
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(parseInt(event.target.value))}
          name="quantity"
          placeholder="Quantity"
        />
        <input
          type="text"
          value={noun}
          onChange={(event) => setNoun(event.target.value)}
          name="noun"
          placeholder="noun"
        />
        <label htmlFor="duration">Set Duration:</label>
        <select name="duration" id="duration" onChange={(event) => setDuration(event.target.value)}>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <button type="submit" value="Submit">SUBMIT</button>
      </TetherForm >
    </form>
  );
}

export default Form;