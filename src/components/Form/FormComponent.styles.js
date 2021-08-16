import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  align-items: center;

  input {
    width: 40%;
    padding: 1rem;
    margin: 1rem 0;
    outline: none;
    border: none;
    border-bottom: gray 4px solid;
  }
  input[type="checkbox"] {
    width: 40%;
  }
  button {
    width: 40%;
  }
`;
