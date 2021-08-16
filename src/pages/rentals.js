import React from "react";
import GlobalStyle from "../globalStyles";
import Hero from "../components/HeroSection/Hero";
import { rentalsSliderData } from "../data/SliderData";

const rentals = () => {
  return (
    <>
      <GlobalStyle />
      <Hero slides={rentalsSliderData} />
    </>
  );
};

export default rentals;
