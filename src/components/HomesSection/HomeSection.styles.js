import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "rgb(0,0,0,0.1)" : "#000d1a")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;


`;
export const Container = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 500px;
  }
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  h4 {
    margin-top: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.6px;
    color: #000;
  }
  &:nth-child(1) {
    margin-bottom: 10rem;
    transform: rotate(-2deg);
    transition: 0.3s ease-in-out;
    &:hover {
      transform: rotate(0);
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 0;
      height: 300px;
      margin-top: 4rem;
    }
  }
  &:nth-child(2) {
    margin-top: 10rem;
    transform: rotate(-2deg);
    transition: 0.3s ease-in-out;
    &:hover {
      transform: rotate(0);
    }
    @media screen and (max-width: 768px) {
      margin-top: 0;
      height: 300px;
    }
  }

  img {
    width: 90%;
    height: 90%;

    @media screen and (max-width: 768px) {
      height: 90%;
      width: 90%;
    }
  }
`;
export const Heading = styled.h1`
  margin: 24px 0;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  text-align:center;

  color: ${({ lightText }) => (lightText ? "#fff" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
