import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import Countdown from "react-countdown";
import { AnimatePresence, motion } from "framer-motion";
import useSound from "use-sound";

import abiSong from "./sounds/youre_the_inspiration.mp3";
import ikaSong from "./sounds/you_and_me.mp3";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoCouple from "./images/logo-couple.png";
import LogoCoupleBlack from "./images/logo-couple-black.png";
import FlowerTop from "./images/flower-top.png";
import FlowerBottom from "./images/flower-bottom.png";
import LoveArt from "./images/love-art.png";
import FloatingFlower1 from "./images/floating_image-1.png";
import FloatingFlower2 from "./images/floating_image-2.png";
import BaniUmarImg from "./images/masjid-bani-umar-bintaro.jpg";
import AkadNikahImg from "./images/akad-nikah.jpg";
import BgHome from "./images/home_hero.webp";
import ResepsiNikahImg from "./images/resepsi-nikah.jpg";
import { BsMusicNote, BsFillPauseFill } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";
import ElementFlowers from "./images/element_flowers.png";
import Heading from "./components/heading";
import { langList } from "./App";
import useLang from "./hooks/useLang";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import useIsMobile from "./hooks/useIsMobile";
import galleries from "./galleryCollection";
import { useTranslation } from "react-i18next";

const popupMotion = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Completionist = () => (
  <div className="w-full h-full bg-red-500 text-white text-center text-3xl lg:text-4xl flex items-center justify-center font-Fjalla-One py-3 md:py-0">
    <div className="flex items-center justify-center">20 . 05 . 2023</div>
  </div>
);

const arrowDownKeyframe = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const ArrowDownAnimation = styled.div`
  margin-bottom: 25px;
  .scroll-arrow {
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    border-right: 3px solid white;
    border-bottom: 3px solid white;
    animation: ${arrowDownKeyframe} 1s infinite;
    animation-direction: alternate;

    .scroll-arrow:nth-child(1) {
      animation-delay: 0.1s;
    }
    .scroll-arrow:nth-child(2) {
      animation-delay: 0.2s;
    }
    .scroll-arrow:nth-child(3) {
      animation-delay: 0.3s;
    }
  }
`;

const moveMotions = (isMobile, direction = "right") => {
  const percentage = isMobile ? 42 : 30;

  if (direction === "left") {
    return keyframes`
      0% {
      transform: translateX(${percentage}%);
      }
      50% {
        transform: translateX(-${percentage}%);
      }
      100% {
        transform: translateX(${percentage}%);
      }
    `;
  }

  return keyframes`
    0% {
    transform: translateX(-${percentage}%);
    }
    50% {
      transform: translateX(${percentage}%);
    }
    100% {
      transform: translateX(-${percentage}%);
    }
  `;
};

const CollectionList = styled.div`
  white-space: nowrap;
  animation: ${({ isMobile }) => moveMotions(isMobile, "left")} 40s ease-in-out
    infinite;
  position: relative;
  display: flex;

  &.reverse {
    animation: ${({ isMobile }) => moveMotions(isMobile, "right")} 40s
      ease-in-out infinite;
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
const Homepage = () => {
  const homeRef = useRef(null);
  const dramaRef = useRef(null);
  const bigDayRef = useRef(null);
  const galleryRef = useRef(null);
  const rsvpRef = useRef(null);

  const { t } = useTranslation();

  const listMenu = [
    {
      slug: "welcome",
      title: "Welcome",
      ref: homeRef,
    },
    {
      slug: "our-drama",
      title: "Our Drama",
      ref: dramaRef,
    },
    {
      slug: "the-big-day",
      title: "The Big Day",
      ref: bigDayRef,
    },
    {
      slug: "gallery",
      title: "Gallery",
      ref: galleryRef,
    },
    {
      slug: "your-reply",
      title: "Your Reply",
      ref: rsvpRef,
    },
  ];

  const [rsvp, setRsvp] = useState(initialRsvp);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileMenuSong, setMobileMenuSong] = useState(false);
  const [headerExpand, setHeaderExpand] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playStatus, setPlayStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rsvpList, setRsvpList] = useState([]);

  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedArt, setSelectedArt] = useState(null);

  const [playAbi, { pause: pauseAbi, duration: durationAbi, sound: soundAbi }] =
    useSound(abiSong);
  const [playIka, { pause: pauseIka, duration: durationIka, sound: soundIka }] =
    useSound(ikaSong);

  const { lang, handleSwitchLang } = useLang();
  const isMobile = useIsMobile();

  const handleScrollMenu = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const playingButton = (player) => {
    // setPlayStatus(player);
    if (player === "abi") {
      if (playStatus === "") {
        setIsPlaying(true);
        playAbi();
        setPlayStatus("abi");
      } else if (playStatus === "abi") {
        setIsPlaying(false);
        pauseAbi();
        setPlayStatus("");
      } else if (playStatus === "ika") {
        pauseIka();
        playAbi();
        setPlayStatus("abi");
      }
    } else {
      // ika
      if (playStatus === "") {
        setIsPlaying(true);
        playIka();
        setPlayStatus("ika");
      } else if (playStatus === "ika") {
        setIsPlaying(false);
        pauseIka();
        setPlayStatus("");
      } else if (playStatus === "abi") {
        pauseAbi();
        playIka();
        setPlayStatus("ika");
      }
    }
  };

  const toggleStatus = (status) => {
    const { status: statusOld, ...restRsvp } = rsvp;
    setRsvp({
      ...restRsvp,
      status,
    });
  };

  const handleInputRsvp = (key, value) => {
    setRsvp({
      ...rsvp,
      [key]: value,
    });
  };

  const toggleMenu = (isSong = true) => {
    if (isSong) setMobileMenu(!mobileMenu);
    else setMobileMenuSong(!mobileMenuSong);
  };

  const triggerHeaderScroll = () => {
    const triggered = window.scrollY > 600 ? true : false;
    setHeaderExpand(triggered);
  };

  const submitRsvp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const docRef = await addDoc(collection(db, "guestlists"), {
        rsvp,
      });
      message.success("Thank you for your response!");
      setIsLoading(false);
      fetchRsvp();
      setRsvp(initialRsvp);
    } catch (e) {
      console.error("Error adding document: ", e);
      setIsLoading(false);
    }
  };

  const fetchRsvp = async () => {
    const rsvpRes = await getDocs(collection(db, "guestlists"));

    const res = [];

    rsvpRes.forEach((rsvp) => {
      if (rsvp.data().rsvp.message !== "") {
        res.push({
          id: rsvp.id,
          ...rsvp.data(),
        });
      }
    });

    setRsvpList(res);
  };

  useEffect(() => {
    window.addEventListener("scroll", triggerHeaderScroll);

    return () => {
      window.removeEventListener("scroll", triggerHeaderScroll);
    };
  }, []);

  useEffect(() => {
    fetchRsvp();
  }, []);

  const headerStyle = useMemo(() => {
    if (headerExpand) {
      return {
        nav: "h-[50px] md:h-[60px] text-black backdrop-blur-md bg-white/50 border-b border-b-white",
        navLink: "from-main to-black",
        logo: "text-xl md:text-2xl",
        btnSong: "h-8 px-2 text-black",
        btnLang: "border-black hover:bg-black hover:text-white",
        btnLangHover:
          "border-black bg-white text-black hover:bg-black hover:text-white",
      };
    }

    return {
      nav: "h-[80px] md:h-[120px] text-white bg-gradient-to-b from-black to-transparent",
      navLink: "from-main to-pink-100",
      logo: "text-2xl md:text-3xl",
      btnSong: "h-8 px-2 text-white",
      btnLang: "border-white hover:bg-white hover:text-black",
      btnLangHover:
        "border-white bg-transparent text-white hover:bg-white hover:text-black",
    };
  }, [headerExpand]);

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex gap-5 py-3 px-6">
          <div className="flex flex-col text-center items-center justify-between gap-2">
            <span className="font-Oswald tracking-wide text-lg font-light">
              days
            </span>
            <span className="font-normal text-3xl">{days}</span>
          </div>
          <div className="flex flex-col text-center items-center justify-between gap-2">
            <span className="font-Oswald tracking-wide text-lg font-light">
              hours
            </span>
            <span className="font-normal text-3xl">{hours}</span>
          </div>
          <div className="flex flex-col text-center items-center justify-between gap-2">
            <span className="font-Oswald tracking-wide text-lg font-light">
              minutes
            </span>
            <span className="font-normal text-3xl">{minutes}</span>
          </div>
          <div className="flex flex-col text-center items-center justify-between gap-2">
            <span className="font-Oswald tracking-wide text-lg font-light">
              seconds
            </span>
            <span className="font-normal text-3xl">{seconds}</span>
          </div>
        </div>
      );
    }
  };

  const variantsMenu = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const variantsMenuSong = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const mobileView = () => (
    <motion.div
      animate={mobileMenu ? "open" : "closed"}
      variants={variantsMenu}
      transition={{ type: "spring", stiffness: 90 }}
      className={`fixed w-[100vw] h-[100vh] overflow-hidden bg-banner-menu z-30 bg-cover bg-center`}
    >
      <div className="w-full h-full flex flex-col bg-black/40">
        <div className="w-full flex items-center justify-between text-white p-6">
          <Link to="/" className="text-xl font-Alex-Brush uppercase">
            <img src={LogoCouple} alt="Logo Abi & Rizka" className={"w-24"} />
          </Link>
          <div
            onClick={toggleMenu}
            className="inline-flex gap-2 items-center cursor-pointer"
          >
            <span className="w-5 h-[2px] bg-white" />
            Back
          </div>
        </div>
        <div className="w-full px-6 mt-10 flex items-center gap-4 text-white">
          {langList.map((item) => (
            <span
              key={item}
              onClick={() => {
                handleSwitchLang(item);
              }}
              className={`uppercase tracking-widest cursor-pointer ${
                item === lang
                  ? "border-b-2"
                  : "bg-left-bottom bg-gradient-to-r from-main to-pink-100 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <nav className="w-full px-6 mt-10 flex flex-col justify-start items-start text-white gap-5 font-light text-5xl">
          {listMenu.map((item) => (
            <span
              key={item.slug}
              onClick={() => {
                setMobileMenu(false);
                handleScrollMenu(item.ref);
              }}
              className="pb-3 pr-3 bg-left-bottom bg-gradient-to-r from-main to-pink-100 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
            >
              {item.title}
            </span>
          ))}
        </nav>
      </div>
    </motion.div>
  );

  const mobileSongView = () => (
    <motion.div
      animate={mobileMenuSong ? "open" : "closed"}
      variants={variantsMenuSong}
      transition={{ type: "spring", stiffness: 90 }}
      className={`fixed w-[100vw] h-[100vh] overflow-hidden bg-banner-menu z-30 bg-cover bg-center`}
    >
      <div className="w-full h-full flex flex-col justify-center bg-black/40 relative">
        <div className="w-full flex items-center justify-between text-white p-6 absolute top-0">
          <Link to="/" className="text-xl font-Alex-Brush uppercase">
            <img src={LogoCouple} alt="Logo Abi & Rizka" className={"w-24"} />
          </Link>
          <div
            onClick={() => toggleMenu(false)}
            className="inline-flex gap-2 items-center cursor-pointer"
          >
            <span className="w-5 h-[2px] bg-white" />
            Back
          </div>
        </div>
        <nav className="w-full px-6 mt-10 flex flex-col justify-start items-start text-white gap-5 font-light text-5xl">
          <span
            onClick={() => playingButton("abi")}
            className="pb-3 pr-3 bg-left-bottom bg-gradient-to-r from-main to-pink-100 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out inline-flex gap-1"
          >
            {isPlaying && playStatus === "abi" ? (
              <BsFillPauseFill size="1.1em" />
            ) : (
              <BsMusicNote size="1.1em" />
            )}{" "}
            His song
          </span>
          <span
            onClick={() => playingButton("ika")}
            className="pb-3 pr-3 bg-left-bottom bg-gradient-to-r from-main to-pink-100 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out inline-flex gap-1"
          >
            {isPlaying && playStatus === "ika" ? (
              <BsFillPauseFill size="1.1em" />
            ) : (
              <BsMusicNote size="1.1em" />
            )}{" "}
            Her song
          </span>
        </nav>
      </div>
    </motion.div>
  );
  /* bg-banner-home bg-cover bg-center bg-no-repeat bg-fixed */

  const BannerWrapper = styled.div`
    /* background-image: url(${BgHome});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed; */
  `;

  return (
    <div className="w-full flex flex-col items-start relative overflow-x-hidden bg-main">
      {mobileView()}
      {mobileSongView()}

      {/* header */}
      <header className={`${headerStyle.nav} w-full fixed z-20`}>
        <div className="container w-full h-full flex justify-center items-center relative">
          <Link
            to="/"
            className={`${headerStyle.logo} text-center lg:text-left tracking-wider absolute left-1/2 transform lg:transform-[unset] -translate-x-1/2 lg:translate-x-[unset] lg:left-0`}
          >
            <img
              src={
                headerExpand
                  ? LogoCoupleBlack
                  : isMobile
                  ? LogoCoupleBlack
                  : LogoCouple
              }
              alt="Logo Abi & Rizka"
              className={`${headerExpand ? "w-20 md:w-24" : "w-24 md:w-36"}`}
            />
          </Link>

          {/* nav desktop */}
          <nav
            className={`hidden lg:flex h-full items-center justify-center text-md tracking-wide transition-all`}
          >
            {listMenu.map((item) => (
              <span
                key={item.slug}
                onClick={() => handleScrollMenu(item.ref)}
                className="h-full px-4 inline-flex justify-center items-center group transition-all duration-300 ease-in-out cursor-pointer"
              >
                <span
                  className={`${headerStyle.navLink} pb-1 bg-left-bottom bg-gradient-to-r bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
                >
                  {item.title}
                </span>
              </span>
            ))}
          </nav>

          {/* right item nav desktop */}
          <div className="hidden absolute right-0 xl:flex justify-center items-center">
            <button
              className={`${headerStyle.btnSong} inline-flex justify-center items-center gap-1 tracking-wide bg-transparent rounded-sm transition-all duration-500 ease-in-out hover:bg-cyan-600 hover:text-white`}
              onClick={() => playingButton("abi")}
            >
              {isPlaying && playStatus === "abi" ? (
                <BsFillPauseFill size="1.1em" />
              ) : (
                <BsMusicNote size="1.1em" />
              )}
              <span>His song</span>
            </button>
            <button
              className={`${headerStyle.btnSong} inline-flex justify-center items-center gap-1 tracking-wide bg-transparent rounded-sm transition-all duration-500 ease-in-out hover:bg-red-500 hover:text-white mr-1`}
              onClick={() => playingButton("ika")}
            >
              {isPlaying && playStatus === "ika" ? (
                <BsFillPauseFill size="1.1em" />
              ) : (
                <BsMusicNote size="1.1em" />
              )}
              <span className="">Her song</span>
            </button>
            <div className="group">
              {langList
                .filter((item) => item === lang)
                .map((item) => (
                  <button
                    key={item}
                    onClick={() => handleSwitchLang(item)}
                    className={`${headerStyle.btnLang} flex items-center justify-center h-6 md:h-8 w-14 bg-transparent border rounded-sm focus:outline-none md:ml-1 transition-all duration-500`}
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

              {langList
                .filter((item) => item !== lang)
                .map((item) => (
                  <div
                    key={item}
                    onClick={() => handleSwitchLang(item)}
                    className={`${headerStyle.btnLangHover} hidden group-hover:flex transition-all absolute -top-16 md:top-[unset] w-14 right-0 flex-col h-6 md:h-8 border shadow-lg rounded-b-sm items-center justify-center cursor-pointer`}
                  >
                    <span className="ml-1 text-sm md:text-md tracking-widest uppercase">
                      {item}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* righht item nav mobile */}
          <div className="absolute right-[1rem] md:right-0 flex xl:hidden">
            <BsMusicNote
              size="1.2em"
              className="cursor-pointer lg:mr-5"
              onClick={() => toggleMenu(false)}
            />
            <VscMenu
              size="1.2em"
              className="cursor-pointer hidden lg:block"
              onClick={toggleMenu}
            />
          </div>
          <div className="absolute left-[1rem] md:left-0 flex lg:hidden">
            <VscMenu
              size="1.2em"
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </header>

      {/* Banner */}
      <BannerWrapper className="w-[100vw] h-[100vh] flex justify-center items-end relative">
        <img
          src={BgHome}
          alt="Banner Home"
          className="w-full h-full object-cover"
        />
        <ArrowDownAnimation className="absolute bottom-0">
          <div className="scroll-arrow"></div>
          <div className="scroll-arrow"></div>
          <div className="scroll-arrow"></div>
        </ArrowDownAnimation>
      </BannerWrapper>

      {/* Welcome text */}
      <div
        ref={homeRef}
        className="w-full flex flex-col lg:flex-row items-center lg:items-stretch container gap-4 py-20 lg:py-28  px-5 sm:px-24 lg:px-0 relative"
      >
        <div className="w-full lg:w-3/4 p-8 xl:p-10 bg-white z-10">
          <p className="font-light m-0 text-xl xl:text-2xl tracking-wider">
            {t("welcomeText")}
          </p>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-1 lg:gap-2 z-10">
          <div className="w-full bg-red-500 text-white p-2 lg:p-3 text-center text-xl lg:text-xl font-Fjalla-One tracking-wide inline-flex justify-center items-center">
            The Big Day :
          </div>
          <div className="w-full h-full bg-red-500 text-white text-center flex items-center justify-center font-Fjalla-One">
            <Countdown date={new Date("2023/05/20")} renderer={renderer} />
          </div>
        </div>
        <AnimatePresence>
          <motion.img
            key="flower-top"
            src={FloatingFlower1}
            alt="Floating Flower at Top"
            className="absolute -top-10 left-0 md:-left-20"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          />
          <motion.img
            key="flower-bottom"
            src={FloatingFlower2}
            alt="Floating Flower at Bottom"
            className="hidden sm:flex absolute -bottom-5 -right-10 md:-right-24"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          />
        </AnimatePresence>
      </div>

      {/* Our Story */}
      <div
        ref={dramaRef}
        className="w-full pt-0 md:pt-20 pb-20 flex flex-col items-center container"
      >
        <Heading title="Our Drama" subtitle="History" />

        <p className="font-light text-xl xl:text-2xl text-center px-2 sm:px-0 tracking-wider whitespace-pre-line">
          {t("ourDrama")}
        </p>

        {/* <div className="w-[90%] md:w-full h-[400px] relative mt-16">
          <div className="w-full h-full relative bg-slate-100 z-10"></div>
          <div className="w-full h-full absolute bg-transparent border-red-400 border-r-2 border-b-2 top-4 left-4 z-0"></div>
        </div> */}
      </div>

      {/* Digital looks */}
      {/* <div className="w-full flex flex-col relative items-center">
        <CollectionList
          isMobile={isMobile}
          className="mt-5 md:mt-8 gap-5 md:gap-8"
        >
          {galleries.map((item, index) => (
            <motion.div
              layoutId={item.id}
              key={item.id}
              onClick={() => setSelectedArt(item)}
              className="card w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
            >
              <img src={item.image} alt={`Abi & Ika ${item.id}`} />
            </motion.div>
          ))}
        </CollectionList>
        <CollectionList
          isMobile={isMobile}
          className="reverse mt-5 md:mt-8 gap-5 md:gap-8"
        >
          {listGallery2.map((item, index) => (
            <motion.div
              layoutId={item.id}
              key={item.id}
              onClick={() => setSelectedArt(item)}
              className="card w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
            >
              <img src={item.image} alt={`Abi & Ika ${item.id}`} />
            </motion.div>
          ))}
        </CollectionList>

        <AnimatePresence>
          {selectedArt && (
            <motion.div
              layoutId={selectedArt?.id}
              className="w-[100vw] h-[100vh] fixed top-0 z-20 flex justify-center items-center cursor-zoom-out"
              onClick={() => setSelectedArt(null)}
            >
              <motion.div
                variants={popupMotion}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.5 }}
                className="w-full h-full absolute top-0 bg-black/40 z-0"
              />
              <div className="h-auto md:h-[85vh] relative">
                <img
                  src={selectedArt?.image}
                  alt="foto"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}

      {/* Big day When/Where/How + maps */}
      <div ref={bigDayRef} className="w-full py-20 relative">
        <div className="flex flex-col items-center container">
          <Heading title="The Big Day" subtitle="When & Where ?" />

          <div className="w-full flex flex-row gap-8 justify-center mt-10 flex-wrap">
            <div className="w-[400px] h-[400px] bg-white rounded-md flex flex-col items-center justify-center shadow-md transition-all ease-out hover:-translate-y-2">
              <div className="w-full h-3/5 rounded-t-md">
                <img
                  src={BaniUmarImg}
                  alt="Masjid Raya Bani Umar"
                  className="object-cover w-full h-full rounded-t-md"
                />
              </div>
              <div className="w-full h-2/5 rounded-b-md p-6 flex flex-col justify-between">
                <span className="text-2xl font-heading font-light tracking-wide">
                  {t("theVenue")}
                </span>
                <div className="inline-flex flex-col">
                  <span className="font-bold mb-1">Masjid Raya Bani Umar</span>
                  <span className="font-Italiana text-gray-500">
                    Bintaro, Tangerang Selatan
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[400px] h-[400px] bg-white rounded-md flex flex-col items-center justify-center shadow-md transition-all ease-out hover:-translate-y-2">
              <div className="w-full h-3/5 rounded-t-md">
                <img
                  src={AkadNikahImg}
                  alt={t("weddingVows")}
                  className="object-cover w-full h-full rounded-t-md"
                />
              </div>
              <div className="w-full h-2/5 rounded-b-md p-6 flex flex-col justify-between">
                <span className="text-2xl font-heading font-light tracking-wide">
                  {t("weddingVows")}
                </span>
                <div className="inline-flex flex-col">
                  <span className="font-Italiana font-bold mb-1">
                    08.00 - 10.00 WIB
                  </span>
                  <span className="font-Italiana text-gray-500">
                    20 May 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[400px] h-[400px] bg-white rounded-md flex flex-col items-center justify-center shadow-md transition-all ease-out hover:-translate-y-2">
              <div className="w-full h-3/5 rounded-t-md">
                <img
                  src={ResepsiNikahImg}
                  alt={t("weddingCelebration")}
                  className="object-cover object-[0_-250px] md:object-[0_-300px] w-full h-full rounded-t-md"
                />
              </div>
              <div className="w-full h-2/5 rounded-b-md p-6 flex flex-col justify-between">
                <span className="text-2xl font-heading font-light tracking-wide">
                  {t("weddingCelebration")}
                </span>
                <div className="inline-flex flex-col">
                  <span className="font-Italiana font-bold mb-1">
                    11.00 - 13.00 WIB
                  </span>
                  <span className="font-Italiana text-gray-500">
                    20 May 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[600px] relative mt-16 bg-red-50">
            <iframe
              title="Masjid Raya Bani Umar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.94860760171!2d106.6872217150636!3d-6.27048919546145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69faf062460ed5%3A0xc46eba6617b311d6!2sBani%20Umar%20Grand%20Mosque!5e0!3m2!1sen!2sid!4v1678093707333!5m2!1sen!2sid"
              // width="800"
              // height="600"
              className="w-full h-full relative z-10"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="w-full h-full absolute bg-transparent border-red-400 border-r-2 border-b-2 top-4 left-4 z-0"></div>
          </div>
          <a
            href="https://goo.gl/maps/PPkumLGVrqrVX6uD8"
            target="_blank"
            title="Masjid Raya Bani Umar"
            className="h-full mt-16 text-xl inline-flex justify-center items-center tracking-wide group transition-all duration-300 ease-in-out"
            rel="noreferrer"
          >
            <span className="pb-1 bg-left-bottom bg-gradient-to-r from-main to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out border-b">
              {t("viewLocation")}
            </span>
          </a>
        </div>
      </div>

      {/* Photo Gallery */}
      <div
        ref={galleryRef}
        className="w-full py-20 flex flex-col relative items-center bg-gradient-to-b from-[#FBF1F2] to-main"
      >
        <div className="w-full h-10 bg-gradient-to-b from-main to-[#FBF1F2] absolute top-0 z-0" />

        <img
          src={ElementFlowers}
          alt="Flowers"
          className="absolute top-0 object-cover z-0"
        />
        <Heading subtitle={t("ourGallery")} />

        <div className="w-full mt-10 flex flex-col gap-5 cursor-plus">
          <div className="w-full">
            <Swiper
              key="slide-normal"
              spaceBetween={20}
              slidesPerView={"auto"}
              speed={1200}
              freeMode={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              modules={[Autoplay]}
              res
            >
              {galleries.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  className="w-[270px] h-[270px] sm:w-[500px] sm:h-[500px] first:ml-3 last:mr-3"
                >
                  <motion.div
                    layoutId={item.id}
                    onClick={() => setSelectedGallery(item)}
                    className="w-full h-full relative overflow-hidden rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={`Item ${index}`}
                      className="w-full h-full rounded-lg object-cover transition-all duration-500 ease-in-out transform hover:scale-110"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            layoutId={selectedGallery?.id}
            className="w-[100vw] h-[100vh] fixed top-0 z-20 flex justify-center items-center cursor-zoom-out"
            onClick={() => setSelectedGallery(null)}
          >
            <motion.div
              variants={popupMotion}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.5 }}
              className="w-full h-full absolute top-0 bg-black/40 z-0"
            />
            <div className="h-auto md:h-[85vh] relative">
              <img
                src={selectedGallery?.image}
                alt="foto"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RSVP section */}
      <div
        ref={rsvpRef}
        className="w-full pt-32 pb-48 flex flex-col relative container"
      >
        <div className="w-full shadow-2xl flex flex-col items-center relative">
          <motion.img
            src={FlowerTop}
            alt="Flower Top"
            className="relative -mt-20 sm:-mt-24 object-cover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -200 },
            }}
          />

          <h2 className="w-full md:w-1/2 text-3xl sm:text-4xl text-center font-heading py-6 sm:py-10 px-10">
            {t("introRsvp")}
          </h2>

          <form
            className="w-full sm:w-2/3 lg:w-1/2 px-3 md:px-0 flex flex-col gap-6 pb-10 sm:pb-18"
            onSubmit={submitRsvp}
          >
            <label className="flex flex-col gap-2">
              <span className="block text-sm font-normal tracking-widest uppercase text-slate-700">
                {t("yourName")}
              </span>
              <input
                type="text"
                onChange={(e) => {
                  handleInputRsvp("name", e.target.value);
                }}
                value={rsvp.name}
                className="block w-full px-5 py-4 text-md bg-white border border-slate-300 rounded-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-primary invalid:text-primary focus:invalid:border-primary focus:invalid:ring-primary transition-all"
                placeholder={t("fullName")}
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="block text-sm font-normal tracking-widest uppercase text-slate-700">
                {t("yourFeedback")}
              </span>
              <div className="w-full flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-1/2 h-20 flex flex-col items-center justify-center">
                  <input
                    type="radio"
                    name="your_response"
                    value="accept"
                    checked={rsvp.status === "accept"}
                    onChange={() => {
                      toggleStatus("accept");
                    }}
                    className="hidden"
                  />
                  <label
                    className={`w-full h-full flex flex-col items-center justify-center text-center border-2 bg-white transition-all cursor-pointer ${
                      rsvp.status === "accept" && "bg-primary text-white"
                    }`}
                    onClick={() => {
                      toggleStatus("accept");
                    }}
                  >
                    <span className="text-lg">
                      {t("accept")} <span className="pl-1">🥳</span>
                    </span>
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
                    className={`w-full h-full flex flex-col items-center justify-center text-center border-2 bg-white transition-all cursor-pointer ${
                      rsvp.status === "not_accept" && "bg-primary text-white"
                    }`}
                    onClick={() => {
                      toggleStatus("not_accept");
                    }}
                  >
                    <span className="text-lg">
                      {t("not_accept")} <span className="pl-1">🙏</span>
                    </span>
                  </label>
                </div>
              </div>
            </label>
            <label className="flex flex-col gap-2">
              <span className="block text-sm font-normal tracking-widest uppercase text-slate-700">
                {t("numberGuest")}
              </span>
              <select
                name="personCount"
                onChange={(e) => {
                  handleInputRsvp("personCount", e.target.value);
                }}
                value={rsvp.personCount}
                className="block w-full px-5 py-4 text-lg bg-white border border-slate-300 rounded-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-primary invalid:text-primary focus:invalid:border-primary focus:invalid:ring-primary transition-all"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="block text-sm font-normal tracking-widest uppercase text-slate-700">
                {t("yourMessage")}
              </span>
              <textarea
                onChange={(e) => {
                  handleInputRsvp("message", e.target.value);
                }}
                value={rsvp.message}
                className="block w-full px-5 py-4 bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-primary invalid:text-primary focus:invalid:border-primary focus:invalid:ring-primary"
                placeholder={t("happyWedding")}
                rows={5}
              />
            </label>
            <button
              type="submit"
              disabled={isLoading}
              className="self-center bg-white rounded-full px-14 py-3 uppercase tracking-widest text-md shadow-lg border border-primary transition-all hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-primary inline-flex justify-center items-center gap-2 disabled:bg-black/10 disabled:cursor-not-allowed"
            >
              {t("reply")}
              {isLoading && <LoadingOutlined />}
            </button>
          </form>

          <motion.img
            src={FlowerBottom}
            alt="Flower Bottom"
            className="relative -mb-20 sm:-mb-32 object-cover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -100 },
            }}
          />
        </div>
      </div>

      {/* Testimonial */}
      <div className="w-full relative bg-banner-testimonial bg-cover bg-center bg-no-repeat text-white">
        <div className="w-full h-full bg-black/20 py-16 md:py-24 flex flex-col items-center">
          <h2 className="w-full md:1/3 lg:w-1/3 !leading-normal text-4xl sm:text-5xl font-heading mb-16  text-center px-2 md:px-0">
            {t("happyMessage")}
          </h2>
          {rsvpList.length === 0 && (
            <div className="inline-flex w-full items-center justify-center">
              <LoadingOutlined style={{ fontSize: "3rem" }} />
            </div>
          )}
          <div className="w-full">
            <Swiper
              spaceBetween={10}
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
              {rsvpList.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="w-[450px] first:ml-3 last:mr-3 p-6 md:p-8 bg-white/30 backdrop-blur-md flex flex-col gap-3 justify-start items-start text-left rounded-lg"
                >
                  <span className="text-lg font-normal tracking-widest">
                    {item.rsvp.name}
                  </span>
                  <span className="text-lg leading-normal font-light">
                    {item.rsvp.message}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center">
        <div className="w-full h-1/2 flex flex-col py-14 items-center justify-start text-center container">
          <img src={LoveArt} alt="Love Sign" className="w-32" />
          <img
            src={LogoCoupleBlack}
            alt="Abi & Rizka"
            className="w-36 md:w-60 mt-4"
          />
          <span className="font-light text-lg mt-4 mb-8">{t("cantwait")}</span>
          <div className="w-full flex flex-col items-center text-center pt-10 pb-4 border-t-2 ">
            <span className="text-2xl font-Oswald tracking-widest uppercase">
              {t("followus")}
            </span>
            <span className="text-xl mt-4 font-light">
              His Instagram{" "}
              <a
                href="https://www.instagram.com/abifauzn/"
                target="_blank"
                className="text-red-500"
                rel="noreferrer"
              >
                @abifauzn
              </a>
            </span>
            <span className="text-xl mt-1 font-light">
              Her Instagram{" "}
              <a
                href="https://www.instagram.com/rizkajuliant20/"
                target="_blank"
                className="text-red-500"
                rel="noreferrer"
              >
                @rizkajuliant20
              </a>
            </span>
          </div>
          {/* <span className="text-xl mt-4 font-light">
            Want to make your digital invitation looks fancy ?
          </span>
          <Link to="/tes" className="text-xl mt-1 text-red-500 font-light">
            Let's have a chat and brew some coffee
          </Link> */}
        </div>
        <div className="w-full h-[50vh] md:h-[70vh] bg-banner-footer-mobile md:bg-banner-footer-desktop bg-no-repeat bg-cover bg-center relative">
          <div className="w-full h-16 md:h-40 bg-gradient-to-b from-main to-transparent absolute top-0" />
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
