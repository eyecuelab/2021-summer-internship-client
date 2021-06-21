import { FC, useCallback, useState, useEffect, useMemo } from 'react';
// import logo from '../../assets/logo.svg';
import Loading from '../../components/Loading';
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

interface Tether {
  media_type: string;
  id: string;
  name: string;
  opened_on: string;
  completed_on: string;
  full_on: string;
  // user: array;
  created_by: string;
  action: string;
  quantity: string;
  noun: string;
  // duration: string;
}

const Ratings: FC = () => {
  const dispatch = useAppDispatch();
  // const [apod, setApod] = useState<APOD | null>(null);
  const [date, setDate] = useState(new Date());
  const [tether, setTether] = useState<Tether | null>(null);

  // console.log(apod);
  console.log(tether);

  const fetchTether = useCallback(async () => {
    // const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    // const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${formattedDate}`;
    const url = `http://localhost:8000/tethers`;
    console.log(url);
    const { success, data, error } = await makeRequest(url, 'GET');
    console.log(`Data Received ${data}`);
    if (success) {
      // setApod(data);
      // setTether(data);
      console.log(data);
    } else {
      console.log(`Error Received at Fetch Tether function`);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchTether();
    return () => {
      // setApod(null);
      setTether(null);
    };
  }, [fetchTether]);

  function handleLogout() {
    dispatch(setToken({ token: '' }));
  }

  function handleChangeTether() {
    const newDate = new Date(date.setDate(date.getDate() - 1));
    setDate(newDate);
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
    const { media_type = '', id = '', name = '', opened_on = '', completed_on = '', full_on = '', created_by = '', action = '', quantity = '', noun = '' } = tether ?? {};

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
            {name} <br />
            {opened_on} <br />
            {completed_on} <br />
            {full_on} <br />
            {created_by} <br />
            {action} <br />
            {quantity} <br />
            {noun} <br />
          </p>
        );
      default:
        return '';
    }
  }, [tether]);

  // if (!apod) {
  //   return <Loading />;
  // }

  if (!tether) {
    return <Loading />;
  }

  return (
    <div className="Ratings">
      <header className="Ratings-header">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>{tether?.name}</p>
          <button style={{ margin: '1rem', height: '25px' }} onClick={handleChangeTether}>
            Next
          </button>
        </div>
        <div className="content">
          {media}
          <p style={{ padding: '1rem 2rem', fontSize: '12px' }}>{tether.created_by}</p>
        </div>
        <div className="button">
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </header>
    </div>
  );
};

export default Ratings;
