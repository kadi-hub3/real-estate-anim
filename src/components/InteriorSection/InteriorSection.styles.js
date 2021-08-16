import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 2rem;
  background: #000d1a;
`;
export const Container = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  place-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ColumnLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  line-height: 1.4;
  padding: 1rem 2rem;
  padding-right: 4rem;
  background: #fff;
  height: 60%;
  margin-right: -5rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;
export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "1" : "2")};
  }

  img {
    width: 100%;
    height: 80%;

    @media screen and (max-width: 768px) {
      height: 70%;
      width: 90%;
    }
  }
`;
