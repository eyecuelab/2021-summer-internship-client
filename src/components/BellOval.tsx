import { FC } from "react";
import styled from "styled-components";

const BellOval: FC = () => {
  return (
    <Bell>
      <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.28833" y="4" width="24" height="18" rx="9" fill="#035C9F"/>
        <g filter="url(#filter0_d)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.74888 17.2472C7.80506 17.2472 7.80506 15.8539 8.74888 15.8539C9.51293 15.8539 9.55787 13.1573 9.55787 12.2135C9.55787 9.96629 10.9062 8.66292 12.4343 8.34832C12.1646 7.7191 12.6141 7 13.2882 7C13.9624 7 14.4118 7.7191 14.1421 8.34832C15.6702 8.66292 17.0185 9.96629 17.0185 12.2135C17.0185 13.1573 17.0635 15.8539 17.8275 15.8539C18.7714 15.8539 18.7714 17.2472 17.8275 17.2472H8.74888Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0971 17.5618C14.4566 18.191 14.0072 19 13.2881 19C12.569 19 12.1195 18.191 12.4791 17.5618H14.0971Z" fill="white"/>
        </g>
        <defs>
          <filter id="filter0_d" x="0.0410156" y="0" width="26.4944" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="4"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
        </defs>
      </svg>
    </Bell>
  );
};

const Bell = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  background: none;
  border: none;
  padding: 0;
`

export default BellOval;