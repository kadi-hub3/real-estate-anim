import React from "react";
import { Section, Container, ColumnLeft, ColumnRight } from "./Info.styles";
import { Button } from "../Button";
const Info = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <img src={image} alt="home" />
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button primary="true" to="/homes">
            {buttonLabel}
          </Button>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Info;
