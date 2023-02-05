import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import styled from "styled-components";
import LogoCouple from "./images/logo-couple.png";
import CopyHero from "./images/copytext-banner-hero.png";

const Text = styled.h1`
  font-size: 50px;
`;

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const BoxVideo = styled.div`
  &::after {
    content: '"',
    position: absolute;
    top: 20px;
    width: 100px;
    height: 320px;
    border: 1px solid red;
    background: red;
  }
`;

const Homepage = () => {
  const parallaxRef = useRef(null);

  return (
    <div className="w-full flex flex-col items-start relative overflow-x-hidden bg-main">
      {/* <Parallax ref={parallaxRef} pages={3}>
        <div className="w-full h-[100vh] bg-banner-pattern bg-no-repeat bg-cover"></div>
      </Parallax> */}

      {/* Banner */}
      <div className="w-[100vw] h-[100vh] bg-banner-flower bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className="flex flex-col items-center relative">
          <h2 className="text-5xl tracking-[1rem] font-Italiana relative -top-10">
            Abi & Rizka
          </h2>
          <img src={CopyHero} alt="Copytext Hero" className="w-full" />
          <h2 className="text-2xl tracking-[0.6rem] font-Petit-Formal-Script self-end -mt-3">
            20.05.2023
          </h2>
        </div>
      </div>

      {/* Welcome text */}
      <div className="w-full flex container gap-5 my-20">
        <div className="w-3/4 p-8 bg-white">
          <p className="m-0 text-2xl tracking-wide">
            ¡Hola! Welcome to the digital casa of the Pittmans, or I guess we
            should say future Pittmans. We can’t wait to celebrate our wedding
            on Cinco de Mayo with everyone! Until then, take some time exploring
            our site. Don't forget to RSVP! — C & B
          </p>
        </div>
        <div className="w-1/4 flex flex-col gap-1">
          <div className="w-full bg-red-500 text-white p-3 text-center text-xl font-Fjalla-One inline-flex justify-center items-center">
            The Big Day :
          </div>
          <div className="w-full h-full bg-red-500 text-white text-center text-4xl flex items-center justify-center font-Fjalla-One">
            <div className="flex items-center justify-center">
              20 . 05 . 2023
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="w-full my-20 flex flex-col items-center container">
        <h3 className="font-Fjalla-One uppercase text-xl tracking-widest mb-8">
          Our Story
        </h3>
        <h2 className="text-5xl font-Petit-Formal-Script mb-8">
          Dance, Dance, Dance
        </h2>
        <p className="text-2xl text-center">
          As a pair of determined designers, Daniela and Moe first got to know
          each other working late nights in design studio during grad school—
          brewing that third pot of coffee, sharing tasty treats, and exchanging
          upbeat bops. Yet it wasn’t until a group outing where they were left
          alone on the dance floor, grooving to funky soul beats, when they knew
          they were meant to be together.
        </p>

        <div className="w-full h-[300px] relative mt-16">
          <div className="w-full h-full relative bg-slate-100 z-10"></div>
          <div className="w-full h-full absolute bg-transparent border-red-400 border-r-2 border-b-2 top-4 left-4 z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
