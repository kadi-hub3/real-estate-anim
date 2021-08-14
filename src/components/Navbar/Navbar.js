import React, { useEffect, useRef } from "react";
import {
  Nav,
  Menu,
  MenuLinks,
  Logo,
  NavButton,
  MenuBars,
} from "./Navbar.styles";
import { menuData } from "../../data/MenuData";
import { Button } from "../Button";
import { gsap, TimelineLite, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ toggle }) => {
  let logo = useRef(null);
  let button = useRef(null);
  let menu = useRef(null);
  const tl = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    tl.from(
      [logo, menu, button],
      1.2,
      { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      0.35
    );
  });
  const [nav, setNav] = React.useState(false);

  React.useEffect(() => {
    const changeBg = () => {
      if (window.scrollY > 80) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener("scroll", changeBg);
  }, []);

  return (
    <Nav style={{ background: nav ? "#CD853F" : "transparent" }}>
      <Logo to="/" ref={(el) => (logo = el)}>
        ELIXRR
      </Logo>
      <Menu ref={(el) => (menu = el)}>
        {menuData.map((link, index) => (
          <MenuLinks to={link.link} key={index}>
            {link.title}
          </MenuLinks>
        ))}
      </Menu>
      <MenuBars onClick={toggle} />
      <NavButton ref={(el) => (button = el)}>
        <Button primary="true" to="/contact">
          Contact Us
        </Button>
      </NavButton>
    </Nav>
  );
};

export default Navbar;
