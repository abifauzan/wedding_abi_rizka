import { ParallaxProvider } from "react-scroll-parallax";
import { createContext, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import Homepage from "./Home";
import Dashboard from "./dashboard";

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
            <Route path="/" element={<Intro />} />
            <Route path="/welcome" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </ParallaxProvider>
    </UserContext.Provider>
  );
};

export default App;
