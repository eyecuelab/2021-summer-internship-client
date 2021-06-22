import { FC, useCallback, useState, useEffect, useMemo } from 'react';
// import logo from '../../assets/logo.svg';
// import Loading from '../../components/Loading';
import { useAppDispatch } from '../../hooks';
import { setToken } from '../../store/slices/auth/authSlice';
import { makeRequest } from '../../store/utils/makeRequest';
import './index.css';

// interface APOD {
//   hdurl: string;
//   explanation: string;
//   date: string;
//   url: string;
//   copyright: string;
//   media_type: string;
//   service_version: string;
//   title: string;
// }

// interface Tether {
//   media_type: string;
//   id: string;
//   name: string;
//   opened_on: string;
//   completed_on: string;
//   full_on: string;
//   // user: array;
//   created_by: string;
//   action: string;
//   quantity: string;
//   noun: string;
//   // duration: string;
// }

interface User {
  media_type: string;
  id: string;
  username: string;
  email: string;
  password: string;
  tethers_ongoing: string;
  tethers_completed: string;
  created_on: string;
  updated_on: string;
  xp: number;
}

const Ratings: FC = () => {
  const dispatch = useAppDispatch();
  // const [apod, setApod] = useState<APOD | null>(null);
  // const [date, setDate] = useState(new Date());
  // const [tether, setTether] = useState<Tether | null>(null);
  const [user, setUser] = useState<User | null>(null);

  let userArray: string = 'test';

  console.log(useState());

  // console.log(apod);
  // console.log(tether);
  // console.log(`User is ${user}`);

  const fetchUser = useCallback(async () => {
    // const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    // const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${formattedDate}`;
    const url = `/users`;
    console.log(`API url is ${url}`);
    const { success, data, error } = await makeRequest(url, 'GET');
    // userArray = [...data];
    if (success) {
      // setApod(data);
      // setTether(data);
      console.log(`data array is:`);
      console.log(data);
      console.log(`testing`);
    } else {
      console.log(`Error Received at Fetch User function`);
      console.log(error);
    }
  }, [setUser]);

  useEffect(() => {
    fetchUser();
    return () => {
      // setApod(null);
      setUser({
        media_type: 'media_type',
        id: 'id',
        username: 'username',
        email: 'email',
        password: 'password',
        tethers_ongoing: 'ongoing',
        tethers_completed: 'complete',
        created_on: 'created',
        updated_on: 'updated',
        xp: 0,
      });
    };
  }, [fetchUser]);

  function handleLogout() {
    dispatch(setToken({ token: '' }));
  }

  function handleChangeTether() {
    // const newDate = new Date(date.setDate(date.getDate() - 1));
    // setDate(newDate);
    console.log(`clicked!`);
  }
  // const media = useMemo(() => {
  //   const { media_type = '', url = '', hdurl = '', title = '' } = apod ?? {};

  //   switch (media_type) {
  //     case 'video':
  //       return (
  //         <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auth' }}>
  //           <iframe width="420" height="315" src={url} title="unique title"></iframe>
  //         </div>
  //       );
  //     case 'image':
  //       return (
  //         <picture>
  //           <source srcSet={hdurl} />
  //           <source srcSet={url} />
  //           <img style={{ maxWidth: '100%', height: '500px' }} alt={title} />
  //         </picture>
  //       );
  //     default:
  //       return '';
  //   }
  // }, [apod]);

  const media = useMemo(() => {
    // const { media_type = '', id = '', name = '', opened_on = '', completed_on = '', full_on = '', created_by = '', action = '', quantity = '', noun = '' } = tether ?? {};
    const { media_type = '', id = '', username = '', email = '', password = '', tethers_ongoing = '', tethers_completed = '', created_on = '', updated_on = '', xp = '' } = user ?? {};

    switch (media_type) {
      // case 'video':
      //   return (
      //     <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auth' }}>
      //       <iframe width="420" height="315" src={url}></iframe>
      //     </div>
      //   );
      case 'image':
        return (
          <p>
            {/* <source srcSet={hdurl} />
            <source srcSet={url} />
            <img style={{ maxWidth: '100%', height: '500px' }} alt={title} /> */}
            {id} <br />
            {username} <br />
            {email} <br />
            {password} <br />
            {tethers_ongoing} <br />
            {tethers_completed} <br />
            {created_on} <br />
            {updated_on} <br />
            {xp} <br />
          </p>
        );
      default:
        return '';
    }
  }, [user]);

  // if (!apod) {
  //   return <Loading />;
  // }

  if (!user) {
    console.log(`User is null`);
    console.log(`${userArray}`);
    // return <Loading />;
    return (
      <>
        <p>{JSON.stringify(userArray)}</p>
      </>
    )
  }

  return (
    <div className="Ratings">
      <header className="Ratings-header">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>{user?.username}</p>
          <button style={{ margin: '1rem', height: '25px' }} onClick={handleChangeTether}>
            Next
          </button>
        </div>
        <div className="content">
          {media}
          <p style={{ padding: '1rem 2rem', fontSize: '12px' }}>{user.xp}</p>
        </div>
        <div className="button">
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </header>
    </div>
  );
};

export default Ratings;
