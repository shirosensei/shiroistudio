import React from 'react';
import styled from 'styled-components';
import { SiTwitter, SiGithub, SiLinkedin  } from 'react-icons/si';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.5rem;
  background-color: #333;
  color: #fff;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    
    
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const Anchor = styled.a`
text-decoration: none;
color: #fff;
font-size: 1.5rem;
padding: .5rem;

`

const FooterIcon = styled.div`
background-color: inherit;
margin: 0;
`




const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2023 Tozo Sensei. All rights reserved.</FooterText>
      <FooterIcon>
      <Anchor href="https://twitter.com">
        <SiTwitter />
      </Anchor>
      <Anchor href="https://github.com">
        <SiGithub />
      </Anchor>
      <Anchor href="https://linkedin.com">
        <SiLinkedin  />
      </Anchor>
      </FooterIcon>
    </FooterContainer>
  );
};

export default Footer;
