import React from 'react';
import styled from 'styled-components';
import Badge01 from './Badges/Badge01';
import Badge02 from './Badges/Badge02';
import Badge03 from './Badges/Badge03';
import Badge04 from './Badges/Badge04';
import Badge05 from './Badges/Badge05';
import Badge06 from './Badges/Badge06';
import Badge07 from './Badges/Badge07';
import Badge08 from './Badges/Badge08';
import Badge09 from './Badges/Badge09';
import Badge10 from './Badges/Badge10';
import Badge11 from './Badges/Badge11';
import Badge12 from './Badges/Badge12';
import Badge13 from './Badges/Badge13';
import Badge14 from './Badges/Badge14';

const BadgeMap = () => {
  const badges = [
    <Badge01 />,
    <Badge02 />,
    <Badge03 />,
    <Badge04 />,
    <Badge05 />,
    <Badge06 />,
    <Badge07 />,
    <Badge08 />,
    <Badge09 />,
    <Badge10 />,
    <Badge11 />,
    <Badge12 />,
    <Badge13 />,
    <Badge14 />
  ]
  return (
    <Map>
      {badges.map(badge => badge)}
    </Map>
  );
};

export default BadgeMap;

const Map = styled.div`
  display: flex;
  justify-content: start;
  flex-flow: row wrap;
  svg {
    padding: 5px 6px 4px 0px;
  }
`
