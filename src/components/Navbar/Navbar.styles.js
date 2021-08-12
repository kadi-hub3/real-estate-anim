import styled, { css } from "styled-components/macro";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 1rem 2rem;
  width: 100%;
  z-index: 10;
`;

const NavLink = css`
  color: #ffff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  &:hover {
    color: #000d1a;
  }
`;
export const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;
export const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 100%;
    font-size: 1.5rem;
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const MenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavButton = styled.div`
  display: flex;
  margin-right: 24px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
