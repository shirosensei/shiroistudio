import React from 'react';
import styled from 'styled-components';

import { DarkBackground, LightBackground, QuaternaryTheme } from './DarkBackground';
import Footer from './Footer';
import ResponsiveNavbar from './ResponsiveNavbar';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin-bottom: 4.0rem;

  @media (max-width: 768px) {
 margin: 0;
  padding: 0;
    }
    @media (min-width: 992px) {
      padding: 5rem;
      }
      `;

const ContactTitle = styled.h2`
  font-size: 24px;
`;

const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%;
height: 50%;
padding: .5rem;
border: 2px solid #e6e6e6;
border-radius: 5px;
background-color: #f2f2f2;

@media (max-width: 768px) {
  width: 90%;
  height: 50%;
  }

  `

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px;
  width: 100%;
`;

const FormField = styled.input`
  padding: 8px;
  margin-bottom: 12px;
`;

const FormTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 12px;
  height: 120px;
`;

const FormButton = styled.button`
  padding: 8px 16px;
  margin-top: 12px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 3.3px;
`;



const ContactMe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    // console.log(event.target.name.value);

  };

  return (
    <>
    <DarkBackground />
    <ResponsiveNavbar />
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>
      <FormContainer>
      <ContactForm onSubmit={handleSubmit}>
        <FormField type="text" placeholder="Name" />
        <FormField type="email" placeholder="Email" />
        <FormTextarea placeholder="Message"></FormTextarea>
        <FormButton type="submit">Submit</FormButton>
      </ContactForm>
      </FormContainer>
      </ContactContainer>
    <Footer />
    </>
  );
};

export default ContactMe;
