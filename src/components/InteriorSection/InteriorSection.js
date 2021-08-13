import React from "react";
import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
} from "./InteriorSection.styles";
import { Button } from "../Button";

const InteriorSection = ({
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
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button
            primary="true"
            style={{ background: "#CD853F", color: "#000d1a" }}
            to="/homes"
          >
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InteriorSection;
