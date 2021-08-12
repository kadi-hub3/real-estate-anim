import React from "react";
import { Section, Container, Image } from "./HomeSection.styles";
import { HomesData } from "../../data/HomesData";

const HomeSection = () => {
  return (
    <Section>
      <h1>View our newest Homes</h1>
      <Container>
        {HomesData.map((item, index) => {
          return (
            <Image key={index}>
              <img src={item.image} alt="house" />
            </Image>
          );
        })}
      </Container>
    </Section>
  );
};

export default HomeSection;
