import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
`;
export const Container = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  img {
    width: 100%;
    height: 60%;

    @media screen and (max-width: 768px) {
      height: 80%;
      width: 90%;
    }
  }
`;
