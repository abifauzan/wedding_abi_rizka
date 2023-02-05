import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import styled from "styled-components";
import LogoCouple from "./images/logo-couple.png";

const ButtonCTA = styled.button`
  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10px;
    display: block;
    border-radius: 50px;
    border: 1px solid #000;
    background: transparent;
    width: 55px;
    height: 55px;
    transition: all 0.3s ease;
  }

  span {
    position: relative;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  svg {
    position: relative;
    top: 0;
    margin-left: 15px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #000;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  &:hover {
    &::before {
      width: 110%;
      background: #fff;
    }

    svg {
      transform: translateX(0);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Intro = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden bg-banner-invitation bg-cover bg-center">
      <div className="container flex flex-col relative items-center">
        <img src={LogoCouple} alt="Abi & Rizka" className="w-[280px] mt-24" />
        <p className="text-lg mt-28 mb-2 tracking-wider">
          Kepada Bapak/Ibu/Saudara/i
        </p>
        <p className="text-4xl mb-10">Abi Fauzan & Partner</p>
        {/* <ButtonCTA href="#">
      <span class="top-key"></span>
      <span class="text">Buka Undangan</span>
      <span class="bottom-key-1"></span>
      <span class="bottom-key-2"></span>
    </ButtonCTA> */}
        <ButtonCTA>
          <span>Buka Undangan</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </ButtonCTA>
      </div>
    </div>
  );
};

export default Intro;
