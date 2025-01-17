import React from "react";
import styled from "styled-components";
import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing.small} 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  border-top: 2px solid ${({ theme }) => theme.colors.accent};

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
   }

 
`;

const FooterText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: 0;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.fontSizes.small};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const FooterIcon = styled.div`
  background-color: inherit;
  margin: 0;


`;

const Footer = () => {
  return (
    <Container>
      <FooterText>© 2025 Tozo Sensei. All rights reserved.</FooterText>
      <FooterIcon>
        <Anchor href="https://twitter.com/shiroi_sensei">
          <SiTwitter
            name="Follow on Twitter"
            aria-labelledby="Follow on Twitter"
            title="Follow on Twitter"
          />
        </Anchor>
        <Anchor
          href="https://github.com/shirosensei"
          aria-label="Star on GitHub"
        >
          <SiGithub
            title="Star on GitHub"
            name="Star on Github"
            aria-labelledby="Star on Github"
          />
        </Anchor>
        <Anchor
          href="https://linkedin.com/in/codersensei"
          aria-labelledby="Connect on LinkedIn"
        >
          <SiLinkedin
            name="Connect on LinkedIn"
            title="Connect on LinkedIn"
            aria-labelledby="Connect on LinkedIn"
          />
        </Anchor>
        <Anchor
          href={`mailto:codersensei@outlook.com`}
          aria-label="Send an Email"
          aria-labelledby="Send an Email"
        >
          <FiMail
            name="Send an Email"
            title="Send an Email"
            style={{ color: `${({ theme }) => theme.colors.accent}` }}
          />
        </Anchor>
      </FooterIcon>
    </Container>
  );
};

export default Footer;
