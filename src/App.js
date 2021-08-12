import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/Hero";
import InfoSection from "./components/InfoSection/Info";
import InfoSection2 from "./components/InfoSection2/Info";
import Dropdown from "./components/Dropdown/Dropdown";
import Footer from "./components/Footer/Footer";
import { InfoData, InfoData2 } from "./data/InfoData";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <HeroSection slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection2 {...InfoData2} />
      <Footer />
    </>
  );
}

export default App;
