import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import styled from "styled-components";
import LogoCouple from "./images/logo-couple.png";
import TextWeddingInvitation from "./images/text-wedding-invitation.png";
import ImgLittleFlower from "./images/little-flower-image.png";
import IDFlag from "./images/indonesia.svg";
import USFlag from "./images/united.svg";
import JPNFlag from "./images/japan.svg";
import { Link } from "react-router-dom";

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

const ToggleLang = (
  <div className="absolute bottom-3 right-3 md:bottom-[unset] md:top-10 md:right-20 group z-10">
    <button className="flex items-center justify-center h-6 md:h-8 px-2 md:px-3 bg-white border border-black rounded-sm focus:outline-none transition-all">
      <img src={IDFlag} alt="Indonesia Flag" className="w-4" />
      <span className="ml-3 text-sm md:text-md tracking-wide">Bahasa</span>
      <svg
        className="w-4 h-4 mt-px ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>

    <div className="hidden group-hover:flex transition-all absolute -top-16 md:top-[unset] right-0 flex-col w-36 md:w-40 bg-white border border-black shadow-lg rounded-sm">
      <Link
        className="flex items-center h-8 px-3 text-md hover:bg-gray-200 cursor-pointer"
        to="/"
      >
        <img src={USFlag} alt="US Flag" className="w-4" />
        <span className="ml-3 leading-none tracking-wide text-sm md:text-md">
          English
        </span>
      </Link>
      <Link
        className="flex items-center h-8 px-3 text-md hover:bg-gray-200 cursor-pointer"
        to="/"
      >
        <img src={JPNFlag} alt="Japan Flag" className="w-4" />
        <span className="ml-3 leading-none tracking-wide text-sm md:text-md">
          Japan
        </span>
      </Link>
    </div>
  </div>
);

const Intro = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden bg-banner-invitation bg-cover bg-bottom md:bg-center relative">
      {/* header */}
      <div className="w-full absolute top-0 bg-transparent flex items-center justify-center">
        <img
          src={LogoCouple}
          alt="Abi & Rizka"
          className="mt-10 w-42 md:w-50 z-10"
        />
      </div>
      {ToggleLang}

      {/* body */}
      <div className="w-full h-full relative flex justify-center items-center">
        <div className="w-full md:w-[700px] h-full md:h-[540px] backdrop-blur-md bg-white/20 p-3 md:p-7 md:rounded-md">
          <div className="w-full h-full bg-transparent border-white/50 border-2 flex flex-col rounded-md justify-between items-center px-8 pt-40 pb-24 md:px-24 md:py-14">
            <div className="w-full flex flex-col items-center">
              <img src={TextWeddingInvitation} alt="Wedding Invitation" />
            </div>
            <div className="w-full flex flex-col items-center text-center">
              <img
                src={ImgLittleFlower}
                alt="Little Flower"
                className="w-[60px] mb-4"
              />
              <p className="text-md md:text-lg tracking-wider mb-2">
                Kepada Bapak/Ibu/Saudara/i
              </p>
              <p className="text-3xl md:text-4xl mb-10">
                Rizka Yulianti Pratiwi & Partner
              </p>
            </div>
            <div className="w-full flex flex-col">
              <ButtonCTA>
                <span>Buka Undangan</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </ButtonCTA>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container flex flex-col relative items-center">
        <img src={LogoCouple} alt="Abi & Rizka" className="w-[280px] mt-24" />
        <p className="text-lg mt-28 mb-2 tracking-wider">
          Kepada Bapak/Ibu/Saudara/i
        </p>
        <p className="text-4xl mb-10">Abi Fauzan & Partner</p>
        <ButtonCTA>
          <span>Buka Undangan</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </ButtonCTA>
      </div> */}
    </div>
  );
};

export default Intro;
