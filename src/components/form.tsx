import React, { FC } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createTether } from '../store/slices/tethers/tethersSlice';
import { useAppDispatch } from '../hooks';

const TetherForm = styled.form`
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
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  padding: 0;
  margin: 0;
  color: red;
`;
interface TetherFormData {
  tether_action: string;
  tether_quantity: number;
  tether_noun: string;
  tether_duration: string;
}
const schema = yup.object().shape({
  tether_action: yup.string().required(),
  tether_quantity: yup.number().positive().integer().required(),
  tether_noun: yup.string().required(),
  tether_duration: yup.string().oneOf(['Daily', 'Weekly', 'Monthly']).required(),
});

const defaultValues = {
  tether_quantity: 0,
  tether_duration: 'DEFAULT',
};

const Form: FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TetherFormData>({ defaultValues, resolver: yupResolver(schema) });

  const onSubmit = (data: TetherFormData) => {
    dispatch(createTether(data));
  };

  return (
    <TetherForm id="form" onSubmit={handleSubmit(onSubmit)}>
      <p>CREATE TETHER FORM</p>
      <input type="text" placeholder="Action" {...register('tether_action')} />
      <ErrorMessage>{errors.tether_action?.message}</ErrorMessage>
      <input type="number" placeholder="Quantity" {...register('tether_quantity')} />
      <ErrorMessage>{errors.tether_quantity?.message}</ErrorMessage>
      <input type="text" placeholder="noun" {...register('tether_noun')} />
      <ErrorMessage>{errors.tether_noun?.message}</ErrorMessage>
      <label htmlFor="duration">Set Duration:</label>
      <select id="duration" {...register('tether_duration')}>
        <option disabled value="DEFAULT">
          {' '}
          -- Select a Duration --
        </option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>
      <ErrorMessage>{errors.tether_duration?.message}</ErrorMessage>
      <button type="submit" value="Submit">
        SUBMIT
      </button>
    </TetherForm>
  );
};

export default Form;
