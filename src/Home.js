import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoCouple from "./images/logo-couple.png";
import FlowerTop from "./images/flower-top.png";
import FlowerBottom from "./images/flower-bottom.png";
import LoveArt from "./images/love-art.png";
import CopyHero from "./images/copytext-banner-hero.png";
import FloatingFlower1 from "./images/floating_image-1.png";
import FloatingFlower2 from "./images/floating_image-2.png";
import IDFlag from "./images/indonesia.svg";
import { BsMusicNote, BsFillPauseFill } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";
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

      {/* header */}
      <header className="w-full absolute h-[80px] md:h-[100px] text-white bg-gradient-to-b from-gray-900 to-transparent">
        <div className="container w-full h-full flex justify-center items-center relative">
          <Link
            to="/"
            className="w-full text-center lg:text-left uppercase text-2xl md:text-3xl font-Playfair-Display tracking-wider absolute left-1/2 transform lg:transform-[unset] -translate-x-1/2 lg:translate-x-[unset] lg:left-0"
          >
            Abi & Rizka
          </Link>

          {/* nav desktop */}
          <nav className="hidden lg:flex h-full items-center justify-center text-lg">
            <Link
              to="/"
              className="h-full px-4 inline-flex justify-center items-center tracking-wide"
            >
              Homepage
            </Link>
            <Link
              to="/"
              className="h-full px-4 inline-flex justify-center items-center tracking-wide"
            >
              Our Story
            </Link>
            <Link
              to="/"
              className="h-full px-4 inline-flex justify-center items-center tracking-wide"
            >
              Digital Looks
            </Link>
            <Link
              to="/"
              className="h-full px-4 inline-flex justify-center items-center tracking-wide"
            >
              When & Where
            </Link>
            <Link
              to="/"
              className="h-full px-4 inline-flex justify-center items-center tracking-wide"
            >
              RSVP
            </Link>
          </nav>

          {/* right item nav desktop */}
          <div className="hidden absolute right-0 xl:flex justify-center items-center">
            <button className="inline-flex h-8 px-2 justify-center items-center gap-1 bg-transparent rounded-sm text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <BsFillPauseFill size="1.1em" />
              <span className="tracking-wide">His song</span>
            </button>
            <button className="inline-flex h-8 px-2 justify-center items-center gap-1 bg-transparent rounded-sm text-white hover:bg-gradient-to-r from-rose-400 to-red-500">
              <BsMusicNote size="1.1em" />
              <span className="tracking-wide">Her song</span>
            </button>
            <button className="flex items-center justify-center h-6 md:h-8 px-2 md:px-3 bg-transparent border border-white rounded-sm focus:outline-none transition-all md:ml-2">
              <img src={IDFlag} alt="Indonesia Flag" className="w-4" />

              <span className="ml-3 text-sm md:text-md tracking-wide">
                Bahasa
              </span>
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
          </div>

          {/* righht item nav mobile */}
          <div className="absolute right-[1rem] md:right-0 flex xl:hidden">
            <BsMusicNote size="1.2em" className="cursor-pointer lg:mr-5" />
            <VscMenu size="1.2em" className="cursor-pointer hidden lg:block" />
          </div>
          <div className="absolute left-[1rem] md:left-0 flex lg:hidden">
            <VscMenu size="1.2em" className="cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="w-[100vw] h-[100vh] bg-banner-home bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className="flex flex-col items-center justify-center text-center relative text-white">
          <h2 className="text-5xl md:text-9xl tracking-widest font-Alex-Brush relative">
            Abi & Rizka
          </h2>
          <h2 className=" text-2xl md:text-4xl tracking-widest italic mt-2 md:mt-4">
            Are getting married
          </h2>
        </div>
      </div>

      {/* Welcome text */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch container gap-4 py-20 px-5 sm:px-24 md:px-0 relative">
        <div className="w-full md:w-3/4 p-8 xl:p-10 bg-white z-10">
          <p className="m-0 text-xl xl:text-2xl tracking-wide">
            ¡Hola! Together with our families, we invite you to our wedding
            ceremony and celebration this spring in Barcelona. Our wedding will
            begin at 5pm on May 18th at 158 Road, Berry Francues Vineyards. — A
            & R
          </p>
        </div>
        <div className="w-full md:w-1/4 flex flex-col gap-1 md:gap-2 z-10">
          <div className="w-full bg-red-500 text-white p-2 md:p-3 text-center text-xl lg:text-xl font-Fjalla-One tracking-wide inline-flex justify-center items-center">
            The Big Day :
          </div>
          <div className="w-full h-full bg-red-500 text-white text-center text-3xl lg:text-4xl flex items-center justify-center font-Fjalla-One py-3 md:py-0">
            <div className="flex items-center justify-center">
              20 . 05 . 2023
            </div>
          </div>
        </div>
        <img
          src={FloatingFlower1}
          alt="Floating Flower at Top"
          className="absolute -top-10 left-0 md:-left-20"
        />
        <img
          src={FloatingFlower2}
          alt="Floating Flower at Bottom"
          className="hidden sm:flex absolute -bottom-5 -right-10 md:-right-24"
        />
      </div>

      {/* Our Story */}
      <div className="w-full pt-0 md:pt-20 pb-20 flex flex-col items-center container">
        <h3 className="font-Fjalla-One uppercase text-lg xl:text-xl tracking-widest mb-5 xl:mb-8">
          Our Story
        </h3>
        <h2 className="text-4xl xl:text-5xl font-Petit-Formal-Script mb-5 xl:mb-8">
          Dance, Dance, Dance
        </h2>
        <p className="text-xl xl:text-2xl text-center px-2 sm:px-0">
          As a pair of determined designers, Daniela and Moe first got to know
          each other working late nights in design studio during grad school—
          brewing that third pot of coffee, sharing tasty treats, and exchanging
          upbeat bops. Yet it wasn’t until a group outing where they were left
          alone on the dance floor, grooving to funky soul beats, when they knew
          they were meant to be together.
        </p>

        <div className="w-[90%] md:w-full h-[400px] relative mt-16">
          <div className="w-full h-full relative bg-slate-100 z-10"></div>
          <div className="w-full h-full absolute bg-transparent border-red-400 border-r-2 border-b-2 top-4 left-4 z-0"></div>
        </div>
      </div>

      {/* Digital looks */}
      <div className="w-full py-20 flex flex-col relative items-center">
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
      <div className="w-full py-20 flex flex-col relative items-center container">
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
      <div className="w-full py-20 flex flex-col relative items-center container">
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
      <div className="w-full py-20 flex flex-col relative container">
        <div className="w-full shadow-2xl bg-white flex flex-col items-center relative py-24">
          <img src={FlowerTop} alt="Flower Top" className="absolute -top-32" />

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
                Your Message to us
              </span>
              <textarea
                className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="Message"
              />
            </label>
          </form>

          <img
            src={FlowerBottom}
            alt="Flower Bottom"
            className="absolute -bottom-40"
          />
        </div>
      </div>

      {/* Testimonial */}
      <div className="w-full pb-20 pt-40 flex flex-col relative items-center container">
        <h3 className="font-Fjalla-One uppercase text-xl tracking-widest mb-8">
          Testimonial
        </h3>
        <h2 className="text-5xl font-Petit-Formal-Script mb-16">
          Happy message from our friends
        </h2>
        <div className="w-full flex items-center justify-center">
          <div className="w-[400px] h-[400px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex justify-center items-center rounded-lg">
            <div className="flex justify-center items-center bg-white w-[99%] h-[99%] rounded-md">
              Testimonial
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
