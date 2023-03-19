import { useMemo, useRef } from "react";
import styled from "styled-components";
import LogoCouple from "./images/logo-couple.png";
import TextWeddingInvitation from "./images/text-wedding-invitation.png";
import ImgLittleFlower from "./images/little-flower-image.png";
import IDFlag from "./images/indonesia.svg";
import USFlag from "./images/united.svg";
import JPNFlag from "./images/japan.svg";
import {
  Link,
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import useLang from "./hooks/useLang";
import { langList } from "./App";

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
    height: 100%;
    transition: all 0.3s ease;
  }

  span {
    position: relative;
    font-size: 20px;
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
      height: 100%;
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
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { lang } = useLang();

  const handleSwitchLang = (lang) => {
    const searchQueryString = `?${createSearchParams({
      ...Object.fromEntries([...Array.from(searchParams)]),
      lang,
    })}`;

    navigate({
      search: searchQueryString,
    });
  };

  const toggleLang = useMemo(() => {
    return (
      <div className="absolute bottom-3 right-3 md:bottom-[unset] md:top-10 md:right-20 group z-10">
        {langList
          .filter((item) => item === lang)
          .map((item) => (
            <button
              key={item}
              onClick={() => handleSwitchLang(item)}
              className="flex items-center justify-center h-6 md:h-8 w-14 bg-transparent border rounded-sm focus:outline-none md:ml-1 transition-all duration-500 border-white hover:bg-white hover:text-black"
            >
              <span className="ml-1 text-sm md:text-md tracking-widest uppercase">
                {item}
              </span>
              <svg
                className="h-4 mt-px ml-1"
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
          ))}

        {langList
          .filter((item) => item !== lang)
          .map((item) => (
            <div
              key={item}
              onClick={() => handleSwitchLang(item)}
              className="hidden group-hover:flex transition-all absolute -top-16 md:top-[unset] w-14 right-0 flex-col h-6 md:h-8 border shadow-lg rounded-b-sm items-center justify-center cursor-pointer border-white bg-transparent text-black hover:bg-white"
            >
              <span className="ml-1 text-sm md:text-md tracking-widest uppercase">
                {item}
              </span>
            </div>
          ))}
      </div>
    );
  }, [lang]);

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
      {toggleLang}

      {/* body */}
      <div className="w-full h-full relative flex justify-center items-center">
        <div className="w-full md:w-[700px] h-full md:h-[560px] backdrop-blur-md bg-white/20 p-3 md:p-7 md:rounded-md">
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
              <p className="text-3xl md:text-4xl mb-10 font-light">
                Rizka Yulianti Pratiwi & Partner
              </p>
            </div>
            <div className="w-full flex flex-col">
              <ButtonCTA>
                <span className="font-normal">Buka Undangan</span>
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
