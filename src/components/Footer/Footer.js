import React from "react";
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
  Wrapper
} from "./Footer.styles.js";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
      <FooterWrapper>
        <FooterLeft>
          <h1>
            Let's find <br />
            your Dream Home
          </h1>
          <IconList>
            <YoutubeIcon />
            <InstaIcon />
            <FbIcon />
            <InIcon />
          </IconList>
        </FooterLeft>
        <FooterRight>
          <ul>
            <h3>Contact Us</h3>
            <li>FAQ</li>
            <li>Support</li>
            <li>Questions</li>
          </ul>
          <ul>
            <h3>Offices</h3>
            <li>United States</li>
            <li>Europe</li>
            <li>China</li>
          </ul>
        </FooterRight>
      </FooterWrapper>
     </Wrapper>
    </Container>
  );
};

export default Footer;
