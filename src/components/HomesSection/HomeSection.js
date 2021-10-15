import React, { useEffect, useRef } from "react";
import {InfoContainer, InfoWrapper, Container,Image, Heading } from "./HomeSection.styles";
import { HomesData } from "../../data/HomesData";
import { Button } from "../Button";
import { IoArrowForward } from "react-icons/io5";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeSection = ({lightBg, id}) => {
  let img = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: [img],
        toggleActions: "restart complete pause none",
      },
    });
    tl.from(
      [img],
      1.2,
      { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.3 },
      0.35,
      "Start"
    );
  });

  return (
    
    <InfoContainer lightBg='true'>
            <InfoWrapper>

      <Heading>View our newest Homes</Heading>
      <Container>
        {HomesData.map((item, index) => {
          return (
            <Image key={index} ref={(el) => (img = el)} >
              <img src={item.image} alt="house" />
              <h4>{item.heading}</h4>
              <Button dark='true' to="/homes">
                View Details
                <IoArrowForward />
              </Button>
            </Image>
          );
        })}
        </Container>
        </InfoWrapper>
      </InfoContainer>
   
  );
};

export default HomeSection;
