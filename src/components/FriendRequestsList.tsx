import React from 'react';
import styled from 'styled-components';
import Request01 from './Requests/Request01';
import Request02 from './Requests/Request02';
import Request03 from './Requests/Request03';
import Request04 from './Requests/Request04';
import Request05 from './Requests/Request05';

const FriendRequests = () => {
  const requests = [
    <Request01 />,
    <Request02 />,
    <Request03 />,
    <Request04 />,
    <Request05 />
  ]
  return (
    <Map>
      {requests.map(request => request)}
    </Map>
  );
};

export default FriendRequests;

const Map = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-flow: row wrap;
`;