import React from 'react';
import styled from 'styled-components';

import { DarkBackground, LightBackground } from './DarkBackground';
import Footer from './Footer';
import ResponsiveNavbar from './ResponsiveNavbar';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;


`;

const ContactTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 400px;

`;

const FormField = styled.input`
  padding: 8px;
  margin-bottom: 12px;
  width: 100%;
`;

const FormTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 12px;
  width: 100%;
  height: 120px;
`;

const FormButton = styled.button`
  padding: 8px 16px;
  margin-top: 12px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;



const ContactMe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <>
    <DarkBackground />
    <ResponsiveNavbar />
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormField type="text" placeholder="Name" />
        <FormField type="email" placeholder="Email" />
        <FormTextarea placeholder="Message"></FormTextarea>
        <FormButton type="submit">Submit</FormButton>
      </ContactForm>
    </ContactContainer>
    <Footer />
    </>
  );
};

export default ContactMe;
