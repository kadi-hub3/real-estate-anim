import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  max-height: 1400px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #000d1a;
    letter-spacing: 1px;
    margin-top: 4rem;
    margin-botton: 2rem;
    padding: 0 1rem;

    @media screen and (max-width: 768px) {
      margin-top: 2rem;
    }
  }
  span {
    border-bottom: 5px solid #cd853f;
  }
`;

export const TextSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem 0;
  color: #000d1a;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    background: transparent;
  }
  input {
    width: 80%;
    padding: 1rem;
    margin: 1rem 0;
    outline: none;
    border: none;
    border-bottom: #000d1a 4px solid;

    @media screen and (max-width: 768px) {
      margin: 0;
      padding: 0.5rem;
      width: 95%;
    }
  }
  input[type="checkbox"] {
    width: 10%;
  }
  label {
    width: 100%;
    display: flex;
    margin: 1rem 0;
    color: #000d1a;
  }
`;
