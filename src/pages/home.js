import React from "react";
import HeroSection from "../components/HeroSection/Hero";
import InfoSection from "../components/InfoSection/Info";
import HomesSection from "../components/HomesSection/HomeSection";
import GlobalStyle from "../globalStyles";
import { SliderData } from "../data/SliderData";
import { InfoData, InfoData2, InfoData3 } from "../data/InfoData";
const Home = () => {
  return (
    <>
      <GlobalStyle />
      <HeroSection slides={SliderData} />
      <InfoSection {...InfoData} />
      <HomesSection />
      <InfoSection {...InfoData3} />
      <InfoSection {...InfoData2} />
    </>
  );
};

export default Home;
