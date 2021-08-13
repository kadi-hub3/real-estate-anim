import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 2rem;
  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
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
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h4 {
    margin-top: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.6px;
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
    transform: rotate(2deg);
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
