import { ParallaxProvider } from "react-scroll-parallax";
import { createContext, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import LogoCouple from "./images/logo-couple.png";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";
import Intro from "./Intro";
import Homepage from "./Home";

export const UserContext = createContext();

export const langList = ["id", "en"];

const App = () => {
  const [lang, setLang] = useState(langList[0]);

  const contextValue = {
    lang,
    setLang,
  };

  return (
    <UserContext.Provider value={contextValue}>
      <ParallaxProvider>
        <Router>
          <Routes>
            <Route path="/intro" element={<Intro />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </ParallaxProvider>
    </UserContext.Provider>
  );
};

export default App;
