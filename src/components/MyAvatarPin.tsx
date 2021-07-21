import React from 'react';
import styled from 'styled-components';


const MyAvatarPin = () => {
  return (
    <PinContainer>
      <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect x="11.5151" y="37.6843" width="11.9994" height="11.9994" transform="rotate(-45 11.5151 37.6843)" fill="white"/>
<circle cx="20" cy="20.1994" r="20" fill="white"/>
<circle cx="20" cy="20.1994" r="15.7576" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0" transform="scale(0.000976562)"/>
</pattern>
</defs>
</svg>
    </PinContainer>
  );
};

export default MyAvatarPin;

const PinContainer = styled.div`
`;