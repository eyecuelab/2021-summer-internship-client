import { FC } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createTether } from '../store/slices/tethers/tethersSlice';
import { useAppDispatch } from '../hooks';
interface TetherFormData {
  tether_activity: string;
  tether_duration: number;
  tether_duration_noun: string;
  tether_frequency: string;
  tether_timespan: number;
};

const schema = yup.object().shape({
  tether_activity: yup.string().required(),
  tether_duration: yup.number().positive().integer().required(),
  tether_duration_noun: yup.string().required(),
  tether_frequency: yup.string().oneOf(['Day', 'Week', 'Month']).required(),
  tether_timespan: yup.number().positive().integer().required(),
});

const defaultValues = {
  tether_duration: 1,
  tether_frequency: 'Day',
  tether_timespan: 10,
};
interface FormProps {
  closeModal: () => void
};

const Form: FC<FormProps> = (props) => {
  const { closeModal } = props;
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm<TetherFormData>({ defaultValues, resolver: yupResolver(schema) });

  const tetherActivity = watch('tether_activity');
  const tetherDuration = watch('tether_duration');
  const tetherDurationNoun = watch('tether_duration_noun');
  const tetherFrequency = watch('tether_frequency');
  const tetherTimespan = watch('tether_timespan');

  const onSubmit = (data: TetherFormData) => {
    dispatch(createTether(data));
    closeModal();
  };

  return (
    <TetherForm id="form" onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>
        <p>Create Tether</p>
        <p>Step 1/<span style={{fontSize: '24px'}}>2</span></p>
      </FormHeader>
      <FormTitle>
        <p>
          {tetherActivity}{' '}
          {tetherDuration}{' '}
          {tetherDurationNoun}{' '}
          a{' '}
          {tetherFrequency}{' - '}
          {tetherTimespan}{' '}
          times
        </p>
      </FormTitle>
      <FormInputs>
        <FormInputRow>
          <label htmlFor="activity">ACTIVITY</label>
          <TetherActivity
            type="text"
            {...register('tether_activity')}
          />
        </FormInputRow>
        <ErrorMessage>{errors.tether_activity?.message}</ErrorMessage>
        <FormInputRow>
          <label htmlFor="duration">DURATION</label>
          <TetherDuration
            type="number"
            min="1"
            {...register('tether_duration')}
          />
          <TetherDurationNoun
            type="text" onFocus={(e) => e.target.placeholder = ''}
            placeholder="Minutes, Pages, etc..."
            {...register('tether_duration_noun')}
          />
        </FormInputRow>
        <ErrorMessage>{errors.tether_duration?.message}</ErrorMessage>
        <FormInputRow>
          <label htmlFor="frequency">FREQUENCY</label>
          <TetherFrequency
            id="frequency"
            {...register('tether_frequency')}
          >
            <option disabled value="DEFAULT">
              {' '}
              -- Frequency --
            </option>
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </TetherFrequency>
        </FormInputRow>
        <ErrorMessage>{errors.tether_frequency?.message}</ErrorMessage>
        <FormInputRow>
          <label htmlFor="timespan">TIMESPAN</label>
          <TetherTimespan
            type="number"
            min="1"
            {...register('tether_timespan')}
          />
          <p>Times</p>
        </FormInputRow>
        <ErrorMessage>{errors.tether_timespan?.message}</ErrorMessage>
      </FormInputs>
      <FormButtons>
        <button onClick={closeModal}>Cancel</button>
        <button type="submit" value="Submit">
          Next Step
        </button>
      </FormButtons>
    </TetherForm>
  );
};

export default Form;

const TetherForm = styled.form`
  background: #FFFFFF;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: .5fr 1fr 2fr .5fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 710px;
  height: 550px;
  border-radius: 12px;
  grid-template-areas:
    'header',
    'title',
    'inputs',
    'buttons';
  input {
    margin: 12px 0px;
  }
  select {
    margin: 12px 0px;
    option {
      padding: 5px;
    }
  }
`;

const FormHeader = styled.div`
  grid-area: 'header';
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  p {
    color: #003E6A;
    margin-left: 30px;
    margin-right: 30px;
    font-family: Gotham-Black;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 32px;
  }
`;

const FormTitle = styled.div`
  grid-area: 'title';
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 32px;
  background: linear-gradient(116.35deg, #006DBB 0%, #00B2FF 65.94%);
  color: #FFFFFF;
`;

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
  label {
    color: #AAAAAA;
  }
  input {
    color: #003E6A;
    border: 1px solid #FFFFFF;
    background: #EAF9FF;
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
      color: #003E6A;
    }
  }
  select {
    cursor: pointer;
    color: #003E6A;
    border: 1px solid #FFFFFF;
    background: #EAF9FF;
    box-sizing: border-box;
    border-radius: 4px;
    height: 36px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    padding: 0px 10px;
  }
`;

const FormInputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    color: #003E6A;
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    padding-right: 148px;
  }
`;

const TetherActivity = styled.input`
  width: 360px;
`;

const TetherDuration = styled.input`
  width: 95px;
  text-align: center;
`;

const TetherDurationNoun = styled.input`
  width: 200px;
`;

const TetherFrequency = styled.select`
  width: 360px;
`;

const TetherTimespan = styled.input`
  width: 95px;
  text-align: center;
`;

const FormButtons = styled.div`
  grid-area: 'buttons';
  border-radius: 0px 0px 12px 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #EEEEEE;
  backdrop-filter: blur(25px);
  button {
    margin-right: 5px;
    margin-left: 5px;
    cursor: pointer;
    width: 162px;
    height: 34px;
    background: #003E6A;
    border-radius: 12px;
    border: none;
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
  }
`;

const ErrorMessage = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: end;
  font-size: 12px;
  padding: 0;
  margin: -3px 0px 0px 205px;
  color: red;
`;
