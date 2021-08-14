import React, { useEffect, useRef } from "react";
import { Section, Container, Image } from "./HomeSection.styles";
import { HomesData } from "../../data/HomesData";
import { Button } from "../Button";
import { IoArrowForward } from "react-icons/io5";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeSection = () => {
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
    <Section>
      <h1>View our newest Homes</h1>
      <Container>
        {HomesData.map((item, index) => {
          return (
            <Image key={index} ref={(el) => (img = el)}>
              <img src={item.image} alt="house" />
              <h4>{item.heading}</h4>
              <Button to="/homes">
                View Details
                <IoArrowForward />
              </Button>
            </Image>
          );
        })}
      </Container>
    </Section>
  );
};

export default HomeSection;
