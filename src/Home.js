import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import LogoCouple from "./images/logo-couple.png";
import FlowerTop from "./images/flower-top.png";
import FlowerBottom from "./images/flower-bottom.png";
import CopyHero from "./images/copytext-banner-hero.png";
import Collection1Img1 from "./images/collection-1-img-1.png";
import Collection1Img2 from "./images/collection-1-img-2.png";
import Collection1Img3 from "./images/collection-1-img-3.png";
import Collection1Img4 from "./images/collection-1-img-4.png";
import Collection1Img5 from "./images/collection-1-img-5.png";
import Collection2Img1 from "./images/collection-2-img-1.png";
import Collection2Img2 from "./images/collection-2-img-2.png";
import Collection2Img3 from "./images/collection-2-img-3.png";
import Collection2Img4 from "./images/collection-2-img-4.png";
import Collection2Img5 from "./images/collection-2-img-5.png";
import Collection3Img1 from "./images/collection-3-img-1.png";
import Collection3Img2 from "./images/collection-3-img-2.png";
import Collection3Img3 from "./images/collection-3-img-3.png";
import Collection3Img4 from "./images/collection-3-img-4.png";
import Collection3Img5 from "./images/collection-3-img-5.png";

const imgCollections = [
  [
    Collection1Img1,
    Collection1Img2,
    Collection1Img3,
    Collection1Img4,
    Collection1Img5,
  ],
  [
    Collection2Img1,
    Collection2Img2,
    Collection2Img3,
    Collection2Img4,
    Collection2Img5,
  ],
  [
    Collection3Img1,
    Collection3Img2,
    Collection3Img3,
    Collection3Img4,
    Collection3Img5,
  ],
];

const Text = styled.h1`
  font-size: 50px;
`;

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const moveRightToLeft = keyframes`
  0% {
    transform: translateX(-15%);
  }
  50% {
    transform: translateX(15%);
  }
  100% {
    transform: translateX(-15%);
  }
`;

const moveLeftToRight = keyframes`
  0% {
    transform: translateX(15%);
  }

  50% {
    transform: translateX(-15%);
  }

  100% {
    transform: translateX(15%);
  }
`;

const CollectionList = styled.div`
  margin-top: 30px;
  white-space: nowrap;
  animation: ${moveRightToLeft} 15s ease-in-out infinite;
  position: relative;
  display: flex;
  gap: 30px;

  &.reverse {
    animation: ${moveLeftToRight} 15s ease-in-out infinite;
  }

  & .card {
    width: 25vw;
    overflow: hidden;
    border-radius: 15%;

    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
`;

const initialRsvp = {
  name: "",
  status: "accept",
  personCount: 1,
  message: "",
};
const Homepage = () => {
  const parallaxRef = useRef(null);

  const [rsvp, setRsvp] = useState(initialRsvp);

  const toggleStatus = (status) => {
    const { status: statusOld, ...restRsvp } = rsvp;
    setRsvp({
      ...restRsvp,
      status,
    });
  };

  const activeStatusClass = (status) => {
    // console.log(status);
    if (rsvp.status === status) return "border-red-400";
    else return "border-gray-400";
  };

  // console.log(rsvp);

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

        <div className="w-full h-[400px] relative mt-16">
          <div className="w-full h-full relative bg-slate-100 z-10"></div>
          <div className="w-full h-full absolute bg-transparent border-red-400 border-r-2 border-b-2 top-4 left-4 z-0"></div>
        </div>
      </div>

      {/* Digital looks */}
      <div className="w-full my-20 flex flex-col relative items-center">
        <h3 className="font-Fjalla-One uppercase text-xl tracking-widest mb-8">
          Our one of a kind
        </h3>
        <h2 className="text-5xl font-Petit-Formal-Script mb-8">
          Rare Digital Looks
        </h2>

        <CollectionList>
          {imgCollections[0].map((item, index) => (
            <div key={index} className="card">
              <img src={item} alt="nft" />
            </div>
          ))}
        </CollectionList>
        <CollectionList className="reverse">
          {imgCollections[1].map((item, index) => (
            <div key={index} className="card">
              <img src={item} alt="nft" />
            </div>
          ))}
        </CollectionList>
        <CollectionList>
          {imgCollections[2].map((item, index) => (
            <div key={index} className="card">
              <img src={item} alt="nft" />
            </div>
          ))}
        </CollectionList>
      </div>

      {/* Big day When/Where/How + maps */}
      <div className="w-full my-20 flex flex-col relative items-center container">
        <h2 className="text-5xl font-Petit-Formal-Script mb-16">
          When & Where ?
        </h2>
        <div className="w-full flex flex-row gap-10 justify-center">
          <div className="w-[400px] h-[180px] border-2 flex flex-col items-center justify-center">
            <h3 className="font-Fjalla-One uppercase text-xl tracking-widest mb-3">
              Wedding Date
            </h3>
            <p className="font-Petit-Formal-Script text-4xl -rotate-3">
              20 May 2023
            </p>
          </div>
          <div className="w-[400px] h-[180px] border-2 flex flex-col items-center justify-center">
            <h3 className="font-Fjalla-One uppercase text-xl tracking-widest mb-3">
              Akad Nikah
            </h3>
            <p className="text-xl font-Italiana">08.00 - 10.00 WIB</p>
            <p className="text-xl font-Italiana">Masjid Raya Bani Umar</p>
          </div>
          <div className="w-[400px] h-[180px] border-2 flex flex-col items-center justify-center">
            <h3 className="font-Fjalla-One uppercase text-xl tracking-widest mb-3">
              Resepsi Nikah
            </h3>
            <p className="text-xl font-Italiana">11.00 - 13.00 WIB</p>
            <p className="text-xl font-Italiana">Masjid Raya Bani Umar</p>
          </div>
        </div>
        <div className="w-full h-[400px] relative mt-16">
          <div className="w-full h-full relative bg-slate-100 z-10 flex justify-center items-center">
            Hover to view map
          </div>
          <div className="w-full h-full absolute bg-transparent border-red-400 border-r-2 border-b-2 top-4 left-4 z-0"></div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="w-full my-20 flex flex-col relative items-center container">
        <h3 className="font-Fjalla-One uppercase text-xl tracking-widest mb-8">
          Our one of a kind
        </h3>
        <h2 className="text-5xl font-Petit-Formal-Script mb-16">
          Gallery Photo
        </h2>
        <div className="w-full">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RSVP section */}
      <div className="w-full my-20 flex flex-col relative container">
        <div className="w-full shadow-2xl bg-white flex flex-col items-center relative">
          <img src={FlowerTop} alt="Flower Top" className="mb-8 -mt-28" />

          <h3 className="font-Fjalla-One uppercase text-xl tracking-widest mb-2">
            R.S.V.P
          </h3>
          <h2 className="text-4xl font-Petit-Formal-Script mb-8">
            Will you attend to our special day?
          </h2>

          <form className="w-[50%] flex flex-col gap-4 mb-8">
            <label className="flex flex-col gap-2">
              <span className="block text-sm uppercase text-slate-700">
                Your Name
              </span>
              <input
                type="text"
                onChange={() => {}}
                className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="Full Name"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="block text-sm uppercase text-slate-700">
                Your Response
              </span>
              <div className="w-full flex flex-row gap-3">
                <div className="w-1/2 flex flex-col items-center justify-center">
                  <input
                    type="radio"
                    name="your_response"
                    value="accept"
                    checked={rsvp.status === "accept"}
                    onChange={(event) => {
                      toggleStatus("accept");
                    }}
                    className="hidden"
                  />
                  <label
                    className={`w-full flex flex-col items-center justify-center border-2 ${
                      rsvp.status === "accept" && "border-red-400"
                    }`}
                    onClick={() => {
                      toggleStatus("accept");
                    }}
                  >
                    <span className="text-lg">Accept</span>
                  </label>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center">
                  <input
                    type="radio"
                    name="your_response"
                    value="not_accept"
                    checked={rsvp.status === "not_accept"}
                    onChange={(event) => {
                      toggleStatus("not_accept");
                    }}
                    className="hidden"
                  />
                  <label
                    className={`w-full flex flex-col items-center justify-center border-2 ${
                      rsvp.status === "not_accept" && "border-red-400"
                    }`}
                    onClick={() => {
                      toggleStatus("not_accept");
                    }}
                  >
                    <span className="text-lg">Not Accept</span>
                  </label>
                </div>
              </div>
            </label>
            <label className="flex flex-col gap-2">
              <span className="block text-sm uppercase text-slate-700">
                Your Name
              </span>
              <input
                type="text"
                className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="Full Name"
              />
            </label>
          </form>

          <img src={FlowerBottom} alt="Flower Bottom" className="-mb-28" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
