import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
background-color: ${({ theme }) => theme.color.background};
color: ${({ theme }) => theme.colors.text};
border: 1px solid ${({ theme }) => theme.colors.accent};
border-radius: 8px;
paddin: ${({ theme}) => theme.spacing.medium};
box-shadow: inse 0px 4px 6px ${({ theme}) => theme.colors.oynx};
max-width: 300px;
margin: ${({ theme }) => theme.spacing.medium};

h3 {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 8px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.onyx};
  }
`;

const Card = ({ title, description }) => {
  return (
    <CardContainer>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardContainer>
  );
};

export default Card;
