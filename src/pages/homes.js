import React from "react";
import GlobalStyle from "../globalStyles";
import Hero from "../components/HeroSection/Hero";
import { homesSliderData } from "../data/SliderData";

const homes = () => {
  return (
    <>
      <GlobalStyle />
      <Hero slides={homesSliderData} />
    </>
  );
};

export default homes;
