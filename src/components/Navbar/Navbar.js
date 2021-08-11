import React from "react";
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

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">ELIXRR</Logo>
      <Menu>
        {menuData.map((link, index) => (
          <MenuLinks to={link.link} key={index}>
            {link.title}
          </MenuLinks>
        ))}
      </Menu>
      <MenuBars />
      <NavButton>
        <Button to="/contact">Contact Us</Button>
      </NavButton>
    </Nav>
  );
};

export default Navbar;
