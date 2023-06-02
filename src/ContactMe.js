import React, { useState } from 'react';
import styled, { ThemeProvider  } from 'styled-components';

import { DarkBackground } from './DarkBackground';
import Footer from './Footer';
import ResponsiveNavbar from './ResponsiveNavbar';

const theme = {
  colors: {

        primary: '#ff0000',
        secondary: '#ff9900',
        tertiary: '#800080',
        quaternary: '#a6c8e0',
        quinary: '#a2d9ce',
        senary: '#333333',
        dark: '#000',
        light: '#fff',
        gray: '#f0f0f0',
        pastel: '#a6c8e0',
        lightGreen: '#a2d9ce',
        black: '#000000',
        navy: '#000080',
        darkGray: '#333333',
        offwhite: '#f2f2f2',
  },
};


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
width: 70%;
height: 65%;
border: 2px solid ${props => props.theme.colors.offwhite};
border-radius: 5px;
background-color: ${props => props.theme.colors.offwhite};
overflow: hidden;
padding: 20px;

@media (max-width: 768px) {
  width: 80%;
  height: 50%;
  padding: 1.5rem;
  }

  `

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const FormField = styled.input`
  padding: 8px;
  margin-bottom: 12px;
  border: 2px solid ${props => props.theme.colors.pastel};
  border-radius: 5px;
  color: ${props => props.theme.colors.darkGray};
  
 
  &:hover {
    box-shadow: 1px 2px 2px 1px rgba(0, 0, 255, .2);
  }

  &:focus{
    border-color: ${props => props.theme.colors.offwhite};
  }

  @media (max-width: 768px) {
    width: 80%; 
    border-color: ${props => props.theme.colors.light}

    &:focus {
      border-color: ${props => props.theme.colors.pastel};
    }

  }
`;

const FormTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 12px;
  height: 120px;
  border: 2px solid ${props => props.theme.colors.pastel};
   
  &:hover {
    box-shadow: 1px 2px 2px 1px rgba(0, 0, 255, .2);
  }

  &:focus{
    border-color: ${props => props.theme.colors.offwhite};
  }

  @media (max-width: 768px) {
    border-color: ${props => props.theme.colors.light}

    &:focus {
      border-color: ${props => props.theme.colors.pastel};
    }
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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Perform form submission or data processing here
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  
      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    };
  

  return (
    <>
    <ThemeProvider theme={theme}>
    <DarkBackground />
    <ResponsiveNavbar />
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>
      <FormContainer action="../server">
      <ContactForm onSubmit={handleSubmit}>
        <FormField type="text" value={name} onChange={handleNameChange} placeholder="Name" />
        <FormField type="email"  value={email} onChange={handleEmailChange} placeholder="Email" />
        <FormTextarea value={message} onChange={handleMessageChange} placeholder="Message"></FormTextarea>
        <FormButton type="submit">Submit</FormButton>
      </ContactForm>
      </FormContainer>
      </ContactContainer>
    <Footer />
    </ThemeProvider>
    
    </>
  );
};

export default ContactMe;
