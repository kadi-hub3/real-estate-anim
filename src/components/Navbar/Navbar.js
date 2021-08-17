import React, { useEffect, useState } from "react";
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

const Navbar = ({ toggle }) => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
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
      <Logo to="/">ELIXIR</Logo>
      <Menu>
        {menuData.map((link, index) => (
          <MenuLinks to={link.link} key={index}>
            {link.title}
          </MenuLinks>
        ))}
      </Menu>
      <MenuBars onClick={toggle} />
      <NavButton>
        <Button primary="true" to="/contact">
          Contact Us
        </Button>
      </NavButton>
    </Nav>
  );
};

export default Navbar;
