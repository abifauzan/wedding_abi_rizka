import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import styled from "styled-components";
import LogoCouple from "./images/logo-couple.png";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import Homepage from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
