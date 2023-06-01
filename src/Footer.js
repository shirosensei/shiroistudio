import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 24px;
  text-align: left;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2023 Tozo Sensei. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
