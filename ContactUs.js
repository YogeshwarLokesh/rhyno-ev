import React from 'react';
import styled from 'styled-components';

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <Heading>Contact Us</Heading>
      <ContactInfo>
        <Text>Email: info@rhyno.in</Text>
        <Text>Phone: +91-9023987528</Text>
        <Text>
          Address: Rhyno Wheels Private Limited, Near UG Hostel Gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.
        </Text>
      </ContactInfo>
      <ContactForm>
        <FormGroup>
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" type="text" placeholder="Enter your name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Your Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" placeholder="Your message" required />
        </FormGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactUsContainer>
  );
};

export default ContactUs;

const ContactUsContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.background || '#f4f4f4'};
  max-width: 900px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts?.primary || 'Arial, sans-serif'};
  font-size: 36px;
  color: ${({ theme }) => theme.colors?.primary || '#007bff'};
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 18px;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  margin-bottom: 15px;
`;

const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.colors?.white || '#fff'};
  padding: 100px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  border: 1px solid ${({ theme }) => theme.colors?.border || '#ccc'};
  border-radius: 8px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors?.primary || '#007bff'};
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.text || '#333'};
  border: 1px solid ${({ theme }) => theme.colors?.border || '#ccc'};
  border-radius: 8px;
  box-sizing: border-box;
  height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors?.primary || '#007bff'};
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 25px;
  font-family: ${({ theme }) => theme.fonts?.body || 'Arial, sans-serif'};
  font-size: 18px;
  color: ${({ theme }) => theme.colors?.white || '#fff'};
  background-color: ${({ theme }) => theme.colors?.primary || '#007bff'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.primaryDark || '#0056b3'};
    transform: scale(1.05);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors?.primaryDark || '#0056b3'};
    transform: scale(0.95);
  }
`;
