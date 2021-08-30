import React from "react";
import SwiperCore, { Autoplay, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroSection, HeroImage, HeroContent } from "./Hero.styles.js";
import { Button } from "../Button";
import { IoArrowForward } from "react-icons/io5";
SwiperCore.use([Autoplay, Scrollbar, A11y]);

const Hero = ({ slides }) => {
  return (
    <HeroSection>
      <Swiper slidesPerView={1} grabCursor={true} loop autoplay>
        {slides.map((slide, id) => {
          return (
            <SwiperSlide key={id}>
              <HeroImage src={slide.image} alt={slide.alt} />
              <HeroContent>
                <h1>{slide.title}</h1>
                <p>{slide.price}</p>
                <Button to={slide.path} primary="true" big="true">
                  {slide.label} <IoArrowForward />
                </Button>
              </HeroContent>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </HeroSection>
  );
};

export default Hero;
