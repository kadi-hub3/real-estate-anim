import styled from "styled-components/macro";

export const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroImage = styled.img`
  width: 100vw;
  aspect-ratio: auto 1/1;
  height: 100vh;
  object-fit: cover;
`;
export const HeroContent = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  z-index: 2220;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  color: #fff;
  padding-left: 2rem;
  justify-content: center;
  align-items: flex-start;
  background: transparent;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
  }
`;
