import React from "react";
import { menuData } from "../../data/MenuData";
import {
  DropdownContainer,
  Icon,
  ClosedIcon,
  DropdownMenu,
  DropdownWrapper,
  DropdownLink,
  BtnWrap,
} from "./Dropdown.styles";
import { Button } from "../Button";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => {
            return (
              <DropdownLink to={item.link} key={index}>
                {item.title}
              </DropdownLink>
            );
          })}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
