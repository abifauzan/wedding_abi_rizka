import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import styled from "styled-components";
import LogoCouple from "./images/logo-couple.png";

const Text = styled.h1`
  font-size: 50px;
`;

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const ButtonCTA = styled.a`
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  float: right;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 1.25em 2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: all 0.3s ease-in-out;
  user-select: none;
  font-size: 13px;

  &::before {
    content: " ";
    width: 1.5625rem;
    height: 2px;
    background: black;
    top: 50%;
    right: 1.5em;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
  }

  .text {
    font-size: 1.125em;
    line-height: 1.33333em;
    padding-right: 2em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
  }

  .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: #fff;
    transition: width 0.5s ease-out, left 0.3s ease-out;
  }

  .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: #fff;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: #fff;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  &:hover {
    color: white;
    background: black;

    &::before {
      width: 0.9375rem;
      background: white;
    }

    .text {
      color: white;
      padding-right: 2.5em;
    }

    .top-key {
      right: -2px;
      width: 0px;
    }

    .bottom-key-1,
    .bottom-key-2 {
      right: 0;
      width: 0;
    }
  }
`;

const App = () => {
  const parallaxRef = useRef(null);

  const homePage = (
    <div className="w-full h-full bg-red-300">
      <Parallax ref={parallaxRef} pages={3}>
        <div className="w-full h-[100vh] bg-banner-pattern bg-no-repeat bg-cover"></div>
      </Parallax>
    </div>
  );

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden bg-banner-invitation bg-cover bg-center">
      <div className="container flex flex-col relative items-center">
        <img src={LogoCouple} alt="Abi & Rizka" className="w-[280px] mt-24" />
        <p className="text-lg mt-28 mb-2 tracking-wider">
          Kepada Bapak/Ibu/Saudara/i
        </p>
        <p className="text-4xl mb-10">Abi Fauzan & Partner</p>
        <ButtonCTA href="#">
          <span class="top-key"></span>
          <span class="text">Buka Undangan</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </ButtonCTA>
      </div>
    </div>
  );
};

export default App;
