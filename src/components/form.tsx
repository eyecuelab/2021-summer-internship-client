import React, { FC } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createTether } from '../store/slices/tethers/tethersSlice';
import { useAppDispatch } from '../hooks';

const TetherForm = styled.form`
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: .5fr 1fr 2fr .5fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 700px;
  height: 500px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(25px);
  border-radius: 12px;
  grid-template-areas:
    'header',
    'title',
    'inputs',
    'buttons';
  input {
    margin: 10px 0px;
  }
  select {
    margin: 10px 0px;
    option {
      padding: 5px;
    }
  }
`;
const FormHeader = styled.div`
  grid-area: 'header';
  background: rgba(255, 255, 255, 0.1);
  p {
    margin-left: 30px;
    font-family: Gotham-Black;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 32px;
  }
`
const FormTitle = styled.div`
  grid-area: 'title';
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: Gotham-Black;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 32px;
  background-color: #003E6A;
  opacity: .6;
  color: #FFFFFF;
`
const FormInputs = styled.div`
  grid-area: 'inputs';
  width: 508px;
  margin-left: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  input {
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    background: transparent;
    box-sizing: border-box;
    border-radius: 4px;
    height: 36px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    padding: 0px 10px;
    &::placeholder {
      color: #FFFFFF;
    }
  }
  select {
    cursor: pointer;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    background: transparent;
    box-sizing: border-box;
    border-radius: 4px;
    height: 36px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    padding: 0px 10px;
  }
`
const FormInputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const TetherActivity = styled.input`
  width: 330px;
`
const TetherDuration = styled.input`
  width: 97px;
`
const TetherDurationNoun = styled.input`
  width: 200px;
`
const TetherFrequency = styled.select`
  width: 330px;
`
const TetherTimespan = styled.select`
  width: 330px;
`
const FormButtons = styled.div`
  grid-area: 'buttons';
  border-radius: 0px 0px 12px 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  button {
    margin-right: 5px;
    margin-left: 5px;
    cursor: pointer;
    width: 162px;
    height: 34px;
    background: #FFFFFF;
    border-radius: 12px;
    border: none;
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #003E6A;
  }
`

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
      <FormHeader><p>Create Tether</p></FormHeader>
      <FormTitle><p>Generated Title</p></FormTitle>
      <FormInputs>
        <FormInputRow>
          <label htmlFor="activity">ACTIVITY</label>
          <TetherActivity type="text" {...register('tether_action')} />
          <ErrorMessage>{errors.tether_action?.message}</ErrorMessage>
        </FormInputRow>
        <FormInputRow>
          <label htmlFor="duration">DURATION</label>
          <TetherDuration type="number" placeholder="Quantity" {...register('tether_quantity')} />
          <TetherDurationNoun type="text" placeholder="Minutes, Pages, etc..." {...register('tether_noun')} />
          <ErrorMessage>{errors.tether_quantity?.message}</ErrorMessage>
        </FormInputRow>
        <FormInputRow>
          <label htmlFor="frequency">FREQUENCY</label>
          <TetherFrequency id="frequency" {...register('tether_duration')}>
            <option disabled value="DEFAULT">
              {' '}
              -- Frequency --
            </option>
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </TetherFrequency>
          <ErrorMessage>{errors.tether_noun?.message}</ErrorMessage>
        </FormInputRow>
        <FormInputRow>
          <label htmlFor="timespan">TIMESPAN</label>
          <TetherTimespan id="duration" {...register('tether_duration')}>
            <option disabled value="DEFAULT">
              {' '}
              -- Duration --
            </option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </TetherTimespan>
          <ErrorMessage>{errors.tether_duration?.message}</ErrorMessage>
        </FormInputRow>
      </FormInputs>
      <FormButtons>
        <button>Cancel</button>
        <button type="submit" value="Submit">
          Next Step
        </button>
      </FormButtons>
    </TetherForm>
  );
};

export default Form;
