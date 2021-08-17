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
} from "./Footer.styles";

const Footer = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Footer;
