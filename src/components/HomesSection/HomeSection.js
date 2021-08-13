import React from "react";
import { Section, Container, Image } from "./HomeSection.styles";
import { HomesData } from "../../data/HomesData";
import { Button } from "../Button";
import { IoArrowForward } from "react-icons/io5";

const HomeSection = () => {
  return (
    <Section>
      <h1>View our newest Homes</h1>
      <Container>
        {HomesData.map((item, index) => {
          return (
            <Image key={index}>
              <img src={item.image} alt="house" />
              <h4>{item.heading}</h4>
              <Button to="/homes">
                View Details
                <IoArrowForward />
              </Button>
            </Image>
          );
        })}
      </Container>
    </Section>
  );
};

export default HomeSection;
