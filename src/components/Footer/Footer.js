import React, { useEffect, useRef } from "react";
import {
  Container,
  FooterLeft,
  FooterRight,
  IconList,
  YoutubeIcon,
  FbIcon,
  InstaIcon,
  InIcon,
  FooterWrapper,
} from "./Footer.styles";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  let title = useRef(null);
  let icons = useRef(null);
  let list1 = useRef(null);
  let list2 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: [title, icons, list1, list2],
        toggleActions: "restart complete pause none",
      },
    });
    tl.from(
      [title, icons],
      1.2,
      { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.3 },
      0.35
    );
    tl.from(
      [list1, list2],
      1.2,
      { y: -10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      0.35
    );
  });
  return (
    <Container>
      <FooterWrapper>
        <FooterLeft>
          <h1 ref={(el) => (title = el)}>
            Let's find <br />
            your Dream Home
          </h1>
          <IconList ref={(el) => (icons = el)}>
            <YoutubeIcon />
            <InstaIcon />
            <FbIcon />
            <InIcon />
          </IconList>
        </FooterLeft>
        <FooterRight>
          <ul ref={(el) => (list1 = el)}>
            <h3>Contact Us</h3>
            <li>FAQ</li>
            <li>Support</li>
            <li>Questions</li>
          </ul>
          <ul ref={(el) => (list2 = el)}>
            <h3>Offices</h3>
            <li>United States</li>
            <li>Europe</li>
            <li>China</li>
          </ul>
        </FooterRight>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;
