import { FC, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createTether } from '../store/slices/tethers/tethersSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import SearchIcon from '../components/SearchIcon';
import ProposeTether from '../components/ProposeTether';
import { createParticipantLink } from '../store/slices/createParticipantLink/createParticipantLinkSlice';
import { getMyTethers } from '../store/slices/myTethers/myTethersSlice';

interface TetherFormData {
  tether_activity: string;
  tether_duration: number;
  tether_duration_noun: string;
  tether_frequency: string;
  tether_timespan: number;
  tether_category: string;
};

interface ParticipantFormData {
  tether_id: string;
  user_id: string;
  links_total: number;
};

const schema = yup.object().shape({
  tether_activity: yup.string().required(),
  tether_duration: yup.number().positive().integer().required(),
  tether_duration_noun: yup.string().required(),
  tether_frequency: yup.string().oneOf(['Day', 'Week', 'Month']).required(),
  tether_timespan: yup.number().positive().integer().required(),
  tether_category: yup.string().oneOf(['Art', 'Social', 'Exercise', 'Music', 'Nature', 'Wellness']).required(),
});

const defaultValues = {
  tether_activity: '',
  tether_duration: 1,
  tether_duration_noun: '',
  tether_frequency: 'Day',
  tether_timespan: 10,
  tether_category: 'Art',
};
interface FormProps {
  closeModal: () => void
};

const Form: FC<FormProps> = (props) => {
  const dispatch = useAppDispatch();
  const { closeModal } = props;
  const users = useAppSelector((state) => state.users);
  const loggedInUser = useAppSelector((state) => state.oneUser);
  const participantId = useAppSelector((state) => state.impendingParticipantLink);
  const [formStep, setFormStep] = useState('one');
  const [searchTerm, setSearchTerm] = useState('');

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

  const onSuccess = () => {
    dispatch(getMyTethers(loggedInUser.id));
  }

  const onSubmit = (data: TetherFormData) => {
    dispatch(createTether({ data, onSuccess }));
    setFormStep('two');
  };

  const handleCreateParticipantLink = (data: ParticipantFormData) => {
    dispatch(createParticipantLink({data, onSuccess}));
  }

  return (
    <TetherForm
      id="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormHeader>
        <p>Create Tether</p>
        {/* Remove inline styling */}
        {
          formStep === 'one' &&
          <p>Step 1/<span style={{ fontSize: '24px' }}>2</span></p>
        }
        {
          formStep === 'two' &&
          <p>Step 2/<span style={{ fontSize: '24px' }}>2</span></p>
        }
      </FormHeader>
      <FormTitle>
        <p>
        {`${tetherActivity} - ${tetherDuration} ${tetherDurationNoun} a ${tetherFrequency}, ${tetherTimespan} times`}
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
        {
          formStep === 'two' &&
          <FriendAttributesHeader>
            <FriendAttributes>
              <h1>FRIENDS</h1>
              <p>TETHERS</p>
              <p>SHARED</p>
              <Search>
                <SearchIcon />
                <SearchInput type='text' placeholder='Find Friend' onChange={event => {setSearchTerm(event.target.value)}}/>
              </Search>
            </FriendAttributes>
            <hr />
          </FriendAttributesHeader>
        }
        {
          formStep === 'two' &&
          <FriendsList>
          {
            users?.filter(user => user.id !== loggedInUser.id && (user.username.toLowerCase().includes(searchTerm.toLowerCase()))).map((user) => {
              return (
                <>
                  <Map key={user.id}>
                    <p>{user.username}</p>
                    <ProposeButton
                      type="button"
                      onClick={
                        () => {
                          handleCreateParticipantLink(
                          {tether_id: participantId.toString(), user_id: user.id, links_total: Number(tetherTimespan)});
                        }
                      }>
                      <ProposeTether />
                    </ProposeButton>
                  </Map>
                  <hr />
                </>
              );
            })
          }
          </FriendsList>
        }
      </FormInnerContent>
      <FormButtons>
        <button onClick={closeModal}>Cancel</button>
        {
          formStep === 'one' &&
          <button type="submit" value="Submit">
            Next Step
          </button>
        }
        {
          formStep === 'two' &&
          <button onClick={closeModal}>
            Request Tether
          </button>
        }
      </FormButtons>
    </TetherForm >
  );
};

export default Form;

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

const ProposeButton = styled.button`
  border: none;
  background: none;
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

const FriendsList = styled.div`
  width: 640px;
  height: 190px;
  margin-left: 32px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 26px;
  color: #003E6A;
  padding-top: 10px;
  font-weight: 800;
  font-size: 18px;
  line-height: 21px;
  color: #003E6A;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  hr {
    opacity: .25;
    border-radius: 80px;
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

const Map = styled.map`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    cursor: default;
    margin: 0;
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
