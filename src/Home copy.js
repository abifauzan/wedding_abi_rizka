import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";

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
import BaniUmarImg from "./images/masjid-bani-umar-bintaro.jpg";
import AkadNikahImg from "./images/akad-nikah.jpg";
import ResepsiNikahImg from "./images/resepsi-nikah.jpg";
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
import Heading from "./components/heading";

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
  white-space: nowrap;
  animation: ${moveRightToLeft} 15s ease-in-out infinite;
  position: relative;
  display: flex;

  &.reverse {
    animation: ${moveLeftToRight} 15s ease-in-out infinite;
  }

  & .card {
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

const listMenu = [
  {
    slug: "#welcome",
    title: "Welcome",
  },
  {
    slug: "#our-drama",
    title: "Our Drama",
  },
  {
    slug: "#the-big-day",
    title: "The Big Day",
  },
  {
    slug: "#gallery",
    title: "Gallery",
  },
  {
    slug: "#your-reply",
    title: "Your reply",
  },
];

const listGallery = [
  "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
  "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp",
  "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
  "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
  "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
];

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

  return (
    <div className="w-full flex flex-col items-start relative overflow-x-hidden bg-main">
      {/* <Parallax ref={parallaxRef} pages={7}> */}
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
            {listMenu.map((item) => (
              <Link
                key={item.slug}
                to={item.slug}
                className="h-full px-4 inline-flex justify-center items-center tracking-wide"
              >
                {item.title}
              </Link>
            ))}
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
            ??Hola! Together with our families, we invite you to our wedding
            ceremony and celebration this spring in Barcelona. Our wedding will
            begin at 5pm on May 18th at 158 Road, Berry Francues Vineyards. ??? A
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
        <Heading title="Our Drama" subtitle="Dance, Dance, Dance" />

        <p className="text-xl xl:text-2xl text-center px-2 sm:px-0">
          As a pair of determined designers, Daniela and Moe first got to know
          each other working late nights in design studio during grad school???
          brewing that third pot of coffee, sharing tasty treats, and exchanging
          upbeat bops. Yet it wasn???t until a group outing where they were left
          alone on the dance floor, grooving to funky soul beats, when they knew
          they were meant to be together.
        </p>

        <div className="w-[90%] md:w-full h-[400px] relative mt-16">
          <div className="w-full h-full relative bg-slate-100 z-10"></div>
          <div className="w-full h-full absolute bg-transparent border-red-400 border-r-2 border-b-2 top-4 left-4 z-0"></div>
        </div>
      </div>

      {/* Digital looks */}
      <div className="w-full flex flex-col relative items-center">
        <CollectionList className="mt-5 md:mt-8 gap-5 md:gap-8">
          {imgCollections[0].map((item, index) => (
            <div key={index} className="card w-[40vw] md:w-[25vw]">
              <img src={item} alt="nft" />
            </div>
          ))}
        </CollectionList>
        <CollectionList className="reverse mt-5 md:mt-8 gap-5 md:gap-8">
          {imgCollections[1].map((item, index) => (
            <div key={index} className="card w-[40vw] md:w-[25vw]">
              <img src={item} alt="nft" />
            </div>
          ))}
        </CollectionList>
        <CollectionList className="mt-5 md:mt-8 gap-5 md:gap-8">
          {imgCollections[2].map((item, index) => (
            <div key={index} className="card w-[40vw] md:w-[25vw]">
              <img src={item} alt="nft" />
            </div>
          ))}
        </CollectionList>
      </div>

      {/* Big day When/Where/How + maps */}
      <div className="w-full py-20 flex flex-col relative items-center container">
        <Heading title="The Big Day" subtitle="When & Where ?" />

        <div className="w-full flex flex-row gap-8 justify-center mt-10 flex-wrap">
          <div className="w-[400px] h-[400px] rounded-md flex flex-col items-center justify-center shadow-md">
            <div className="w-full h-3/5 rounded-t-md">
              <img
                src={BaniUmarImg}
                alt="Masjid Raya Bani Umar"
                className="object-cover w-full h-full rounded-t-md"
              />
            </div>
            <div className="w-full h-2/5 rounded-b-md p-6 flex flex-col justify-between">
              <span className="text-2xl font-Oswald font-light tracking-wide">
                The Venue
              </span>
              <div className="inline-flex flex-col">
                <span className="font-Italiana font-bold mb-1">
                  Masjid Raya Bani Umar
                </span>
                <span className="font-Italiana text-gray-500">
                  Bintaro, Tangerang Selatan
                </span>
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[400px] rounded-md flex flex-col items-center justify-center shadow-md">
            <div className="w-full h-3/5 rounded-t-md">
              <img
                src={AkadNikahImg}
                alt="Akad Nikah"
                className="object-cover w-full h-full rounded-t-md"
              />
            </div>
            <div className="w-full h-2/5 rounded-b-md p-6 flex flex-col justify-between">
              <span className="text-2xl font-Oswald font-light tracking-wide">
                Akad Nikah
              </span>
              <div className="inline-flex flex-col">
                <span className="font-Italiana font-bold mb-1">
                  08.00 - 10.00 WIB
                </span>
                <span className="font-Italiana text-gray-500">20 May 2023</span>
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[400px] rounded-md flex flex-col items-center justify-center shadow-md">
            <div className="w-full h-3/5 rounded-t-md">
              <img
                src={ResepsiNikahImg}
                alt="Resepsi Pernikahan"
                className="object-cover w-full h-full rounded-t-md"
              />
            </div>
            <div className="w-full h-2/5 rounded-b-md p-6 flex flex-col justify-between">
              <span className="text-2xl font-Oswald font-light tracking-wide">
                Resepsi Pernikahan
              </span>
              <div className="inline-flex flex-col">
                <span className="font-Italiana font-bold mb-1">
                  11.00 - 13.00 WIB
                </span>
                <span className="font-Italiana text-gray-500">20 May 2023</span>
              </div>
            </div>
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
      <div className="w-full py-20 flex flex-col relative items-center">
        <Heading title="Our one of a kind" subtitle="Gallery" />

        <div className="w-full mt-10 flex flex-col gap-3">
          <div className="w-full">
            <Swiper
              spaceBetween={10}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              slidesPerView={"auto"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              modules={[Autoplay]}
            >
              {listGallery.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="w-[400px] h-[400px] first:ml-3 last:mr-3"
                >
                  <img
                    src={item}
                    alt={`Item ${index}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full">
            <Swiper
              spaceBetween={10}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              slidesPerView={"auto"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                reverseDirection: true,
                // pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
            >
              {listGallery.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="w-[400px] h-[400px] first:ml-3 last:mr-3"
                >
                  <img
                    src={item}
                    alt={`Item ${index}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* RSVP section */}
      <div className="w-full pt-32 pb-48 flex flex-col relative container">
        <div className="w-full shadow-2xl flex flex-col items-center relative">
          <img
            src={FlowerTop}
            alt="Flower Top"
            className="relative -mt-20 sm:-mt-24 object-cover"
          />

          <h2 className="w-full text-3xl sm:text-4xl text-center font-Italiana py-6 sm:py-10 px-10">
            Will you attend to <br className="hidden sm:block" /> our special
            day?
          </h2>

          <form className="w-full sm:w-2/3 lg:w-1/2 px-3 md:px-0 flex flex-col gap-6 pb-10 sm:pb-18">
            <label className="flex flex-col gap-2">
              <span className="block font-Italiana text-sm font-light tracking-widest uppercase text-slate-700">
                Your Name
              </span>
              <input
                type="text"
                onChange={() => {}}
                className="block w-full px-5 py-4 text-md bg-white border border-slate-300 rounded-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="Full Name"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="block font-Italiana text-sm font-light tracking-widest uppercase text-slate-700">
                Your Response
              </span>
              <div className="w-full flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-1/2 h-20 flex flex-col items-center justify-center">
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
                    className={`w-full h-full flex flex-col items-center justify-center text-center border-2 bg-white ${
                      rsvp.status === "accept" && "border-red-400"
                    }`}
                    onClick={() => {
                      toggleStatus("accept");
                    }}
                  >
                    <span className="text-lg">Joyfully Accepts</span>
                  </label>
                </div>
                <div className="w-full sm:w-1/2 h-20 flex flex-col items-center justify-center">
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
                    className={`w-full h-full flex flex-col items-center justify-center text-center border-2 bg-white ${
                      rsvp.status === "not_accept" && "border-red-400"
                    }`}
                    onClick={() => {
                      toggleStatus("not_accept");
                    }}
                  >
                    <span className="text-lg">Respecfully Declines</span>
                  </label>
                </div>
              </div>
            </label>
            <label className="flex flex-col gap-2">
              <span className="block font-Italiana text-sm font-light tracking-widest uppercase text-slate-700">
                Number of guests
              </span>
              <select
                name="guest_number"
                onChange={() => {}}
                className="block w-full px-5 py-4 text-lg bg-white border border-slate-300 rounded-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="block font-Italiana text-sm font-light tracking-widest uppercase text-slate-700">
                Your Message to us
              </span>
              <textarea
                className="block w-full px-5 py-4 bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="Message"
                rows={5}
              />
            </label>
            <button
              type="submit"
              className="self-center bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-md px-10 py-3 uppercase tracking-widest text-md"
            >
              Reply
            </button>
          </form>

          <img
            src={FlowerBottom}
            alt="Flower Bottom"
            className="relative -mb-20 sm:-mb-32 object-cover"
          />
        </div>
      </div>

      {/* Testimonial */}
      <div className="w-full relative bg-banner-testimonial bg-cover bg-no-repeat text-white">
        <div className="w-full h-full bg-black/20 py-16 md:py-20 flex flex-col items-center">
          <h2 className="w-full md:1/3 lg:w-1/3 !leading-normal text-4xl sm:text-5xl font-Petit-Formal-Script mb-16  text-center px-2 md:px-0">
            Happy message from our friends
          </h2>
          <div className="w-full">
            <Swiper
              spaceBetween={10}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              slidesPerView={1.3}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2.3,
                },
                1024: {
                  slidesPerView: 3,
                },
                1240: {
                  slidesPerView: 3.4,
                },
                1496: {
                  slidesPerView: 3.8,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide className="w-[450px] first:ml-3 last:mr-3 p-6 md:p-8 bg-white/30 backdrop-blur-md flex flex-col gap-3 justify-start items-start text-left rounded-lg">
                <span className="text-lg font-Oswald font-light tracking-widest">
                  Abi Fauzan
                </span>
                <span className="text-lg leading-normal">
                  We???re lucky enough to have nearly everything we need for our
                  home already. And since neither of us has ever been outside of
                  North America, we want our honeymoon to be extra special!{" "}
                  We???re lucky enough to have nearly everything we need for our
                  home already. And since neither of us has ever been outside of
                  North America, we want our honeymoon to be extra special!{" "}
                  We???re lucky enough to have nearly everything we need for our
                  home already. And since neither of us has ever been outside of
                  North America, we want our honeymoon to be extra special!{" "}
                </span>
              </SwiperSlide>
              <SwiperSlide className="w-[450px] first:ml-3 last:mr-3 p-8 bg-white/30 backdrop-blur-md flex flex-col gap-3 justify-start items-start text-left rounded-lg">
                <span className="text-lg font-Oswald font-light tracking-widest">
                  Abi Fauzan
                </span>
                <span className="text-lg leading-normal">
                  We???re lucky enough to have nearly everything we need for our
                  home already. And since neither of us has ever been outside of
                  North America, we want our honeymoon to be extra special!{" "}
                </span>
              </SwiperSlide>
              <SwiperSlide className="w-[450px] first:ml-3 last:mr-3 p-8 bg-white/30 backdrop-blur-md flex flex-col gap-3 justify-start items-start text-left rounded-lg">
                <span className="text-lg font-Oswald font-light tracking-widest">
                  Abi Fauzan
                </span>
                <span className="text-lg leading-normal">
                  We???re lucky enough to have nearly everything we need for our
                  home already. And since neither of us has ever been outside of
                  North America, we want our honeymoon to be extra special!{" "}
                  We???re lucky enough to have nearly everything we need for our
                  home already. And since neither of us has ever been outside of
                  North America, we want our honeymoon to be extra special!{" "}
                </span>
              </SwiperSlide>
              <SwiperSlide className="w-[450px] first:ml-3 last:mr-3 p-8 bg-white/30 backdrop-blur-md flex flex-col gap-3 justify-start items-start text-left rounded-lg">
                <span className="text-lg font-Oswald font-light tracking-widest">
                  Abi Fauzan
                </span>
                <span className="text-lg leading-normal">
                  We???re lucky enough to have nearly everything we need for our
                  home already. And since neither of us has ever been outside of
                  North America, we want our honeymoon to be extra special!{" "}
                </span>
              </SwiperSlide>
              <SwiperSlide className="w-[450px] first:ml-3 last:mr-3 p-8 bg-white/30 backdrop-blur-md flex flex-col gap-3 justify-start items-start text-left rounded-lg">
                <span className="text-lg font-Oswald font-light tracking-widest">
                  Abi Fauzan
                </span>
                <span className="text-lg leading-normal">
                  We???re lucky enough to have nearly everything we need for our
                  home already. And since neither of us has ever been outside of
                  North America, we want our honeymoon to be extra special!{" "}
                </span>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center">
        <div className="w-full h-1/2 flex flex-col py-14 items-center justify-start text-center container">
          <img src={LoveArt} alt="Love Sign" className="w-32" />
          <img
            src={LogoCouple}
            alt="Abi & Rizka"
            className="w-42 md:w-60 mt-4"
          />
          <span className="text-xl mt-4">We can't wait to see you</span>
          <div className="w-full flex flex-col items-center text-center pt-10 pb-4 border-b-2 ">
            <span className="text-2xl font-Oswald font-light tracking-widest uppercase">
              Follow Us
            </span>
            <span className="text-xl mt-4">
              His Instagram{" "}
              <Link to="/" className="text-red-500">
                @abifauzn
              </Link>
            </span>
            <span className="text-xl mt-1">
              Her Instagram{" "}
              <Link to="/" className="text-red-500">
                @rizkajuliant20
              </Link>
            </span>
          </div>
          <span className="text-xl mt-4">
            Want to make your digital invitation looks fancy ?
          </span>
          <Link to="/tes" className="text-xl mt-1 text-red-500">
            Let's have a chat and brew some coffee
          </Link>
        </div>
        <div className="w-full h-[50vh] bg-banner-home relative">
          <div className="w-full h-32 bg-gradient-to-b from-main to-transparent absolute top-0" />
        </div>
      </footer>
      {/* </Parallax> */}
    </div>
  );
};

export default Homepage;
