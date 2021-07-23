import { FC } from "react";
import styled from "styled-components";

const BellCircle: FC = () => {
  return (
    <Bell>
      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24.6195" r="24" fill="#00B2FF" />
        <g filter="url(#filter0_d)">
          <path fillRule="evenodd" clipRule="evenodd" d="M25.8505 35.0521C26.6727 36.4911 25.6449 38.3412 24.0003 38.3412C22.3558 38.3412 21.328 36.4911 22.1502 35.0521H25.8505Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M13.6188 34.3325C11.4604 34.3325 11.4604 31.1462 13.6188 31.1462C15.3662 31.1462 15.469 24.9792 15.469 22.8208C15.469 17.6816 18.5525 14.7009 22.0471 13.9814C21.4304 12.5424 22.4582 10.8979 24 10.8979C25.5418 10.8979 26.5696 12.5424 25.9529 13.9814C29.4475 14.7009 32.531 17.6816 32.531 22.8208C32.531 24.9792 32.6338 31.1462 34.3812 31.1462C36.5396 31.1462 36.5396 34.3325 34.3812 34.3325H13.6188Z" fill="white" />
        </g>
        <defs>
          <filter id="filter0_d" x="4" y="3.89786" width="40" height="43.4433" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
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
  opacity: .5;
  margin-bottom: 40px;
`

export default BellCircle;