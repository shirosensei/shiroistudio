import React from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { Button } from "./Button";

const Section = styled.section`
  padding: 0 ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const SectionWithCards = () => {
  const handleClick = () => {
    alert("Button clicked");
  };
  return (
    <Section>
      <h2>Welcome </h2>

      <Card title="" description="" />

      <Card
        title="Feature 2"
        description="This is a short description of feature 2."
      />
      <Button text="Learn More" onClick={handleClick} />
    </Section>
  );
};

export default SectionWithCards;
