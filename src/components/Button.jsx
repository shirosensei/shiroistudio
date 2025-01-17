import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
 background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 0.625rem ${({ theme }) => theme.spacing.medium};
  border-radius: 0.25rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const Button = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  )
}

export default Button