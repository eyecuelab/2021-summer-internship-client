import { FC, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateTether } from '../store/slices/tethers/tethersSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import SearchIcon from '../components/SearchIcon';
import { getMyTethers } from '../store/slices/myTethers/myTethersSlice';

interface EditTetherFormData {
  tether_name: string;
  tether_activity: string;
  tether_duration: number;
  tether_duration_noun: string;
  tether_frequency: string;
  tether_timespan: number;
  tether_category: string;
};

const schema = yup.object().shape({
  tether_activity: yup.string().required(),
  tether_duration: yup.number().positive().integer().required(),
  tether_duration_noun: yup.string().required(),
  tether_frequency: yup.string().oneOf(['Day', 'Week', 'Month']).required(),
  tether_timespan: yup.number().positive().integer().required(),
  tether_category: yup.string().oneOf(['Art', 'Social', 'Exercise', 'Music', 'Nature', 'Wellness']).required(),
});
interface FormProps {
  closeModal: () => void,
  id: string,
  oldTetherActivity: string,
  oldTetherDuration: number,
  oldTetherDurationNoun: string,
  oldTetherFrequency: string,
  oldTetherTimespan: number,
  oldTetherCategory: string,
};

const EditForm: FC<FormProps> = (props) => {
  const dispatch = useAppDispatch();
  const { closeModal } = props;
  const { id } = props;
  const loggedInUser = useAppSelector((state) => state.oneUser);
  const [formStep, setFormStep] = useState('one');
  const [searchTerm, setSearchTerm] = useState('');

  const defaultValues = {
    tether_activity: props.oldTetherActivity,
    tether_duration: props.oldTetherDuration,
    tether_duration_noun: props.oldTetherDurationNoun,
    tether_frequency: props.oldTetherFrequency,
    tether_timespan: props.oldTetherTimespan,
    tether_category: props.oldTetherCategory,
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm<EditTetherFormData>({ defaultValues, resolver: yupResolver(schema) });

  // For auto-generated titles
  const tetherActivity = watch('tether_activity');
  const tetherDuration = watch('tether_duration');
  const tetherDurationNoun = watch('tether_duration_noun');
  const tetherFrequency = watch('tether_frequency');
  const tetherTimespan = watch('tether_timespan');
  const tetherCategory = watch('tether_category');
  const tetherName = watch('tether_name');

  const onSuccess = () => {
    dispatch(getMyTethers(loggedInUser.id));
  }

  const onSubmit = (data: EditTetherFormData) => {
    data.tether_name = tetherName;
    dispatch(updateTether({ data, id, onSuccess }));
    closeModal();
  };

  return (
    <TetherForm
      id="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormHeader>
        <p>Edit Tether</p>
      </FormHeader>
      <FormTitle>
        <p>
          <label htmlFor="name">Customize Title</label>
          <FormInputRow>
            <TetherName
              type="text" onFocus={(e) => e.target.placeholder = ''}
              placeholder={tetherActivity + " " + tetherDuration + " " + tetherDurationNoun + " a " + tetherFrequency + " " + tetherTimespan + " times"}
              {...register('tether_name')}
            />
          </FormInputRow>
        </p>
      </FormTitle>
      <FormInnerContent>
        {
          formStep === 'one' &&
          <FormInputs>
            <ActivityAndCategory>
              <FormInputRow>
                <label htmlFor="activity">ACTIVITY</label>
                <TetherActivity
                  type="text" onFocus={(e) => e.target.placeholder = ''}
                  placeholder="Read, Exercise, etc..."
                  {...register('tether_activity')}
                />
              </FormInputRow>
              <FormInputRow>
                <TetherCategory
                  id="category"
                  {...register('tether_category')}
                  >
                  <option disabled value="DEFAULT">
                    {' '}
                    -- Category --
                  </option>
                  <option value="Art">Art</option>
                  <option value="Social">Social</option>
                  <option value="Exercise">Exercise</option>
                  <option value="Music">Music</option>
                  <option value="Nature">Nature</option>
                  <option value="Wellness">Wellness</option>
                </TetherCategory>
              </FormInputRow>
              <ErrorMessage>{errors.tether_category?.message}</ErrorMessage>
            </ActivityAndCategory>
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
            <ErrorMessage>{errors.tether_duration_noun?.message}</ErrorMessage>
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
        }
      </FormInnerContent>
      <FormButtons>
        <button onClick={closeModal}>Cancel</button>
        {
          formStep === 'one' &&
          <button type="submit" value="Submit">
            Update Tether
          </button>
        }
      </FormButtons>
    </TetherForm >
  );
};

export default EditForm;

const Search = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 153px;
  height: 30px;
  margin-left: 28px;
  background: #003E6A;
  border:none;
  border-radius: 12px;
  color: #FFFFFF;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  &::placeholder {
    color: #FFFFFF;
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: #003E6A;
    }
  }
`;

const SearchInput = styled.input`
  width: 90px;
  height: 20px;
  background: #003E6A;
  border:none;
  color: #FFFFFF;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  padding-left: 5px;
  &::placeholder {
    color: #FFFFFF;
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: #003E6A;
    }
  }
`

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
  height: 590px;
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
  padding: 0px 50px;
`;

const FormInnerContent = styled.div`
  grid-area: 'inputs';
  display: flex;
  flex-direction: column;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  padding-top: 11px;
`;

const FormInputs = styled.div`
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
      color: rgba(0, 62, 106, .75);
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

const FriendAttributesHeader = styled.div`
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #003E6A;
  p {
    margin: 0;
  }
  hr {
    margin: 0;
    opacity: .25;
    border-radius: 80px;
    width: 640px;
  }
`;

const FriendAttributes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #003E6A;
  width: 100%;
  h1 {
    margin-right: 200px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  p {
    font-weight: 800;
    font-size: 12px;
    line-height: 14px;
    margin: 0px 20px 0px;
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

const TetherName = styled.input`
  width: 200px;
  `;

const TetherActivity = styled.input`
  width: 200px;
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

const TetherCategory = styled.select`
  width: 130px;
  `;

const TetherTimespan = styled.input`
  width: 95px;
  text-align: center;
  `;

  const ActivityAndCategory = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 508px;
    ${TetherActivity} {
      margin-left: 73px;
      margin-right: 28px;
    }
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
