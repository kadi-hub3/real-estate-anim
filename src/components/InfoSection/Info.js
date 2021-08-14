import React, { useRef, useEffect } from "react";
import { Section, Container, ColumnLeft, ColumnRight } from "./Info.styles";
import { Button } from "../Button";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Info = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  let title = useRef(null);
  let p1 = useRef(null);
  let p2 = useRef(null);
  let button = useRef(null);
  let img = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: [title, p1, p2, button, img],
        toggleActions: "restart complete pause none",
      },
    });
    tl.from(
      [title, p1, p2, button],
      1.2,
      { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.3 },
      0.35
    );
    tl.from(
      [img],
      1.2,
      { y: -10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      0.35
    );
  });

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1 ref={(el) => (title = el)}>{heading}</h1>
          <p ref={(el) => (p1 = el)}>{paragraphOne}</p>
          <p ref={(el) => (p2 = el)}>{paragraphTwo}</p>
          <Button primary="true" to="/homes" ref={(el) => (button = el)}>
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight ref={(el) => (img = el)} reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Info;
