import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#000d1a" : "CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  text-decoration: none;
  max-width: 200px;
  min-width: 100px;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "20px 80px" : "14px 44px")};
  color: ${({ dark }) => (dark ? "#000d1a":"#fff" )};
  font-size: ${({ big }) => (big ? "18px" : "14px")};

  &:hover {
    transform: translateY(-6px);
  }
`;
