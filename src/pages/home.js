import React, { useState } from "react";
import HeroSection from "../components/HeroSection/Hero";
import InfoSection from "../components/InfoSection/Info";
import HomesSection from "../components/HomesSection/HomeSection";
import InteriorSection from "../components/InteriorSection/InteriorSection";
import InfoSection2 from "../components/InfoSection2/Info";
import Dropdown from "../components/Dropdown/Dropdown";
import GlobalStyle from "../globalStyles";
import { SliderData } from "../data/SliderData";
import { InfoData, InfoData2, InfoData3 } from "../data/InfoData";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <HeroSection slides={SliderData} />
      <InfoSection {...InfoData} />
      <HomesSection />
      <InteriorSection {...InfoData3} />
      <InfoSection2 {...InfoData2} />
    </>
  );
};

export default Home;
