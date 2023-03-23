import Countdown from "react-countdown";
import { VscMenu } from "react-icons/vsc";
import { Link } from "react-router-dom";
import FloatingFlower1 from "./images/floating_image-1.png";
import FloatingFlower2 from "./images/floating_image-2.png";
import { AnimatePresence, motion, Variants } from "framer-motion";
import FlowerTop from "./images/flower-top.png";
import FlowerBottom from "./images/flower-bottom.png";
import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { message, Table } from "antd";
import Chips from "./components/chips/Chips";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const BASE_URL = "http://localhost:3000/";
const initialRsvp = {
  name: "",
  lang: "id",
};

const Dashboard = () => {
  const [rsvp, setRsvp] = useState(initialRsvp);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const [page, setPage] = useState("dashboard");
  const [rsvpList, setRsvpList] = useState([]);

  const Completionist = () => (
    <div className="w-full h-full bg-red-500 text-white text-center text-3xl lg:text-4xl flex items-center justify-center font-Fjalla-One py-3 md:py-0">
      <div className="flex items-center justify-center">20 . 05 . 2023</div>
    </div>
  );

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

  const handleInputRsvp = (key, value) => {
    setRsvp({
      ...rsvp,
      [key]: value,
    });
  };

  const toggleStatus = (lang) => {
    const { lang: langOld, ...restRsvp } = rsvp;
    setRsvp({
      ...restRsvp,
      lang,
    });
  };

  const generateUrl = (e) => {
    e.preventDefault();
    console.log(rsvp);
    setIsLoading(true);

    const langChosen = rsvp.lang === "id" ? "" : "&lang=en";
    const convertedName = rsvp.name.replaceAll(" ", "%20");
    const to = `to=${convertedName}`;

    const result = `${BASE_URL}?${to}${langChosen}`;
    setResult(result);
    setIsLoading(false);
  };

  const handleCopy = () => {
    message.success("Copied");
    navigator.clipboard.writeText(result);
  };

  const fetchRsvp = async () => {
    const rsvpRes = await getDocs(collection(db, "guestlists"));

    const res = [];

    rsvpRes.forEach((rsvp) => {
      res.push({
        id: rsvp.id,
        message: rsvp.data().rsvp.message,
        name: rsvp.data().rsvp.name,
        personCount: rsvp.data().rsvp.personCount,
        status: rsvp.data().rsvp.status,
      });
    });

    setRsvpList(res);
  };

  const optionListStatus = [
    {
      key: "accept",
      value: "Accept",
      color: "#108ee9",
    },
    {
      key: "not_accept",
      value: "Decline",
      color: "#f50",
    },
  ];

  const columns = [
    {
      width: "15rem",
      title: "Guest Name",
      dataIndex: "name",
      key: "name",
    },
    {
      width: "5rem",
      title: "Person Count",
      dataIndex: "personCount",
      key: "personCount",
    },
    {
      width: "5rem",
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Chips value={status} options={optionListStatus} />,
    },
    {
      width: "25rem",
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
  ];

  useEffect(() => {
    fetchRsvp();
  }, []);

  console.log(rsvpList);

  return (
    <div className="w-full flex flex-col items-start relative overflow-x-hidden bg-main">
      {/* header */}
      <header
        className={`h-[80px] md:h-[100px] text-black bg-white w-full border-b`}
      >
        <div className="container w-full h-full flex justify-center items-center relative">
          <Link
            to="/"
            className={`text-2xl md:text-3xl text-center lg:text-left tracking-wider absolute left-1/2 transform lg:transform-[unset] -translate-x-1/2 lg:translate-x-[unset] lg:left-0`}
          >
            Abi & Rizka
          </Link>

          {/* nav desktop */}
          <nav
            className={`hidden lg:flex h-full items-center justify-center text-md tracking-wide transition-all`}
          >
            <span
              onClick={() => {
                setPage("dashboard");
              }}
              className="h-full px-4 inline-flex justify-center items-center group transition-all duration-300 ease-in-out cursor-pointer"
            >
              <span
                className={`pb-1 text-black hover:underline transition-all duration-500 ease-out`}
              >
                Dashboard
              </span>
            </span>
            <span
              onClick={() => {
                setPage("guest");
              }}
              className="h-full px-4 inline-flex justify-center items-center group transition-all duration-300 ease-in-out cursor-pointer"
            >
              <span
                className={`pb-1 text-black hover:underline transition-all duration-500 ease-out`}
              >
                Guest List
              </span>
            </span>
          </nav>

          {/* right item nav desktop */}
          <div className="hidden absolute right-0 xl:flex justify-center items-center">
            <button
              className={`px-4 py-2 text-white inline-flex justify-center items-center gap-1 tracking-wide bg-cyan-600 rounded-sm transition-all duration-500 ease-in-out hover:bg-cyan-800`}
            >
              <span>Go to website</span>
            </button>
          </div>

          {/* righht item nav mobile */}
          <div className="absolute right-[1rem] md:right-0 flex xl:hidden">
            <VscMenu
              size="1.2em"
              className="cursor-pointer hidden lg:block"
              onClick={() => {}}
            />
          </div>
          <div className="absolute left-[1rem] md:left-0 flex lg:hidden">
            <VscMenu
              size="1.2em"
              className="cursor-pointer"
              onClick={() => {}}
            />
          </div>
        </div>
      </header>

      {/* Welcome text */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch container gap-4 py-20 lg:py-32  px-5 sm:px-24 lg:px-0 relative">
        <div className="w-full lg:w-3/4 p-8 xl:p-10 bg-white z-10">
          <p className="font-light m-0 text-xl xl:text-2xl tracking-wider">
            ¡Hola! Together with our families, we invite you to our wedding
            ceremony and celebration. Our wedding will begin at 8am until 1pm on
            May 20th 2023 at Masjid Raya Bani Umar, Bintaro, Tangerang Selatan.
            — A & R
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
        <img
          src={FloatingFlower1}
          alt="Floating Flower at Top"
          className="absolute top-0 left-0 md:-left-20"
        />
        <img
          src={FloatingFlower2}
          alt="Floating Flower at Bottom"
          className="hidden sm:flex absolute -bottom-5 -right-10 md:-right-24"
        />
      </div>

      {page === "dashboard" ? (
        <>
          {/* RSVP section */}
          <div className="w-full pt-32 pb-48 flex flex-col relative container">
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

              <h2 className="w-full text-3xl sm:text-4xl text-center font-heading py-6 sm:py-10 px-10">
                Generate Website URL
              </h2>

              <form
                className="w-full sm:w-2/3 lg:w-1/2 px-3 md:px-0 flex flex-col gap-6 pb-10 sm:pb-18"
                onSubmit={generateUrl}
              >
                <label className="flex flex-col gap-2">
                  <span className="block text-sm font-normal tracking-widest uppercase text-slate-700">
                    Guest Name
                  </span>
                  <input
                    type="text"
                    onChange={(e) => {
                      handleInputRsvp("name", e.target.value);
                    }}
                    value={rsvp.name}
                    className="block w-full px-5 py-4 text-md bg-white border border-slate-300 rounded-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-primary invalid:text-primary focus:invalid:border-primary focus:invalid:ring-primary transition-all"
                    placeholder="Guest Name"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="block text-sm font-normal tracking-widest uppercase text-slate-700">
                    Language
                  </span>
                  <div className="w-full flex flex-col sm:flex-row gap-3">
                    <div className="w-full sm:w-1/2 h-20 flex flex-col items-center justify-center">
                      <input
                        type="radio"
                        name="lang"
                        value="id"
                        checked={rsvp.lang === "id"}
                        onChange={() => {
                          toggleStatus("id");
                        }}
                        className="hidden"
                      />
                      <label
                        className={`w-full h-full flex flex-col items-center justify-center text-center border-2 bg-white transition-all cursor-pointer ${
                          rsvp.lang === "id" && "bg-primary text-white"
                        }`}
                        onClick={() => {
                          toggleStatus("id");
                        }}
                      >
                        <span className="text-lg">Indonesia</span>
                      </label>
                    </div>
                    <div className="w-full sm:w-1/2 h-20 flex flex-col items-center justify-center">
                      <input
                        type="radio"
                        name="lang"
                        value="en"
                        checked={rsvp.status === "en"}
                        onChange={(event) => {
                          toggleStatus("en");
                        }}
                        className="hidden"
                      />
                      <label
                        className={`w-full h-full flex flex-col items-center justify-center text-center border-2 bg-white transition-all cursor-pointer ${
                          rsvp.lang === "en" && "bg-primary text-white"
                        }`}
                        onClick={() => {
                          toggleStatus("en");
                        }}
                      >
                        <span className="text-lg">English</span>
                      </label>
                    </div>
                  </div>
                </label>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="self-center bg-white rounded-full px-14 py-3 uppercase tracking-widest text-md shadow-lg border border-primary transition-all hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-primary inline-flex justify-center items-center gap-2 disabled:bg-black/10 disabled:cursor-not-allowed"
                >
                  Generate
                  {isLoading && <LoadingOutlined />}
                </button>
              </form>

              {isLoading && (
                <LoadingOutlined
                  style={{ fontSize: "3rem" }}
                  className="py-10"
                />
              )}

              {isLoading === false && result !== "" && (
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 ">
                  <div className="grid grid-cols-1">
                    <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                      <div className="p-6 lg:text-center flex flex-col">
                        <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                          {" "}
                          WEBSITE URL
                        </span>
                        <a
                          href={result}
                          target="_blank"
                          className=" text-2xl font-normal leading-none tracking-tighter text-neutral-600 lg:text-3xl hover:underline"
                          rel="noreferrer"
                        >
                          {result}
                        </a>
                        <div className="mt-6">
                          <button
                            onClick={handleCopy}
                            className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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
        </>
      ) : (
        <>
          <h2 className="container text-3xl font-bold text-center w-full py-10">
            Guest List
          </h2>

          <div className="container py-10 w-full">
            {rsvpList.length ? (
              <Table rowKey={"name"} dataSource={rsvpList} columns={columns} />
            ) : (
              <LoadingOutlined />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
