import React from 'react';
import styled from 'styled-components';
import { SiTwitter, SiGithub, SiLinkedin  } from 'react-icons/si';

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.5rem;
  background-color: #333;
  color: #fff;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;    
  }

  
@media only screen and (min-width: 320px) and (max-width: 498px) {
  /* Styles for screens between 320px and 498px */
  padding: .75rem 0;
}
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;

  @media only screen and (min-width: 320px) and (max-width: 498px) {
    /* Styles for screens between 320px and 498px */
    font-size: 0.7rem;
  }
  
`;

const Anchor = styled.a`
text-decoration: none;
color: #fff;
font-size: 1.5rem;
padding: .5rem;


@media only screen and (min-width: 320px) and (max-width: 498px) {
  /* Styles for screens between 320px and 498px */
  font-size: .75rem;
}
`

const FooterIcon = styled.div`
background-color: inherit;
margin: 0;

@media screen and (max-width: 768px) {
  margin-bottom: 1.2rem;
}


`




const Footer = () => {
  return (
    <Container>
      <FooterText>© 2024 Tozo Sensei. All rights reserved.</FooterText>
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
    </Container>
  );
};

export default Footer;
